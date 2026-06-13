"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

type DbSpecimen = {
  id: string;
  collected_date: string;
  created_at: string | null;
};

export default function MyPage() {
  const [dbCount, setDbCount] = useState(0);
  const [latestDate, setLatestDate] = useState("2026.06.13");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchMyStats() {
      const { data, error } = await supabase
        .from("specimens")
        .select("id, collected_date, created_at")
        .eq("owner_slug", "yuta")
        .eq("book_key", "iwakan")
        .order("created_at", { ascending: false });

      if (error) {
        console.error(error);
        setIsLoading(false);
        return;
      }

      const specimens = data as DbSpecimen[];

      setDbCount(specimens.length);

      if (specimens[0]?.collected_date) {
        setLatestDate(specimens[0].collected_date);
      }

      setIsLoading(false);
    }

    fetchMyStats();
  }, []);

  const totalIwakanCount = dbCount + 3;

  const books = [
    {
      name: "違和感の図鑑",
      english: "The Book of Friction",
      count: totalIwakanCount,
      lastCollected: latestDate,
      href: "/books/iwakan",
    },
    {
      name: "余白の図鑑",
      english: "The Book of Margin",
      count: 0,
      lastCollected: "-",
      href: "#",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f7f4ee] text-[#1f1f1f]">
      <div className="mx-auto min-h-screen max-w-[430px] bg-[#f7f4ee] px-5 pb-28 pt-5">
        <header className="flex items-center justify-between">
          <div>
            <p className="text-xs tracking-[0.25em] text-black/40">
              MY PAGE
            </p>
            <h1 className="mt-1 text-xl font-semibold">マイページ</h1>
          </div>

          <Link
            href="/"
            className="rounded-full bg-white px-4 py-2 text-sm shadow-sm"
          >
            ホーム
          </Link>
        </header>

        <section className="mt-8 rounded-[2rem] bg-[#ebe4d8] p-6">
          <div className="flex items-start gap-5">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-white text-2xl font-semibold shadow-sm">
              藤
            </div>

            <div>
              <h2 className="text-2xl font-semibold">藤本悠汰</h2>
              <p className="mt-2 text-sm leading-7 text-black/60">
                街の違和感を集めています。
                普通の中にある、少し変なものを標本にします。
              </p>
            </div>
          </div>

          <div className="mt-7 grid grid-cols-3 gap-3">
            <div className="rounded-2xl bg-white/70 p-4">
              <p className="text-xs text-black/40">図鑑</p>
              <p className="mt-1 text-2xl font-semibold">2</p>
            </div>

            <div className="rounded-2xl bg-white/70 p-4">
              <p className="text-xs text-black/40">採集</p>
              <p className="mt-1 text-2xl font-semibold">
                {isLoading ? "..." : totalIwakanCount}
              </p>
            </div>

            <div className="rounded-2xl bg-white/70 p-4">
              <p className="text-xs text-black/40">交換</p>
              <p className="mt-1 text-2xl font-semibold">0</p>
            </div>
          </div>

          <p className="mt-5 rounded-2xl bg-white/60 p-4 text-xs text-black/45">
            DB保存分：{isLoading ? "読込中" : `${dbCount}件`}
          </p>
        </section>

        <section className="mt-7">
          <p className="text-xs text-black/40">Profile</p>
          <h2 className="mt-1 text-2xl font-semibold">自己紹介</h2>

          <div className="mt-4 rounded-[2rem] bg-white p-5 text-sm leading-8 text-black/60 shadow-sm">
            <p>
              何気ない道や店、看板、建物の中にある小さな違和感を採集しています。
              写真のきれいさよりも、「なぜ気になったのか」を言葉にすることを大事にしています。
            </p>
          </div>
        </section>

        <section className="mt-8">
          <div className="mb-4 flex items-end justify-between">
            <div>
              <p className="text-xs text-black/40">Public Books</p>
              <h2 className="mt-1 text-2xl font-semibold">公開中の図鑑</h2>
            </div>

            <Link href="/bookshelf" className="text-xs underline">
              本棚へ
            </Link>
          </div>

          <div className="space-y-4">
            {books.map((book) => {
              const isOpen = book.href !== "#";

              return (
                <Link
                  key={book.name}
                  href={book.href}
                  className={`block rounded-[2rem] bg-white p-5 shadow-sm ${
                    isOpen ? "" : "pointer-events-none opacity-60"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-semibold">{book.name}</h3>
                      <p className="mt-1 text-xs italic text-black/35">
                        {book.english}
                      </p>
                    </div>

                    <div className="flex h-16 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#ebe4d8] text-xs text-black/35">
                      図鑑
                    </div>
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-black/10 pt-4 text-xs text-black/45">
                    <p>
                      採集数：
                      {isLoading && isOpen ? "..." : book.count}
                    </p>
                    <p>
                      最終採集：
                      {isLoading && isOpen ? "..." : book.lastCollected}
                    </p>
                  </div>

                  {isOpen && (
                    <p className="mt-5 text-sm font-medium underline underline-offset-4">
                      図鑑を開く
                    </p>
                  )}
                </Link>
              );
            })}
          </div>
        </section>

        <section className="mt-8 rounded-[2rem] bg-white p-5 shadow-sm">
          <p className="text-xs text-black/40">Public View</p>
          <h2 className="mt-2 text-xl font-semibold">他人から見えるページ</h2>

          <p className="mt-4 text-sm leading-7 text-black/60">
            自分のプロフィールと図鑑が、他人からどのように見えるかを確認できます。
          </p>

          <Link
            href="/user/yuta"
            className="mt-5 block rounded-full bg-black px-6 py-4 text-center text-sm font-medium text-white"
          >
            公開プロフィールを見る
          </Link>
        </section>

        <section className="mt-8 rounded-[2rem] border border-black/10 p-5">
          <p className="text-xs text-black/40">Zukan Exchange</p>
          <h2 className="mt-2 text-xl font-semibold">図鑑交換</h2>
          <p className="mt-4 text-sm leading-7 text-black/60">
            図鑑交換は、相手の観察に興味を持ったときに申請する機能です。
            MVPではまだ申請・チャット機能は未実装です。
          </p>

          <button className="mt-5 w-full rounded-full bg-black px-6 py-4 text-center text-sm font-medium text-white opacity-50">
            図鑑交換を申請する
          </button>
        </section>
      </div>

      <nav className="fixed bottom-0 left-1/2 w-full max-w-[430px] -translate-x-1/2 border-t border-black/10 bg-white/90 px-5 py-3 backdrop-blur">
        <div className="grid grid-cols-4 text-center text-xs text-black/55">
          <Link href="/">ホーム</Link>
          <Link href="/bookshelf">本棚</Link>
          <Link href="/collect/iwakan">採集</Link>
          <Link href="/me" className="font-semibold text-black">
            私
          </Link>
        </div>
      </nav>
    </main>
  );
}