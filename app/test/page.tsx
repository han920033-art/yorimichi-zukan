"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

const QUESTIONS_PER_PAGE = 6;

type CategoryId = "zurasu" | "shizumu" | "sawaru" | "nokosu";
type MotionId = "static" | "dynamic";
type HelperTarget =
  | "zurasuAnti"
  | "sawaruAnti"
  | "nokosuAnti"
  | "static"
  | "dynamic";
type TypeId =
  | "dassen"
  | "iwakan"
  | "yohakubito"
  | "monoguri"
  | "zararist"
  | "temotori"
  | "kirokuru"
  | "netsubito"
  | "hyoryu";

type Question =
  | {
      id: number;
      text: string;
      kind: "category";
      target: CategoryId;
    }
  | {
      id: number;
      text: string;
      kind: "motion";
      target: MotionId;
    }
  | {
      id: number;
      text: string;
      kind: "hyoryu";
    }
  | {
      id: number;
      text: string;
      kind: "helper";
      target: HelperTarget;
    };

const questions: Question[] = [
  { id: 1, text: "何かを見るとき、まず「これはなぜこうなっているのか」が気になることがある。", kind: "category", target: "zurasu" },
  { id: 2, text: "予定が多い日が続くと、楽しいことでも少し重く感じる。", kind: "category", target: "shizumu" },
  { id: 3, text: "説明を聞くだけでなく、実際の状態を自分で確かめたくなる。", kind: "category", target: "sawaru" },
  { id: 4, text: "長く続いているものには、それだけで少し惹かれる。", kind: "category", target: "nokosu" },
  { id: 5, text: "みんなが自然に受け入れているものでも、自分だけ少し引っかかることがある。", kind: "category", target: "zurasu" },
  { id: 6, text: "静かな時間があると、自分の考えがまとまりやすい。", kind: "category", target: "shizumu" },
  { id: 7, text: "ものを選ぶとき、見た目より「使ったときの感じ」が気になることがある。", kind: "category", target: "sawaru" },
  { id: 8, text: "人の思い出話や昔の話を、意外と聞いていられる。", kind: "category", target: "nokosu" },
  { id: 9, text: "何かの流行を見ると、「なぜ今これなのか」を考えることがある。", kind: "category", target: "zurasu" },
  { id: 10, text: "作品や出来事の余韻を、すぐに次の情報で消したくない。", kind: "category", target: "shizumu" },
  { id: 11, text: "完成したものだけでなく、そこに至るまでの過程も知りたくなる。", kind: "category", target: "sawaru" },
  { id: 12, text: "なくなってから気づくより、今のうちに見ておきたいものがある。", kind: "category", target: "nokosu" },

  { id: 13, text: "周りが納得していても、自分の中で腑に落ちないと残り続ける。", kind: "category", target: "zurasu" },
  { id: 14, text: "何もしない時間を、完全な無駄だとは思えない。", kind: "category", target: "shizumu" },
  { id: 15, text: "実物を見ないまま決めることに、少し不安を感じることがある。", kind: "category", target: "sawaru" },
  { id: 16, text: "古い写真や記録を見ると、そこにいた人のことを想像してしまう。", kind: "category", target: "nokosu" },
  { id: 17, text: "「普通はこうする」と言われると、少し別の可能性も考えたくなる。", kind: "category", target: "zurasu" },
  { id: 18, text: "人と会ったあと、すぐ次の予定に移るより、一度落ち着きたい。", kind: "category", target: "shizumu" },
  { id: 19, text: "道具や設備の使われ方を見ると、使っている人の癖が出ると思う。", kind: "category", target: "sawaru" },
  { id: 20, text: "何気ない日常ほど、後から残しておけばよかったと思うことがある。", kind: "category", target: "nokosu" },
  { id: 21, text: "きれいに整った説明より、少し矛盾がある話の方が気になる。", kind: "category", target: "zurasu" },
  { id: 22, text: "情報が多すぎると、自分が本当に何をしたいのかわかりにくくなる。", kind: "category", target: "shizumu" },
  { id: 23, text: "同じものでも、素材や重さが違うと別物のように感じる。", kind: "category", target: "sawaru" },
  { id: 24, text: "新しい場所でも、以前は何があったのか気になることがある。", kind: "category", target: "nokosu" },

  { id: 25, text: "多くの人が褒めているものでも、自分の中で違うと思うと乗り切れない。", kind: "category", target: "zurasu" },
  { id: 26, text: "予定を詰め込むより、少し余白が残っている日の方が安心する。", kind: "category", target: "shizumu" },
  { id: 27, text: "誰かの説明より、手順や実物を見る方が納得しやすいことがある。", kind: "category", target: "sawaru" },
  { id: 28, text: "家族や地域の昔話を聞くと、少し記憶に残る。", kind: "category", target: "nokosu" },
  { id: 29, text: "何かを見たとき、表に出ている部分より裏側の仕組みが気になる。", kind: "category", target: "zurasu" },
  { id: 30, text: "作品を見終わったあと、しばらくその世界の中にいる感じがする。", kind: "category", target: "shizumu" },
  { id: 31, text: "買い物では、性能や評判だけでなく、触ったときの感覚も大事だ。", kind: "category", target: "sawaru" },
  { id: 32, text: "誰かが大切にしてきたものには、理由を知りたくなる。", kind: "category", target: "nokosu" },
  { id: 33, text: "ルールや手順が決まっていても、自分なりに少し調整したくなる。", kind: "category", target: "zurasu" },
  { id: 34, text: "一人で過ごす時間があると、自分の状態を確認しやすい。", kind: "category", target: "shizumu" },
  { id: 35, text: "作業している人の動きや段取りを見ると、つい目で追ってしまう。", kind: "category", target: "sawaru" },
  { id: 36, text: "使い込まれたものを見ると、そこに積もった時間を感じる。", kind: "category", target: "nokosu" },

  { id: 37, text: "多数派の意見より、自分が引っかかった点の方が気になることがある。", kind: "category", target: "zurasu" },
  { id: 38, text: "刺激が多い場所に長くいると、楽しくても疲れが残る。", kind: "category", target: "shizumu" },
  { id: 39, text: "ものごとは、結果だけでなく「どう作られたか」まで見ると面白い。", kind: "category", target: "sawaru" },
  { id: 40, text: "今あるものがずっと残るとは限らない、という感覚がある。", kind: "category", target: "nokosu" },
  { id: 41, text: "予定通りに進みすぎた日は、少し印象が薄くなることがある。", kind: "category", target: "zurasu" },
  { id: 42, text: "静かな場所にいると、頭の中の優先順位が戻ってくる。", kind: "category", target: "shizumu" },
  { id: 43, text: "実際に手を動かしている人を見ると、その人の経験が見える気がする。", kind: "category", target: "sawaru" },
  { id: 44, text: "誰かの記録やメモには、その人らしさが出ると思う。", kind: "category", target: "nokosu" },
  { id: 45, text: "何かをそのまま受け取るより、一度自分なりに考え直したくなる。", kind: "category", target: "zurasu" },
  { id: 46, text: "自分の気持ちがわからないときは、少し情報を減らしたくなる。", kind: "category", target: "shizumu" },
  { id: 47, text: "触ったり、使ったりして初めてわかることが多いと思う。", kind: "category", target: "sawaru" },
  { id: 48, text: "人が何かを続けてきた時間に、少し敬意を感じる。", kind: "category", target: "nokosu" },

  { id: 49, text: "気になることがあっても、まずは少し眺めてから動きたい。", kind: "motion", target: "static" },
  { id: 50, text: "興味を持ったら、早めに実際の場所へ行って確かめたくなる。", kind: "motion", target: "dynamic" },
  { id: 51, text: "何かに惹かれたとき、すぐ行動するより、しばらく考えることが多い。", kind: "motion", target: "static" },
  { id: 52, text: "気になったものは、調べるだけでなく実際に試してみたくなる。", kind: "motion", target: "dynamic" },
  { id: 53, text: "自分の中で意味づけができるまで、少し時間がほしい。", kind: "motion", target: "static" },
  { id: 54, text: "予定になかった誘いや機会にも、面白そうなら乗ってみることがある。", kind: "motion", target: "dynamic" },
  { id: 55, text: "その場で反応するより、あとからじわじわ良さがわかることが多い。", kind: "motion", target: "static" },
  { id: 56, text: "気になった場所やものには、実際に近づいてみないと気が済まない。", kind: "motion", target: "dynamic" },
  { id: 57, text: "感想をすぐ言葉にするより、一度自分の中で置いておきたい。", kind: "motion", target: "static" },
  { id: 58, text: "迷っているより、動きながら考える方が合っていることがある。", kind: "motion", target: "dynamic" },
  { id: 59, text: "良いと思ったものは、ひとまず保存して後から見返すことが多い。", kind: "motion", target: "static" },
  { id: 60, text: "気になったものは、誰かに話したり共有したりしたくなる。", kind: "motion", target: "dynamic" },

  { id: 61, text: "何かを深く味わうには、一人で受け取る時間が必要だと思う。", kind: "motion", target: "static" },
  { id: 62, text: "その場に行くことで、考えが変わることがあると思う。", kind: "motion", target: "dynamic" },
  { id: 63, text: "周りにすぐ説明するより、自分の中で納得してから話したい。", kind: "motion", target: "static" },
  { id: 64, text: "頭の中だけで考えるより、場所や人に触れた方が前に進みやすい。", kind: "motion", target: "dynamic" },
  { id: 65, text: "急いで判断するより、少し寝かせた方がしっくりくる。", kind: "motion", target: "static" },
  { id: 66, text: "自分の予定に、少し偶然が入る方が面白い。", kind: "motion", target: "dynamic" },
  { id: 67, text: "印象に残ったものは、まず自分だけで持っていたくなる。", kind: "motion", target: "static" },
  { id: 68, text: "面白いと思ったものは、誰かを連れて行きたくなることがある。", kind: "motion", target: "dynamic" },
  { id: 69, text: "何かを選ぶとき、静かに考えられる環境がほしい。", kind: "motion", target: "static" },
  { id: 70, text: "自分で試してみないと、本当に合うかどうかわからないと思う。", kind: "motion", target: "dynamic" },
  { id: 71, text: "外に出るより、まずは見たものや感じたことを整理したい。", kind: "motion", target: "static" },
  { id: 72, text: "考えがまとまらないときほど、いったん外に出た方が動き出せる。", kind: "motion", target: "dynamic" },

  { id: 73, text: "おすすめを保存するだけで、実際には行かないことが増えた。", kind: "hyoryu" },
  { id: 74, text: "選択肢を見ているうちに、最初の興味が薄れてしまうことがある。", kind: "hyoryu" },
  { id: 75, text: "楽しいことはあるのに、どこか満たされにくいと感じることがある。", kind: "hyoryu" },
  { id: 76, text: "何かを選んだあとも、別の正解があった気がしてしまう。", kind: "hyoryu" },
  { id: 77, text: "前は好きだったものに、最近あまり反応できないことがある。", kind: "hyoryu" },
  { id: 78, text: "自分で立てた予定なのに、どこか自分のための予定ではない感じがする。", kind: "hyoryu" },
  { id: 79, text: "人のおすすめを見すぎて、自分の行きたい場所がわからなくなることがある。", kind: "hyoryu" },
  { id: 80, text: "何をすれば回復するのか、自分でもよくわからない日がある。", kind: "hyoryu" },
  { id: 81, text: "予定を決めるとき、評価やランキングにかなり左右されることがある。", kind: "hyoryu" },
  { id: 82, text: "好きなものはあるはずなのに、うまく言葉にできないことが増えた。", kind: "hyoryu" },
  { id: 83, text: "情報を集めるほど、逆に動き出しにくくなることがある。", kind: "hyoryu" },
  { id: 84, text: "最近、自分が何に反応する人間なのか少しわからなくなることがある。", kind: "hyoryu" },

  { id: 85, text: "初めての場所でも、予定した場所だけ行ければ十分だ。", kind: "helper", target: "zurasuAnti" },
  { id: 86, text: "何かに引っかかっても、深く考えずに流すことが多い。", kind: "helper", target: "zurasuAnti" },
  { id: 87, text: "物を選ぶとき、実物の感覚より情報や評価の方を重視する。", kind: "helper", target: "sawaruAnti" },
  { id: 88, text: "昔の話や過去の記録には、あまり興味が湧かない。", kind: "helper", target: "nokosuAnti" },
  { id: 89, text: "気になるものがあっても、実際に動くより頭の中で考えて終わることが多い。", kind: "helper", target: "static" },
  { id: 90, text: "静かに考えるより、その場で動きながら決める方が自分に合っている。", kind: "helper", target: "dynamic" },
];

