import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-cream-100 border-t border-cream-200">
      <div className="mx-auto max-w-5xl px-4 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <nav className="flex items-center gap-4 text-sm text-ink-500">
            <Link href="/privacy" className="hover:text-ink transition-colors cursor-pointer">
              개인정보처리방침
            </Link>
            <span className="text-cream-200">|</span>
            <Link href="/terms" className="hover:text-ink transition-colors cursor-pointer">
              이용약관
            </Link>
            <span className="text-cream-200">|</span>
            <Link href="/contact" className="hover:text-ink transition-colors cursor-pointer">
              문의하기
            </Link>
          </nav>
          <p className="text-sm text-ink-500">
            &copy; 2026 포포노트. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}