"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { supabase } from "../../../../../lib/supabase";

type Specimen = {
  id: string;
  title: string;
  place: string;
  date: string;
  category: string;
  collectedText?: string;
  frictionText?: string;
  normalText?: string;
  personalText?: string;
  name: string;
  strength: number;
  imageUrl: string | null;
  source: "db" | "sample";
};

type DbSpecimen = {
  id: string;
  title: string;
  place: string;
  collected_date: string;
  category: string;
  collected_text: string | null;
  friction_text: string | null;
  normal_text: string | null;
  personal_text: string | null;
  name: string;
  strength: number;
  image_url: string | null;
};

const sampleSpecimens: Specimen[] = [
  {
    id: "sample-1",
    title: "入口だけ異様に低い店",
    place: "東京都",
    date: "2026.06.13",
    category: "気になる建物",
    name: "背を低くする入口",
    strength: 4,
    imageUrl: null,
    source: "sample",
    collectedText:
      "普通の店に見えるのに、入口だけが妙に低い。入る前に少しだけ身体を小さくする必要がある。",
    frictionText:
      "店に入るだけなのに、少し身体を縮める必要があるところ。",
    normalText: "古い個人店の入口。",
    personalText: "人を少しだけ謙虚にさせる入口に見えた。",
  },
  {
    id: "sample-2",
    title: "誰も座らないベンチ",
    place: "神奈川県",
    date: "2026.06.12",
    category: "不自然な道",
    name: "使われないための休憩所",
    strength: 3,
    imageUrl: null,
    source: "sample",
    collectedText:
      "休むために置かれているはずなのに、人の流れから少し外れていて、誰も座っていなかった。",
    frictionText: "休むための場所なのに、休みにくい位置にあるところ。",
    normalText: "ただのベンチ。",
    personalText: "使われることを諦めている休憩所に見えた。",
  },
  {
    id: "sample-3",
    title: "やけに丁寧な注意書き",
    place: "埼玉県",
    date: "2026.06.10",
    category: "変なルール",
    name: "先回りしすぎる親切",
    strength: 5,
    imageUrl: null,
    source: "sample",
    collectedText:
      "禁止ではなくお願いの言葉なのに、文章が長すぎて逆に緊張感が出ていた。",
    frictionText: "丁寧すぎることで、かえって圧を感じるところ。",
    normalText: "利用者への注意書き。",
    personalText: "人間関係を壊さないために遠回りしている文章に見えた。",
  },
];

function convertDbSpecimen(item: DbSpecimen): Specimen {
  return {
    id: item.id,
    title: item.title,
    place: item.place,
    date: item.collected_date,
    category: item.category,
    collectedText: item.collected_text || "",
    frictionText: item.friction_text || "",
    normalText: item.normal_text || "",
    personalText: item.personal_text || "",
    name: item.name,
    strength: item.strength,
    imageUrl: item.image_url,
    source: "db",
  };
}

