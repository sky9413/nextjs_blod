import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '教學 - 如何實現 Markdown Blog 系統',
  description: '完整教學：使用 Next.js 和 Markdown 建立無需後台的 Blog 系統',
};

export default function TutorialPage() {
  return (
    <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
      <h1>如何實現 Markdown Blog 系統</h1>

      <p className="lead">
        本教學將詳細說明如何使用 Next.js 和純 Markdown 文件建立一個完整的 Blog 系統，無需資料庫和後台管理。
      </p>

      <h2>系統架構</h2>

      <h3>核心概念</h3>
      <ul>
        <li><strong>純靜態</strong>：所有文章使用 Markdown 文件儲存</li>
        <li><strong>YAML Frontmatter</strong>：使用 YAML 格式設定文章 metadata</li>
        <li><strong>靜態生成</strong>：Next.js 在建置時生成所有頁面</li>
        <li><strong>SEO 優化</strong>：自動生成 SEO 友善的 URL 和 metadata</li>
      </ul>

      <h2>專案結構</h2>

      <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`nextjs-blog-demo/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # 全局佈局
│   ├── page.tsx           # 首頁
│   ├── tutorial/          # 教學頁面
│   │   └── page.tsx
│   └── blog/              # Blog 相關頁面
│       ├── page.tsx       # Blog 首頁（第一頁）
│       ├── [slug]/        # 文章詳細頁
│       │   └── page.tsx
│       └── page/          # 分頁
│           └── [page]/
│               └── page.tsx
├── components/            # React 元件
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── PostCard.tsx       # 文章卡片
│   └── Pagination.tsx     # 分頁元件
├── lib/                   # 工具函數
│   └── posts.ts           # Markdown 處理
├── types/                 # TypeScript 型別
│   └── post.ts
├── config/                # 配置文件
│   └── blog.ts
└── posts/                 # Markdown 文章目錄
    ├── hello-world.md
    └── ...`}
      </pre>

      <h2>文章格式</h2>

      <h3>Markdown 文件結構</h3>
      <p>每篇文章都是一個 <code>.md</code> 文件，包含 YAML frontmatter 和內容：</p>

      <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`---
title: "文章標題"
slug: "article-url-slug"
description: "這是文章的 SEO 描述，會顯示在搜尋結果中"
date: "2025-12-14 16:47"
---

# 文章內容

這裡是文章的正文內容，使用 Markdown 格式撰寫。

## 支援的功能

- 標題
- 列表
- **粗體** 和 *斜體*
- 程式碼區塊
- 連結和圖片
- 等等...`}
      </pre>

      <h3>Frontmatter 欄位說明</h3>
      <ul>
        <li><strong>title</strong>：文章標題（必填）</li>
        <li><strong>slug</strong>：URL slug，用於生成 SEO 友善的網址（必填）</li>
        <li><strong>description</strong>：文章描述，用於 SEO meta tag（必填）</li>
        <li><strong>date</strong>：發布日期，支援兩種格式：
          <ul>
            <li><code>2025-12-14 16:47</code>（包含時間）</li>
            <li><code>2025-12-14</code>（僅日期）</li>
          </ul>
        </li>
      </ul>

      <h2>核心功能實現</h2>

      <h3>1. Blog 配置 (config/blog.ts)</h3>
      <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`export const blogConfig = {
  postsDirectory: 'posts',        // 文章目錄
  postsPerPage: 5,                // 每頁顯示 5 篇
  sortBy: 'date',                 // 按日期排序
  sortOrder: 'desc',              // 降序（新到舊）
};`}
      </pre>

      <h3>2. Markdown 處理 (lib/posts.ts)</h3>
      <p>主要功能：</p>
      <ul>
        <li><code>getAllPostsMetadata()</code>：讀取所有文章的 metadata</li>
        <li><code>getPaginatedPosts(page)</code>：獲取指定頁面的文章列表</li>
        <li><code>getPostBySlug(slug)</code>：根據 slug 獲取單篇文章</li>
        <li><code>parseDate()</code>：解析日期（兼容有/無時間格式）</li>
      </ul>

      <h3>3. 分頁系統</h3>
      <p>URL 結構：</p>
      <ul>
        <li>第一頁：<code>/blog</code></li>
        <li>第二頁：<code>/blog/page/2</code></li>
        <li>第三頁：<code>/blog/page/3</code></li>
      </ul>

      <p>這種結構對 SEO 友善，且使用者可以直接複製分享連結。</p>

      <h2>如何添加新文章</h2>

      <ol>
        <li>在 <code>posts/</code> 目錄下建立新的 <code>.md</code> 文件</li>
        <li>檔案名稱可以使用英文、數字、連字符（例如：<code>01-hello-world.md</code>）</li>
        <li>在文件開頭添加 YAML frontmatter：</li>
      </ol>

      <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`---
title: "我的第一篇文章"
slug: "my-first-post"
description: "這是我的第一篇文章描述"
date: "2025-12-14"
---

# 文章內容開始

撰寫你的文章內容...`}
      </pre>

      <ol start={4}>
        <li>儲存文件</li>
        <li>重新建置專案（開發模式會自動重載）</li>
      </ol>

      <h2>配置選項</h2>

      <h3>調整每頁顯示數量</h3>
      <p>編輯 <code>config/blog.ts</code>：</p>
      <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`postsPerPage: 10,  // 改為每頁顯示 10 篇`}
      </pre>

      <h3>改變排序方式</h3>
      <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`sortBy: 'title',      // 按標題排序
sortOrder: 'asc',     // 升序（A-Z 或舊到新）`}
      </pre>

      <h2>SEO 優化</h2>

      <h3>自動生成的 SEO 元素</h3>
      <ul>
        <li><strong>Title Tag</strong>：來自文章的 <code>title</code> 欄位</li>
        <li><strong>Meta Description</strong>：來自文章的 <code>description</code> 欄位</li>
        <li><strong>URL Slug</strong>：來自文章的 <code>slug</code> 欄位，生成 SEO 友善的網址</li>
        <li><strong>Canonical URL</strong>：Next.js 自動處理</li>
      </ul>

      <h3>最佳實踐</h3>
      <ul>
        <li>Slug 使用小寫英文和連字符（例如：<code>how-to-build-blog</code>）</li>
        <li>Title 長度控制在 60 字元以內</li>
        <li>Description 長度控制在 160 字元以內</li>
        <li>使用有意義的標題和描述，包含關鍵字</li>
      </ul>

      <h2>部署</h2>

      <h3>Vercel（推薦）</h3>
      <ol>
        <li>將專案推送到 GitHub</li>
        <li>在 Vercel 導入專案</li>
        <li>自動部署完成</li>
      </ol>

      <h3>其他平台</h3>
      <ul>
        <li>Netlify</li>
        <li>Cloudflare Pages</li>
        <li>自己的伺服器（需要 Node.js 環境）</li>
      </ul>

      <h2>進階功能</h2>

      <h3>可以擴展的功能</h3>
      <ul>
        <li>添加標籤系統（在 frontmatter 加入 <code>tags</code> 欄位）</li>
        <li>添加分類功能（在 frontmatter 加入 <code>category</code> 欄位）</li>
        <li>添加搜尋功能（使用 Algolia 或自建搜尋）</li>
        <li>添加留言系統（使用 Giscus 或 Disqus）</li>
        <li>添加閱讀時間估算</li>
        <li>添加相關文章推薦</li>
        <li>添加 RSS Feed</li>
        <li>添加 Sitemap</li>
      </ul>

      <h2>常見問題</h2>

      <h3>Q: 為什麼不用資料庫？</h3>
      <p>
        A: 對於個人 Blog 或小型網站，使用 Markdown 文件有以下優點：
      </p>
      <ul>
        <li>簡單：無需設置和維護資料庫</li>
        <li>版本控制：可以使用 Git 追蹤文章修改歷史</li>
        <li>可攜性：文章是純文字，易於備份和遷移</li>
        <li>快速：靜態生成的頁面載入速度極快</li>
        <li>安全：沒有資料庫，減少攻擊面</li>
      </ul>

      <h3>Q: 如何處理大量文章？</h3>
      <p>
        A: Next.js 的靜態生成可以處理數千篇文章。如果文章數量超過 10,000 篇，可以考慮：
      </p>
      <ul>
        <li>使用增量靜態生成（ISR）</li>
        <li>改用伺服器端渲染（SSR）</li>
        <li>引入資料庫系統</li>
      </ul>

      <h3>Q: 可以添加圖片嗎？</h3>
      <p>
        A: 可以！將圖片放在 <code>public/images/</code> 目錄，然後在 Markdown 中使用：
      </p>
      <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`![圖片描述](/images/my-image.jpg)`}
      </pre>

      <h2>結語</h2>
      <p>
        這個 Blog 系統展示了如何使用現代技術建立一個簡單但功能完整的內容管理系統。
        它適合個人 Blog、技術文件、產品文件等場景。
      </p>
      <p>
        最重要的是，你可以專注於撰寫內容，而不需要花時間管理複雜的後台系統。
      </p>

      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-4 my-8">
        <p className="font-semibold text-blue-900 dark:text-blue-100">💡 提示</p>
        <p className="text-blue-800 dark:text-blue-200">
          查看 <code>lib/posts.ts</code>、<code>config/blog.ts</code> 和示範文章的原始碼，
          了解更多實現細節。
        </p>
      </div>
    </div>
  );
}
