export default function TestPage() {
  return (
    <main className="min-h-screen bg-[#f4efe6] text-[#1f1f1c]">
      <div className="mx-auto flex min-h-screen max-w-2xl flex-col justify-center px-6 py-16">
        <p className="mb-4 text-sm tracking-[0.35em] text-[#8a7d68]">
          QUESTION 01 / 90
        </p>

        <div className="mb-8 h-[1px] w-full bg-[#c8bda9]">
          <div className="h-[1px] w-[12%] bg-[#1f1f1c]" />
        </div>

        <h1 className="mb-10 text-3xl font-medium leading-relaxed">
          初めての場所では、目的地に着く前の時間も印象に残りやすい。
        </h1>

        <div className="space-y-3">
          {[
            "とてもそう思う",
            "そう思う",
            "ややそう思う",
            "どちらでもない",
            "あまりそう思わない",
            "そう思わない",
            "まったくそう思わない",
          ].map((label) => (
            <button
              key={label}
              className="w-full border border-[#1f1f1c] px-5 py-4 text-left text-sm tracking-[0.08em] transition hover:bg-[#1f1f1c] hover:text-[#f4efe6]"
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}