const areas = [
  "北海道",
  "東北",
  "関東",
  "中部",
  "関西",
  "中国四国",
  "九州",
  "沖縄",
];

const typeData: Record<
  string,
  {
    name: string;
    group: string;
    motion: string;
    color: string;
    catch: string;
    overview: string;
    digital: string;
    recommendation: string;
    attracted: string[];
    characterHint: string;
  }
> = {
  dassen: {
    name: "ダッセン",
    group: "ズラス系",
    motion: "動",
    color: "#00a86b",
    catch: "目的地までの最短ルートより、少し外れた道に惹かれる人。",
    overview:
      "ダッセンのあなたは、決められたルートをそのまま進むだけでは少し物足りなさを感じる人です。目的地に着くこと自体よりも、そこへ向かう途中で何を見つけるか、自分でどの道を選ぶかに心が動きます。人気の場所や正解とされる過ごし方も楽しめますが、本当に記憶に残るのは、少し予定から外れた瞬間かもしれません。あなたには、与えられた選択肢をただ受け取るのではなく、自分の足で選び直す力があります。その感覚は、情報が多すぎる時代においてとても貴重です。ただし、脱線そのものが目的になると、疲れてしまうこともあります。小さく外れ、小さく戻る。そのリズムを大切にしてください。",
    digital:
      "ダッセンは、レコメンドに従いすぎると体験が薄くなりやすいタイプです。検索結果や人気順を参考にするのはよいですが、最後の一つは自分で選ぶ余地を残してください。デジタルは地図として使い、結論までは任せすぎないことが大切です。",
    recommendation:
      "おすすめは、一駅手前で降りる、帰り道だけ違う道を通る、予定にない店に一つ入ること。大きな冒険ではなく、自分で選んだ小さな遠回りが、ダッセンの感覚を取り戻してくれます。",
    attracted: ["路地", "商店街", "一駅手前", "予定外の店", "知らない道"],
    characterHint: "片手に小さな地図を持ち、靴ひもを結び直している、身軽な旅人のようなヨリミチ。",
  },
  iwakan: {
    name: "イワカン",
    group: "ズラス系",
    motion: "静",
    color: "#00a86b",
    catch: "普通の中にある、小さな引っかかりを見逃せない人。",
    overview:
      "イワカンのあなたは、みんなが自然に受け入れているものの中に、小さなズレや不自然さを見つける人です。多くの人が流してしまう看板、建物の配置、街の空気の違い、説明しきれない違和感が、あなたの中には静かに残ります。それは批判的というより、物事を丁寧に見ている証拠です。あなたは、表面上のわかりやすさにすぐ納得せず、その奥にある理由や背景を考えようとします。情報が速く流れていく時代に、立ち止まって観察できる力は大きな魅力です。ただし、引っかかりを抱え込みすぎると疲れやすいので、すべてを解明しようとしすぎないことも大切です。",
    digital:
      "イワカンは、SNSやニュースの違和感に反応しやすいタイプです。気づける力は強みですが、情報を浴びすぎると小さな引っかかりまで抱え込んでしまいます。気になる情報は一度保存し、時間を置いてから見る習慣が合っています。",
    recommendation:
      "おすすめは、再開発地、古い建物が残る通り、変わった看板のある街を歩くこと。すぐに結論を出さず、『なぜここだけ違うのか』を考える時間が、イワカンらしいヨリミチになります。",
    attracted: ["境界のある街", "再開発地", "変な看板", "古い建物", "不思議な店"],
    characterHint: "虫眼鏡を持ち、街角の小さなズレを見つめている観察者のようなヨリミチ。",
  },
  yohakubito: {
    name: "ヨハクビト",
    group: "シズム系",
    motion: "静",
    color: "#2f80ed",
    catch: "余白の中で、自分の感覚を取り戻す人。",
    overview:
      "ヨハクビトのあなたは、刺激を増やすより、情報や予定を減らすことで自分の感覚を取り戻す人です。楽しい予定でも、詰め込みすぎるとどこか重たく感じることがあります。人と会ったあと、すぐ次の予定に移るより、一度静かな場所に戻りたいと思うこともあるでしょう。あなたにとって余白は、何もしていない時間ではありません。頭の中の優先順位を整え、自分が本当に何を感じているのかを確認するための大切な時間です。効率や即レスが求められる時代に、静かに整える力は大きな魅力です。ただし、余白を守ろうとしすぎると、必要な変化まで避けてしまうことがあります。",
    digital:
      "ヨハクビトは、通知や情報量に疲れやすいタイプです。スマホを完全に断つ必要はありませんが、寝る前や移動中に何も見ない時間を短く作るだけで回復しやすくなります。情報を減らすことが、判断力を戻すきっかけになります。",
    recommendation:
      "おすすめは、静かな喫茶店、庭園、図書館、公園のベンチで何もしない時間を作ること。予定を増やすのではなく、予定の間に空白を置くことがヨハクビトのヨリミチです。",
    attracted: ["静かな喫茶店", "庭園", "図書館", "湖畔", "人の少ない美術館"],
    characterHint: "白い余白の中で本を閉じ、静かに息を整えている妖精のようなヨリミチ。",
  },
  monoguri: {
    name: "モノグリ",
    group: "シズム系",
    motion: "動",
    color: "#2f80ed",
    catch: "物語の世界に深く入り込み、現実の見え方まで変わる人。",
    overview:
      "モノグリのあなたは、作品や街、歴史の中に入り込むように体験する人です。映画、漫画、小説、アニメ、ゲーム、誰かの記憶。そうした物語に触れたあと、現実の風景まで少し違って見えることがあるかもしれません。あなたは、単に作品を消費しているのではなく、自分の中に世界を住まわせる力があります。現実の場所を歩きながら、そこに物語や余韻を重ねて味わうことができます。その想像力は、日常を深く豊かにする魅力です。ただし、物語の中に入り込みすぎると、現実の用事や体調を後回しにしてしまうことがあります。戻る場所も大切にしてください。",
    digital:
      "モノグリは、動画や作品世界に深く入り込みやすいタイプです。没入は強みですが、連続視聴や無限スクロールで余韻が薄れることがあります。見終わったあとに少し時間を置くと、作品が自分の中に残りやすくなります。",
    recommendation:
      "おすすめは、映画館、古書店、文学館、聖地巡礼、歴史ある街並みを歩くこと。作品を一つ決めてから出かけると、現実の景色が物語とつながりやすくなります。",
    attracted: ["古書店", "映画館", "文学館", "聖地巡礼", "歴史ある街"],
    characterHint: "小さな本を抱え、現実と物語の境目を歩いている旅人のようなヨリミチ。",
  },
  zararist: {
    name: "ザラリスト",
    group: "サワル系",
    motion: "静",
    color: "#f2994a",
    catch: "情報より、手触りや質感で納得する人。",
    overview:
      "ザラリストのあなたは、写真や説明だけでは決めきれず、実物の質感を確かめたくなる人です。素材、重さ、手触り、匂い、使ったときの感覚。そうした身体で受け取る情報を大切にします。レビューでは高評価でも、実際に触れてみると違うと感じることがあるでしょう。あなたは、情報を疑っているのではなく、自分の感覚を通して納得したいのです。デジタル上で何でも比較できる時代に、実物から判断できる力はとても魅力的です。ただし、納得できるまで選び続けてしまうと疲れることもあります。完璧な一つより、長く触れていける一つを選ぶことも大切です。",
    digital:
      "ザラリストは、レビューや写真だけで選ぶと満足しにくいタイプです。ネットで候補を絞るのは便利ですが、最後はできるだけ実物を見る方が合っています。情報収集は入口、判断は身体感覚に戻すのが大切です。",
    recommendation:
      "おすすめは、器の店、古道具店、紙の店、革製品、民藝館を巡ること。買うことを目的にせず、重さや手触りを比べるだけでも、自分の感覚が戻ってきます。",
    attracted: ["器の店", "古道具店", "紙の店", "革製品", "民藝館"],
    characterHint: "布や紙や器にそっと触れ、質感を確かめている職人肌のヨリミチ。",
  },
  temotori: {
    name: "テモトリ",
    group: "サワル系",
    motion: "動",
    color: "#f2994a",
    catch: "完成品より、作られていく過程に惹かれる人。",
    overview:
      "テモトリのあなたは、完成したものだけでなく、それがどのように作られたのかに心を動かされる人です。料理、工芸、編集、建築、接客。結果だけを見るより、手順や段取り、道具の使われ方、人の手元の動きに目が向きます。あなたは、ものごとの裏側にある積み重ねを感じ取る力があります。完成品の美しさだけでなく、そこに至るまでの時間や工夫を見られるのが大きな魅力です。ただし、過程に惹かれるあまり、自分でも何かを始めたくなって予定が増えすぎることがあります。見る、試す、続けるのバランスを大切にしてください。",
    digital:
      "テモトリは、完成品だけが流れてくるSNSより、メイキングや制作過程の方が満足しやすいタイプです。ただし、見るだけで作った気分になることもあります。短い制作体験や小さな実践を挟むと、デジタルの刺激が現実につながります。",
    recommendation:
      "おすすめは、工房見学、厨房が見える店、制作体験、朝市、酒蔵など。作る人の手元を見たり、自分で少し手を動かしたりする時間が、テモトリのヨリミチになります。",
    attracted: ["工房", "厨房が見える店", "制作体験", "朝市", "酒蔵"],
    characterHint: "小さな道具箱を持ち、作業台の横で手元を見つめているヨリミチ。",
  },
  kirokuru: {
    name: "キロクル",
    group: "ノコス系",
    motion: "静",
    color: "#9b51e0",
    catch: "流れていく時間を、記憶として残したい人。",
    overview:
      "キロクルのあなたは、今あるものがいつか失われるかもしれないという感覚を持ちやすい人です。古い写真、老舗、街の記録、誰かの思い出、使い込まれたもの。そうしたものに触れると、そこに積み重なった時間を想像します。あなたは、懐かしいものが好きなだけではありません。消えてしまう前に見ておきたい、記録しておきたいという静かな責任感を持っています。速く新しいものへ移っていく時代に、時間を受け取る力は大きな魅力です。ただし、過去を大切にしすぎると、今の変化に疲れてしまうこともあります。残すことと進むことの両方を持っていてください。",
    digital:
      "キロクルは、写真や記録を残すことと相性がよいタイプです。ただし、撮ることに集中しすぎると、その場を味わう時間が減ることがあります。記録は少なめに、あとで言葉を添える形が合っています。",
    recommendation:
      "おすすめは、老舗喫茶、保存地区、資料館、古い商店街、港町を歩くこと。看板、建物、道の形、人の話を少しだけ記録すると、その場所が自分の中に残りやすくなります。",
    attracted: ["老舗喫茶", "保存地区", "資料館", "古い商店街", "港町"],
    characterHint: "小さなカメラとノートを持ち、消えそうな風景を記録するヨリミチ。",
  },
  netsubito: {
    name: "ネツビト",
    group: "ノコス系",
    motion: "動",
    color: "#9b51e0",
    catch: "人の熱量に触れることで、自分の中にも火がつく人。",
    overview:
      "ネツビトのあなたは、誰かが本気で好きなものや、長く続けてきた活動に触れることで動き出せる人です。整った宣伝より、不器用でも熱のある言葉に心が動くことがあります。店主、作家、演者、常連、職人。何かに強いこだわりを持つ人を見ると、自分の中にも小さな火がつくでしょう。あなたは、対象そのものだけでなく、それを好きでいる人の熱量まで受け取ることができます。その感受性は、人との出会いを体験に変える魅力です。ただし、他人の熱に影響されやすい分、自分のペースを見失うこともあります。受け取った熱を、少しずつ自分の行動に変えてください。",
    digital:
      "ネツビトは、人の情熱が見える投稿や動画に強く反応します。刺激を受けられる一方で、他人の熱量に圧倒されることもあります。見るだけで終わらせず、小さな行動に変えると健全に付き合えます。",
    recommendation:
      "おすすめは、小劇場、ライブハウス、専門店、個人ギャラリー、ミニシアターに行くこと。誰かの偏愛や本気に触れる場所が、ネツビトのヨリミチになります。",
    attracted: ["小劇場", "ライブハウス", "専門店", "個人ギャラリー", "偏愛の強い店"],
    characterHint: "小さな火を胸に灯し、誰かの情熱に近づいていくヨリミチ。",
  },
  hyoryu: {
    name: "ヒョウリュウ",
    group: "幻のヨリミチ",
    motion: "漂流",
    color: "#111111",
    catch: "自分の軸を取り戻すために、あえて漂流する人。",
    overview:
      "ヒョウリュウのあなたは、自分の好みや判断基準が少しぼやけている状態にあります。情報は集めている。おすすめも保存している。候補もある。それでも、なぜか動き出せない。そんな感覚があるかもしれません。これは魅力がないということではなく、むしろ多くのものを受け取りすぎて、自分の反応が見えにくくなっている状態です。あなたには、本来さまざまな方向へ進める柔らかさがあります。ただし今は、便利な提案や評価から少し距離を置く必要があります。ヒョウリュウに必要なのは、優しいおすすめだけではありません。自分の足で選ぶ感覚を取り戻すための、少し厳しいヨリミチです。",
    digital:
      "ヒョウリュウは、レコメンドやランキングに判断を預けすぎると、自分の行きたい方向がさらに見えにくくなります。一定時間、保存・比較・検索を止めて、自分で一つだけ選ぶ訓練が必要です。",
    recommendation:
      "おすすめは、知らない駅で降りて90分歩く、写真は3枚までにする、評価を見ずに店を一つ選ぶこと。便利さを一度切ることで、自分の反応が戻ってきます。",
    attracted: ["知らない駅", "人の少ない海辺", "長い坂道", "不便な場所", "評価の少ない店"],
    characterHint: "霧の中を小さな灯りだけで歩く、修行僧のような幻のヨリミチ。",
  },
};

