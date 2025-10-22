import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import type { Post, PostListItem, PaginatedPosts, PostMetadata } from '@/types/post';
import { blogConfig } from '@/config/blog';

const postsDirectory = path.join(process.cwd(), blogConfig.postsDirectory);

/**
 * 解析日期字串，兼容 "2025-12-14 16:47" 和 "2025-12-14" 格式
 */
function parseDate(dateString: string): Date {
  // 移除多餘空白
  const cleaned = dateString.trim();

  // 檢查是否包含時間部分
  if (cleaned.includes(' ')) {
    // 格式: "2025-12-14 16:47"
    const [datePart, timePart] = cleaned.split(' ');
    return new Date(`${datePart}T${timePart}:00`);
  } else {
    // 格式: "2025-12-14"
    // 使用中午12點作為預設時間，避免時區問題
    return new Date(`${cleaned}T12:00:00`);
  }
}

/**
 * 格式化日期顯示
 */
export function formatDate(dateString: string): string {
  const date = parseDate(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  // 如果原始字串包含時間，則顯示時間
  if (dateString.includes(' ')) {
    return `${year}-${month}-${day} ${hours}:${minutes}`;
  } else {
    return `${year}-${month}-${day}`;
  }
}

/**
 * 獲取所有文章的元數據（用於列表）
 */
export function getAllPostsMetadata(): PostListItem[] {
  // 確保目錄存在
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        filename: fileName,
        title: data.title || 'Untitled',
        slug: data.slug || fileName.replace(/\.md$/, ''),
        description: data.description || '',
        date: data.date || '2025-01-01',
      } as PostListItem;
    });

  // 根據配置排序
  return sortPosts(allPostsData);
}

/**
 * 排序文章
 */
function sortPosts<T extends { date: string; title: string }>(posts: T[]): T[] {
  return posts.sort((a, b) => {
    if (blogConfig.sortBy === 'date') {
      const dateA = parseDate(a.date).getTime();
      const dateB = parseDate(b.date).getTime();
      return blogConfig.sortOrder === 'desc' ? dateB - dateA : dateA - dateB;
    } else {
      // 按標題排序
      return blogConfig.sortOrder === 'desc'
        ? b.title.localeCompare(a.title)
        : a.title.localeCompare(b.title);
    }
  });
}

/**
 * 獲取分頁後的文章列表
 */
export function getPaginatedPosts(page: number = 1): PaginatedPosts {
  const allPosts = getAllPostsMetadata();
  const totalPosts = allPosts.length;
  const totalPages = Math.ceil(totalPosts / blogConfig.postsPerPage);

  // 確保頁碼有效
  const currentPage = Math.max(1, Math.min(page, totalPages || 1));

  const startIndex = (currentPage - 1) * blogConfig.postsPerPage;
  const endIndex = startIndex + blogConfig.postsPerPage;
  const posts = allPosts.slice(startIndex, endIndex);

  return {
    posts,
    pagination: {
      currentPage,
      totalPages: totalPages || 1,
      totalPosts,
      postsPerPage: blogConfig.postsPerPage,
      hasNextPage: currentPage < totalPages,
      hasPrevPage: currentPage > 1,
    },
  };
}

/**
 * 根據 slug 獲取單篇文章
 */
export async function getPostBySlug(slug: string): Promise<Post | null> {
  const allPosts = getAllPostsMetadata();
  const postMeta = allPosts.find((post) => post.slug === slug);

  if (!postMeta) {
    return null;
  }

  const fullPath = path.join(postsDirectory, postMeta.filename);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  // 將 Markdown 轉換為 HTML
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    filename: postMeta.filename,
    title: data.title || 'Untitled',
    slug: data.slug || postMeta.filename.replace(/\.md$/, ''),
    description: data.description || '',
    date: data.date || '2025-01-01',
    content: contentHtml,
  };
}

/**
 * 獲取所有文章的 slug（用於靜態生成）
 */
export function getAllPostSlugs(): string[] {
  const allPosts = getAllPostsMetadata();
  return allPosts.map((post) => post.slug);
}

/**
 * 計算總頁數
 */
export function getTotalPages(): number {
  const totalPosts = getAllPostsMetadata().length;
  return Math.ceil(totalPosts / blogConfig.postsPerPage) || 1;
}
