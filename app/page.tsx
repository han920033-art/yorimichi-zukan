import Link from "next/link";

const features = [
  {
    title: "日記ではなく、図鑑。",
    text: "その日の気持ちを書くのではなく、日常で見つけた小さな反応を標本として残します。",
  },
  {
    title: "投稿ではなく、採集。",
    text: "見せるためではなく、自分が何に気づいたのかを集めていきます。",
  },
  {
    title: "写真ではなく、観察。",
    text: "大事なのは写真の美しさではなく、何を見つけ、どう名前をつけるかです。",
  },
];

const books = [
  {
    name: "違和感の図鑑",
    english: "The Book of Friction",
    status: "公開中",
    description: "普通の中にある、小さなひっかかりを集める。",
  },
  {
    name: "余白の図鑑",
    english: "The Book of Margin",
    status: "1カ月後に公開予定",
    description: "情報や予定を減らしたときに戻ってくる感覚を集める。",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f4ee] text-[#1f1f1f]">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-8 md:px-10">
        <header className="flex items-center justify-between border-b border-black/10 pb-5">
          <Link href="/" className="text-lg font-semibold tracking-wide">
            ヨリミチ図鑑
          </Link>

          <nav className="flex items-center gap-5 text-sm text-black/60">
            <Link href="/bookshelf" className="hover:text-black">
              本棚
            </Link>
            <Link href="/me" className="hover:text-black">
              マイページ
            </Link>
          </nav>
        </header>

        <div className="grid flex-1 items-center gap-12 py-16 md:grid-cols-[1.1fr_0.9fr]">
          <section>
            <p className="mb-5 inline-flex rounded-full border border-black/10 bg-white/60 px-4 py-2 text-sm text-black/60">
              人間らしい観察力を、写真と言葉で採集する。
            </p>

            <h1 className="max-w-3xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
              日常の違和感に
              <br />
              名前をつける。
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-black/65">
              ヨリミチ図鑑は、自分の日常で見つけた人間らしい反応を、
              写真と言葉で標本化していく図鑑アプリです。
              映える写真を投稿するのではなく、何に気づいたのかを残します。
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/bookshelf"
                className="rounded-full bg-black px-7 py-4 text-center text-sm font-medium text-white transition hover:bg-black/80"
              >
                本棚を見る
              </Link>

              <Link
                href="/collect/iwakan"
                className="rounded-full border border-black/15 bg-white/70 px-7 py-4 text-center text-sm font-medium transition hover:bg-white"
              >
                違和感を採集する
              </Link>
            </div>
          </section>

          <section className="rounded-[2rem] border border-black/10 bg-white/70 p-5 shadow-sm">
            <div className="rounded-[1.5rem] bg-[#ebe4d8] p-6">
              <p className="text-sm text-black/50">最初の一冊</p>
              <h2 className="mt-3 text-3xl font-semibold">違和感の図鑑</h2>
              <p className="mt-1 text-sm italic text-black/45">
                The Book of Friction
              </p>

              <div className="mt-8 grid grid-cols-3 gap-3">
                <div className="h-28 rounded-2xl bg-white/70" />
                <div className="h-28 rounded-2xl bg-white/50" />
                <div className="h-28 rounded-2xl bg-white/70" />
              </div>

              <div className="mt-8 space-y-4">
                <div>
                  <p className="text-xs text-black/45">採集項目</p>
                  <p className="mt-1 text-lg font-medium">
                    この違和感に名前をつけるなら？
                  </p>
                </div>

                <div className="rounded-2xl bg-white/70 p-4">
                  <p className="text-sm text-black/50">標本例</p>
                  <p className="mt-2 font-medium">入口だけ異様に低い店</p>
                  <p className="mt-2 text-sm leading-7 text-black/60">
                    普通の建物に見えるのに、入口だけが妙に低い。
                    入る前に少しだけ身体を小さくする必要がある。
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section className="grid gap-4 border-t border-black/10 py-10 md:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-3xl bg-white/60 p-6">
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="mt-3 text-sm leading-7 text-black/60">
                {feature.text}
              </p>
            </div>
          ))}
        </section>

        <section className="pb-16">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <p className="text-sm text-black/45">Bookshelf</p>
              <h2 className="text-3xl font-semibold">本棚</h2>
            </div>

            <Link href="/bookshelf" className="text-sm text-black/55 underline">
              すべて見る
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {books.map((book) => (
              <div
                key={book.name}
                className="rounded-3xl border border-black/10 bg-white/70 p-6"
              >
                <div className="mb-8 flex items-center justify-between">
                  <p className="rounded-full bg-black px-3 py-1 text-xs text-white">
                    {book.status}
                  </p>
                  <p className="text-xs italic text-black/40">{book.english}</p>
                </div>

                <h3 className="text-2xl font-semibold">{book.name}</h3>
                <p className="mt-3 text-sm leading-7 text-black/60">
                  {book.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}