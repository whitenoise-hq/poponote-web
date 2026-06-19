import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-cream/80 backdrop-blur-md border-b border-cream-200">
      <div className="mx-auto max-w-5xl px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 cursor-pointer">
          <Image src="/icon.png" alt="포포노트 로고" width={32} height={32} className="rounded-lg" />
          <span className="font-jua text-xl text-ink">포포노트</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm text-ink-500">
          <Link href="/contact" className="hover:text-ink transition-colors cursor-pointer">
            문의하기
          </Link>
        </nav>
      </div>
    </header>
  )
}
