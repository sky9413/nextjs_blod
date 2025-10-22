---
title: "Next.js 15 新特性介紹"
slug: "nextjs-15-features"
description: "探索 Next.js 15 的最新功能和改進，包括 App Router、Server Components 等。"
date: "2025-12-12 09:30"
---

# Next.js 15 新特性介紹

Next.js 15 帶來了許多令人興奮的新功能和改進。讓我們一起探索這些特性。

## App Router

App Router 是 Next.js 13 引入的新路由系統，在 15 版本中更加成熟和穩定。

### 主要優勢

1. **基於檔案系統的路由**：資料夾結構即是路由結構
2. **佈局系統**：共享 UI 和狀態管理更簡單
3. **載入狀態**：內建 loading.tsx 支援
4. **錯誤處理**：使用 error.tsx 處理錯誤

## Server Components

React Server Components 讓您可以在伺服器端渲染元件。

### 優點

- **更小的 Bundle**：減少客戶端 JavaScript
- **直接存取後端**：可以直接查詢資料庫
- **更好的 SEO**：完全的伺服器端渲染
- **更快的首次載入**：減少客戶端處理

### 範例

```typescript
// app/posts/page.tsx
async function getPosts() {
  // 直接存取資料庫或 API
  const posts = await db.posts.findMany();
  return posts;
}

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}
```

## Metadata API

新的 Metadata API 讓 SEO 優化變得更簡單。

```typescript
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '我的頁面',
  description: '頁面描述',
};
```

## 平行路由和攔截路由

### 平行路由

同時渲染多個頁面在同一個佈局中：

```
app/
├── @sidebar/
│   └── page.tsx
├── @main/
│   └── page.tsx
└── layout.tsx
```

### 攔截路由

在當前頁面上下文中顯示來自其他路由的內容。

## 效能改進

Next.js 15 在效能方面也有顯著改進：

- **更快的建置時間**：優化的建置流程
- **更小的產出檔案**：改進的程式碼分割
- **更好的快取**：智能的增量靜態再生成

## 圖片優化

內建的 `next/image` 元件提供：

- 自動圖片優化
- 懶載入
- 佔位符支援
- 響應式圖片

```typescript
import Image from 'next/image';

<Image
  src="/photo.jpg"
  alt="描述"
  width={500}
  height={300}
/>
```

## 總結

Next.js 15 是一個強大的框架，提供了許多現代 Web 開發所需的功能。無論是小型專案還是大型應用，Next.js 都是一個優秀的選擇。
