const typeData: Record<
  string,
  {
    name: string;
    lead: string;
    shop: string;
    spot: string;
    action: string;
    planTitle: string;
    plan: string;
  }
> = {
  dassen: {
    name: "ダッセン",
    lead: "予定通りでは終わらせたくないあなたへ。",
    shop: "駅前の有名店より、少し奥にある個人店や路地裏の喫茶店。",
    spot: "メイン通りから一本外れた商店街、坂道、川沿い、古い住宅地。",
    action: "目的地を一つだけ決めて、そこまでの道をあえて少し外す。",
    planTitle: "半日ヨリミチプラン",
    plan: "有名スポットを一つだけ決める。到着後は最短ルートを使わず、気になった道を一本選んで歩く。最後に、予定になかった店に一つだけ入る。",
  },
  iwakan: {
    name: "イワカン",
    lead: "普通に見えるものの中に、違和感を見つけるあなたへ。",
    shop: "少し変わった店名、独自のルール、昔から残る雰囲気のある店。",
    spot: "再開発地、古い建物と新しい建物が混ざる場所、境界線のある街。",
    action: "なぜここだけ雰囲気が違うのかを考えながら歩く。",
    planTitle: "観察ヨリミチプラン",
    plan: "駅から街を歩き、気になった看板・建物・人の流れを3つメモする。最後に、自分が一番引っかかった場所の理由を書く。",
  },
  yohakubito: {
    name: "ヨハクビト",
    lead: "刺激を減らすことで、自分の感覚を取り戻すあなたへ。",
    shop: "静かな喫茶店、席間の広いカフェ、長居できる本屋併設カフェ。",
    spot: "庭園、湖畔、公園、美術館の休憩スペース、静かな図書館。",
    action: "予定を詰めず、何もしない時間を予定として入れる。",
    planTitle: "余白回復プラン",
    plan: "午前中に静かな場所へ行く。スマホを見る時間を減らし、30分だけ何も決めずに座る。帰りに小さな店で温かい飲み物を飲む。",
  },
  monoguri: {
    name: "モノグリ",
    lead: "物語の中に深く入り込みたいあなたへ。",
    shop: "映画館の近くの喫茶店、古書店、作品の世界観に合う内装の店。",
    spot: "文学館、映画館、聖地巡礼できる場所、歴史ある街並み。",
    action: "作品や物語と現実の場所を重ねながら歩く。",
    planTitle: "物語没入プラン",
    plan: "一つ作品を決めてから出かける。関連する場所、似た空気の街、作品に出てきそうな店をめぐり、最後に感想を短く残す。",
  },
  zararist: {
    name: "ザラリスト",
    lead: "情報より、手触りや質感で納得したいあなたへ。",
    shop: "器、紙、布、木、革など、素材を実際に触れる店。",
    spot: "民藝館、クラフト市、陶器市、古道具店、工房のある街。",
    action: "レビューではなく、実物に触れて選ぶ。",
    planTitle: "質感確認プラン",
    plan: "素材を見られる店や場所を一つ選ぶ。買うことを目的にせず、手触り・重さ・匂い・使い心地を比べる。最後に一つだけ気になったものを記録する。",
  },
  temotori: {
    name: "テモトリ",
    lead: "完成品より、作られていく過程に惹かれるあなたへ。",
    shop: "職人の手元が見える店、厨房が見える飲食店、工房併設ショップ。",
    spot: "工房見学、制作体験、朝市、酒蔵、伝統産業の残る街。",
    action: "完成品ではなく、工程・手順・人の動きを見る。",
    planTitle: "工程観察プラン",
    plan: "作っている様子が見える場所に行く。何を、どの順番で、どんな手つきで作っているかを見る。可能なら制作体験を一つ入れる。",
  },
  kirokuru: {
    name: "キロクル",
    lead: "流れていく時間を、記憶として残したいあなたへ。",
    shop: "昔から続く喫茶店、老舗、古い写真が飾られている店。",
    spot: "資料館、古い商店街、保存地区、港町、温泉街、廃線跡。",
    action: "消えてしまいそうな風景を、写真やメモで残す。",
    planTitle: "記録ヨリミチプラン",
    plan: "古くから残る街を歩く。店の看板、建物、道の形、地元の人の話を記録する。最後に、その場所がなくなったら何が失われるかを考える。",
  },
  netsubito: {
    name: "ネツビト",
    lead: "人の熱量に触れることで、動き出せるあなたへ。",
    shop: "店主のこだわりが強い店、偏愛が見える専門店、常連がいる個人店。",
    spot: "小劇場、ライブハウス、個人ギャラリー、ミニシアター、専門店街。",
    action: "誰かが本気で好きなものに触れる。",
    planTitle: "熱量補給プラン",
    plan: "個人のこだわりが強い場所に行く。店主、作家、出演者、案内人など、その場を作っている人の熱量を受け取る。気になったら一言だけ質問する。",
  },
  hyoryu: {
    name: "ヒョウリュウ",
    lead: "自分の軸を見失いかけているあなたへ。",
    shop: "便利な店ではなく、あえて入りにくい個人店。すぐに評価できない場所。",
    spot: "人が少ない海辺、山道、長い階段、知らない駅、観光地から外れた場所。",
    action: "おすすめを保存するのをやめ、自分で一つ選んで歩く。",
    planTitle: "ヨリミチ修行プラン",
    plan: "スマホのおすすめを見ずに、知らない駅で降りる。目的地を決めずに90分歩く。途中で写真は3枚まで。最後に、今日一番嫌だったことと、一番よかったことをメモする。",
  },
};

