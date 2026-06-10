type PageProps = {
  searchParams: Promise<{
    type?: string;
  }>;
};

export default async function ResultReadyPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const type = params.type ?? "dassen";

  return (
    <main className="min-h-screen bg-white text-[#1f1f1c]">
      <section className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-6 py-20">
        <p className="mb-6 text-sm tracking-[0.35em] text-[#777777]">
          RESULT IS READY
        </p>

        <h1 className="mb-8 text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
          解答、お疲れさまでした。
        </h1>

        <div className="mb-12 space-y-6 text-lg leading-9 text-[#333333]">
          <p>
            90問の回答から、あなたの中に住んでいるヨリミチを探しました。
          </p>

          <p>
            予定通りに進みたい日もあれば、少しだけ道を外れたくなる日もある。
            便利なものに助けられながら、それでも自分の感覚で選びたい瞬間がある。
          </p>

          <p>
            その小さな反応の積み重ねから、あなたのヨリミチが見えてきました。
          </p>
        </div>

        <div className="mb-14 border-l border-[#1f1f1c] pl-6 text-[#444444]">
          <p className="leading-8">
            結果は、性格や能力を決めつけるものではありません。
            あなたがどんな体験に惹かれやすいかを知るための、ひとつの読み物です。
          </p>
        </div>

        <a
          href={`/result?type=${type}`}
          className="w-full border border-[#1f1f1c] px-10 py-5 text-center text-sm tracking-[0.25em] transition hover:bg-[#1f1f1c] hover:text-white sm:w-fit"
        >
          自分のヨリミチを確認する
        </a>
      </section>
    </main>
  );
}