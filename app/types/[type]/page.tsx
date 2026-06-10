const typeData: Record<
  string,
  {
    name: string;
    label: string;
    intro: string;
    attracted: string[];
    direction: string;
  }
> = {
  dassen: {
    name: "ダッセン",
    label: "道を外して、自分で選び直す人",
    intro:
      "ダッセンは、決められたルートをそのまま進むだけでは少し物足りなくなるタイプです。目的地に着くこと以上に、途中で何を見つけるか、自分でどの道を選ぶかに意味を感じます。",
    attracted: ["路地", "商店街", "予定外の店", "一駅手前の街", "メイン通りから外れた場所"],
    direction:
      "最短ルートではなく、自分で選んだ遠回りを体験に変えるヨリミチが向いています。",
  },
  iwakan: {
    name: "イワカン",
    label: "普通の中に、引っかかりを見つける人",
    intro:
      "イワカンは、一見普通に見えるものの中に小さな違和感を見つけるタイプです。なぜここだけ空気が違うのか、なぜこの形で残っているのかを考えたくなります。",
    attracted: ["再開発地", "境界のある街", "変な看板", "古い建物", "不思議なルールの店"],
    direction:
      "違和感を無視せず、それを入口にして街や人の仕組みを観察するヨリミチが向いています。",
  },
  yohakubito: {
    name: "ヨハクビト",
    label: "余白の中で、自分を取り戻す人",
    intro:
      "ヨハクビトは、刺激を増やすよりも、情報を減らすことで自分の感覚を取り戻すタイプです。予定を詰め込みすぎると、楽しいことでも疲れやすくなります。",
    attracted: ["静かな喫茶店", "庭園", "湖畔", "図書館", "人の少ない美術館"],
    direction:
      "何かをするためではなく、何もしない時間を確保するヨリミチが向いています。",
  },
  monoguri: {
    name: "モノグリ",
    label: "物語の世界に深く潜る人",
    intro:
      "モノグリは、作品や歴史、誰かの記憶の中に入り込むように場所を味わうタイプです。現実の街を歩きながら、そこに物語を重ねて見ています。",
    attracted: ["古書店", "映画館", "文学館", "聖地巡礼", "歴史ある街並み"],
    direction:
      "作品や物語を起点にして、現実の場所を深く味わうヨリミチが向いています。",
  },
  zararist: {
    name: "ザラリスト",
    label: "手触りで納得する人",
    intro:
      "ザラリストは、情報や評価だけでは満足しにくく、実際に触れることで納得したいタイプです。素材、重さ、質感、匂いなど、身体で受け取る情報を大切にします。",
    attracted: ["器の店", "古道具店", "紙の店", "革製品", "民藝館"],
    direction:
      "レビューではなく、実物に触れながら選ぶヨリミチが向いています。",
  },
  temotori: {
    name: "テモトリ",
    label: "作られる過程に惹かれる人",
    intro:
      "テモトリは、完成したものだけでなく、それがどのように作られたのかに惹かれるタイプです。手順、段取り、職人の動き、道具の使われ方に目が向きます。",
    attracted: ["工房", "厨房が見える店", "制作体験", "朝市", "酒蔵"],
    direction:
      "完成品を見るだけでなく、作る人の手元や工程を追うヨリミチが向いています。",
  },
  kirokuru: {
    name: "キロクル",
    label: "流れる時間を残したい人",
    intro:
      "キロクルは、今あるものがいつか失われるかもしれないという感覚を持ちやすいタイプです。古い写真、老舗、町の記録、誰かの思い出に惹かれます。",
    attracted: ["老舗喫茶", "保存地区", "資料館", "古い商店街", "港町"],
    direction:
      "消えていく前に見て、写真やメモで残すヨリミチが向いています。",
  },
  netsubito: {
    name: "ネツビト",
    label: "人の熱量に動かされる人",
    intro:
      "ネツビトは、誰かが本気で好きなものや、長く続けてきた活動に触れることで動き出せるタイプです。店主、作家、演者、常連の熱量に反応します。",
    attracted: ["小劇場", "ライブハウス", "専門店", "個人ギャラリー", "偏愛の強い店"],
    direction:
      "誰かのこだわりや熱量を受け取るヨリミチが向いています。",
  },
  hyoryu: {
    name: "ヒョウリュウ",
    label: "軸を取り戻すために、漂流する人",
    intro:
      "ヒョウリュウは、自分の好みや判断基準がぼやけている状態です。おすすめを保存しても動けない、何がしたいのかわからない。だからこそ、少し厳しいヨリミチ修行が必要です。",
    attracted: ["知らない駅", "人の少ない海辺", "長い坂道", "不便な場所", "評価の少ない店"],
    direction:
      "便利さやおすすめから一度離れ、自分で選ぶ感覚を取り戻すためのヨリミチが向いています。",
  },
};

type PageProps = {
  params: Promise<{
    type: string;
  }>;
};

export default async function TypeDetailPage({ params }: PageProps) {
  const { type } = await params;
  const typeInfo = typeData[type] ?? typeData.dassen;

  return (
    <main className="min-h-screen bg-[#f4efe6] text-[#1f1f1c]">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <p className="mb-6 text-sm tracking-[0.35em] text-[#8a7d68]">
          YORIMICHI TYPE
        </p>

        <h1 className="mb-4 text-5xl font-semibold tracking-tight sm:text-7xl">
          {typeInfo.name}
        </h1>

        <p className="mb-10 text-xl leading-relaxed text-[#3f3a32]">
          {typeInfo.label}
        </p>

        <section className="mb-12 border-t border-[#c8bda9] pt-8">
          <h2 className="mb-4 text-2xl font-medium">どんなタイプか</h2>
          <p className="leading-8 text-[#3f3a32]">{typeInfo.intro}</p>
        </section>

        <section className="mb-12 border-t border-[#c8bda9] pt-8">
          <h2 className="mb-6 text-2xl font-medium">惹かれやすいもの</h2>

          <div className="grid gap-3 sm:grid-cols-2">
            {typeInfo.attracted.map((item) => (
              <div
                key={item}
                className="border border-[#1f1f1c] px-5 py-4 text-sm tracking-[0.08em]"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12 border-t border-[#c8bda9] pt-8">
          <h2 className="mb-4 text-2xl font-medium">ヨリミチの方向性</h2>
          <p className="leading-8 text-[#3f3a32]">{typeInfo.direction}</p>
        </section>

        <div className="mt-14 flex flex-col gap-4 sm:flex-row">
          <a
            href="/test"
            className="border border-[#1f1f1c] px-8 py-4 text-center text-sm tracking-[0.2em] transition hover:bg-[#1f1f1c] hover:text-[#f4efe6]"
          >
            診断をはじめる
          </a>

          <a
            href="/area"
            className="border border-[#1f1f1c] px-8 py-4 text-center text-sm tracking-[0.2em] transition hover:bg-[#1f1f1c] hover:text-[#f4efe6]"
          >
            地域を選ぶ
          </a>

          <a
            href="/types"
            className="px-8 py-4 text-center text-sm tracking-[0.2em] text-[#6d6252] underline underline-offset-8"
          >
            一覧に戻る
          </a>
        </div>
      </div>
    </main>
  );
}