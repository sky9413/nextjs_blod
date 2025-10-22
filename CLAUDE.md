# Next.js Blog Demo 專案需求文檔

## 專案目標
為同事建立一個 Next.js Blog Demo，展示如何使用純 MD 檔案實現 Blog 系統，無需後台管理。

## 核心需求

### 網站結構
1. **首頁 (Home)**: 簡單的 Welcome 頁面
2. **教學頁面**: 說明本專案的 Blog 系統如何實現
3. **Blog 頁面**: 展示文章列表和詳細內容

### Blog 系統技術要求

#### 1. Markdown 格式
- 純 MD 格式文章
- 使用 YAML frontmatter 存儲 metadata

#### 2. SEO 優化
- 必須支援自定義 title
- 必須支援自定義 meta description
- URL slug 優化（SEO 友善）

#### 3. 發布日期系統
- **格式**: `2025-12-14 16:47` (YYYY-MM-DD HH:mm)
- **兼容性**: 必須兼容只有日期沒有時間的格式 `2025-12-14`
- **排序**: 支援按日期排序（order by）
- **顯示**: 自動格式化顯示

#### 4. 文章管理
- 自動掃描指定 folder 中所有 `.md` 文件
- 每個 MD 文件 = 一篇文章
- 檔案名稱僅供內部參考
- 真正的標題來自 YAML frontmatter

#### 5. 列表頁面功能
- Config 檔案設定：
  - Order by 欄位（可設定按日期、標題等）
  - 每頁顯示文章數量
- **分頁系統**：
  - 使用靜態 URL 分頁（例如：`/blog/page/2`）
  - 不使用 "Load More" 功能
  - SEO 友善的分頁 URL

#### 6. 詳細頁面
- SEO 友善的 URL slug
- Slug 來自 YAML frontmatter
- 完整的 metadata 支援

#### 7. Demo 內容
- 建立數篇簡短的示範文章
- 展示系統完整功能

## 技術實現方案

### YAML Frontmatter 結構
```yaml
---
title: "文章標題"
slug: "article-url-slug"
description: "SEO meta description"
date: "2025-12-14 16:47"
---
```

### 檔案命名策略
- 檔案名：純英文、數字、連字符（例如：`01-hello-world.md`）
- 顯示標題：使用 YAML 中的 `title` 欄位
- URL slug：使用 YAML 中的 `slug` 欄位

### 技術棧
- Next.js 15+ (App Router)
- TypeScript
- Tailwind CSS
- gray-matter (解析 YAML frontmatter)
- remark/rehype (Markdown 處理)

## 執行規則
1. **嚴格按照 todolist.md 執行**
2. 每個步驟完成後更新 TodoWrite 狀態
3. 完成後使用 Playwright 進行瀏覽器測試
4. 確保所有功能正常運作

## 品質標準
- ✅ 所有頁面正常載入
- ✅ Blog 列表正確顯示
- ✅ 分頁功能正常
- ✅ 文章詳細頁面可訪問
- ✅ SEO metadata 正確設置
- ✅ 日期格式正確處理和顯示
- ✅ 響應式設計（手機、平板、桌面）
