const typeData: Record<
  string,
  {
    name: string;
    color: string;
    group: string;
    lead: string;
    shopTheme: string;
    spotTheme: string;
    actionTheme: string;
    planTheme: string;
  }
> = {
  dassen: {
    name: "ダッセン",
    color: "#00a86b",
    group: "ズラス系・動",
    lead: "予定通りでは終わらせたくないあなたへ。",
    shopTheme: "駅前の有名店より、少し奥にある個人店や路地裏の喫茶店。",
    spotTheme: "メイン通りから一本外れた商店街、坂道、川沿い、古い住宅地。",
    actionTheme: "目的地を一つだけ決めて、そこまでの道をあえて少し外す。",
    planTheme: "有名スポットを一つだけ決める。到着後は最短ルートを使わず、気になった道を一本選んで歩く。最後に、予定になかった店に一つだけ入る。",
  },
  iwakan: {
    name: "イワカン",
    color: "#00a86b",
    group: "ズラス系・静",
    lead: "普通の中にある違和感を見つけるあなたへ。",
    shopTheme: "少し変わった店名、独自のルール、昔から残る雰囲気のある店。",
    spotTheme: "再開発地、古い建物と新しい建物が混ざる場所、境界線のある街。",
    actionTheme: "なぜここだけ雰囲気が違うのかを考えながら歩く。",
    planTheme: "駅から街を歩き、気になった看板・建物・人の流れを3つメモする。最後に、自分が一番引っかかった場所の理由を書く。",
  },
  yohakubito: {
    name: "ヨハクビト",
    color: "#2f80ed",
    group: "シズム系・静",
    lead: "余白の中で、自分の感覚を取り戻したいあなたへ。",
    shopTheme: "静かな喫茶店、席間の広いカフェ、長居できる本屋併設カフェ。",
    spotTheme: "庭園、湖畔、公園、美術館の休憩スペース、静かな図書館。",
    actionTheme: "予定を詰めず、何もしない時間を予定として入れる。",
    planTheme: "午前中に静かな場所へ行く。スマホを見る時間を減らし、30分だけ何も決めずに座る。帰りに小さな店で温かい飲み物を飲む。",
  },
  monoguri: {
    name: "モノグリ",
    color: "#2f80ed",
    group: "シズム系・動",
    lead: "物語の中に深く入り込みたいあなたへ。",
    shopTheme: "映画館の近くの喫茶店、古書店、作品の世界観に合う内装の店。",
    spotTheme: "文学館、映画館、聖地巡礼できる場所、歴史ある街並み。",
    actionTheme: "作品や物語と現実の場所を重ねながら歩く。",
    planTheme: "一つ作品を決めてから出かける。関連する場所、似た空気の街、作品に出てきそうな店をめぐり、最後に感想を短く残す。",
  },
  zararist: {
    name: "ザラリスト",
    color: "#f2994a",
    group: "サワル系・静",
    lead: "情報より、手触りや質感で納得したいあなたへ。",
    shopTheme: "器、紙、布、木、革など、素材を実際に触れる店。",
    spotTheme: "民藝館、クラフト市、陶器市、古道具店、工房のある街。",
    actionTheme: "レビューではなく、実物に触れて選ぶ。",
    planTheme: "素材を見られる店や場所を一つ選ぶ。買うことを目的にせず、手触り・重さ・匂い・使い心地を比べる。最後に一つだけ気になったものを記録する。",
  },
  temotori: {
    name: "テモトリ",
    color: "#f2994a",
    group: "サワル系・動",
    lead: "完成品より、作られていく過程に惹かれるあなたへ。",
    shopTheme: "職人の手元が見える店、厨房が見える飲食店、工房併設ショップ。",
    spotTheme: "工房見学、制作体験、朝市、酒蔵、伝統産業の残る街。",
    actionTheme: "完成品ではなく、工程・手順・人の動きを見る。",
    planTheme: "作っている様子が見える場所に行く。何を、どの順番で、どんな手つきで作っているかを見る。可能なら制作体験を一つ入れる。",
  },
  kirokuru: {
    name: "キロクル",
    color: "#9b51e0",
    group: "ノコス系・静",
    lead: "流れていく時間を、記憶として残したいあなたへ。",
    shopTheme: "昔から続く喫茶店、老舗、古い写真が飾られている店。",
    spotTheme: "資料館、古い商店街、保存地区、港町、温泉街、廃線跡。",
    actionTheme: "消えてしまいそうな風景を、写真やメモで残す。",
    planTheme: "古くから残る街を歩く。店の看板、建物、道の形、地元の人の話を記録する。最後に、その場所がなくなったら何が失われるかを考える。",
  },
  netsubito: {
    name: "ネツビト",
    color: "#9b51e0",
    group: "ノコス系・動",
    lead: "人の熱量に触れることで、動き出せるあなたへ。",
    shopTheme: "店主のこだわりが強い店、偏愛が見える専門店、常連がいる個人店。",
    spotTheme: "小劇場、ライブハウス、個人ギャラリー、ミニシアター、専門店街。",
    actionTheme: "誰かが本気で好きなものに触れる。",
    planTheme: "個人のこだわりが強い場所に行く。店主、作家、出演者、案内人など、その場を作っている人の熱量を受け取る。気になったら一言だけ質問する。",
  },
  hyoryu: {
    name: "ヒョウリュウ",
    color: "#111111",
    group: "幻のヨリミチ",
    lead: "自分の軸を見失いかけているあなたへ。",
    shopTheme: "便利な店ではなく、あえて入りにくい個人店。すぐに評価できない場所。",
    spotTheme: "人が少ない海辺、山道、長い階段、知らない駅、観光地から外れた場所。",
    actionTheme: "おすすめを保存するのをやめ、自分で一つ選んで歩く。",
    planTheme: "スマホのおすすめを見ずに、知らない駅で降りる。目的地を決めずに90分歩く。途中で写真は3枚まで。最後に、今日一番嫌だったことと、一番よかったことをメモする。",
  },
};

