"use client"

import { useState } from "react"
import Image from "next/image"
import { SCREENSHOTS } from "@/constants/links"

const VISIBLE = 3

export function ScreenshotCarousel() {
  const [current, setCurrent] = useState(0)
  const total = SCREENSHOTS.length
  const maxIndex = total - VISIBLE

  const goTo = (index: number) => {
    setCurrent(Math.max(0, Math.min(index, maxIndex)))
  }

  const pageCount = maxIndex + 1

  return (
    <section className="py-20 px-4">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-jua text-3xl text-center text-ink mb-12">
          앱 미리보기
        </h2>

        <div className="relative flex items-center gap-4">
          <button
            type="button"
            onClick={() => goTo(current - 1)}
            disabled={current === 0}
            className="flex-none w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-ink-500 hover:text-ink transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-default"
            aria-label="이전"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          <div className="flex-1 overflow-hidden">
            <div
              className="flex gap-4 transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(calc(-${current} * (100% / ${VISIBLE} + 1rem * ${VISIBLE - 1} / ${VISIBLE})))` }}
            >
              {SCREENSHOTS.map((screenshot) => (
                <div
                  key={screenshot.src}
                  className="flex-none"
                  style={{ width: `calc((100% - ${VISIBLE - 1} * 1rem) / ${VISIBLE})` }}
                >
                  <div className="rounded-2xl overflow-hidden shadow-lg bg-white border border-cream-200">
                    <Image
                      src={screenshot.src}
                      alt={screenshot.alt}
                      width={256}
                      height={554}
                      className="w-full h-auto"
                    />
                  </div>
                  <p className="text-center text-sm text-ink-500 mt-3">
                    {screenshot.alt}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => goTo(current + 1)}
            disabled={current >= maxIndex}
            className="flex-none w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-ink-500 hover:text-ink transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-default"
            aria-label="다음"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

        <div className="flex items-center justify-center gap-2 mt-6">
          {Array.from({ length: pageCount }, (_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => goTo(index)}
              className={`w-2.5 h-2.5 rounded-full transition-colors cursor-pointer ${
                index === current ? "bg-primary" : "bg-cream-200"
              }`}
              aria-label={`${index + 1}페이지`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}