import type { Metadata } from "next"
import "./globals.css"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

export const metadata: Metadata = {
  title: "포포노트 — 가족이 함께 쓰는 반려동물 다이어리",
  description:
    "하루 한 장, 사진을 올리면 AI가 일기를 써주고 가족 모두가 함께 밥·간식·산책을 챙길 수 있는 반려동물 다이어리 앱",
  openGraph: {
    title: "포포노트 — 가족이 함께 쓰는 반려동물 다이어리",
    description:
      "하루 한 장, 사진을 올리면 AI가 일기를 써주고 가족 모두가 함께 밥·간식·산책을 챙길 수 있는 반려동물 다이어리 앱",
    images: ["/og-image.png"],
    type: "website",
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