const areaData: Record<
  string,
  {
    english: string;
    lead: string;
    spots: string[];
    shops: string[];
    routes: string[];
  }
> = {
  北海道: {
    english: "HOKKAIDO",
    lead: "広い空、長い移動、余白のある景色の中で、自分の感覚を取り戻す地方。",
    spots: ["小樽運河周辺", "モエレ沼公園", "札幌市資料館"],
    shops: ["札幌の古書店", "小樽の喫茶店", "旭川のクラフトショップ"],
    routes: ["札幌で一駅分だけ歩く", "小樽で観光通りを外れる", "海沿いで30分だけ何もしない"],
  },
  東北: {
    english: "TOHOKU",
    lead: "静かな街並み、土地の記憶、長く残る生活の気配に触れられる地方。",
    spots: ["弘前の城下町", "松島海岸", "銀山温泉"],
    shops: ["弘前の喫茶店", "仙台の小さな書店", "会津の工芸店"],
    routes: ["城下町で古い道を歩く", "温泉街で看板を観察する", "朝の市場で人の動きを見る"],
  },
  関東: {
    english: "KANTO",
    lead: "都市のすき間、路地、個人店、人の熱量が密集している地方。",
    spots: ["谷中・根津", "江戸東京たてもの園", "下北沢の路地"],
    shops: ["神保町の古書店", "蔵前の雑貨店", "高円寺の個人店"],
    routes: ["一駅手前で降りる", "谷中から根津まで目的地なしで歩く", "神保町で知らない本棚を見る"],
  },
  中部: {
    english: "CHUBU",
    lead: "山、城下町、工芸、土地ごとの手触りが残る地方。",
    spots: ["松本の城下町", "金沢の茶屋街", "犬山城下町"],
    shops: ["金沢の器の店", "松本の喫茶店", "飛騨の木工店"],
    routes: ["城下町を一本裏へ入る", "工芸店で素材を比べる", "川沿いを予定なしで歩く"],
  },
  関西: {
    english: "KANSAI",
    lead: "歴史、物語、個人店、濃い街の空気が重なっている地方。",
    spots: ["京都・一乗寺", "大阪・中崎町", "神戸・旧居留地"],
    shops: ["一乗寺の書店", "中崎町の喫茶店", "神戸の古道具店"],
    routes: ["京都で観光地から一筋外れる", "中崎町で看板を見ながら歩く", "神戸で坂道を歩く"],
  },
  中国四国: {
    english: "CHUGOKU / SHIKOKU",
    lead: "坂道、島、港町、古い記憶が残る風景に出会える地方。",
    spots: ["尾道の坂道", "倉敷美観地区", "直島"],
    shops: ["尾道の古本屋", "倉敷の民藝店", "島の小さな喫茶店"],
    routes: ["尾道で坂道を上る", "倉敷で路地を一本外れる", "島で予定を一つ減らす"],
  },
  九州: {
    english: "KYUSHU",
    lead: "温度のある街、人の熱量、異国の気配が混ざる地方。",
    spots: ["門司港レトロ", "柳川", "長崎の坂道"],
    shops: ["長崎の喫茶店", "福岡の個人書店", "門司港の古い洋館カフェ"],
    routes: ["長崎で坂道を歩く", "柳川で水辺を眺める", "門司港で古い建物を巡る"],
  },
  沖縄: {
    english: "OKINAWA",
    lead: "海、祈り、独自の時間が流れる場所で、別の速度に触れられる地方。",
    spots: ["壺屋やちむん通り", "首里金城町石畳道", "備瀬のフクギ並木"],
    shops: ["壺屋の器の店", "那覇の古本屋", "海辺の小さな食堂"],
    routes: ["石畳道をゆっくり歩く", "やちむん通りで器に触れる", "海辺でスマホを閉じる"],
  },
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

  const typeKey = typeData[type] ? type : "dassen";
  const typeInfo = typeData[typeKey];

  const areaName = safeDecode(area);
  const areaInfo = areaData[areaName] ?? areaData.関東;

  const isHyoryu = typeKey === "hyoryu";

  return (
    <main className="min-h-screen bg-white text-[#1f1f1c]">
      <div
        className="px-6 py-12 text-white"
        style={{ backgroundColor: typeInfo.color }}
      >
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-sm tracking-[0.35em] text-white/80">
            YORIMICHI GUIDE
          </p>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
            {typeInfo.name} × {areaName}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/90">
            {typeInfo.lead}
            <br />
            {areaInfo.lead}
          </p>
        </div>
      </div>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 flex flex-wrap gap-3">
          <span className="border border-[#1f1f1c] px-4 py-2 text-xs tracking-[0.2em]">
            {typeInfo.group}
          </span>
          <span className="border border-[#1f1f1c] px-4 py-2 text-xs tracking-[0.2em]">
            {areaInfo.english}
          </span>
          <span className="border border-[#1f1f1c] px-4 py-2 text-xs tracking-[0.2em]">
            仮レコメンド
          </span>
        </div>

        <section className="border-t border-[#dedede] pt-10">
          <p className="mb-5 text-sm tracking-[0.25em] text-[#777777]">
            01 SHOPS
          </p>
          <h2 className="mb-4 text-3xl font-semibold">おすすめの店</h2>
          <p className="mb-8 leading-8 text-[#333333]">{typeInfo.shopTheme}</p>

          <div className="grid gap-4 sm:grid-cols-3">
            {areaInfo.shops.map((shop) => (
              <div key={shop} className="border border-[#1f1f1c] px-5 py-5">
                <p className="text-lg font-semibold">{shop}</p>
                <p className="mt-3 text-sm leading-7 text-[#555555]">
                  今後、実在店の確認後に正式な紹介文へ差し替えます。
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14 border-t border-[#dedede] pt-10">
          <p className="mb-5 text-sm tracking-[0.25em] text-[#777777]">
            02 SPOTS
          </p>
          <h2 className="mb-4 text-3xl font-semibold">おすすめスポット</h2>
          <p className="mb-8 leading-8 text-[#333333]">{typeInfo.spotTheme}</p>

          <div className="grid gap-4 sm:grid-cols-3">
            {areaInfo.spots.map((spot) => (
              <div
                key={spot}
                className="border border-[#1f1f1c] px-5 py-5"
                style={isHyoryu ? { borderColor: typeInfo.color } : undefined}
              >
                <p className="text-lg font-semibold">{spot}</p>
                <p className="mt-3 text-sm leading-7 text-[#555555]">
                  {typeInfo.name}の視点で歩くための仮スポットです。
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14 border-t border-[#dedede] pt-10">
          <p className="mb-5 text-sm tracking-[0.25em] text-[#777777]">
            03 ACTION
          </p>
          <h2 className="mb-4 text-3xl font-semibold">おすすめの過ごし方</h2>
          <p className="mb-8 leading-8 text-[#333333]">{typeInfo.actionTheme}</p>

          <div className="grid gap-4">
            {areaInfo.routes.map((route) => (
              <div key={route} className="border border-[#1f1f1c] px-5 py-5">
                <p className="text-lg font-semibold">{route}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          className={`mt-14 border-t border-[#dedede] pt-10 ${
            isHyoryu ? "bg-[#111111] px-6 py-8 text-white" : ""
          }`}
        >
          <p
            className={`mb-5 text-sm tracking-[0.25em] ${
              isHyoryu ? "text-white/70" : "text-[#777777]"
            }`}
          >
            04 PLAN
          </p>
          <h2 className="mb-4 text-3xl font-semibold">
            {isHyoryu ? "ヨリミチ修行プラン" : "半日ヨリミチプラン"}
          </h2>
          <p
            className={`leading-8 ${
              isHyoryu ? "text-white/90" : "text-[#333333]"
            }`}
          >
            {typeInfo.planTheme}
          </p>
        </section>

        <div className="mt-14 flex flex-col gap-4 sm:flex-row">
          <a
            href={`/area?type=${typeKey}`}
            className="border border-[#1f1f1c] px-8 py-4 text-center text-sm tracking-[0.2em] transition hover:bg-[#1f1f1c] hover:text-white"
          >
            地域を選び直す
          </a>

          <a
            href={`/result?type=${typeKey}`}
            className="px-8 py-4 text-center text-sm tracking-[0.2em] text-[#555555] underline underline-offset-8"
          >
            結果に戻る
          </a>
        </div>
      </section>
    </main>
  );
}
