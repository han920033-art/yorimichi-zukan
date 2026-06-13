"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "yorimichi-iwakan-specimens";

type StoredSpecimen = {
  id: string;
  date: string;
};

export default function BookshelfPage() {
  const [savedCount, setSavedCount] = useState(0);
  const [latestDate, setLatestDate] = useState("2026.06.13");

  useEffect(() => {
    const storedData = localStorage.getItem(STORAGE_KEY);

    if (!storedData) return;

    try {
      const parsedData = JSON.parse(storedData) as StoredSpecimen[];
      setSavedCount(parsedData.length);

      if (parsedData[0]?.date) {
        setLatestDate(parsedData[0].date);
      }
    } catch {
      setSavedCount(0);
    }
  }, []);

  const books = [
    {
      name: "違和感の図鑑",
      english: "The Book of Friction",
      status: "公開中",
      count: savedCount + 3,
      lastCollected: latestDate,
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

  return (
    <main className="min-h-screen bg-[#f7f4ee] text-[#1f1f1f]">
      <div className="mx-auto min-h-screen max-w-[430px] bg-[#f7f4ee] px-5 pb-28 pt-5">
        <header className="flex items-center justify-between">
          <div>
            <p className="text-xs tracking-[0.25em] text-black/40">
              BOOKSHELF
            </p>
            <h1 className="mt-1 text-xl font-semibold">本棚</h1>
          </div>

          <Link
            href="/"
            className="rounded-full bg-white px-4 py-2 text-sm shadow-sm"
          >
            ホーム
          </Link>
        </header>

        <section className="mt-8 rounded-[2rem] bg-[#ebe4d8] p-6">
          <p className="text-sm text-black/50">あなたの図鑑</p>

          <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight">
            見つけたものが、
            <br />
            少しずつ
            <br />
            本になる。
          </h2>

          <p className="mt-6 text-sm leading-7 text-black/60">
            ここには、日常で採集した標本が図鑑ごとに並びます。
            まずは「違和感の図鑑」から育てていきます。
          </p>
        </section>

        <Link
          href="/user/yuta"
          className="mt-4 block rounded-3xl bg-white p-5 shadow-sm"
        >
          <p className="text-xs text-black/40">Sample User</p>
          <h3 className="mt-2 text-lg font-semibold">公開プロフィールを見る</h3>
          <p className="mt-4 text-xs leading-6 text-black/50">
            図鑑が他人からどう見えるかを確認する
          </p>
        </Link>

        <section className="mt-7 space-y-4">
          {books.map((book) => {
            const isOpen = book.status === "公開中";

            return (
              <Link
                key={book.name}
                href={book.href}
                className={`block rounded-[2rem] bg-white p-5 shadow-sm ${
                  isOpen ? "" : "pointer-events-none opacity-65"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p
                      className={`inline-flex rounded-full px-3 py-1 text-xs ${
                        isOpen
                          ? "bg-black text-white"
                          : "bg-[#f7f4ee] text-black/45"
                      }`}
                    >
                      {book.status}
                    </p>

                    <h2 className="mt-4 text-2xl font-semibold">
                      {book.name}
                    </h2>

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
                  <p>採集数：{book.count}</p>
                  <p>最終採集：{book.lastCollected}</p>
                </div>

                {isOpen && (
                  <p className="mt-5 text-sm font-medium underline underline-offset-4">
                    図鑑を開く
                  </p>
                )}
              </Link>
            );
          })}
        </section>
      </div>

      <nav className="fixed bottom-0 left-1/2 w-full max-w-[430px] -translate-x-1/2 border-t border-black/10 bg-white/90 px-5 py-3 backdrop-blur">
        <div className="grid grid-cols-4 text-center text-xs text-black/55">
          <Link href="/">ホーム</Link>
          <Link href="/bookshelf" className="font-semibold text-black">
            本棚
          </Link>
          <Link href="/collect/iwakan">採集</Link>
          <Link href="/me">私</Link>
        </div>
      </nav>
    </main>
  );
}