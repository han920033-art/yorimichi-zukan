import Link from "next/link";

export default function CollectCompletePage() {
  return (
    <main className="min-h-screen bg-[#f7f4ee] text-[#1f1f1f]">
      <div className="mx-auto min-h-screen max-w-[430px] bg-[#f7f4ee] px-5 pb-28 pt-5">
        <header className="flex items-center justify-between">
          <div>
            <p className="text-xs tracking-[0.25em] text-black/40">SAVED</p>
            <h1 className="mt-1 text-xl font-semibold">採集完了</h1>
          </div>

          <Link
            href="/books/iwakan"
            className="rounded-full bg-white px-4 py-2 text-sm shadow-sm"
          >
            図鑑へ
          </Link>
        </header>

        <section className="mt-8 rounded-[2rem] bg-[#ebe4d8] p-6">
          <p className="text-sm text-black/50">新しい標本</p>

          <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight">
            違和感を
            <br />
            ひとつ
            <br />
            採集しました。
          </h2>

          <p className="mt-6 text-sm leading-7 text-black/60">
            MVPではまだ実際の保存機能は入っていません。
            まずは採集後の体験を確認するための仮ページです。
          </p>
        </section>

        <section className="mt-7 rounded-[2rem] bg-white p-5 shadow-sm">
          <div className="h-52 rounded-3xl bg-[#ded6c8]" />

          <div className="mt-5 flex items-center gap-2 text-xs text-black/40">
            <p>未設定</p>
            <span>・</span>
            <p>今日</p>
            <span>・</span>
            <p>違和感の図鑑</p>
          </div>

          <h2 className="mt-3 text-2xl font-semibold">仮の標本タイトル</h2>

          <div className="mt-5 rounded-2xl bg-[#f7f4ee] p-4">
            <p className="text-xs text-black/40">
              この違和感に名前をつけるなら？
            </p>
            <p className="mt-2 font-semibold">まだ名前のない違和感</p>
          </div>
        </section>

        <div className="mt-7 space-y-3">
          <Link
            href="/collect/iwakan"
            className="block rounded-full bg-black px-6 py-4 text-center text-sm font-medium text-white"
          >
            もうひとつ採集する
          </Link>

          <Link
            href="/books/iwakan"
            className="block rounded-full bg-white px-6 py-4 text-center text-sm font-medium shadow-sm"
          >
            違和感の図鑑を見る
          </Link>
        </div>
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