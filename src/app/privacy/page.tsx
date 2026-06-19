import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "개인정보처리방침",
}

export default function PrivacyPage() {
  return (
    <div className="py-16 px-4">
      <article className="mx-auto max-w-2xl prose-sm">
        <h1 className="font-jua text-3xl text-ink mb-2">개인정보처리방침</h1>
        <p className="text-ink-500 mb-8">시행일: 2026년 6월 18일</p>

        <Section title="1. 개인정보의 수집 및 이용 목적">
          <p>
            포포노트(이하 &quot;서비스&quot;)는 다음 목적을 위해 최소한의
            개인정보를 수집합니다.
          </p>
          <ol>
            <li>회원 가입 및 계정 관리</li>
            <li>반려동물 다이어리 서비스 제공</li>
            <li>가족 그룹 기능 제공</li>
            <li>AI 일기 작성 기능 제공</li>
            <li>고객 문의 대응</li>
          </ol>
        </Section>

        <Section title="2. 수집하는 개인정보 항목">
          <p>
            <strong>필수:</strong> 카카오 계정 식별자, 이메일 주소, 닉네임
          </p>
          <p>
            <strong>선택:</strong> 반려동물 정보(이름, 종류, 생년월일, 체중,
            성별, 사진), 일기 내용(텍스트, 사진), 케어 기록(밥, 간식, 산책),
            댓글
          </p>
        </Section>

        <Section title="3. 개인정보의 제3자 제공">
          <p>
            서비스는 AI 일기 작성 기능을 위해 이용자가 업로드한 사진을
            OpenAI(미국)에 전달합니다. 전달된 사진은 일기 텍스트 생성
            목적으로만 사용되며, OpenAI의 API 정책에 따라 처리됩니다. 그
            외에는 이용자의 동의 없이 개인정보를 제3자에게 제공하지 않습니다.
          </p>
        </Section>

        <Section title="4. 개인정보 처리 위탁">
          <p>
            서비스는 안정적인 운영을 위해 다음과 같이 개인정보 처리를 위탁하고
            있습니다.
          </p>
          <ol>
            <li>Supabase Inc. — 데이터베이스 및 파일 저장소 운영</li>
            <li>OpenAI — AI 일기 텍스트 생성</li>
          </ol>
        </Section>

        <Section title="5. 개인정보의 보유 및 이용 기간">
          <p>
            회원 탈퇴 시 즉시 삭제합니다. 단, 관계 법령에 따라 일정 기간
            보존이 필요한 경우 해당 기간 동안 보관합니다.
          </p>
          <ol>
            <li>전자상거래법에 따른 계약·거래 기록: 5년</li>
            <li>통신비밀보호법에 따른 로그인 기록: 3개월</li>
          </ol>
        </Section>

        <Section title="6. 개인정보의 파기">
          <p>
            보유 기간이 만료되거나 처리 목적이 달성된 경우 지체 없이
            파기합니다. 전자적 파일은 복구 불가능한 방법으로 삭제하며, 종이
            문서는 분쇄 또는 소각합니다.
          </p>
        </Section>

        <Section title="7. 이용자의 권리">
          <p>이용자는 언제든지 다음의 권리를 행사할 수 있습니다.</p>
          <ol>
            <li>개인정보 열람, 수정, 삭제 요청</li>
            <li>개인정보 처리 정지 요청</li>
            <li>회원 탈퇴 (설정 &gt; 내 계정 &gt; 회원 탈퇴)</li>
          </ol>
          <p>
            요청은 서비스 내 설정 또는 아래 연락처를 통해 가능합니다.
          </p>
        </Section>

        <Section title="8. 개인정보의 안전성 확보 조치">
          <p>
            서비스는 개인정보의 안전성 확보를 위해 다음 조치를 취하고
            있습니다.
          </p>
          <ol>
            <li>데이터 암호화 전송(SSL/TLS)</li>
            <li>접근 권한 관리(Row Level Security)</li>
            <li>비밀번호 및 API 키의 안전한 관리</li>
          </ol>
        </Section>

        <Section title="9. 개인정보보호 책임자">
          <p>성명: 유동우</p>
          <p>이메일: ehddl453@naver.com</p>
          <p>개인정보 관련 문의사항은 위 연락처로 문의해주세요.</p>
        </Section>
      </article>
    </div>
  )
}

function Section({
  title,
  children,
}: {
  readonly title: string
  readonly children: React.ReactNode
}) {
  return (
    <section className="mb-8">
      <h2 className="text-lg font-bold text-ink mb-3">{title}</h2>
      <div className="text-ink-500 leading-relaxed space-y-2 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-1">
        {children}
      </div>
    </section>
  )
}