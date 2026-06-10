export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#1f1f1c]">
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-20">
        <p className="mb-6 text-sm tracking-[0.35em] text-[#777777]">
          YORIMICHI ZUKAN
        </p>

        <h1 className="mb-8 text-5xl font-semibold tracking-tight sm:text-7xl">
          ヨリミチ図鑑
        </h1>

        <p className="mb-10 max-w-3xl text-xl leading-relaxed text-[#333333] sm:text-2xl">
          インターネットが広がり、
          <br />
          AIが当たり前になっていく時代。
          <br />
          それでも、誰の中にも少しだけ
          <br />
          人間らしいヨリミチが住んでいます。
        </p>

        <div className="mb-12 max-w-3xl border-l border-[#1f1f1c] pl-6 leading-8 text-[#444444]">
          <p>
            ヨリミチとは、人が一人一体宿している小さな妖精のようなもの。
            遠回りしたくなる気持ち、静かな場所に惹かれる感覚、
            誰かの熱量に心が動く瞬間。
          </p>
          <p className="mt-4">
            この診断では、90問の質問から、あなたの中にいるヨリミチを見つけます。
          </p>
        </div>

        <div className="mb-14 grid gap-4 sm:grid-cols-3">
          <div className="border border-[#1f1f1c] px-5 py-5">
            <p className="mb-3 text-sm tracking-[0.2em] text-[#777777]">
              DIGITAL
            </p>
            <p className="text-sm leading-7">
              情報を見すぎて、自分の感覚が少しわからなくなる日へ。
            </p>
          </div>

          <div className="border border-[#1f1f1c] px-5 py-5">
            <p className="mb-3 text-sm tracking-[0.2em] text-[#777777]">
              HUMAN
            </p>
            <p className="text-sm leading-7">
              効率や正解だけでは残らない、人間らしい反応を見つける。
            </p>
          </div>

          <div className="border border-[#1f1f1c] px-5 py-5">
            <p className="mb-3 text-sm tracking-[0.2em] text-[#777777]">
              FAIRY
            </p>
            <p className="text-sm leading-7">
              あなたの中にいるヨリミチを、ひとつのキャラクターとして知る。
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="/test"
            className="border border-[#1f1f1c] px-10 py-5 text-center text-sm tracking-[0.25em] transition hover:bg-[#1f1f1c] hover:text-white"
          >
            診断をはじめる
          </a>

          <a
            href="/types"
            className="px-10 py-5 text-center text-sm tracking-[0.25em] text-[#555555] underline underline-offset-8"
          >
            ヨリミチを見る
          </a>
        </div>
      </section>
    </main>
  );
}