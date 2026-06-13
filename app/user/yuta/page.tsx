"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabase";

type DbSpecimen = {
  id: string;
  collected_date: string;
  created_at: string | null;
};

export default function PublicUserPage() {
  const [dbCount, setDbCount] = useState(0);
  const [latestDate, setLatestDate] = useState("2026.06.13");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchPublicStats() {
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

    fetchPublicStats();
  }, []);

  const totalIwakanCount = dbCount + 3;

  const publicBooks = [
    {
      name: "違和感の図鑑",
      english: "The Book of Friction",
      count: totalIwakanCount,
      lastCollected: latestDate,
      description: "普通の中にある、小さなひっかかりを集める。",
      href: "/books/iwakan",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f7f4ee] text-[#1f1f1f]">
      <div className="mx-auto min-h-screen max-w-[430px] bg-[#f7f4ee] px-5 pb-28 pt-5">
        <header className="flex items-center justify-between">
          <div>
            <p className="text-xs tracking-[0.25em] text-black/40">
              USER PAGE
            </p>
            <h1 className="mt-1 text-xl font-semibold">公開プロフィール</h1>
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
                普通の中にある、少し変なものを標本にしています。
              </p>
            </div>
          </div>

          <div className="mt-7 grid grid-cols-3 gap-3">
            <div className="rounded-2xl bg-white/70 p-4">
              <p className="text-xs text-black/40">公開図鑑</p>
              <p className="mt-1 text-2xl font-semibold">1</p>
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

        <section className="mt-7 rounded-[2rem] bg-white p-5 shadow-sm">
          <p className="text-xs text-black/40">About</p>
          <h2 className="mt-2 text-xl font-semibold">この人の観察</h2>

          <p className="mt-4 text-sm leading-8 text-black/60">
            写真のきれいさよりも、何にひっかかったのかを言葉にすることを大事にしています。
            看板、道、建物、店の入口など、日常の中にある小さなズレを集めています。
          </p>
        </section>

        <section className="mt-8">
          <div className="mb-4">
            <p className="text-xs text-black/40">Public Books</p>
            <h2 className="mt-1 text-2xl font-semibold">公開中の図鑑</h2>
          </div>

          <div className="space-y-4">
            {publicBooks.map((book) => (
              <Link
                key={book.name}
                href={book.href}
                className="block rounded-[2rem] bg-white p-5 shadow-sm"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="inline-flex rounded-full bg-black px-3 py-1 text-xs text-white">
                      公開中
                    </p>

                    <h3 className="mt-4 text-2xl font-semibold">
                      {book.name}
                    </h3>

                    <p className="mt-1 text-xs italic text-black/35">
                      {book.english}
                    </p>
                  </div>

                  <div className="flex h-16 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#ebe4d8] text-xs text-black/35">
                    図鑑
                  </div>
                </div>

                <p className="mt-5 text-sm leading-7 text-black/60">
                  {book.description}
                </p>

                <div className="mt-5 grid grid-cols-3 gap-2">
                  <div className="h-16 rounded-2xl bg-[#ebe4d8]" />
                  <div className="h-16 rounded-2xl bg-[#ded6c8]" />
                  <div className="h-16 rounded-2xl bg-[#ebe4d8]" />
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-black/10 pt-4 text-xs text-black/45">
                  <p>採集数：{isLoading ? "..." : book.count}</p>
                  <p>最終採集：{isLoading ? "..." : book.lastCollected}</p>
                </div>

                <p className="mt-5 text-sm font-medium underline underline-offset-4">
                  図鑑を開く
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-[2rem] border border-black/10 p-5">
          <p className="text-xs text-black/40">Zukan Exchange</p>
          <h2 className="mt-2 text-xl font-semibold">図鑑交換</h2>

          <p className="mt-4 text-sm leading-7 text-black/60">
            図鑑交換をすると、お互いの図鑑を交換済みにできます。
            チャット機能は、交換が成立した後に開放される想定です。
          </p>

          <button className="mt-5 w-full rounded-full bg-black px-6 py-4 text-center text-sm font-medium text-white">
            図鑑交換を申請する
          </button>

          <p className="mt-3 text-center text-xs text-black/40">
            MVPではまだ申請機能は未実装です
          </p>
        </section>

        <section className="mt-8 rounded-[2rem] bg-white p-5 shadow-sm">
          <p className="text-xs text-black/40">Share</p>
          <h2 className="mt-2 text-xl font-semibold">共有URL</h2>

          <p className="mt-4 text-sm leading-7 text-black/60">
            このプロフィールは、URLを知っている人だけが見られるページとして使う想定です。
          </p>

          <div className="mt-5 rounded-2xl bg-[#f7f4ee] p-4 text-xs leading-6 text-black/50">
            /user/yuta
          </div>
        </section>
      </div>

      <nav className="fixed bottom-0 left-1/2 w-full max-w-[430px] -translate-x-1/2 border-t border-black/10 bg-white/90 px-5 py-3 backdrop-blur">
        <div className="grid grid-cols-4 text-center text-xs text-black/55">
          <Link href="/">ホーム</Link>
          <Link href="/bookshelf">本棚</Link>
          <Link href="/collect/iwakan">採集</Link>
          <Link href="/me">私</Link>
        </div>
      </nav>
    </main>
  );
}