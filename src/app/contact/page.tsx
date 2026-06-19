import type { Metadata } from "next"
import { CONTACT_EMAIL } from "@/constants/links"

export const metadata: Metadata = {
  title: "문의하기",
}

const QUICK_FAQ = [
  {
    question: "가족을 초대하려면 어떻게 하나요?",
    answer:
      "설정 탭에서 초대 코드를 복사해 가족에게 공유하세요.",
  },
  {
    question: "AI 일기 작성은 어떻게 되나요?",
    answer:
      "사진을 올리면 AI가 일기 제목과 내용을 자동으로 작성해줍니다.",
  },
  {
    question: "하루에 일기를 여러 개 쓸 수 있나요?",
    answer:
      "메인 기록은 하루에 1개만 작성할 수 있습니다. 추가 이야기는 댓글로 남겨보세요.",
  },
] as const

export default function ContactPage() {
  return (
    <div className="py-16 px-4">
      <div className="mx-auto max-w-lg">
        <h1 className="font-jua text-3xl text-ink mb-2 text-center">
          문의하기
        </h1>
        <p className="text-ink-500 text-center mb-10">
          궁금한 점이 있으시면 아래 이메일로 문의해주세요.
        </p>

        <div className="bg-white rounded-2xl p-8 shadow-sm mb-10">
          <p className="text-center text-ink-500 mb-4">
            문의사항은 아래 이메일로 보내주세요.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="block text-center text-primary font-medium text-lg hover:underline cursor-pointer"
          >
            {CONTACT_EMAIL}
          </a>
        </div>

        <h2 className="font-jua text-xl text-ink mb-4">자주 묻는 질문</h2>
        <div className="space-y-3">
          {QUICK_FAQ.map((item) => (
            <div
              key={item.question}
              className="bg-white rounded-2xl p-5 shadow-sm"
            >
              <h3 className="font-medium text-ink mb-1">{item.question}</h3>
              <p className="text-sm text-ink-500">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}