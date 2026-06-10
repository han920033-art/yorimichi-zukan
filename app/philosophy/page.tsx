export default function PhilosophyPage() {
  return (
    <main className="min-h-screen bg-[#f4efe6] text-[#1f1f1c]">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <p className="mb-6 text-sm tracking-[0.35em] text-[#8a7d68]">
          ABOUT THIS DIAGNOSIS
        </p>

        <h1 className="mb-8 text-4xl font-semibold tracking-tight sm:text-6xl">
          診断について
        </h1>

        <section className="mb-12 border-t border-[#c8bda9] pt-8">
          <h2 className="mb-4 text-2xl font-medium">性格を決めつけるものではありません</h2>
          <p className="leading-8 text-[#3f3a32]">
            ヨリミチ図鑑は、性格や能力を断定するためのものではありません。
            日常の中で何に注意を向けやすいか、どんな方法で納得しやすいか、
            どのような時間で回復しやすいかを整理するための診断です。
          </p>
        </section>

        <section className="mb-12 border-t border-[#c8bda9] pt-8">
          <h2 className="mb-4 text-2xl font-medium">4つの観点</h2>
          <p className="mb-5 leading-8 text-[#3f3a32]">
            この診断では、主に以下の観点をもとにヨリミチタイプを分類しています。
          </p>

          <div className="grid gap-3">
            {[
              "注意：何に目が向きやすいか",
              "判断：どうすれば納得しやすいか",
              "回復：どんな時間で自分を取り戻しやすいか",
              "行動：何がきっかけで動き出しやすいか",
            ].map((item) => (
              <div
                key={item}
                className="border border-[#1f1f1c] px-5 py-4 text-sm tracking-[0.08em]"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12 border-t border-[#c8bda9] pt-8">
          <h2 className="mb-4 text-2xl font-medium">医学的な診断ではありません</h2>
          <p className="leading-8 text-[#3f3a32]">
            この診断は、医学的・臨床的な診断ではありません。
            心理検査や専門的な診断の代わりになるものではなく、
            あくまで自分の傾向を考えるための読み物として設計しています。
          </p>
        </section>

        <section className="mb-12 border-t border-[#c8bda9] pt-8">
          <h2 className="mb-4 text-2xl font-medium">出典と引用について</h2>
          <p className="leading-8 text-[#3f3a32]">
            タイプごとの名言や参考情報については、今後、出典を確認したうえで整理します。
            確認できない言葉や、出典が曖昧な言葉は使用しません。
          </p>
        </section>

        <section className="mb-12 border-t border-[#c8bda9] pt-8">
          <h2 className="mb-4 text-2xl font-medium">個人情報について</h2>
          <p className="leading-8 text-[#3f3a32]">
            現時点では、ログイン機能や個人情報の収集は想定していません。
            今後、回答データの保存や分析を行う場合は、プライバシーポリシーを用意し、
            何を収集するのかを明示します。
          </p>
        </section>

        <div className="mt-14 flex flex-col gap-4 sm:flex-row">
          <a
            href="/test"
            className="border border-[#1f1f1c] px-8 py-4 text-center text-sm tracking-[0.2em] transition hover:bg-[#1f1f1c] hover:text-[#f4efe6]"
          >
            診断をはじめる
          </a>

          <a
            href="/"
            className="px-8 py-4 text-center text-sm tracking-[0.2em] text-[#6d6252] underline underline-offset-8"
          >
            トップに戻る
          </a>
        </div>
      </div>
    </main>
  );
}