const options = [
  { label: "とてもそう思う", score: 3, size: 72, color: "#00a86b" },
  { label: "そう思う", score: 2, size: 60, color: "#00a86b" },
  { label: "ややそう思う", score: 1, size: 48, color: "#00a86b" },
  { label: "どちらでもない", score: 0, size: 38, color: "#7a7a7a" },
  { label: "あまりそう思わない", score: -1, size: 48, color: "#8e44ad" },
  { label: "そう思わない", score: -2, size: 60, color: "#8e44ad" },
  { label: "まったくそう思わない", score: -3, size: 72, color: "#8e44ad" },
];

function getTopCategory(categoryScores: Record<CategoryId, number>) {
  return Object.entries(categoryScores).sort((a, b) => b[1] - a[1])[0][0] as CategoryId;
}

function getCategoryGap(categoryScores: Record<CategoryId, number>) {
  const sorted = Object.values(categoryScores).sort((a, b) => b - a);
  return sorted[0] - sorted[1];
}

function getResultType(
  category: CategoryId,
  motion: MotionId,
  isHyoryu: boolean
): TypeId {
  if (isHyoryu) return "hyoryu";

  if (category === "zurasu") return motion === "static" ? "iwakan" : "dassen";
  if (category === "shizumu") return motion === "static" ? "yohakubito" : "monoguri";
  if (category === "sawaru") return motion === "static" ? "zararist" : "temotori";
  return motion === "static" ? "kirokuru" : "netsubito";
}