const areaSpots: Record<string, string[]> = {
  北海道: ["小樽運河周辺", "モエレ沼公園", "札幌市資料館"],
  東北: ["弘前の城下町", "松島海岸", "銀山温泉"],
  関東: ["谷中・根津", "江戸東京たてもの園", "下北沢の路地"],
  中部: ["松本の城下町", "金沢の茶屋街", "犬山城下町"],
  関西: ["京都・一乗寺", "大阪・中崎町", "神戸・旧居留地"],
  中国四国: ["尾道の坂道", "倉敷美観地区", "直島"],
  "中国・四国": ["尾道の坂道", "倉敷美観地区", "直島"],
  九州: ["門司港レトロ", "柳川", "長崎の坂道"],
  沖縄: ["壺屋やちむん通り", "首里金城町石畳道", "備瀬のフクギ並木"],
};

function safeDecode(value: string) {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

type PageProps = {
  params: Promise<{
    type: string;
    area: string;
  }>;
};

export default async function RecommendPage({ params }: PageProps) {
  const { type, area } = await params;

  const typeKey = type === "hyouryuu" ? "hyoryu" : type;
  const areaName = safeDecode(area);

  const typeInfo = typeData[typeKey] ?? typeData.dassen;
  const spots = areaSpots[areaName] ?? areaSpots.関東;

  const isHyoryu = typeKey === "hyoryu";

  return (
    <main className="min-h-screen bg-[#f4efe6] text-[#1f1f1c]">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <p className="mb-6 text-sm tracking-[0.35em] text-[#8a7d68]">
          YORIMICHI GUIDE
        </p>

        <h1 className="mb-6 text-4xl font-semibold tracking-tight sm:text-6xl">
          {typeInfo.name} × {areaName}
        </h1>

        <p className="mb-12 text-lg leading-relaxed text-[#3f3a32]">
          {typeInfo.lead}
          <br />
          {areaName}でできる、あなたのためのヨリミチです。
        </p>

        <section className="mb-12 border-t border-[#c8bda9] pt-8">
          <h2 className="mb-4 text-2xl font-medium">おすすめの店</h2>
          <p className="leading-8 text-[#3f3a32]">{typeInfo.shop}</p>
        </section>

        <section className="mb-12 border-t border-[#c8bda9] pt-8">
          <h2 className="mb-4 text-2xl font-medium">おすすめスポット</h2>

          <div className="grid gap-4 sm:grid-cols-3">
            {spots.map((spot) => (
              <div
                key={spot}
                className="border border-[#1f1f1c] px-5 py-5 text-sm leading-7"
              >
                {spot}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12 border-t border-[#c8bda9] pt-8">
          <h2 className="mb-4 text-2xl font-medium">おすすめの過ごし方</h2>
          <p className="leading-8 text-[#3f3a32]">{typeInfo.action}</p>
        </section>

        <section className="mb-12 border-t border-[#c8bda9] pt-8">
          <h2 className="mb-4 text-2xl font-medium">{typeInfo.planTitle}</h2>
          <p
            className={
              isHyoryu
                ? "border border-[#1f1f1c] bg-[#1f1f1c] px-5 py-5 leading-8 text-[#f4efe6]"
                : "leading-8 text-[#3f3a32]"
            }
          >
            {typeInfo.plan}
          </p>
        </section>

        <div className="mt-14 flex flex-col gap-4 sm:flex-row">
          <a
            href="/area"
            className="border border-[#1f1f1c] px-8 py-4 text-center text-sm tracking-[0.2em] transition hover:bg-[#1f1f1c] hover:text-[#f4efe6]"
          >
            地域を選び直す
          </a>

          <a
            href="/result"
            className="px-8 py-4 text-center text-sm tracking-[0.2em] text-[#6d6252] underline underline-offset-8"
          >
            結果に戻る
          </a>
        </div>
      </div>
    </main>
  );
}