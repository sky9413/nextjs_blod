---
title: "Tailwind CSS 入門指南"
slug: "tailwind-introduction"
description: "了解 Tailwind CSS 的核心概念和使用方法，快速建立美觀的使用者介面。"
date: "2025-12-09"
---

# Tailwind CSS 入門指南

Tailwind CSS 是一個實用優先（utility-first）的 CSS 框架，讓您可以快速建立自訂設計。

## 什麼是 Tailwind CSS？

Tailwind CSS 提供低階的實用類別（utility classes），讓您直接在 HTML 中構建設計。

### 傳統 CSS vs Tailwind

**傳統方式：**

```css
.button {
  background-color: blue;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
}
```

```html
<button class="button">點擊</button>
```

**Tailwind 方式：**

```html
<button class="bg-blue-500 text-white px-4 py-2 rounded">
  點擊
</button>
```

## 核心概念

### 1. 實用優先

使用預定義的類別快速構建：

```html
<div class="flex items-center justify-between p-4 bg-white shadow-lg rounded-lg">
  <h2 class="text-2xl font-bold text-gray-900">標題</h2>
  <button class="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
    按鈕
  </button>
</div>
```

### 2. 響應式設計

使用前綴實現響應式：

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <!-- 內容 -->
</div>
```

斷點：

- `sm:` - 640px
- `md:` - 768px
- `lg:` - 1024px
- `xl:` - 1280px
- `2xl:` - 1536px

### 3. 狀態變化

處理 hover、focus 等狀態：

```html
<button class="bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300">
  按鈕
</button>
```

## 常用類別

### 間距

```html
<!-- Padding -->
<div class="p-4">      <!-- 所有方向 -->
<div class="px-4 py-2"><!-- 水平和垂直 -->
<div class="pt-8">     <!-- 頂部 -->

<!-- Margin -->
<div class="m-4">      <!-- 所有方向 -->
<div class="mx-auto">  <!-- 水平置中 -->
<div class="mt-8">     <!-- 頂部 -->
```

### 顏色

```html
<!-- 文字顏色 -->
<p class="text-blue-600">藍色文字</p>
<p class="text-gray-900">深灰色文字</p>

<!-- 背景顏色 -->
<div class="bg-red-500">紅色背景</div>
<div class="bg-green-100">淺綠色背景</div>
```

### 排版

```html
<!-- 字體大小 -->
<h1 class="text-4xl">超大標題</h1>
<p class="text-base">正常文字</p>
<span class="text-sm">小文字</span>

<!-- 字體粗細 -->
<p class="font-light">細體</p>
<p class="font-bold">粗體</p>

<!-- 對齊 -->
<p class="text-left">靠左</p>
<p class="text-center">置中</p>
<p class="text-right">靠右</p>
```

### Flexbox

```html
<div class="flex items-center justify-between">
  <div>項目 1</div>
  <div>項目 2</div>
  <div>項目 3</div>
</div>
```

### Grid

```html
<div class="grid grid-cols-3 gap-4">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```

## 自訂配置

在 `tailwind.config.js` 中自訂：

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        'brand-blue': '#1e40af',
        'brand-gray': '#6b7280',
      },
      spacing: {
        '128': '32rem',
      },
      fontFamily: {
        'custom': ['Custom Font', 'sans-serif'],
      },
    },
  },
}
```

## 常見模式

### 卡片

```html
<div class="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
  <h3 class="text-xl font-bold mb-2">卡片標題</h3>
  <p class="text-gray-600">卡片內容...</p>
</div>
```

### 導航欄

```html
<nav class="bg-blue-600 text-white p-4">
  <div class="container mx-auto flex justify-between items-center">
    <div class="text-2xl font-bold">Logo</div>
    <ul class="flex space-x-6">
      <li><a href="#" class="hover:text-blue-200">首頁</a></li>
      <li><a href="#" class="hover:text-blue-200">關於</a></li>
      <li><a href="#" class="hover:text-blue-200">聯絡</a></li>
    </ul>
  </div>
</nav>
```

### 表單

```html
<form class="space-y-4">
  <div>
    <label class="block text-gray-700 font-medium mb-2">姓名</label>
    <input
      type="text"
      class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      placeholder="請輸入姓名"
    />
  </div>
  <button class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
    送出
  </button>
</form>
```

## 深色模式

Tailwind 內建深色模式支援：

```html
<div class="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
  內容會根據系統主題自動切換
</div>
```

配置：

```javascript
module.exports = {
  darkMode: 'class', // 或 'media'
}
```

## 最佳實踐

### 1. 使用 @apply 抽取重複樣式

```css
.btn-primary {
  @apply px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700;
}
```

### 2. 元件化

將常用模式抽取為 React 元件：

```typescript
function Button({ children, variant = 'primary' }) {
  const baseClasses = 'px-6 py-2 rounded-lg font-medium';
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]}`}>
      {children}
    </button>
  );
}
```

### 3. 保持一致性

使用設計令牌（design tokens）：

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    colors: {
      primary: '#3b82f6',
      secondary: '#6b7280',
    },
    spacing: {
      // 使用 4px 的倍數
    },
  },
}
```

## 效能優化

### 清除未使用的 CSS

Tailwind 自動清除生產環境中未使用的樣式：

```javascript
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
}
```

## 總結

Tailwind CSS 的優勢：

✅ 快速開發
✅ 一致的設計
✅ 高度可自訂
✅ 優秀的效能
✅ 響應式友善

如果您追求快速開發和自訂設計，Tailwind CSS 是絕佳選擇！
