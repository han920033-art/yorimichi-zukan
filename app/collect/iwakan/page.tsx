"use client";

import Link from "next/link";
import { useState } from "react";

const categories = [
  "変な看板",
  "不自然な道",
  "気になる建物",
  "変なルール",
  "妙な空気",
  "説明できないひっかかり",
];

const prefectures = [
  "未設定",
  "北海道",
  "青森県",
  "岩手県",
  "宮城県",
  "秋田県",
  "山形県",
  "福島県",
  "茨城県",
  "栃木県",
  "群馬県",
  "埼玉県",
  "千葉県",
  "東京都",
  "神奈川県",
  "新潟県",
  "富山県",
  "石川県",
  "福井県",
  "山梨県",
  "長野県",
  "岐阜県",
  "静岡県",
  "愛知県",
  "三重県",
  "滋賀県",
  "京都府",
  "大阪府",
  "兵庫県",
  "奈良県",
  "和歌山県",
  "鳥取県",
  "島根県",
  "岡山県",
  "広島県",
  "山口県",
  "徳島県",
  "香川県",
  "愛媛県",
  "高知県",
  "福岡県",
  "佐賀県",
  "長崎県",
  "熊本県",
  "大分県",
  "宮崎県",
  "鹿児島県",
  "沖縄県",
];

