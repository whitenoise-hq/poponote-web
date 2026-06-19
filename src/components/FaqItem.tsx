"use client"

import { useState } from "react"

interface FaqItemProps {
  readonly question: string
  readonly answer: string
}

export function FaqItem({ question, answer }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-white rounded-2xl shadow-sm">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center justify-between w-full px-6 py-5 text-ink font-medium cursor-pointer text-left"
      >
        <span>{question}</span>
        <svg
          className={`w-5 h-5 text-ink-500 transition-transform duration-300 flex-none ml-4 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
      <div
        className="grid transition-[grid-template-rows] duration-300 ease-in-out"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-5 text-sm text-ink-500 leading-relaxed">
            {answer}
          </div>
        </div>
      </div>
    </div>
  )
}