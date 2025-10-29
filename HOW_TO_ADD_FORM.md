# 📋 如何在 Next.js 中插入外部表單腳本

## 🎯 給完全新手的超簡單教學

### 你只需要修改 1 個檔案！

---

## 📁 步驟一：找到檔案

打開這個檔案：
```
public/contact-form.html
```

---

## ✏️ 步驟二：修改腳本網址

找到這兩行：

```html
<script src="https://iva888.com/core.js"></script>
<script src="https://iva888.com/data/1.js"></script>
```

### 如何修改？

**把網址換成你的腳本網址：**

```html
<!-- 範例：如果你的腳本網址是這些 -->
<script src="https://你的網站.com/script1.js"></script>
<script src="https://你的網站.com/script2.js"></script>
```

### 如果只有一個腳本？

刪掉其中一行即可：

```html
<script src="https://你的網站.com/your-script.js"></script>
```

### 如果有更多腳本？

就多加幾行：

```html
<script src="https://你的網站.com/script1.js"></script>
<script src="https://你的網站.com/script2.js"></script>
<script src="https://你的網站.com/script3.js"></script>
```

---

## 💾 步驟三：保存檔案

按 `Ctrl + S` (Windows) 或 `Cmd + S` (Mac)

---

## 🎉 完成！

刷新瀏覽器，訪問：
```
http://localhost:3000/form-api-tutorial
```

表單就會自動顯示！

---

## 🔧 進階修改（選用）

### 修改頁面標題

打開 `app/form-api-tutorial/page.tsx`，找到這段：

```tsx
<h1 className="text-4xl font-bold text-gray-900 mb-4">
  📋 Form API 整合教學  ← 改這裡
</h1>
<p className="text-lg text-gray-600">
  學習如何在 Next.js 中輕鬆整合外部表單腳本  ← 改這裡
</p>
```

### 修改表單高度

如果表單顯示不完整，找到這行：

```tsx
style={{ minHeight: '700px' }}  ← 把 700px 改成更大的數字，例如 900px
```

---

## ❓ 常見問題

### Q: 為什麼表單沒有顯示？

1. 檢查腳本網址是否正確
2. 打開瀏覽器按 F12，查看 Console 有無錯誤
3. 確認網址可以直接在瀏覽器中打開

### Q: 'use client' 可以刪除嗎？

❌ **不可以！** 這行是必須的，刪除會導致頁面無法正常運作。

### Q: 可以修改樣式嗎？

可以！在 `public/contact-form.html` 的 `<style>` 標籤內添加 CSS：

```html
<style>
    body {
        margin: 0;
        padding: 20px;
        background: transparent;
    }
    /* 👇 在這裡添加你的樣式 */
    .form-container {
        max-width: 600px;
        margin: 0 auto;
    }
</style>
```

---

## 📞 需要幫助？

如果遇到問題，請檢查：

1. ✅ 腳本網址是否正確
2. ✅ 檔案是否已保存
3. ✅ 瀏覽器是否已刷新
4. ✅ 開發伺服器是否正在運行 (`npm run dev`)

---

**最後更新**：2025-10-29
**適用版本**：Next.js 13+ (App Router)

