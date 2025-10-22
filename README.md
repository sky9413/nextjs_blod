# Next.js Blog Demo

使用純 Markdown 文件建立的 Blog 系統示範專案。

## 專案簡介

這是一個完整的 Blog 系統範例，展示如何使用 Next.js 和純 Markdown 文件建立一個功能完整的 Blog，無需資料庫和複雜的後台管理系統。

### 主要特點

- ✅ **純 Markdown 文件**：所有文章使用 `.md` 格式，易於管理和版本控制
- ✅ **YAML Frontmatter**：使用 YAML 設定文章 metadata（標題、slug、描述、日期）
- ✅ **自動分頁**：可配置每頁顯示數量，自動生成分頁
- ✅ **SEO 優化**：自動生成 SEO 友善的 URL 和 meta tags
- ✅ **日期格式支援**：兼容 `2025-12-14` 和 `2025-12-14 16:47` 兩種格式
- ✅ **響應式設計**：支援桌面、平板和手機裝置
- ✅ **深色模式**：內建深色模式支援
- ✅ **TypeScript**：完整的型別定義
- ✅ **靜態生成**：使用 Next.js SSG，載入速度極快

## 技術棧

- **Next.js 15**：React 框架，使用 App Router
- **TypeScript**：型別安全
- **Tailwind CSS**：實用優先的 CSS 框架
- **gray-matter**：解析 YAML frontmatter
- **remark**：Markdown 處理和轉換
- **remark-html**：將 Markdown 轉換為 HTML

## 快速開始

### 1. 安裝依賴

```bash
npm install
```

### 2. 啟動開發伺服器

```bash
npm run dev
```

開啟瀏覽器訪問 [http://localhost:3000](http://localhost:3000)

### 3. 建置專案

```bash
npm run build
npm start
```

## 專案結構

```
nextjs-blog-demo/
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
│   ├── Header.tsx        # 導航欄
│   ├── Footer.tsx        # 頁尾
│   ├── PostCard.tsx      # 文章卡片
│   └── Pagination.tsx    # 分頁元件
├── lib/                   # 工具函數
│   └── posts.ts          # Markdown 處理
├── types/                 # TypeScript 型別
│   └── post.ts
├── config/                # 配置文件
│   └── blog.ts           # Blog 配置
├── posts/                 # Markdown 文章目錄
│   ├── 01-welcome-to-blog.md
│   ├── 02-markdown-basics.md
│   └── ...
└── public/                # 靜態資源
```

## 如何使用

### 添加新文章

1. 在 `posts/` 目錄下建立新的 `.md` 文件
2. 檔案名稱可以使用英文、數字、連字符（例如：`my-new-post.md`）
3. 在文件開頭添加 YAML frontmatter：

```markdown
---
title: "文章標題"
slug: "article-url-slug"
description: "文章描述，用於 SEO"
date: "2025-12-14 16:47"
---

# 文章內容

這裡開始撰寫您的文章內容...
```

4. 儲存文件，開發模式會自動重載

### Frontmatter 欄位說明

- **title**：文章標題（必填）
- **slug**：URL slug，用於生成網址（必填）
- **description**：文章描述，用於 SEO meta tag（必填）
- **date**：發布日期，支援兩種格式：
  - `2025-12-14 16:47`（包含時間）
  - `2025-12-14`（僅日期）

### 配置 Blog 設定

編輯 `config/blog.ts` 來調整 Blog 行為：

```typescript
export const blogConfig = {
  postsDirectory: 'posts',     // 文章目錄
  postsPerPage: 5,             // 每頁顯示 5 篇文章
  sortBy: 'date',              // 排序欄位：'date' 或 'title'
  sortOrder: 'desc',           // 排序方向：'desc' 或 'asc'
};
```

## 功能說明

### 1. 首頁 (`/`)

- 展示專案介紹
- 功能特點說明
- 快速導航連結

### 2. 教學頁面 (`/tutorial`)

- 完整的使用教學
- 系統架構說明
- 代碼範例
- 常見問題

### 3. Blog 列表 (`/blog`)

- 顯示所有文章
- 自動分頁
- 每頁顯示數量可配置
- 顯示文章標題、日期、描述
- SEO 友善的分頁 URL

### 4. 分頁 (`/blog/page/2`)

- 靜態 URL 分頁
- 頁碼導航
- 上一頁/下一頁按鈕

### 5. 文章詳細頁 (`/blog/[slug]`)

- 完整文章內容
- Markdown 渲染
- 語法高亮
- SEO metadata
- 返回列表按鈕

## SEO 優化

### 自動生成的 SEO 元素

- **Title Tag**：來自文章的 `title` 欄位
- **Meta Description**：來自文章的 `description` 欄位
- **URL Slug**：來自文章的 `slug` 欄位
- **Canonical URL**：Next.js 自動處理
- **Structured Data**：可擴展支援 JSON-LD

### SEO 最佳實踐

- Slug 使用小寫英文和連字符
- Title 長度控制在 60 字元以內
- Description 長度控制在 160 字元以內
- 使用有意義的標題和描述

## 部署

### Vercel（推薦）

1. 將專案推送到 GitHub
2. 在 [Vercel](https://vercel.com) 導入專案
3. 自動部署完成

### 其他平台

- **Netlify**：支援 Next.js 靜態站點
- **Cloudflare Pages**：支援 Next.js
- **自己的伺服器**：需要 Node.js 環境

## 可擴展功能

這個 Blog 系統是一個基礎範例，可以輕鬆擴展以下功能：

- 🏷️ 標籤系統
- 📂 分類功能
- 🔍 搜尋功能
- 💬 留言系統（Giscus、Disqus）
- ⏱️ 閱讀時間估算
- 🔗 相關文章推薦
- 📰 RSS Feed
- 🗺️ Sitemap
- 📊 Google Analytics
- 🌐 多語言支援

## 常見問題

### Q: 為什麼不用資料庫？

A: 對於個人 Blog 或小型網站，使用 Markdown 文件有以下優點：

- 簡單：無需設置和維護資料庫
- 版本控制：可以使用 Git 追蹤文章修改歷史
- 可攜性：文章是純文字，易於備份和遷移
- 快速：靜態生成的頁面載入速度極快
- 安全：沒有資料庫，減少攻擊面

### Q: 如何處理大量文章？

A: Next.js 的靜態生成可以處理數千篇文章。如果文章數量超過 10,000 篇，可以考慮：

- 使用增量靜態生成（ISR）
- 改用伺服器端渲染（SSR）
- 引入資料庫系統

### Q: 可以添加圖片嗎？

A: 可以！將圖片放在 `public/images/` 目錄，然後在 Markdown 中使用：

```markdown
![圖片描述](/images/my-image.jpg)
```

## 授權

MIT License

## 聯絡方式

如有問題或建議，歡迎提交 Issue 或 Pull Request。

---

**享受使用 Markdown 撰寫 Blog 的樂趣！** 📝
