
const areas = [
  {
    name: "北海道",
    english: "HOKKAIDO",
    description: "広い空、余白、長い移動の中で感覚を取り戻す。",
    position: "sm:col-start-4 sm:row-start-1",
  },
  {
    name: "東北",
    english: "TOHOKU",
    description: "静かな街、記憶、土地の時間に触れる。",
    position: "sm:col-start-4 sm:row-start-2",
  },
  {
    name: "関東",
    english: "KANTO",
    description: "都市のすき間、路地、熱量のある場所へ。",
    position: "sm:col-start-3 sm:row-start-3",
  },
  {
    name: "中部",
    english: "CHUBU",
    description: "山、城下町、工芸、手触りの残る場所へ。",
    position: "sm:col-start-2 sm:row-start-3",
  },
  {
    name: "関西",
    english: "KANSAI",
    description: "物語、歴史、個人店の濃い空気に触れる。",
    position: "sm:col-start-2 sm:row-start-4",
  },
  {
    name: "中国四国",
    english: "CHUGOKU / SHIKOKU",
    description: "坂道、島、港町、古い記憶が残る場所へ。",
    position: "sm:col-start-1 sm:row-start-4",
  },
  {
    name: "九州",
    english: "KYUSHU",
    description: "温度のある街、人の熱量、異国の気配へ。",
    position: "sm:col-start-1 sm:row-start-5",
  },
  {
    name: "沖縄",
    english: "OKINAWA",
    description: "海、祈り、独自の時間が流れる場所へ。",
    position: "sm:col-start-2 sm:row-start-6",
  },
];

const typeData: Record<
  string,
  {
    name: string;
    color: string;
  }
> = {
  dassen: { name: "ダッセン", color: "#00a86b" },
  iwakan: { name: "イワカン", color: "#00a86b" },
  yohakubito: { name: "ヨハクビト", color: "#2f80ed" },
  monoguri: { name: "モノグリ", color: "#2f80ed" },
  zararist: { name: "ザラリスト", color: "#f2994a" },
  temotori: { name: "テモトリ", color: "#f2994a" },
  kirokuru: { name: "キロクル", color: "#9b51e0" },
  netsubito: { name: "ネツビト", color: "#9b51e0" },
  hyoryu: { name: "ヒョウリュウ", color: "#111111" },
};

type PageProps = {
  searchParams: Promise<{
    type?: string;
  }>;
};

export default async function AreaPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const typeKey = params.type && typeData[params.type] ? params.type : "dassen";
  const typeInfo = typeData[typeKey];

  return (
    <main className="min-h-screen bg-white text-[#1f1f1c]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="mb-6 text-sm tracking-[0.35em] text-[#777777]">
          CHOOSE YOUR AREA
        </p>

        <h1 className="mb-6 text-4xl font-semibold tracking-tight sm:text-6xl">
          ヨリミチするところを選ぶ
        </h1>

        <p className="mb-4 max-w-3xl text-lg leading-relaxed text-[#333333]">
          あなたの中に宿るヨリミチは、
          <span className="mx-2 font-semibold" style={{ color: typeInfo.color }}>
            {typeInfo.name}
          </span>
          です。
        </p>

        <p className="mb-12 max-w-3xl leading-8 text-[#444444]">
          行きたい地方を選ぶと、あなたの中に宿るヨリミチに合わせたおすすめの店、
          スポット、過ごし方を案内します。
        </p>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="border border-[#1f1f1c] px-5 py-6 sm:px-8 sm:py-8">
            <div className="mb-8 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs tracking-[0.3em] text-[#777777]">
                  JAPAN MAP
                </p>
                <h2 className="mt-2 text-2xl font-semibold">日本地図から選ぶ</h2>
              </div>

              <div
                className="h-10 w-10 rounded-full"
                style={{ backgroundColor: typeInfo.color }}
              />
            </div>

            <div className="grid gap-3 sm:grid-cols-4 sm:grid-rows-6">
              {areas.map((area) => (
                <a
                  key={area.name}
                  href={`/recommend/${typeKey}/${area.name}`}
                  className={`group border border-[#1f1f1c] bg-white px-4 py-4 transition hover:scale-[1.03] hover:text-white ${area.position}`}
                  style={{
                    ["--hover-color" as string]: typeInfo.color,
                  }}
                >
                  <div
                    className="absolute hidden"
                    style={{ backgroundColor: typeInfo.color }}
                  />
                  <p className="mb-2 text-xs tracking-[0.25em] text-[#777777] group-hover:text-white/80">
                    {area.english}
                  </p>
                  <p className="text-lg font-semibold">{area.name}</p>

                  <style>{`
                    a[href="/recommend/${typeKey}/${area.name}"]:hover {
                      background-color: ${typeInfo.color};
                    }
                  `}</style>
                </a>
              ))}
            </div>
          </section>

          <section className="border border-[#dedede] px-6 py-8">
            <p className="mb-4 text-sm tracking-[0.3em] text-[#777777]">
              AREA GUIDE
            </p>

            <h2 className="mb-6 text-2xl font-semibold">
              地方ごとのヨリミチ
            </h2>

            <div className="space-y-5">
              {areas.map((area) => (
                <a
                  key={area.name}
                  href={`/recommend/${typeKey}/${area.name}`}
                  className="block border-b border-[#dedede] pb-5 transition hover:pl-2"
                >
                  <p className="mb-2 text-lg font-semibold">{area.name}</p>
                  <p className="text-sm leading-7 text-[#555555]">
                    {area.description}
                  </p>
                </a>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-14 flex flex-col gap-4 sm:flex-row">
          <a
            href={`/result?type=${typeKey}`}
            className="border border-[#1f1f1c] px-8 py-4 text-center text-sm tracking-[0.2em] transition hover:bg-[#1f1f1c] hover:text-white"
          >
            結果に戻る
          </a>

          <a
  href="/test"
  className="px-8 py-4 text-center text-sm tracking-[0.2em] text-[#555555] underline underline-offset-8"
>
  もう一度診断する
</a>
        </div>
      </section>
    </main>
  );
}
