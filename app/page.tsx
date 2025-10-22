import Link from 'next/link';
import { blogConfig } from '@/config/blog';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
          歡迎來到 {blogConfig.site.title}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          {blogConfig.site.description}
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            href="/blog"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-lg hover:shadow-xl"
          >
            瀏覽 Blog
          </Link>
          <Link
            href="/tutorial"
            className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium shadow-lg hover:shadow-xl"
          >
            查看教學
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-8 mt-16">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="text-4xl mb-4">📝</div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            純 Markdown
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            所有文章使用 Markdown 格式撰寫，無需複雜的資料庫或後台系統。
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="text-4xl mb-4">🚀</div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            SEO 優化
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            自動生成 SEO 友善的 URL、meta tags 和結構化資料。
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="text-4xl mb-4">⚡</div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            快速部署
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            使用 Next.js 靜態生成，部署簡單且載入速度極快。
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          關於此專案
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          這是一個使用 Next.js 建立的 Blog Demo 專案，展示如何使用純 Markdown 文件實現完整的 Blog 系統。
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          此專案特點：
        </p>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
          <li>無需資料庫，所有文章使用 Markdown 文件管理</li>
          <li>支援 YAML frontmatter 設定文章 metadata</li>
          <li>自動分頁功能</li>
          <li>SEO 友善的 URL 結構</li>
          <li>響應式設計，支援各種裝置</li>
          <li>深色模式支援</li>
        </ul>
      </section>

      {/* CTA Section */}
      <section className="text-center mt-16 py-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          準備開始了嗎？
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          查看教學文件，了解如何建立自己的 Markdown Blog 系統
        </p>
        <Link
          href="/tutorial"
          className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-medium shadow-lg hover:shadow-xl"
        >
          開始學習 →
        </Link>
      </section>
    </div>
  );
}
