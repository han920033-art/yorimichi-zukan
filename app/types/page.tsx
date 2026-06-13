"use client";

import { useState } from "react";

const types = [
  {
    id: "dassen",
    name: "ダッセン",
    group: "ズラス系・動",
    color: "#00a86b",
    catch: "目的地までの最短ルートより、少し外れた道に惹かれる。",
    description:
      "予定通りに進むだけでは少し物足りない。そんなとき、一本違う道や予定外の店に入ることで、自分の感覚を取り戻していくヨリミチです。",
  },
  {
    id: "iwakan",
    name: "イワカン",
    group: "ズラス系・静",
    color: "#00a86b",
    catch: "普通の中にある、小さな引っかかりを見逃せない。",
    description:
      "みんなが自然に受け入れているものにも、どこか違和感を覚える。静かに観察し、なぜそうなっているのかを考え続けるヨリミチです。",
  },
  {
    id: "yohakubito",
    name: "ヨハクビト",
    group: "シズム系・静",
    color: "#2f80ed",
    catch: "余白の中で、自分の感覚を取り戻す。",
    description:
      "刺激や情報を増やすより、少し減らすことで整っていく。静かな時間や何もしない余白を大切にするヨリミチです。",
  },
  {
    id: "monoguri",
    name: "モノグリ",
    group: "シズム系・動",
    color: "#2f80ed",
    catch: "物語の世界に深く入り込み、現実の見え方まで変わる。",
    description:
      "作品や歴史、街の記憶に入り込むように体験する。現実の風景に物語を重ねて歩くヨリミチです。",
  },
  {
    id: "zararist",
    name: "ザラリスト",
    group: "サワル系・静",
    color: "#f2994a",
    catch: "情報より、手触りや質感で納得する。",
    description:
      "写真やレビューだけでは決めきれない。素材、重さ、匂い、手触りなど、身体で受け取る感覚を信じるヨリミチです。",
  },
  {
    id: "temotori",
    name: "テモトリ",
    group: "サワル系・動",
    color: "#f2994a",
    catch: "完成品より、作られていく過程に惹かれる。",
    description:
      "結果だけでなく、手順や道具、人の手元の動きに反応する。作られていく過程に近づいていくヨリミチです。",
  },
  {
    id: "kirokuru",
    name: "キロクル",
    group: "ノコス系・静",
    color: "#9b51e0",
    catch: "流れていく時間を、記憶として残したい。",
    description:
      "古い写真、老舗、街の記録、誰かの思い出に惹かれる。消えてしまう前に、今あるものを受け取り残そうとするヨリミチです。",
  },
  {
    id: "netsubito",
    name: "ネツビト",
    group: "ノコス系・動",
    color: "#9b51e0",
    catch: "人の熱量に触れることで、自分の中にも火がつく。",
    description:
      "誰かの偏愛やこだわり、本気に心が動く。対象そのものだけでなく、それを好きでいる人の熱まで受け取るヨリミチです。",
  },
  {
    id: "hyoryu",
    name: "ヒョウリュウ",
    group: "幻のヨリミチ",
    color: "#111111",
    catch: "自分の軸を取り戻すために、あえて漂流する。",
    description:
      "おすすめや評価を見ても動けない。そんなとき、便利さから少し離れ、自分の足で選ぶ感覚を取り戻すために現れるヨリミチです。",
  },
];

export default function TypesPage() {
  const [selectedId, setSelectedId] = useState(types[0].id);

  const selectedType = types.find((type) => type.id === selectedId) ?? types[0];

  return (
    <main className="min-h-screen bg-white text-[#1f1f1c]">
      <section
        className="border-b px-6 py-14 transition-colors duration-300"
        style={{ borderColor: selectedType.color }}
      >
        <div className="mx-auto max-w-6xl">
          <a
            href="/"
            className="mb-10 inline-block text-sm tracking-[0.2em] text-[#555555] underline underline-offset-8"
          >
            トップに戻る
          </a>

          <p className="mb-6 text-sm tracking-[0.35em] text-[#777777]">
            YORIMICHI TYPES
          </p>

          <h1 className="mb-6 text-4xl font-semibold tracking-tight sm:text-6xl">
            ヨリミチたち
          </h1>

          <p className="max-w-3xl text-lg leading-8 text-[#333333]">
            ヨリミチとは、人の中に宿る小さな妖精のような存在です。
            ここでは、9体のヨリミチの特徴を見ることができます。
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-14 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="mb-5 text-sm tracking-[0.25em] text-[#777777]">
            SELECT
          </p>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {types.map((type) => {
              const isSelected = type.id === selectedId;

              return (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => setSelectedId(type.id)}
                  className="border px-5 py-5 text-left transition hover:translate-x-1"
                  style={{
                    borderColor: isSelected ? type.color : "#1f1f1c",
                    backgroundColor: isSelected ? type.color : "white",
                    color: isSelected ? "white" : "#1f1f1c",
                  }}
                >
                  <p
                    className="mb-2 text-xs tracking-[0.25em]"
                    style={{
                      color: isSelected ? "rgba(255,255,255,0.75)" : "#777777",
                    }}
                  >
                    {type.group}
                  </p>
                  <p className="text-2xl font-semibold">{type.name}</p>
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <p className="mb-5 text-sm tracking-[0.25em] text-[#777777]">
            PREVIEW
          </p>

          <div
            className="mb-8 px-6 py-10 text-white transition-colors duration-300"
            style={{ backgroundColor: selectedType.color }}
          >
            <p className="mb-4 text-sm tracking-[0.35em] text-white/75">
              あなたの中に宿るヨリミチ
            </p>

            <h2 className="mb-5 text-5xl font-semibold tracking-tight sm:text-7xl">
              {selectedType.name}
            </h2>

            <p className="max-w-2xl text-lg leading-8 text-white/90">
              {selectedType.catch}
            </p>
          </div>

          <section className="border border-[#1f1f1c] px-6 py-8">
            <p className="mb-4 text-sm tracking-[0.25em] text-[#777777]">
              ABOUT
            </p>

            <p className="mb-8 leading-8 text-[#333333]">
              {selectedType.description}
            </p>

            <div className="mb-8 h-48 border border-dashed border-[#999999] px-5 py-5">
              <p className="text-sm leading-7 text-[#777777]">
                ここに今後、{selectedType.name}
                の丸アイコン画像とキャラクターイラストを配置します。
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="/test"
                className="border border-[#1f1f1c] px-8 py-4 text-center text-sm tracking-[0.2em] transition hover:bg-[#1f1f1c] hover:text-white"
              >
                診断をはじめる
              </a>

              <a
                href="/"
                className="px-8 py-4 text-center text-sm tracking-[0.2em] text-[#555555] underline underline-offset-8"
              >
                トップに戻る
              </a>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
