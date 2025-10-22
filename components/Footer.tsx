import { blogConfig } from '@/config/blog';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-300 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">
              © {currentYear} {blogConfig.site.title}. All rights reserved.
            </p>
            <p className="text-xs text-gray-400 mt-1">
              使用 Next.js 和 Markdown 建立
            </p>
          </div>

          <div className="flex space-x-4 text-sm">
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Next.js
            </a>
            <a
              href="https://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Tailwind CSS
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
