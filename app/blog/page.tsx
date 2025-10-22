import type { Metadata } from 'next';
import PostCard from '@/components/PostCard';
import Pagination from '@/components/Pagination';
import { getPaginatedPosts } from '@/lib/posts';
import { blogConfig } from '@/config/blog';

export const metadata: Metadata = {
  title: 'Blog',
  description: `瀏覽所有文章 - ${blogConfig.site.description}`,
};

export default function BlogPage() {
  const { posts, pagination } = getPaginatedPosts(1);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          所有文章
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          共 {pagination.totalPosts} 篇文章
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-600 p-6 rounded-lg">
          <p className="text-yellow-800 dark:text-yellow-200 font-medium">
            目前還沒有文章
          </p>
          <p className="text-yellow-700 dark:text-yellow-300 text-sm mt-2">
            請在 <code className="bg-yellow-100 dark:bg-yellow-800 px-2 py-1 rounded">posts/</code> 目錄中添加 Markdown 文件。
          </p>
        </div>
      ) : (
        <>
          <div className="space-y-6">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>

          <Pagination pagination={pagination} basePath="/blog" />
        </>
      )}
    </div>
  );
}
