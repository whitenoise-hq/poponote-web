import type { Metadata } from "next"
import "./globals.css"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

const SITE_NAME = "포포노트"
const TITLE = "포포노트 — 가족이 함께 쓰는 반려동물 다이어리"
const DESCRIPTION =
  "하루 한 장, 사진을 올리면 AI가 일기를 써주고 가족 모두가 함께 밥·간식·산책을 챙길 수 있는 반려동물 다이어리 앱"

export const metadata: Metadata = {
  title: {
    default: TITLE,
    template: `%s — ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  keywords: [
    "포포노트",
    "PopoNote",
    "반려동물 다이어리",
    "펫 다이어리",
    "반려동물 일기",
    "AI 일기",
    "가족 공유",
    "반려동물 케어",
    "반려동물 앱",
    "펫 케어 기록",
    "강아지 일기",
    "고양이 일기",
  ],
  applicationName: SITE_NAME,
  authors: [{ name: "포포노트" }],
  creator: "포포노트",
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    siteName: SITE_NAME,
    locale: "ko_KR",
    type: "website",
    images: ["/icon.png"],
  },
  twitter: {
    card: "summary",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/icon.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Jua&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}