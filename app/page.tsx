import Link from "next/link";

const recentSpecimens = [
  {
    title: "入口だけ異様に低い店",
    place: "東京都",
    date: "2026.06.13",
    name: "背を低くする入口",
  },
  {
    title: "誰も座らないベンチ",
    place: "神奈川県",
    date: "2026.06.12",
    name: "使われないための休憩所",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f4ee] text-[#1f1f1f]">
      <div className="mx-auto min-h-screen max-w-[430px] bg-[#f7f4ee] px-5 pb-28 pt-5">
        <header className="flex items-center justify-between">
          <div>
            <p className="text-xs tracking-[0.25em] text-black/40">
              YORIMICHI ZUKAN
            </p>
            <h1 className="mt-1 text-xl font-semibold">ヨリミチ図鑑</h1>
          </div>

          <Link
            href="/me"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm shadow-sm"
          >
            私
          </Link>
        </header>

        <section className="mt-8 rounded-[2rem] bg-[#ebe4d8] p-6">
          <p className="text-sm text-black/50">今日の採集テーマ</p>

          <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight">
            日常の
            <br />
            違和感に
            <br />
            名前をつける。
          </h2>

          <p className="mt-6 text-sm leading-7 text-black/60">
            きれいな写真を残すのではなく、
            自分が何にひっかかったのかを採集します。
          </p>

          <Link
            href="/collect/iwakan"
            className="mt-7 block rounded-full bg-black px-6 py-4 text-center text-sm font-medium text-white"
          >
            違和感を採集する
          </Link>
        </section>

        <section className="mt-6 grid grid-cols-2 gap-3">
          <Link
            href="/bookshelf"
            className="rounded-3xl bg-white p-5 shadow-sm"
          >
            <p className="text-xs text-black/40">Bookshelf</p>
            <h3 className="mt-2 text-lg font-semibold">本棚</h3>
            <p className="mt-4 text-xs leading-6 text-black/50">
              育てている図鑑を見る
            </p>
          </Link>

          <Link
            href="/books/iwakan"
            className="rounded-3xl bg-white p-5 shadow-sm"
          >
            <p className="text-xs text-black/40">First Book</p>
            <h3 className="mt-2 text-lg font-semibold">違和感</h3>
            <p className="mt-4 text-xs leading-6 text-black/50">
              最初の一冊を開く
            </p>
          </Link>
        </section>

        <section className="mt-8">
          <div className="mb-4 flex items-end justify-between">
            <div>
              <p className="text-xs text-black/40">Recent Specimens</p>
              <h2 className="mt-1 text-2xl font-semibold">最近の標本</h2>
            </div>

            <Link href="/books/iwakan" className="text-xs underline">
              すべて
            </Link>
          </div>

          <div className="space-y-3">
            {recentSpecimens.map((specimen) => (
              <article
                key={specimen.title}
                className="rounded-3xl bg-white p-4 shadow-sm"
              >
                <div className="mb-4 h-36 rounded-2xl bg-[#ded6c8]" />

                <div className="flex items-center gap-2 text-xs text-black/40">
                  <p>{specimen.place}</p>
                  <span>・</span>
                  <p>{specimen.date}</p>
                </div>

                <h3 className="mt-2 text-lg font-semibold">
                  {specimen.title}
                </h3>

                <p className="mt-3 rounded-2xl bg-[#f7f4ee] px-4 py-3 text-sm text-black/65">
                  名前：{specimen.name}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-black/10 p-5">
          <p className="text-xs text-black/40">Concept</p>
          <h2 className="mt-2 text-xl font-semibold">
            日記ではなく、図鑑。
          </h2>
          <p className="mt-4 text-sm leading-7 text-black/60">
            ヨリミチ図鑑は、自分の日常で見つけた人間らしい反応を、
            写真と言葉で標本化していくアプリです。
          </p>
        </section>
      </div>

      <nav className="fixed bottom-0 left-1/2 w-full max-w-[430px] -translate-x-1/2 border-t border-black/10 bg-white/90 px-5 py-3 backdrop-blur">
        <div className="grid grid-cols-4 text-center text-xs text-black/55">
          <Link href="/" className="font-semibold text-black">
            ホーム
          </Link>
          <Link href="/bookshelf">本棚</Link>
          <Link href="/collect/iwakan">採集</Link>
          <Link href="/me">私</Link>
        </div>
      </nav>
    </main>
  );
}