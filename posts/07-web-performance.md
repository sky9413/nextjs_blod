---
title: "網站效能優化完全指南"
slug: "web-performance-optimization"
description: "學習如何優化網站效能，提升使用者體驗和 SEO 排名。"
date: "2025-12-08 18:15"
---

# 網站效能優化完全指南

網站效能直接影響使用者體驗、轉換率和 SEO 排名。讓我們探討如何優化網站效能。

## 為什麼效能重要？

### 使用者體驗

- **載入速度**：53% 的使用者會放棄載入超過 3 秒的網站
- **互動性**：快速回應提升使用者滿意度
- **留存率**：更快的網站有更高的使用者留存

### SEO 影響

Google 將效能作為排名因素：

- Core Web Vitals
- 行動裝置友善度
- 頁面體驗指標

## Core Web Vitals

### 1. LCP (Largest Contentful Paint)

最大內容繪製 - 主要內容載入時間

**目標**：< 2.5 秒

**優化方法**：

- 優化圖片
- 使用 CDN
- 減少伺服器回應時間
- 移除阻塞渲染的資源

### 2. FID (First Input Delay)

首次輸入延遲 - 互動回應時間

**目標**：< 100 毫秒

**優化方法**：

- 減少 JavaScript 執行時間
- 程式碼分割
- 移除未使用的 JavaScript
- 使用 Web Workers

### 3. CLS (Cumulative Layout Shift)

累積版面位移 - 視覺穩定性

**目標**：< 0.1

**優化方法**：

- 為圖片設定尺寸
- 為廣告預留空間
- 避免動態插入內容
- 使用字體顯示策略

## 圖片優化

### 1. 選擇正確格式

```
WebP > JPEG > PNG
```

- **WebP**：更小的檔案，更好的品質
- **JPEG**：相片
- **PNG**：需要透明度
- **SVG**：圖示和簡單圖形

### 2. 響應式圖片

```html
<picture>
  <source
    srcset="image-large.webp"
    media="(min-width: 1024px)"
    type="image/webp"
  />
  <source
    srcset="image-medium.webp"
    media="(min-width: 640px)"
    type="image/webp"
  />
  <img src="image-small.jpg" alt="描述" />
</picture>
```

### 3. 懶載入

```html
<img src="image.jpg" loading="lazy" alt="描述" />
```

### 4. 使用 CDN

- 減少延遲
- 全球分發
- 自動優化

## JavaScript 優化

### 1. 程式碼分割

```javascript
// 動態導入
const Component = lazy(() => import('./Component'));
```

### 2. Tree Shaking

移除未使用的程式碼：

```javascript
// 只導入需要的
import { specific } from 'library';

// 避免
import * as all from 'library';
```

### 3. 最小化和壓縮

```bash
# 使用建置工具
npm run build
```

### 4. 使用現代 JavaScript

```javascript
// 使用可選鏈
const value = obj?.nested?.value;

// 使用空值合併
const result = value ?? defaultValue;
```

## CSS 優化

### 1. 內聯關鍵 CSS

```html
<style>
  /* 首屏關鍵樣式 */
</style>
```

### 2. 移除未使用的 CSS

使用工具如 PurgeCSS 或 Tailwind 的內建功能。

### 3. 最小化

壓縮 CSS 檔案大小。

## 快取策略

### 1. 瀏覽器快取

```
Cache-Control: public, max-age=31536000
```

### 2. CDN 快取

配置適當的 TTL（Time To Live）。

### 3. 服務工作者（Service Worker）

```javascript
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
```

## 字體優化

### 1. 字體顯示策略

```css
@font-face {
  font-family: 'Custom';
  src: url('font.woff2') format('woff2');
  font-display: swap; /* 或 optional */
}
```

### 2. 子集化

只載入需要的字符：

```
?text=需要的字符
```

### 3. 預載入

```html
<link
  rel="preload"
  href="font.woff2"
  as="font"
  type="font/woff2"
  crossorigin
/>
```

## 伺服器優化

### 1. 壓縮

啟用 Gzip 或 Brotli：

```
Content-Encoding: br
```

### 2. HTTP/2

使用 HTTP/2 提升效能：

- 多路復用
- 標頭壓縮
- 伺服器推送

### 3. CDN

使用內容分發網路：

- Cloudflare
- AWS CloudFront
- Vercel Edge Network

## 效能監控

### 工具

1. **Lighthouse**

```bash
lighthouse https://your-site.com
```

2. **WebPageTest**

詳細的效能分析。

3. **Chrome DevTools**

- Network 面板
- Performance 面板
- Coverage 面板

### 持續監控

- Google Analytics
- Real User Monitoring (RUM)
- Synthetic Monitoring

## 最佳實踐檢查清單

### 圖片

- [ ] 使用 WebP 格式
- [ ] 設定圖片尺寸
- [ ] 實施懶載入
- [ ] 使用響應式圖片

### JavaScript

- [ ] 程式碼分割
- [ ] 移除未使用的程式碼
- [ ] 最小化和壓縮
- [ ] 使用 async/defer

### CSS

- [ ] 內聯關鍵 CSS
- [ ] 移除未使用的樣式
- [ ] 最小化 CSS

### 網路

- [ ] 啟用快取
- [ ] 使用 CDN
- [ ] 啟用壓縮
- [ ] 使用 HTTP/2

### 字體

- [ ] 使用 font-display
- [ ] 字體子集化
- [ ] 預載入字體

## 效能預算

設定效能目標：

```json
{
  "budget": [
    {
      "resourceType": "image",
      "budget": 200
    },
    {
      "resourceType": "script",
      "budget": 150
    },
    {
      "resourceType": "total",
      "budget": 500
    }
  ]
}
```

## 總結

效能優化是持續的過程：

1. **測量**：了解當前效能
2. **優化**：應用最佳實踐
3. **監控**：持續追蹤
4. **迭代**：不斷改進

記住：**每毫秒都很重要**。

快速的網站 = 快樂的使用者 = 更好的業務成果。

立即開始優化您的網站，提供卓越的使用者體驗！
