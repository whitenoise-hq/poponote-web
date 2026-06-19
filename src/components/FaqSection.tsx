import { FaqItem } from "./FaqItem"

const FAQ_ITEMS = [
  {
    question: "가족을 초대하려면 어떻게 하나요?",
    answer:
      "설정 탭에서 초대 코드를 복사해 가족에게 공유하세요. 가족이 앱을 설치하고 코드를 입력하면 같은 그룹에 참여할 수 있습니다.",
  },
  {
    question: "AI 일기 작성은 어떻게 되나요?",
    answer:
      "사진을 올리면 AI가 사진을 분석해서 일기 제목과 내용을 자동으로 작성해줍니다. 작성된 내용은 자유롭게 수정한 뒤 저장할 수 있습니다.",
  },
  {
    question: "하루에 일기를 여러 개 쓸 수 있나요?",
    answer:
      "메인 기록은 하루에 1개만 작성할 수 있습니다. 추가로 남기고 싶은 이야기는 댓글로 남겨보세요.",
  },
  {
    question: "일기를 수정하거나 삭제하려면 어떻게 하나요?",
    answer:
      "다이어리 상세 화면에서 본인이 작성한 일기의 수정 또는 삭제 아이콘을 탭하세요. 삭제 시 댓글과 좋아요도 함께 삭제됩니다.",
  },
  {
    question: "케어 기록은 어떻게 삭제하나요?",
    answer:
      "홈 화면에서 본인이 등록한 케어 기록을 길게 누르면 삭제할 수 있습니다.",
  },
  {
    question: "반려동물 프로필은 어떻게 수정하나요?",
    answer:
      '설정 탭 > 반려동물 프로필 카드의 "수정" 버튼을 탭하면 이름, 종류, 생일, 체중, 성별 등을 변경할 수 있습니다.',
  },
  {
    question: "보호자가 탈퇴하면 어떻게 되나요?",
    answer:
      "그룹을 만든 보호자가 탈퇴하면 해당 가족 그룹과 모든 기록이 함께 삭제됩니다. 다른 가족 멤버가 탈퇴하면 본인만 그룹에서 나가게 됩니다.",
  },
  {
    question: "앨범의 사진을 저장하거나 공유할 수 있나요?",
    answer:
      '앨범에서 사진을 탭해 상세 화면으로 이동한 뒤 "저장하기" 또는 "공유하기" 버튼을 이용하세요.',
  },
] as const

export function FaqSection() {
  return (
    <section className="py-20 bg-cream-100 px-4">
      <div className="mx-auto max-w-2xl">
        <h2 className="font-jua text-3xl text-center text-ink mb-12">
          자주 묻는 질문
        </h2>
        <div className="space-y-3">
          {FAQ_ITEMS.map((item) => (
            <FaqItem
              key={item.question}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  )
}