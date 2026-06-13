import Link from "next/link";

const books = [
  {
    name: "違和感の図鑑",
    english: "The Book of Friction",
    status: "公開中",
    count: 12,
    lastCollected: "2026.06.13",
    description: "普通の中にある、小さなひっかかりを集める。",
    href: "/books/iwakan",
  },
  {
    name: "余白の図鑑",
    english: "The Book of Margin",
    status: "1カ月後に公開予定",
    count: 0,
    lastCollected: "-",
    description: "情報や予定を減らしたときに、自分の感覚が戻る瞬間を集める。",
    href: "#",
  },
  {
    name: "手触りの図鑑",
    english: "The Book of Texture",
    status: "Coming Soon",
    count: 0,
    lastCollected: "-",
    description: "身体で納得したもの、触れてわかったものを集める。",
    href: "#",
  },
  {
    name: "記憶の図鑑",
    english: "The Book of Memory",
    status: "Coming Soon",
    count: 0,
    lastCollected: "-",
    description: "消えていくもの、残したいもの、時間の積み重なりを集める。",
    href: "#",
  },
  {
    name: "熱量の図鑑",
    english: "The Book of Devotion",
    status: "Coming Soon",
    count: 0,
    lastCollected: "-",
    description: "誰かの本気、偏愛、こだわりに触れた記録を集める。",
    href: "#",
  },
];

export default function BookshelfPage() {
  return (
    <main className="min-h-screen bg-[#f7f4ee] text-[#1f1f1f]">
      <section className="mx-auto max-w-6xl px-6 py-8 md:px-10">
        <header className="flex items-center justify-between border-b border-black/10 pb-5">
          <Link href="/" className="text-lg font-semibold tracking-wide">
            ヨリミチ図鑑
          </Link>

          <nav className="flex items-center gap-5 text-sm text-black/60">
            <Link href="/bookshelf" className="text-black">
              本棚
            </Link>
            <Link href="/me" className="hover:text-black">
              マイページ
            </Link>
          </nav>
        </header>

        <section className="py-14">
          <p className="text-sm text-black/45">Bookshelf</p>
          <h1 className="mt-3 text-5xl font-semibold tracking-tight md:text-7xl">
            あなたの本棚
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-9 text-black/60">
            図鑑は、日常で見つけた人間らしい反応を集める場所です。
            まずは「違和感の図鑑」から採集を始めます。
          </p>
        </section>

        <section className="grid gap-5 pb-20 md:grid-cols-2">
          {books.map((book) => (
            <Link
              key={book.name}
              href={book.href}
              className="group rounded-[2rem] border border-black/10 bg-white/70 p-6 transition hover:bg-white"
            >
              <div className="mb-8 flex items-start justify-between gap-4">
                <div>
                  <p className="rounded-full bg-black px-3 py-1 text-xs text-white">
                    {book.status}
                  </p>
                </div>

                <p className="text-right text-xs italic text-black/35">
                  {book.english}
                </p>
              </div>

              <div className="mb-6 grid grid-cols-3 gap-3">
                <div className="h-24 rounded-2xl bg-[#ebe4d8]" />
                <div className="h-24 rounded-2xl bg-[#ded6c8]" />
                <div className="h-24 rounded-2xl bg-[#ebe4d8]" />
              </div>

              <h2 className="text-3xl font-semibold">{book.name}</h2>

              <p className="mt-3 min-h-14 text-sm leading-7 text-black/60">
                {book.description}
              </p>

              <div className="mt-8 flex items-center justify-between border-t border-black/10 pt-5 text-sm text-black/50">
                <p>採集数：{book.count}</p>
                <p>最終採集：{book.lastCollected}</p>
              </div>

              {book.status === "公開中" && (
                <p className="mt-5 text-sm font-medium underline underline-offset-4">
                  図鑑を開く
                </p>
              )}
            </Link>
          ))}
        </section>
      </section>
    </main>
  );
}