export default function CollectIwakanPage() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [strength, setStrength] = useState(3);

  function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) return;

    const url = URL.createObjectURL(file);
    setImageUrl(url);
  }

  function handleTemporarySave() {
    alert("MVPではまだ保存機能は未実装です。次の手順で、仮の保存完了画面を作ります。");
  }

  return (
    <main className="min-h-screen bg-[#f7f4ee] text-[#1f1f1f]">
      <div className="mx-auto min-h-screen max-w-[430px] bg-[#f7f4ee] px-5 pb-28 pt-5">
        <header className="flex items-center justify-between">
          <div>
            <p className="text-xs tracking-[0.25em] text-black/40">
              COLLECT
            </p>
            <h1 className="mt-1 text-xl font-semibold">違和感を採集する</h1>
          </div>

          <Link
            href="/books/iwakan"
            className="rounded-full bg-white px-4 py-2 text-sm shadow-sm"
          >
            図鑑へ
          </Link>
        </header>

        <section className="mt-8 rounded-[2rem] bg-[#ebe4d8] p-6">
          <p className="text-sm text-black/50">今日の問い</p>

          <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight">
            この違和感に、
            <br />
            名前を
            <br />
            つけるなら？
          </h2>

          <p className="mt-6 text-sm leading-7 text-black/60">
            写真のきれいさよりも、何にひっかかったのかを残します。
            その場で見つけた違和感を、ひとつの標本にします。
          </p>
        </section>

        <form className="mt-7 space-y-5">
          <section className="rounded-[2rem] bg-white p-5 shadow-sm">
            <label className="block">
              <p className="text-sm font-medium">写真</p>
              <p className="mt-2 text-xs leading-6 text-black/45">
                できれば、その場で撮った写真を使ってください。
              </p>

              <div className="mt-4 flex h-56 items-center justify-center overflow-hidden rounded-3xl bg-[#ded6c8]">
                {imageUrl ? (
                  <img
                    src={imageUrl}
                    alt="採集写真のプレビュー"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <p className="text-sm text-black/40">写真を撮る</p>
                )}
              </div>

              <input
                type="file"
                accept="image/*"
                capture="environment"
                onChange={handleImageChange}
                className="mt-4 block w-full text-sm text-black/60 file:mr-4 file:rounded-full file:border-0 file:bg-black file:px-5 file:py-3 file:text-sm file:text-white"
              />
            </label>
          </section>

          <section className="rounded-[2rem] bg-white p-5 shadow-sm">
            <label className="block">
              <p className="text-sm font-medium">タイトル</p>
              <input
                type="text"
                placeholder="例：入口だけ異様に低い店"
                className="mt-3 w-full rounded-2xl bg-[#f7f4ee] px-4 py-4 text-base outline-none"
              />
            </label>
          </section>

          <section className="rounded-[2rem] bg-white p-5 shadow-sm">
            <label className="block">
              <p className="text-sm font-medium">撮影県</p>
              <p className="mt-2 text-xs leading-6 text-black/45">
                MVPでは手入力です。GPSで県だけ自動取得する機能は後で入れます。
              </p>

              <select className="mt-3 w-full rounded-2xl bg-[#f7f4ee] px-4 py-4 text-base outline-none">
                {prefectures.map((prefecture) => (
                  <option key={prefecture}>{prefecture}</option>
                ))}
              </select>
            </label>
          </section>

          <section className="rounded-[2rem] bg-white p-5 shadow-sm">
            <label className="block">
              <p className="text-sm font-medium">分類</p>
              <select className="mt-3 w-full rounded-2xl bg-[#f7f4ee] px-4 py-4 text-base outline-none">
                {categories.map((category) => (
                  <option key={category}>{category}</option>
                ))}
              </select>
            </label>
          </section>

          <section className="rounded-[2rem] bg-white p-5 shadow-sm">
            <label className="block">
              <p className="text-sm font-medium">何を採集した？</p>
              <textarea
                placeholder="例：普通の店に見えるのに、入口だけが妙に低かった。"
                className="mt-3 min-h-28 w-full rounded-2xl bg-[#f7f4ee] px-4 py-4 text-base leading-7 outline-none"
              />
            </label>
          </section>

          <section className="rounded-[2rem] bg-white p-5 shadow-sm">
            <label className="block">
              <p className="text-sm font-medium">どこに違和感を覚えた？</p>
              <textarea
                placeholder="例：入る前に、自然と身体を小さくしないといけない感じ。"
                className="mt-3 min-h-28 w-full rounded-2xl bg-[#f7f4ee] px-4 py-4 text-base leading-7 outline-none"
              />
            </label>
          </section>

          <section className="rounded-[2rem] bg-white p-5 shadow-sm">
            <label className="block">
              <p className="text-sm font-medium">普通ならどう見える？</p>
              <textarea
                placeholder="例：ただの古い個人店。"
                className="mt-3 min-h-24 w-full rounded-2xl bg-[#f7f4ee] px-4 py-4 text-base leading-7 outline-none"
              />
            </label>
          </section>

          <section className="rounded-[2rem] bg-white p-5 shadow-sm">
            <label className="block">
              <p className="text-sm font-medium">自分にはどう見えた？</p>
              <textarea
                placeholder="例：人を少しだけ謙虚にさせる入口に見えた。"
                className="mt-3 min-h-24 w-full rounded-2xl bg-[#f7f4ee] px-4 py-4 text-base leading-7 outline-none"
              />
            </label>
          </section>

          <section className="rounded-[2rem] bg-white p-5 shadow-sm">
            <label className="block">
              <p className="text-sm font-medium">
                この違和感に名前をつけるなら？
              </p>
              <input
                type="text"
                placeholder="例：背を低くする入口"
                className="mt-3 w-full rounded-2xl bg-[#f7f4ee] px-4 py-4 text-base outline-none"
              />
            </label>
          </section>

          <section className="rounded-[2rem] bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">違和感の強さ</p>
              <p className="text-sm text-black/50">{strength} / 5</p>
            </div>

            <input
              type="range"
              min="1"
              max="5"
              value={strength}
              onChange={(event) => setStrength(Number(event.target.value))}
              className="mt-5 w-full"
            />

            <div className="mt-3 flex justify-between text-xs text-black/40">
              <span>少し</span>
              <span>かなり</span>
            </div>
          </section>

          <button
            type="button"
            onClick={handleTemporarySave}
            className="w-full rounded-full bg-black px-6 py-4 text-center text-sm font-medium text-white"
          >
            標本として保存する
          </button>
        </form>
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