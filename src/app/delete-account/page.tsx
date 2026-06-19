import type { Metadata } from "next"
import { CONTACT_EMAIL } from "@/constants/links"

export const metadata: Metadata = {
  title: "계정 삭제 안내 — 포포노트",
}

const STEPS = [
  "포포노트 앱을 실행합니다.",
  '하단 탭에서 "설정"을 선택합니다.',
  '"내 계정"을 탭합니다.',
  '"회원 탈퇴"를 탭하고 안내에 따라 진행합니다.',
  "탈퇴 즉시 모든 개인정보와 기록이 삭제됩니다.",
] as const

export default function DeleteAccountPage() {
  return (
    <div className="py-16 px-4">
      <div className="mx-auto max-w-lg">
        <h1 className="font-jua text-3xl text-ink mb-8 text-center">
          계정 삭제 안내
        </h1>

        <div className="bg-white rounded-2xl p-8 shadow-sm mb-6">
          <ol className="space-y-4">
            {STEPS.map((step, index) => (
              <li key={step} className="flex gap-3">
                <span className="flex-none w-7 h-7 rounded-full bg-primary-light text-primary text-sm font-bold flex items-center justify-center">
                  {index + 1}
                </span>
                <span className="text-ink-500 pt-0.5">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="bg-primary-light rounded-2xl p-6 mb-6">
          <p className="text-sm text-ink font-medium">
            주의: 그룹을 만든 보호자가 탈퇴하면 해당 가족 그룹과 모든 기록이
            함께 삭제됩니다.
          </p>
        </div>

        <p className="text-center text-ink-500 text-sm">
          도움이 필요하시면{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-primary hover:underline cursor-pointer"
          >
            {CONTACT_EMAIL}
          </a>
          으로 문의해주세요.
        </p>
      </div>
    </div>
  )
}