export default function SpecimenDetailPage() {
  const params = useParams<{ id: string }>();
  const [specimen, setSpecimen] = useState<Specimen | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    async function fetchSpecimen() {
      const id = params.id;

      const sample = sampleSpecimens.find((item) => item.id === id);

      if (sample) {
        setSpecimen(sample);
        setIsLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from("specimens")
        .select("*")
        .eq("id", id)
        .single();

      if (error || !data) {
        console.error(error);
        setErrorMessage(error?.message || "標本が見つかりませんでした");
        setSpecimen(null);
        setIsLoading(false);
        return;
      }

      setSpecimen(convertDbSpecimen(data as DbSpecimen));
      setIsLoading(false);
    }

    fetchSpecimen();
  }, [params.id]);

  if (isLoading) {
    return (
      <main className="min-h-screen bg-[#f7f4ee] text-[#1f1f1f]">
        <div className="mx-auto min-h-screen max-w-[430px] bg-[#f7f4ee] px-5 pb-28 pt-5">
          <p className="pt-10 text-sm text-black/50">読み込み中...</p>
        </div>
      </main>
    );
  }

  if (!specimen) {
    return (
      <main className="min-h-screen bg-[#f7f4ee] text-[#1f1f1f]">
        <div className="mx-auto min-h-screen max-w-[430px] bg-[#f7f4ee] px-5 pb-28 pt-5">
          <header className="flex items-center justify-between">
            <div>
              <p className="text-xs tracking-[0.25em] text-black/40">
                SPECIMEN
              </p>
              <h1 className="mt-1 text-xl font-semibold">標本詳細</h1>
            </div>

            <Link
              href="/books/iwakan"
              className="rounded-full bg-white px-4 py-2 text-sm shadow-sm"
            >
              図鑑へ
            </Link>
          </header>

          <section className="mt-8 rounded-[2rem] bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold">標本が見つかりません</h2>
            <p className="mt-4 text-sm leading-7 text-black/60">
              保存データが消えたか、URLが違う可能性があります。
            </p>

            {errorMessage && (
              <p className="mt-4 rounded-2xl bg-[#f7f4ee] p-4 text-xs leading-6 text-red-500">
                {errorMessage}
              </p>
            )}
          </section>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7f4ee] text-[#1f1f1f]">
      <div className="mx-auto min-h-screen max-w-[430px] bg-[#f7f4ee] px-5 pb-28 pt-5">
        <header className="flex items-center justify-between">
          <div>
            <p className="text-xs tracking-[0.25em] text-black/40">
              SPECIMEN
            </p>
            <h1 className="mt-1 text-xl font-semibold">標本詳細</h1>
          </div>

          <Link
            href="/books/iwakan"
            className="rounded-full bg-white px-4 py-2 text-sm shadow-sm"
          >
            図鑑へ
          </Link>
        </header>

        <section className="mt-8 overflow-hidden rounded-[2rem] bg-white shadow-sm">
          <div className="flex h-72 items-center justify-center overflow-hidden bg-[#ded6c8]">
            {specimen.imageUrl ? (
              <img
                src={specimen.imageUrl}
                alt={specimen.title}
                className="h-full w-full object-cover"
              />
            ) : (
              <p className="text-sm text-black/35">写真なし</p>
            )}
          </div>

          <div className="p-5">
            <div className="flex flex-wrap items-center gap-2 text-xs text-black/40">
              <p>{specimen.place}</p>
              <span>・</span>
              <p>{specimen.date}</p>
              <span>・</span>
              <p>{specimen.category}</p>
              {specimen.source === "db" && (
                <>
                  <span>・</span>
                  <p className="font-semibold text-black">DB保存</p>
                </>
              )}
            </div>

            <h2 className="mt-3 text-3xl font-semibold leading-tight">
              {specimen.title}
            </h2>

            <div className="mt-5 rounded-2xl bg-[#f7f4ee] p-4">
              <p className="text-xs text-black/40">
                この違和感に名前をつけるなら？
              </p>
              <p className="mt-2 text-xl font-semibold">{specimen.name}</p>
            </div>
          </div>
        </section>

        <section className="mt-5 space-y-4">
          <div className="rounded-[2rem] bg-white p-5 shadow-sm">
            <p className="text-xs text-black/40">何を採集した？</p>
            <p className="mt-3 text-sm leading-8 text-black/65">
              {specimen.collectedText || "まだ記録されていません。"}
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-5 shadow-sm">
            <p className="text-xs text-black/40">どこに違和感を覚えた？</p>
            <p className="mt-3 text-sm leading-8 text-black/65">
              {specimen.frictionText || "まだ記録されていません。"}
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-5 shadow-sm">
            <p className="text-xs text-black/40">普通ならどう見える？</p>
            <p className="mt-3 text-sm leading-8 text-black/65">
              {specimen.normalText || "まだ記録されていません。"}
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-5 shadow-sm">
            <p className="text-xs text-black/40">自分にはどう見えた？</p>
            <p className="mt-3 text-sm leading-8 text-black/65">
              {specimen.personalText || "まだ記録されていません。"}
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-xs text-black/40">違和感の強さ</p>
              <p className="text-sm text-black/60">
                {"●".repeat(specimen.strength)}
                {"○".repeat(5 - specimen.strength)}
              </p>
            </div>
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