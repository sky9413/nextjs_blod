/**
 * Blog 系統配置
 */
export const blogConfig = {
  /**
   * 文章目錄路徑（相對於專案根目錄）
   */
  postsDirectory: 'posts',

  /**
   * 每頁顯示文章數量
   */
  postsPerPage: 5,

  /**
   * 排序欄位
   * 'date' - 按日期排序
   * 'title' - 按標題排序
   */
  sortBy: 'date' as 'date' | 'title',

  /**
   * 排序方向
   * 'desc' - 降序（新到舊）
   * 'asc' - 升序（舊到新）
   */
  sortOrder: 'desc' as 'desc' | 'asc',

  /**
   * 網站基本資訊
   */
  site: {
    title: 'Next.js Blog Demo',
    description: '使用純 Markdown 文件建立的 Blog 系統示範',
    author: 'Developer',
  },
} as const;
