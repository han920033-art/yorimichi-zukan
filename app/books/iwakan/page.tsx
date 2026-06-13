import Link from "next/link";

const categories = [
  "変な看板",
  "不自然な道",
  "気になる建物",
  "変なルール",
  "妙な空気",
  "説明できないひっかかり",
];

const specimens = [
  {
    title: "入口だけ異様に低い店",
    place: "東京都",
    date: "2026.06.13",
    category: "気になる建物",
    name: "背を低くする入口",
    strength: 4,
    description:
      "普通の店に見えるのに、入口だけが妙に低い。入る前に少しだけ身体を小さくする必要がある。",
  },
  {
    title: "誰も座らないベンチ",
    place: "神奈川県",
    date: "2026.06.12",
    category: "不自然な道",
    name: "使われないための休憩所",
    strength: 3,
    description:
      "休むために置かれているはずなのに、人の流れから少し外れていて、誰も座っていなかった。",
  },
  {
    title: "やけに丁寧な注意書き",
    place: "埼玉県",
    date: "2026.06.10",
    category: "変なルール",
    name: "先回りしすぎる親切",
    strength: 5,
    description:
      "禁止ではなくお願いの言葉なのに、文章が長すぎて逆に緊張感が出ていた。",
  },
];

export default function IwakanBookPage() {
  return (
    <main className="min-h-screen bg-[#f7f4ee] text-[#1f1f1f]">
      <div className="mx-auto min-h-screen max-w-[430px] bg-[#f7f4ee] px-5 pb-28 pt-5">
        <header className="flex items-center justify-between">
          <div>
            <p className="text-xs tracking-[0.25em] text-black/40">
              THE BOOK OF FRICTION
            </p>
            <h1 className="mt-1 text-xl font-semibold">違和感の図鑑</h1>
          </div>

          <Link
            href="/bookshelf"
            className="rounded-full bg-white px-4 py-2 text-sm shadow-sm"
          >
            本棚
          </Link>
        </header>

        <section className="mt-8 rounded-[2rem] bg-[#ebe4d8] p-6">
          <p className="text-sm text-black/50">最初の一冊</p>

          <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight">
            普通の中にある、
            <br />
            小さな
            <br />
            ひっかかり。
          </h2>

          <p className="mt-6 text-sm leading-7 text-black/60">
            違和感の図鑑は、日常の中で少しだけ気になったものを採集する場所です。
            変だと思った理由を言葉にし、その違和感に名前をつけます。
          </p>

          <div className="mt-7 grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-2xl bg-white/70 p-4">
              <p className="text-xs text-black/40">採集数</p>
              <p className="mt-1 text-2xl font-semibold">12</p>
            </div>

            <div className="rounded-2xl bg-white/70 p-4">
              <p className="text-xs text-black/40">最終採集</p>
              <p className="mt-2 font-semibold">2026.06.13</p>
            </div>
          </div>

          <Link
            href="/collect/iwakan"
            className="mt-6 block rounded-full bg-black px-6 py-4 text-center text-sm font-medium text-white"
          >
            違和感を採集する
          </Link>
        </section>

        <section className="mt-7">
          <p className="text-xs text-black/40">Index</p>
          <h2 className="mt-1 text-2xl font-semibold">目次</h2>

          <div className="mt-4 grid grid-cols-2 gap-3">
            {categories.map((category) => (
              <div
                key={category}
                className="rounded-2xl bg-white px-4 py-3 text-sm shadow-sm"
              >
                {category}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <div className="mb-4 flex items-end justify-between">
            <div>
              <p className="text-xs text-black/40">Specimens</p>
              <h2 className="mt-1 text-2xl font-semibold">標本一覧</h2>
            </div>

            <p className="text-xs text-black/40">{specimens.length}件</p>
          </div>

          <div className="space-y-4">
            {specimens.map((specimen) => (
              <article
                key={specimen.title}
                className="rounded-[2rem] bg-white p-4 shadow-sm"
              >
                <div className="h-40 rounded-3xl bg-[#ded6c8]" />

                <div className="mt-4 flex items-center gap-2 text-xs text-black/40">
                  <p>{specimen.place}</p>
                  <span>・</span>
                  <p>{specimen.date}</p>
                  <span>・</span>
                  <p>{specimen.category}</p>
                </div>

                <h3 className="mt-2 text-xl font-semibold">
                  {specimen.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-black/60">
                  {specimen.description}
                </p>

                <div className="mt-4 rounded-2xl bg-[#f7f4ee] p-4">
                  <p className="text-xs text-black/40">
                    この違和感に名前をつけるなら？
                  </p>
                  <p className="mt-2 font-semibold">{specimen.name}</p>
                </div>

                <div className="mt-4 flex items-center justify-between text-xs text-black/45">
                  <p>違和感の強さ</p>
                  <p>{"●".repeat(specimen.strength)}{"○".repeat(5 - specimen.strength)}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>

      <nav className="fixed bottom-0 left-1/2 w-full max-w-[430px] -translate-x-1/2 border-t border-black/10 bg-white/90 px-5 py-3 backdrop-blur">
        <div className="grid grid-cols-4 text-center text-xs text-black/55">
          <Link href="/">ホーム</Link>
          <Link href="/bookshelf">本棚</Link>
          <Link href="/collect/iwakan" className="font-semibold text-black">
            採集
          </Link>
          <Link href="/me">私</Link>
        </div>
      </nav>
    </main>
  );
}