function calculateDiagnosis(answers: Record<number, number>) {
  const categoryScores: Record<CategoryId, number> = {
    zurasu: 0,
    shizumu: 0,
    sawaru: 0,
    nokosu: 0,
  };

  const motionScores: Record<MotionId, number> = {
    static: 0,
    dynamic: 0,
  };

  let hyoryuScore = 0;

  questions.forEach((question, index) => {
    const score = answers[index] ?? 0;

    if (question.kind === "category") {
      categoryScores[question.target] += score;
      return;
    }

    if (question.kind === "motion") {
      motionScores[question.target] += score;
      return;
    }

    if (question.kind === "hyoryu") {
      hyoryuScore += score;
      return;
    }

    if (question.kind === "helper") {
      if (question.target === "zurasuAnti") {
        categoryScores.zurasu -= score;
        return;
      }

      if (question.target === "sawaruAnti") {
        categoryScores.sawaru -= score;
        return;
      }

      if (question.target === "nokosuAnti") {
        categoryScores.nokosu -= score;
        return;
      }

      if (question.target === "static") {
        motionScores.static += score;
        return;
      }

      if (question.target === "dynamic") {
        motionScores.dynamic += score;
      }
    }
  });

  const topCategory = getTopCategory(categoryScores);
  const categoryGap = getCategoryGap(categoryScores);

  const topMotion: MotionId =
    motionScores.dynamic > motionScores.static ? "dynamic" : "static";

  const motionGap = Math.abs(motionScores.dynamic - motionScores.static);

  const isHyoryu =
    hyoryuScore >= 16 &&
    categoryGap <= 5 &&
    motionGap <= 5;

  const resultType = getResultType(topCategory, topMotion, isHyoryu);

  return {
    resultType,
    categoryScores,
    motionScores,
    hyoryuScore,
    topCategory,
    topMotion,
    categoryGap,
    motionGap,
    isHyoryu,
  };
}

