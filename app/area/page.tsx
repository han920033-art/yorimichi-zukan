const areas = [
  "北海道",
  "東北",
  "関東",
  "中部",
  "関西",
  "中国・四国",
  "九州",
  "沖縄",
];

export default function AreaPage() {
  return (
    <main className="min-h-screen bg-[#f4efe6] text-[#1f1f1c]">
      <div className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-6 py-16">
        <p className="mb-6 text-sm tracking-[0.35em] text-[#8a7d68]">
          CHOOSE YOUR AREA
        </p>

        <h1 className="mb-6 text-4xl font-semibold tracking-tight sm:text-6xl">
          ヨリミチしたい地域を選ぶ
        </h1>

        <p className="mb-10 text-lg leading-relaxed text-[#3f3a32]">
          あなたのタイプに合うヨリミチを案内します。
          <br />
          まずは、今行ってみたい地域を選んでください。
        </p>

        <div className="grid gap-3 sm:grid-cols-2">
          {areas.map((area) => (
            <a
              key={area}
              href={`/recommend/dassen/${area}`}
              className="border border-[#1f1f1c] px-6 py-5 text-sm tracking-[0.18em] transition hover:bg-[#1f1f1c] hover:text-[#f4efe6]"
            >
              {area}
            </a>
          ))}
        </div>

        <a
          href="/result"
          className="mt-10 text-sm tracking-[0.2em] text-[#6d6252] underline underline-offset-8"
        >
          結果に戻る
        </a>
      </div>
    </main>
  );
}