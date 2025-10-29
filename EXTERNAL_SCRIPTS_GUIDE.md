# Next.js 外部腳本整合教學

## 📌 問題說明

合作商需要在 HTML 中插入兩行 JavaScript：

```html
<script src="https://iva888.com/core.js" defer></script>
<script src="https://iva888.com/data/3.js" defer></script>
```

這些腳本會生成一個表單，並透過 API 將表單資料發送到合作商平台。

## 🚀 在 Next.js 中的解決方案

### 方法一：使用 `next/script` 組件（推薦）

Next.js 提供了專門的 `Script` 組件來優化外部腳本的載入。

#### 基本用法

```tsx
import Script from 'next/script'

export default function Page() {
  return (
    <>
      <div>你的頁面內容</div>
      
      {/* 載入外部腳本 */}
      <Script 
        src="https://iva888.com/core.js" 
        strategy="afterInteractive"
        defer
      />
      <Script 
        src="https://iva888.com/data/3.js" 
        strategy="afterInteractive"
        defer
      />
    </>
  )
}
```

#### Script 載入策略說明

| Strategy | 說明 | 適用場景 |
|----------|------|----------|
| `beforeInteractive` | 在頁面變為可互動之前載入 | 關鍵腳本，如 polyfills |
| `afterInteractive` | 在頁面可互動後立即載入 | 分析工具、表單腳本（推薦） |
| `lazyOnload` | 在所有資源載入完成後才載入 | 非關鍵腳本、聊天插件 |
| `worker` | 在 web worker 中載入 | 實驗性功能 |

### 方法二：在 `_document.tsx` 中全域載入

如果需要在所有頁面載入這些腳本：

```tsx
// app/layout.tsx
import Script from 'next/script'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW">
      <body>
        {children}
        
        {/* 全域載入外部腳本 */}
        <Script 
          src="https://iva888.com/core.js" 
          strategy="afterInteractive"
        />
        <Script 
          src="https://iva888.com/data/3.js" 
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
```

### 方法三：使用 `useEffect` 動態載入

如果需要更細緻的控制：

```tsx
'use client'

import { useEffect } from 'react'

export default function Page() {
  useEffect(() => {
    // 載入第一個腳本
    const script1 = document.createElement('script')
    script1.src = 'https://iva888.com/core.js'
    script1.defer = true
    document.body.appendChild(script1)

    // 載入第二個腳本
    const script2 = document.createElement('script')
    script2.src = 'https://iva888.com/data/3.js'
    script2.defer = true
    document.body.appendChild(script2)

    // 清理函數
    return () => {
      document.body.removeChild(script1)
      document.body.removeChild(script2)
    }
  }, [])

  return <div>你的頁面內容</div>
}
```

## 📁 專案實作範例

我已經在 `app/contact/page.tsx` 創建了一個完整的示範頁面。

### 訪問方式

啟動開發伺服器後，訪問：
```
http://localhost:3000/contact
```

### 頁面結構

```
app/
└── contact/
    └── page.tsx  ← 聯絡表單頁面
```

## ⚠️ 注意事項

### 1. 腳本載入順序
如果 `data/3.js` 依賴於 `core.js`，確保先載入 `core.js`：

```tsx
<Script 
  src="https://iva888.com/core.js" 
  strategy="afterInteractive"
  onLoad={() => {
    console.log('Core.js 已載入')
  }}
/>
<Script 
  src="https://iva888.com/data/3.js" 
  strategy="afterInteractive"
  onLoad={() => {
    console.log('Data.js 已載入')
  }}
/>
```

### 2. CSP (內容安全策略)
如果網站有 CSP 設定，需要允許這些外部腳本：

```tsx
// next.config.ts
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "script-src 'self' 'unsafe-inline' https://iva888.com;"
          },
        ],
      },
    ]
  },
}
```

### 3. 錯誤處理

```tsx
<Script 
  src="https://iva888.com/core.js" 
  strategy="afterInteractive"
  onLoad={() => {
    console.log('腳本載入成功')
  }}
  onError={(e) => {
    console.error('腳本載入失敗:', e)
  }}
/>
```

## 🎯 最佳實踐

1. **使用 `Script` 組件**：比直接使用 `<script>` 標籤更好的效能
2. **選擇正確的 strategy**：表單腳本建議用 `afterInteractive`
3. **監控載入狀態**：使用 `onLoad` 和 `onError` 回調
4. **避免阻塞渲染**：使用 `defer` 或 `async` 屬性
5. **測試表單功能**：確保腳本正確載入並能提交資料

## 🔗 相關資源

- [Next.js Script 組件文檔](https://nextjs.org/docs/app/api-reference/components/script)
- [Next.js 效能優化](https://nextjs.org/docs/app/building-your-application/optimizing)

## 📞 測試步驟

1. 啟動開發伺服器：
   ```bash
   npm run dev
   ```

2. 訪問聯絡頁面：
   ```
   http://localhost:3000/contact
   ```

3. 檢查瀏覽器控制台，確認腳本已載入

4. 測試表單提交功能

---

**建立日期**: 2025-10-29
**適用版本**: Next.js 13+ (App Router)

