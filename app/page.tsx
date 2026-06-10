export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4efe6] text-[#1f1f1c]">
      <div className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-6 py-16">
        <p className="mb-6 text-sm tracking-[0.35em] text-[#8a7d68]">
          YORIMICHI ZUKAN
        </p>

        <h1 className="mb-6 text-5xl font-semibold tracking-tight sm:text-7xl">
          ヨリミチ図鑑
        </h1>

        <p className="mb-10 text-xl leading-relaxed text-[#3f3a32]">
          あなたが何に惹かれ、
          <br />
          どこで自分を取り戻すのかを見つける。
        </p>

        <div className="mb-10 border-l border-[#1f1f1c] pl-5 text-sm leading-7 text-[#5f5749]">
          <p>90問 / 約8〜10分</p>
          <p>注意・判断・回復・行動の傾向から、あなたのヨリミチタイプを判定します。</p>
          <p>この診断は、性格や能力を決めつけるものではありません。</p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="/test"
            className="border border-[#1f1f1c] px-8 py-4 text-center text-sm tracking-[0.2em] transition hover:bg-[#1f1f1c] hover:text-[#f4efe6]"
          >
            ヨリミチをはじめる
          </a>

          <a
            href="/philosophy"
            className="px-8 py-4 text-center text-sm tracking-[0.2em] text-[#6d6252] underline underline-offset-8"
          >
            診断について
          </a>
        </div>
      </div>
    </main>
  );
}