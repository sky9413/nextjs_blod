import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PostCard from '@/components/PostCard';
import Pagination from '@/components/Pagination';
import { getPaginatedPosts, getTotalPages } from '@/lib/posts';
import { blogConfig } from '@/config/blog';

interface PageProps {
  params: Promise<{
    page: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { page } = await params;
  return {
    title: `Blog - 第 ${page} 頁`,
    description: `瀏覽所有文章 - 第 ${page} 頁 - ${blogConfig.site.description}`,
  };
}

export async function generateStaticParams() {
  const totalPages = getTotalPages();
  const pages = [];

  // 生成第 2 頁到最後一頁（第 1 頁是 /blog）
  for (let i = 2; i <= totalPages; i++) {
    pages.push({ page: i.toString() });
  }

  return pages;
}

export default async function BlogPageNumber({ params }: PageProps) {
  const { page } = await params;
  const pageNumber = parseInt(page, 10);

  // 驗證頁碼
  if (isNaN(pageNumber) || pageNumber < 1) {
    notFound();
  }

  const { posts, pagination } = getPaginatedPosts(pageNumber);

  // 如果頁碼超過總頁數，顯示 404
  if (pageNumber > pagination.totalPages) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          所有文章
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          第 {pagination.currentPage} 頁 / 共 {pagination.totalPages} 頁 · 總共 {pagination.totalPosts} 篇文章
        </p>
      </div>

      <div className="space-y-6">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>

      <Pagination pagination={pagination} basePath="/blog" />
    </div>
  );
}
