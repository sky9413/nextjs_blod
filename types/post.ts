/**
 * 文章 Frontmatter 元數據
 */
export interface PostMetadata {
  title: string;
  slug: string;
  description: string;
  date: string; // 格式: "2025-12-14 16:47" 或 "2025-12-14"
}

/**
 * 完整文章資料（包含內容）
 */
export interface Post extends PostMetadata {
  content: string;
  filename: string; // 原始檔案名稱
}

/**
 * 文章列表項目（不包含內容，用於列表頁面）
 */
export interface PostListItem extends PostMetadata {
  filename: string;
}

/**
 * 分頁資訊
 */
export interface Pagination {
  currentPage: number;
  totalPages: number;
  totalPosts: number;
  postsPerPage: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

/**
 * 分頁後的文章列表
 */
export interface PaginatedPosts {
  posts: PostListItem[];
  pagination: Pagination;
}
