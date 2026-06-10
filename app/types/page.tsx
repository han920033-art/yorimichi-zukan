const types = [
  {
    id: "dassen",
    name: "ダッセン",
    label: "道を外して、自分で選び直す人",
    description:
      "予定通りに進むだけでは物足りず、少し外れた道や予定外の発見に惹かれるタイプ。",
  },
  {
    id: "iwakan",
    name: "イワカン",
    label: "普通の中に、引っかかりを見つける人",
    description:
      "みんなが自然に受け入れているものにも、どこか違和感を覚え、その理由を考えたくなるタイプ。",
  },
  {
    id: "yohakubito",
    name: "ヨハクビト",
    label: "余白の中で、自分を取り戻す人",
    description:
      "刺激を増やすより、静かな時間や空白のある場所で感覚を整えやすいタイプ。",
  },
  {
    id: "monoguri",
    name: "モノグリ",
    label: "物語の世界に深く潜る人",
    description:
      "作品、街、歴史、記憶の中に入り込み、現実と物語を重ねて味わうタイプ。",
  },
  {
    id: "zararist",
    name: "ザラリスト",
    label: "手触りで納得する人",
    description:
      "情報や評判だけではなく、素材、重さ、質感、空気感を自分で確かめたいタイプ。",
  },
  {
    id: "temotori",
    name: "テモトリ",
    label: "作られる過程に惹かれる人",
    description:
      "完成品よりも、手順、工程、職人の動き、ものが生まれる現場に興味を持つタイプ。",
  },
  {
    id: "kirokuru",
    name: "キロクル",
    label: "流れる時間を残したい人",
    description:
      "古い街並み、記録、写真、誰かの記憶に惹かれ、消えていくものを残したくなるタイプ。",
  },
  {
    id: "netsubito",
    name: "ネツビト",
    label: "人の熱量に動かされる人",
    description:
      "誰かの偏愛、こだわり、本気の活動に触れることで、自分の中にも火がつくタイプ。",
  },
  {
    id: "hyoryu",
    name: "ヒョウリュウ",
    label: "軸を取り戻すために、漂流する人",
    description:
      "自分の好みや判断基準がぼやけている状態。あえて不便で厳しいヨリミチ修行が必要な幻タイプ。",
    special: true,
  },
];

export default function TypesPage() {
  return (
    <main className="min-h-screen bg-[#f4efe6] text-[#1f1f1c]">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <p className="mb-6 text-sm tracking-[0.35em] text-[#8a7d68]">
          YORIMICHI TYPES
        </p>

        <h1 className="mb-6 text-4xl font-semibold tracking-tight sm:text-6xl">
          ヨリミチタイプ一覧
        </h1>

        <p className="mb-12 max-w-2xl text-lg leading-relaxed text-[#3f3a32]">
          ヨリミチ図鑑では、注意の向き方、判断の仕方、回復の仕方、行動の起点から、
          9つのヨリミチタイプを設定しています。
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          {types.map((type) => (
            <a
              key={type.id}
              href={`/types/${type.id}`}
              className={
                type.special
                  ? "border border-[#1f1f1c] bg-[#1f1f1c] px-6 py-6 text-[#f4efe6] transition hover:opacity-90"
                  : "border border-[#1f1f1c] px-6 py-6 transition hover:bg-[#1f1f1c] hover:text-[#f4efe6]"
              }
            >
              <p className="mb-3 text-sm tracking-[0.25em] opacity-70">
                {type.special ? "SECRET TYPE" : "TYPE"}
              </p>

              <h2 className="mb-3 text-3xl font-semibold">{type.name}</h2>

              <p className="mb-4 text-base font-medium">{type.label}</p>

              <p className="text-sm leading-7 opacity-80">{type.description}</p>
            </a>
          ))}
        </div>

        <div className="mt-12">
          <a
            href="/"
            className="text-sm tracking-[0.2em] text-[#6d6252] underline underline-offset-8"
          >
            トップに戻る
          </a>
        </div>
      </div>
    </main>
  );
}