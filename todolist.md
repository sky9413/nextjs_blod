# Next.js Blog Demo - 任務清單

## Phase 1: 專案初始化
- [ ] 1.1 檢查當前目錄狀態
- [ ] 1.2 初始化 Next.js 專案（如果不存在）
- [ ] 1.3 安裝必要依賴（gray-matter, remark, rehype 等）
- [ ] 1.4 設定 TypeScript 和 Tailwind CSS
- [ ] 1.5 建立基本目錄結構

## Phase 2: 專案結構設計
- [ ] 2.1 建立 `/app` 目錄結構
- [ ] 2.2 建立 `/posts` 目錄（存放 MD 文章）
- [ ] 2.3 建立 `/lib` 目錄（工具函數）
- [ ] 2.4 建立 `/components` 目錄（React 元件）
- [ ] 2.5 建立 `/config` 目錄（設定檔）

## Phase 3: 核心功能實現

### 3.1 Blog 配置系統
- [ ] 3.1.1 建立 `config/blog.ts` - Blog 設定檔
  - 每頁顯示數量
  - 排序欄位
  - 文章目錄路徑

### 3.2 Markdown 處理工具
- [ ] 3.2.1 建立 `lib/posts.ts` - 文章處理函數
  - 讀取所有 MD 文件
  - 解析 YAML frontmatter
  - 處理日期格式（兼容有/無時間）
  - 按日期排序
  - 分頁邏輯

### 3.3 型別定義
- [ ] 3.3.1 建立 `types/post.ts` - Post 型別定義
  - Post interface
  - PostMetadata interface
  - Pagination interface

## Phase 4: 頁面實現

### 4.1 首頁 (Home)
- [ ] 4.1.1 建立 `app/page.tsx` - 首頁
- [ ] 4.1.2 設計簡單的 Welcome 介面
- [ ] 4.1.3 加入導航連結

### 4.2 教學頁面
- [ ] 4.2.1 建立 `app/tutorial/page.tsx` - 教學頁面
- [ ] 4.2.2 撰寫 Blog 系統實現說明
- [ ] 4.2.3 包含代碼範例和使用指南

### 4.3 Blog 列表頁面
- [ ] 4.3.1 建立 `app/blog/page.tsx` - Blog 首頁（第一頁）
- [ ] 4.3.2 建立 `app/blog/page/[page]/page.tsx` - 分頁頁面
- [ ] 4.3.3 實現文章列表顯示
- [ ] 4.3.4 實現分頁導航元件
- [ ] 4.3.5 設定 SEO metadata

### 4.4 Blog 詳細頁面
- [ ] 4.4.1 建立 `app/blog/[slug]/page.tsx` - 文章詳細頁面
- [ ] 4.4.2 實現 Markdown 渲染
- [ ] 4.4.3 設定動態 SEO metadata
- [ ] 4.4.4 加入返回列表連結

## Phase 5: 元件開發

### 5.1 佈局元件
- [ ] 5.1.1 建立 `app/layout.tsx` - 全局佈局
- [ ] 5.1.2 建立 `components/Header.tsx` - 導航欄
- [ ] 5.1.3 建立 `components/Footer.tsx` - 頁尾

### 5.2 Blog 元件
- [ ] 5.2.1 建立 `components/PostCard.tsx` - 文章卡片
- [ ] 5.2.2 建立 `components/Pagination.tsx` - 分頁元件
- [ ] 5.2.3 建立 `components/PostContent.tsx` - 文章內容顯示

## Phase 6: Demo 內容建立
- [ ] 6.1 建立示範文章 1 - 簡介文章
- [ ] 6.2 建立示範文章 2 - 技術文章
- [ ] 6.3 建立示範文章 3 - 教學文章
- [ ] 6.4 建立示範文章 4 - 測試不同日期格式
- [ ] 6.5 建立示範文章 5 - 測試分頁功能

## Phase 7: 樣式美化
- [ ] 7.1 設定 Tailwind 主題色彩
- [ ] 7.2 優化首頁樣式
- [ ] 7.3 優化 Blog 列表樣式
- [ ] 7.4 優化文章詳細頁樣式
- [ ] 7.5 確保響應式設計（手機、平板、桌面）

## Phase 8: 測試與驗證
- [ ] 8.1 啟動開發伺服器
- [ ] 8.2 使用 Playwright 測試首頁
- [ ] 8.3 使用 Playwright 測試教學頁面
- [ ] 8.4 使用 Playwright 測試 Blog 列表
- [ ] 8.5 使用 Playwright 測試分頁功能
- [ ] 8.6 使用 Playwright 測試文章詳細頁
- [ ] 8.7 驗證 SEO metadata
- [ ] 8.8 驗證日期格式處理
- [ ] 8.9 驗證響應式設計

## Phase 9: 文檔完善
- [ ] 9.1 更新 README.md
- [ ] 9.2 加入使用說明
- [ ] 9.3 加入部署指南

## 完成標準
✅ 所有功能正常運作
✅ Playwright 測試全部通過
✅ SEO metadata 正確設置
✅ 響應式設計完整
✅ 代碼整潔且有註釋