export default function TestPage() {
  const router = useRouter();

  const pageTopRef = useRef<HTMLDivElement | null>(null);
  const questionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const nextButtonRef = useRef<HTMLButtonElement | null>(null);
  const emailSectionRef = useRef<HTMLDivElement | null>(null);
  const emailInputRef = useRef<HTMLInputElement | null>(null);

  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [email, setEmail] = useState("");
  const [currentPage, setCurrentPage] = useState(0);

  const answeredCount = Object.keys(answers).length;
  const progress = Math.round((answeredCount / questions.length) * 100);

  const totalPages = Math.ceil(questions.length / QUESTIONS_PER_PAGE);
  const pageStart = currentPage * QUESTIONS_PER_PAGE;
  const pageEnd = Math.min(pageStart + QUESTIONS_PER_PAGE, questions.length);
  const currentQuestions = questions.slice(pageStart, pageEnd);

  const isCurrentPageComplete = currentQuestions.every((_, index) => {
    return answers[pageStart + index] !== undefined;
  });

  const isComplete = answeredCount === questions.length;
  const hasNextPage = currentPage < totalPages - 1;

  function handleAnswer(questionIndex: number, score: number) {
    const updatedAnswers = {
      ...answers,
      [questionIndex]: score,
    };

    setAnswers(updatedAnswers);

    const pageCompleteAfterAnswer = currentQuestions.every((_, index) => {
      return updatedAnswers[pageStart + index] !== undefined;
    });

    const isLastQuestionOverall = questionIndex === questions.length - 1;

    window.setTimeout(() => {
      if (isLastQuestionOverall && pageCompleteAfterAnswer) {
        emailSectionRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });

        window.setTimeout(() => {
          emailInputRef.current?.focus();
        }, 350);

        return;
      }

      if (pageCompleteAfterAnswer) {
        nextButtonRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });

        window.setTimeout(() => {
          nextButtonRef.current?.focus();
        }, 350);

        return;
      }

      const nextUnansweredQuestion = currentQuestions.find((_, index) => {
        const candidateIndex = pageStart + index;
        return (
          candidateIndex > questionIndex &&
          updatedAnswers[candidateIndex] === undefined
        );
      });

      const fallbackUnansweredQuestion = currentQuestions.find((_, index) => {
        const candidateIndex = pageStart + index;
        return updatedAnswers[candidateIndex] === undefined;
      });

      const nextQuestion = nextUnansweredQuestion ?? fallbackUnansweredQuestion;

      if (!nextQuestion) return;

      questionRefs.current[nextQuestion.id - 1]?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 120);
  }

  function handleNextPage() {
    if (!isCurrentPageComplete) return;

    setCurrentPage((prev) => prev + 1);

    window.setTimeout(() => {
      pageTopRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);
  }

  function handleSubmit() {
    if (!email.includes("@")) {
      alert("メールアドレスを入力してください。");
      return;
    }

    const diagnosis = calculateDiagnosis(answers);

    localStorage.setItem(
      "yorimichi-result",
      JSON.stringify({
        ...diagnosis,
        email,
        answers,
        createdAt: new Date().toISOString(),
      })
    );

    localStorage.setItem(
      "yorimichi-diagnosis-detail",
      JSON.stringify(diagnosis)
    );

   router.push(`/result/ready?type=${diagnosis.resultType}`); router.push(`/result?type=${diagnosis.resultType}`);
  }

  return (
    <main className="min-h-screen bg-white text-[#1f1f1c]">
      <header className="sticky top-0 z-10 border-b border-[#dedede] bg-white/90 px-6 py-4 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-6">
          <div>
            <p className="text-xs tracking-[0.3em] text-[#777777]">
              YORIMICHI TEST
            </p>
            <p className="mt-1 text-xs tracking-[0.2em] text-[#777777]">
              PAGE {currentPage + 1} / {totalPages}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="h-px w-28 bg-[#d8d8d8]">
              <div
                className="h-px bg-[#1f1f1c]"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-sm tracking-[0.2em]">{progress}%</p>
          </div>
        </div>
      </header>

      <div ref={pageTopRef} className="mx-auto max-w-5xl px-6 py-14">
        <section className="mb-14">
          <p className="mb-6 text-sm tracking-[0.35em] text-[#777777]">
            90 QUESTIONS
          </p>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
            ヨリミチ診断
          </h1>
        </section>

        <section className="space-y-20">
          {currentQuestions.map((question, index) => {
            const globalIndex = pageStart + index;

            return (
              <div
                key={question.id}
                ref={(element) => {
                  questionRefs.current[globalIndex] = element;
                }}
              >
                <p className="mb-4 text-sm tracking-[0.35em] text-[#777777]">
                  QUESTION {String(question.id).padStart(2, "0")} / 90
                </p>

                <h2 className="mb-8 text-xl font-semibold leading-relaxed sm:text-2xl">
                  {question.text}
                </h2>

                <div className="flex flex-col gap-6">
                  <div className="flex items-center justify-between gap-8">
                    <p className="min-w-[110px] text-xl font-semibold text-[#00a86b]">
                      そう思う
                    </p>

                    <div className="flex flex-1 items-center justify-center gap-6 md:gap-10">
                      {options.map((option) => {
                        const selected = answers[globalIndex] === option.score;

                        return (
                          <button
                            key={option.label}
                            onClick={() =>
                              handleAnswer(globalIndex, option.score)
                            }
                            aria-label={option.label}
                            title={option.label}
                            className="relative flex shrink-0 items-center justify-center rounded-full border-2 transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#1f1f1c] focus:ring-offset-4 focus:ring-offset-white"
                            style={{
                              width: option.size,
                              height: option.size,
                              borderColor: option.color,
                              backgroundColor: selected
                                ? option.color
                                : "transparent",
                            }}
                          >
                            {selected ? (
                              <span className="text-2xl font-bold leading-none text-white">
                                ✓
                              </span>
                            ) : null}
                          </button>
                        );
                      })}
                    </div>

                    <p className="min-w-[150px] text-right text-xl font-semibold text-[#8e44ad]">
                      そう思わない
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </section>

        {hasNextPage ? (
          <div className="mt-20 flex justify-center border-t border-[#dedede] pt-10">
            <button
              ref={nextButtonRef}
              onClick={handleNextPage}
              disabled={!isCurrentPageComplete}
              className="border border-[#1f1f1c] px-12 py-5 text-sm tracking-[0.25em] transition hover:bg-[#1f1f1c] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#1f1f1c] focus:ring-offset-4 focus:ring-offset-white disabled:cursor-not-allowed disabled:opacity-40"
            >
              次へ
            </button>
          </div>
        ) : (
          <div
            ref={emailSectionRef}
            className="mt-24 border-t border-[#dedede] pt-12"
          >
            <p className="mb-4 text-sm tracking-[0.35em] text-[#777777]">
              RESULT
            </p>

            <h2 className="mb-6 text-3xl font-semibold">
              診断結果を受け取る
            </h2>

            <input
              ref={emailInputRef}
              type="email"
              placeholder="メールアドレス"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              disabled={!isComplete}
              className="mb-4 w-full border border-[#1f1f1c] bg-transparent px-5 py-4 outline-none disabled:opacity-40"
            />

            <button
              onClick={handleSubmit}
              disabled={!isComplete}
              className="border border-[#1f1f1c] px-8 py-4 text-sm tracking-[0.2em] transition hover:bg-[#1f1f1c] hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
            >
              結果を見る
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
