export default function ResultPage() {
  return (
    <main className="min-h-screen bg-[#f4efe6] text-[#1f1f1c]">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <p className="mb-6 text-sm tracking-[0.35em] text-[#8a7d68]">
          YOUR YORIMICHI TYPE
        </p>

        <h1 className="mb-4 text-5xl font-semibold tracking-tight sm:text-7xl">
          ダッセン
        </h1>

        <p className="mb-10 text-xl leading-relaxed text-[#3f3a32]">
          目的地までの最短ルートより、
          <br />
          少し外れた道に惹かれる人。
        </p>

        <blockquote className="mb-12 border-l border-[#1f1f1c] pl-5 text-lg leading-relaxed text-[#3f3a32]">
          <p className="mb-3">
            僕は人のあまり通らない道を選んだ。
          </p>
          <footer className="text-sm tracking-[0.2em] text-[#8a7d68]">
            ROBERT FROST
          </footer>
        </blockquote>

        <section className="space-y-10 leading-8 text-[#3f3a32]">
          <div>
            <h2 className="mb-3 text-xl font-medium">予定通りだけでは物足りない</h2>
            <p>
              ダッセンは、決められたルートをそのまま進むだけでは
              少し物足りなくなる人です。目的地に着くこと自体よりも、
              そこへ向かう途中で何を見つけるか、どんな予定外が起きるかに
              関心が向きやすい傾向があります。
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-medium">自分で選んだ道に納得したい</h2>
            <p>
              人気の場所や正解とされているルートに従うだけでは、
              体験した感覚が薄くなることがあります。少し迷って、
              自分で選んだ場所の方が記憶に残りやすいタイプです。
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-medium">ダッセンのヨリミチ</h2>
            <p>
              ダッセンにとってヨリミチとは、無計画に動くことではありません。
              他人の正解だけで一日を終わらせず、自分で選ぶ感覚を
              取り戻すことです。
            </p>
          </div>
        </section>

        <div className="mt-14 flex flex-col gap-4 sm:flex-row">
          <a
            href="/area"
            className="border border-[#1f1f1c] px-8 py-4 text-center text-sm tracking-[0.2em] transition hover:bg-[#1f1f1c] hover:text-[#f4efe6]"
          >
            ヨリミチしたい地域を選ぶ
          </a>

          <a
            href="/"
            className="px-8 py-4 text-center text-sm tracking-[0.2em] text-[#6d6252] underline underline-offset-8"
          >
            最初に戻る
          </a>
        </div>
      </div>
    </main>
  );
}