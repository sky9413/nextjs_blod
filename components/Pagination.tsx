import Link from 'next/link';
import type { Pagination as PaginationType } from '@/types/post';

interface PaginationProps {
  pagination: PaginationType;
  basePath?: string;
}

export default function Pagination({ pagination, basePath = '/blog' }: PaginationProps) {
  const { currentPage, totalPages, hasPrevPage, hasNextPage } = pagination;

  // 生成頁碼陣列
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 5; // 最多顯示5個頁碼

    if (totalPages <= maxVisible) {
      // 如果總頁數少於等於最大顯示數，顯示所有頁碼
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // 總是顯示第一頁
      pages.push(1);

      if (currentPage > 3) {
        pages.push('...');
      }

      // 顯示當前頁附近的頁碼
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 2) {
        pages.push('...');
      }

      // 總是顯示最後一頁
      pages.push(totalPages);
    }

    return pages;
  };

  const getPageUrl = (page: number) => {
    if (page === 1) {
      return basePath;
    }
    return `${basePath}/page/${page}`;
  };

  if (totalPages <= 1) {
    return null;
  }

  return (
    <nav className="flex justify-center items-center space-x-2 mt-8" aria-label="分頁導航">
      {/* 上一頁 */}
      {hasPrevPage ? (
        <Link
          href={getPageUrl(currentPage - 1)}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center"
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          上一頁
        </Link>
      ) : (
        <span className="px-4 py-2 bg-gray-300 text-gray-500 rounded-md cursor-not-allowed flex items-center">
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          上一頁
        </span>
      )}

      {/* 頁碼 */}
      <div className="flex space-x-1">
        {getPageNumbers().map((page, index) => {
          if (page === '...') {
            return (
              <span
                key={`ellipsis-${index}`}
                className="px-4 py-2 text-gray-600 dark:text-gray-400"
              >
                ...
              </span>
            );
          }

          const pageNum = page as number;
          const isCurrentPage = pageNum === currentPage;

          return (
            <Link
              key={pageNum}
              href={getPageUrl(pageNum)}
              className={`px-4 py-2 rounded-md transition-colors ${
                isCurrentPage
                  ? 'bg-blue-600 text-white font-bold'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
              aria-current={isCurrentPage ? 'page' : undefined}
            >
              {pageNum}
            </Link>
          );
        })}
      </div>

      {/* 下一頁 */}
      {hasNextPage ? (
        <Link
          href={getPageUrl(currentPage + 1)}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center"
        >
          下一頁
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      ) : (
        <span className="px-4 py-2 bg-gray-300 text-gray-500 rounded-md cursor-not-allowed flex items-center">
          下一頁
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </span>
      )}
    </nav>
  );
}