type PageProps = {
  searchParams: Promise<{
    type?: string;
  }>;
};

export default async function ResultPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const typeKey = params.type && typeData[params.type] ? params.type : "dassen";
  const typeInfo = typeData[typeKey];

  return (
    <main className="min-h-screen bg-white text-[#1f1f1c]">
      <div
        className="px-6 py-14 text-white"
        style={{ backgroundColor: typeInfo.color }}
      >
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm tracking-[0.35em] text-white/80">
            あなたのヨリミチ
          </p>

          <h1 className="text-6xl font-semibold tracking-tight sm:text-8xl">
            {typeInfo.name}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/90">
            {typeInfo.catch}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="mb-12 flex flex-wrap gap-3">
          <span className="border border-[#1f1f1c] px-4 py-2 text-xs tracking-[0.2em]">
            {typeInfo.group}
          </span>
          <span className="border border-[#1f1f1c] px-4 py-2 text-xs tracking-[0.2em]">
            {typeInfo.motion}
          </span>
        </div>

        <section className="border-t border-[#dedede] pt-10">
          <p className="mb-5 text-sm tracking-[0.25em] text-[#777777]">
            01 OVERVIEW
          </p>
          <h2 className="mb-6 text-3xl font-semibold">あなたの中のヨリミチ</h2>
          <p className="leading-8 text-[#333333]">{typeInfo.overview}</p>
        </section>

        <section className="my-14 border border-[#1f1f1c] px-6 py-8">
          <p className="mb-4 text-sm tracking-[0.25em] text-[#777777]">
            CHARACTER DESIGN MEMO
          </p>
          <p className="leading-8 text-[#333333]">{typeInfo.characterHint}</p>
          <div
            className="mt-8 h-44 border border-dashed"
            style={{ borderColor: typeInfo.color }}
          />
        </section>

        <section className="border-t border-[#dedede] pt-10">
          <p className="mb-5 text-sm tracking-[0.25em] text-[#777777]">
            02 DIGITAL
          </p>
          <h2 className="mb-6 text-3xl font-semibold">デジタルとの向き合い方</h2>
          <p className="leading-8 text-[#333333]">{typeInfo.digital}</p>
        </section>

        <section className="my-14 border border-[#1f1f1c] px-6 py-8">
          <p className="mb-4 text-sm tracking-[0.25em] text-[#777777]">
            CHARACTER DESIGN MEMO
          </p>
          <p className="leading-8 text-[#333333]">
            ここには今後、{typeInfo.name} の表情違い・持ち物・ポーズを配置します。
          </p>
          <div
            className="mt-8 h-44 border border-dashed"
            style={{ borderColor: typeInfo.color }}
          />
        </section>

        <section className="border-t border-[#dedede] pt-10">
          <p className="mb-5 text-sm tracking-[0.25em] text-[#777777]">
            03 RECOMMEND
          </p>
          <h2 className="mb-6 text-3xl font-semibold">おすすめのヨリミチ</h2>
          <p className="leading-8 text-[#333333]">{typeInfo.recommendation}</p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
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

        <section className="mt-14 border-t border-[#dedede] pt-10">
          <h2 className="mb-6 text-3xl font-semibold">
            ヨリミチするところを選ぶ
          </h2>

          <p className="mb-8 leading-8 text-[#333333]">
            あなたのヨリミチに合わせて、地域ごとのおすすめを案内します。
          </p>

          <a
            href={`/area?type=${typeKey}`}
            className="inline-block border border-[#1f1f1c] px-10 py-5 text-center text-sm tracking-[0.25em] transition hover:bg-[#1f1f1c] hover:text-white"
          >
            地域を選ぶ
          </a>
        </section>

        <div className="mt-14 flex flex-col gap-4 sm:flex-row">
          <a
            href="/test"
            className="border border-[#1f1f1c] px-8 py-4 text-center text-sm tracking-[0.2em] transition hover:bg-[#1f1f1c] hover:text-white"
          >
            もう一度診断する
          </a>

          <a
            href={`/types/${typeKey}`}
            className="px-8 py-4 text-center text-sm tracking-[0.2em] text-[#555555] underline underline-offset-8"
          >
            タイプ詳細を見る
          </a>
        </div>
      </div>
    </main>
  );
}
