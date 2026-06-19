"use client"

import { useState } from "react"
import Image from "next/image"
import { SCREENSHOTS } from "@/constants/links"

const VISIBLE_MOBILE = 1
const VISIBLE_DESKTOP = 3

function useVisible() {
  if (typeof window === "undefined") return VISIBLE_DESKTOP
  return window.innerWidth < 768 ? VISIBLE_MOBILE : VISIBLE_DESKTOP
}

export function ScreenshotCarousel() {
  const [current, setCurrent] = useState(0)
  const total = SCREENSHOTS.length

  const goTo = (index: number, visible: number) => {
    const max = total - visible
    setCurrent(Math.max(0, Math.min(index, max)))
  }

  return (
    <section className="py-20 px-4">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-jua text-3xl text-center text-ink mb-12">
          앱 미리보기
        </h2>

        {/* Mobile: 1 at a time */}
        <MobileCarousel current={current} goTo={(i) => goTo(i, VISIBLE_MOBILE)} />

        {/* Desktop: 3 at a time */}
        <DesktopCarousel current={current} goTo={(i) => goTo(i, VISIBLE_DESKTOP)} />
      </div>
    </section>
  )
}

function MobileCarousel({ current, goTo }: { current: number; goTo: (i: number) => void }) {
  const total = SCREENSHOTS.length
  const maxIndex = total - VISIBLE_MOBILE
  const clampedCurrent = Math.min(current, maxIndex)

  return (
    <div className="md:hidden">
      <div className="relative flex items-center gap-3">
        <NavButton direction="prev" onClick={() => goTo(clampedCurrent - 1)} disabled={clampedCurrent === 0} />

        <div className="flex-1 overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${clampedCurrent * 100}%)` }}
          >
            {SCREENSHOTS.map((screenshot) => (
              <div key={screenshot.src} className="flex-none w-full px-4">
                <div className="rounded-2xl overflow-hidden shadow-lg bg-white border border-cream-200 max-w-[240px] mx-auto">
                  <Image src={screenshot.src} alt={screenshot.alt} width={256} height={554} className="w-full h-auto" />
                </div>
                <p className="text-center text-sm text-ink-500 mt-3">{screenshot.alt}</p>
              </div>
            ))}
          </div>
        </div>

        <NavButton direction="next" onClick={() => goTo(clampedCurrent + 1)} disabled={clampedCurrent >= maxIndex} />
      </div>

      <Dots count={total} active={clampedCurrent} onDotClick={goTo} />
    </div>
  )
}

function DesktopCarousel({ current, goTo }: { current: number; goTo: (i: number) => void }) {
  const total = SCREENSHOTS.length
  const visible = VISIBLE_DESKTOP
  const maxIndex = total - visible
  const clampedCurrent = Math.min(current, maxIndex)
  const pageCount = maxIndex + 1

  return (
    <div className="hidden md:block">
      <div className="relative flex items-center gap-4">
        <NavButton direction="prev" onClick={() => goTo(clampedCurrent - 1)} disabled={clampedCurrent === 0} />

        <div className="flex-1 overflow-hidden">
          <div
            className="flex gap-4 transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(calc(-${clampedCurrent} * (100% / ${visible} + 1rem * ${visible - 1} / ${visible})))` }}
          >
            {SCREENSHOTS.map((screenshot) => (
              <div
                key={screenshot.src}
                className="flex-none"
                style={{ width: `calc((100% - ${visible - 1} * 1rem) / ${visible})` }}
              >
                <div className="rounded-2xl overflow-hidden shadow-lg bg-white border border-cream-200">
                  <Image src={screenshot.src} alt={screenshot.alt} width={256} height={554} className="w-full h-auto" />
                </div>
                <p className="text-center text-sm text-ink-500 mt-3">{screenshot.alt}</p>
              </div>
            ))}
          </div>
        </div>

        <NavButton direction="next" onClick={() => goTo(clampedCurrent + 1)} disabled={clampedCurrent >= maxIndex} />
      </div>

      <Dots count={pageCount} active={clampedCurrent} onDotClick={goTo} />
    </div>
  )
}

function NavButton({ direction, onClick, disabled }: { direction: "prev" | "next"; onClick: () => void; disabled: boolean }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="flex-none w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-ink-500 hover:text-ink transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-default"
      aria-label={direction === "prev" ? "이전" : "다음"}
    >
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d={direction === "prev" ? "M15.75 19.5L8.25 12l7.5-7.5" : "M8.25 4.5l7.5 7.5-7.5 7.5"}
        />
      </svg>
    </button>
  )
}

function Dots({ count, active, onDotClick }: { count: number; active: number; onDotClick: (i: number) => void }) {
  return (
    <div className="flex items-center justify-center gap-2 mt-6">
      {Array.from({ length: count }, (_, index) => (
        <button
          key={index}
          type="button"
          onClick={() => onDotClick(index)}
          className={`w-2.5 h-2.5 rounded-full transition-colors cursor-pointer ${
            index === active ? "bg-primary" : "bg-cream-200"
          }`}
          aria-label={`${index + 1}페이지`}
        />
      ))}
    </div>
  )
}