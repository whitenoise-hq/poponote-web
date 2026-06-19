import Image from "next/image"
import { STORE_LINKS } from "@/constants/links"

export function HeroSection() {
  return (
    <section className="py-20 md:py-32 text-center px-4">
      <div className="mx-auto max-w-2xl">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-light mb-6">
          <Image src="/icon.png" alt="포포노트 로고" width={48} height={48} className="rounded-xl" />
        </div>

        <h1 className="font-jua text-5xl md:text-6xl text-ink mb-4">
          포포노트
        </h1>

        <p className="text-xl md:text-2xl text-ink-500 mb-6">
          가족이 함께 쓰는 반려동물 다이어리
        </p>

        <p className="text-base text-ink-500 leading-relaxed mb-10 max-w-lg mx-auto">
          하루 한 장, 우리 아이의 소중한 순간을 기록하세요.
          <br className="hidden sm:block" />
          사진을 올리면 AI가 일기를 써주고, 가족 모두가 함께
          <br className="hidden sm:block" />
          밥·간식·산책을 챙길 수 있어요.
        </p>

        <div className="flex flex-col sm:flex-row items-stretch justify-center gap-4 max-w-md sm:max-w-none mx-auto">
          <a
            href={STORE_LINKS.GOOGLE_PLAY}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-2xl text-base font-medium hover:bg-primary/90 transition-colors shadow-md cursor-pointer"
          >
            <GooglePlayIcon />
            Google Play에서 다운로드
          </a>
          <a
            href={STORE_LINKS.APP_STORE}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-ink text-white rounded-2xl text-base font-medium hover:bg-ink/90 transition-colors shadow-md cursor-pointer"
          >
            <AppleIcon />
            App Store에서 다운로드
          </a>
        </div>
      </div>
    </section>
  )
}

function GooglePlayIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 0 1 0 1.38l-2.302 2.302L15.396 13l2.302-2.492zM5.864 3.658L16.8 9.99l-2.302 2.302L5.864 3.658z" />
    </svg>
  )
}

function AppleIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  )
}