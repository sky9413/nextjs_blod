import Link from 'next/link';
import { blogConfig } from '@/config/blog';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          {/* Logo / Site Title */}
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-2xl font-bold hover:text-blue-200 transition-colors">
              {blogConfig.site.title}
            </Link>
            <p className="text-sm text-blue-100 mt-1">{blogConfig.site.description}</p>
          </div>

          {/* Navigation */}
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link
                  href="/"
                  className="hover:text-blue-200 transition-colors font-medium"
                >
                  首頁
                </Link>
              </li>
              <li>
                <Link
                  href="/tutorial"
                  className="hover:text-blue-200 transition-colors font-medium"
                >
                  教學
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-blue-200 transition-colors font-medium"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
