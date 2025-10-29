// ⚠️ 這行必須保留！讓頁面能在瀏覽器端運行
'use client'

import { useState } from 'react'

export default function FormApiTutorialPage() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* 📝 頁面標題 - 可自由修改文字 */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            📋 Form API 整合教學
          </h1>
          <p className="text-lg text-gray-600">
            學習如何在 Next.js 中輕鬆整合外部表單腳本
          </p>
          <p className="text-sm text-gray-500 mt-2">
            超簡單！只需修改一個檔案即可
          </p>
        </div>

        {/* 📋 表單示範區域 - 自動載入外部表單 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <iframe 
            src="/contact-form.html"
            className="w-full border-0"
            style={{ minHeight: '700px' }}
            title="Form API 示範"
            onLoad={() => setIsLoading(false)}
          />
        </div>

      </div>
    </div>
  )
}

