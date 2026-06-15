"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabase";

const categories = [
  "変な看板",
  "不自然な道",
  "気になる建物",
  "変なルール",
  "妙な空気",
  "説明できないひっかかり",
];

const prefectures = [
  "未設定",
  "北海道",
  "青森県",
  "岩手県",
  "宮城県",
  "秋田県",
  "山形県",
  "福島県",
  "茨城県",
  "栃木県",
  "群馬県",
  "埼玉県",
  "千葉県",
  "東京都",
  "神奈川県",
  "新潟県",
  "富山県",
  "石川県",
  "福井県",
  "山梨県",
  "長野県",
  "岐阜県",
  "静岡県",
  "愛知県",
  "三重県",
  "滋賀県",
  "京都府",
  "大阪府",
  "兵庫県",
  "奈良県",
  "和歌山県",
  "鳥取県",
  "島根県",
  "岡山県",
  "広島県",
  "山口県",
  "徳島県",
  "香川県",
  "愛媛県",
  "高知県",
  "福岡県",
  "佐賀県",
  "長崎県",
  "熊本県",
  "大分県",
  "宮崎県",
  "鹿児島県",
  "沖縄県",
];

function getTodayText() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const date = String(today.getDate()).padStart(2, "0");

  return `${year}.${month}.${date}`;
}

async function compressImageFile(file: File): Promise<File> {
  const maxLength = 1600;
  const quality = 0.75;

  return new Promise((resolve, reject) => {
    const image = new Image();
    const objectUrl = URL.createObjectURL(file);

    image.onload = () => {
      URL.revokeObjectURL(objectUrl);

      const originalWidth = image.width;
      const originalHeight = image.height;

      const scale = Math.min(
        1,
        maxLength / Math.max(originalWidth, originalHeight)
      );

      const width = Math.round(originalWidth * scale);
      const height = Math.round(originalHeight * scale);

      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;

      const context = canvas.getContext("2d");

      if (!context) {
        reject(new Error("画像の圧縮に失敗しました"));
        return;
      }

      context.drawImage(image, 0, 0, width, height);

      canvas.toBlob(
        (blob) => {
          if (!blob) {
            reject(new Error("画像の圧縮に失敗しました"));
            return;
          }

          const compressedFileName = file.name.replace(/\.[^/.]+$/, "") + ".jpg";

          const compressedFile = new File([blob], compressedFileName, {
            type: "image/jpeg",
            lastModified: Date.now(),
          });

          resolve(compressedFile);
        },
        "image/jpeg",
        quality
      );
    };

    image.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      reject(new Error("画像を読み込めませんでした"));
    };

    image.src = objectUrl;
  });
}

export default function CollectIwakanPage() {
  const router = useRouter();

  const [userId, setUserId] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  const [selectedImageFile, setSelectedImageFile] = useState<File | null>(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null);

  const [title, setTitle] = useState("");
  const [place, setPlace] = useState("未設定");
  const [category, setCategory] = useState(categories[0]);
  const [collectedText, setCollectedText] = useState("");
  const [frictionText, setFrictionText] = useState("");
  const [normalText, setNormalText] = useState("");
  const [personalText, setPersonalText] = useState("");
  const [name, setName] = useState("");
  const [strength, setStrength] = useState(3);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    async function checkAuth() {
      const { data } = await supabase.auth.getUser();

      if (!data.user) {
        router.push("/login");
        return;
      }

      setUserId(data.user.id);
      setUserEmail(data.user.email ?? null);
      setIsCheckingAuth(false);
    }

    checkAuth();
  }, [router]);

  function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    setSelectedImageFile(file);

    const previewUrl = URL.createObjectURL(file);
    setImagePreviewUrl(previewUrl);
  }

  async function uploadImageIfNeeded(currentUserId: string) {
    if (!selectedImageFile) {
      return null;
    }

    const compressedFile = await compressImageFile(selectedImageFile);

    const filePath = `${currentUserId}/iwakan/${Date.now()}-${crypto.randomUUID()}.jpg`;

    const { error: uploadError } = await supabase.storage
      .from("specimen-images")
      .upload(filePath, compressedFile, {
        cacheControl: "3600",
        upsert: false,
        contentType: "image/jpeg",
      });

    if (uploadError) {
      throw uploadError;
    }

    const { data } = supabase.storage
      .from("specimen-images")
      .getPublicUrl(filePath);

    return data.publicUrl;
  }

  async function handleSave() {
    if (isSaving) return;

    if (!userId) {
      alert("ログインが必要です。");
      router.push("/login");
      return;
    }

    setIsSaving(true);

    try {
      const imageUrl = await uploadImageIfNeeded(userId);

      const { error } = await supabase.from("specimens").insert({
        user_id: userId,
        owner_slug: "yuta",
        book_key: "iwakan",
        title: title || "名前のない標本",
        place,
        collected_date: getTodayText(),
        category,
        collected_text: collectedText,
        friction_text: frictionText,
        normal_text: normalText,
        personal_text: personalText,
        name: name || "まだ名前のない違和感",
        strength,
        image_url: imageUrl,
      });

      if (error) {
        alert(`保存に失敗しました: ${error.message}`);
        setIsSaving(false);
        return;
      }

      router.push("/collect/iwakan/complete");
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "保存に失敗しました";

      alert(`保存に失敗しました: ${message}`);
      setIsSaving(false);
    }
  }

  if (isCheckingAuth) {
    return (
      <main className="min-h-screen bg-[#f7f4ee] text-[#1f1f1f]">
        <div className="mx-auto min-h-screen max-w-[430px] bg-[#f7f4ee] px-5 pb-28 pt-5">
          <p className="pt-10 text-sm text-black/50">ログイン状態を確認中...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7f4ee] text-[#1f1f1f]">
      <div className="mx-auto min-h-screen max-w-[430px] bg-[#f7f4ee] px-5 pb-28 pt-5">
        <header className="flex items-center justify-between">
          <div>
            <p className="text-xs tracking-[0.25em] text-black/40">COLLECT</p>
            <h1 className="mt-1 text-xl font-semibold">違和感を採集する</h1>
          </div>

          <Link
            href="/books/iwakan"
            className="rounded-full bg-white px-4 py-2 text-sm shadow-sm"
          >
            ヨリミチへ
          </Link>
        </header>

        <section className="mt-5 rounded-2xl bg-white/70 p-4 text-xs leading-6 text-black/45">
          ログイン中：{userEmail}
        </section>

        <section className="mt-5 rounded-[2rem] bg-[#ebe4d8] p-6">
          <p className="text-sm text-black/50">今日の問い</p>

          <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight">
            この違和感に、
            <br />
            名前を
            <br />
            つけるなら？
          </h2>

          <p className="mt-6 text-sm leading-7 text-black/60">
            写真のきれいさよりも、何にひっかかったのかを残します。
            その場で見つけた違和感を、ひとつのページにします。
          </p>
        </section>

        <div className="mt-7 space-y-5">
          <section className="rounded-[2rem] bg-white p-5 shadow-sm">
            <p className="text-sm font-medium">写真</p>
            <p className="mt-2 text-xs leading-6 text-black/45">
              写真はアップロード前に自動で圧縮されます。
            </p>

            <div className="mt-4 flex h-56 items-center justify-center overflow-hidden rounded-3xl bg-[#ded6c8]">
              {imagePreviewUrl ? (
                <img
                  src={imagePreviewUrl}
                  alt="採集写真のプレビュー"
                  className="h-full w-full object-cover"
                />
              ) : (
                <p className="text-sm text-black/40">写真を撮る</p>
              )}
            </div>

            <input
              type="file"
              accept="image/*"
              capture="environment"
              onChange={handleImageChange}
              className="mt-4 block w-full text-sm text-black/60 file:mr-4 file:rounded-full file:border-0 file:bg-black file:px-5 file:py-3 file:text-sm file:text-white"
            />
          </section>

          <section className="rounded-[2rem] bg-white p-5 shadow-sm">
            <p className="text-sm font-medium">タイトル</p>
            <input
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="例：入口だけ異様に低い店"
              className="mt-3 w-full rounded-2xl bg-[#f7f4ee] px-4 py-4 text-base outline-none"
            />
          </section>

          <section className="rounded-[2rem] bg-white p-5 shadow-sm">
            <p className="text-sm font-medium">撮影県</p>
            <select
              value={place}
              onChange={(event) => setPlace(event.target.value)}
              className="mt-3 w-full rounded-2xl bg-[#f7f4ee] px-4 py-4 text-base outline-none"
            >
              {prefectures.map((prefecture) => (
                <option key={prefecture}>{prefecture}</option>
              ))}
            </select>
          </section>

          <section className="rounded-[2rem] bg-white p-5 shadow-sm">
            <p className="text-sm font-medium">分類</p>
            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="mt-3 w-full rounded-2xl bg-[#f7f4ee] px-4 py-4 text-base outline-none"
            >
              {categories.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </section>

          <section className="rounded-[2rem] bg-white p-5 shadow-sm">
            <p className="text-sm font-medium">何を採集した？</p>
            <textarea
              value={collectedText}
              onChange={(event) => setCollectedText(event.target.value)}
              placeholder="例：普通の店に見えるのに、入口だけが妙に低かった。"
              className="mt-3 min-h-28 w-full rounded-2xl bg-[#f7f4ee] px-4 py-4 text-base leading-7 outline-none"
            />
          </section>

          <section className="rounded-[2rem] bg-white p-5 shadow-sm">
            <p className="text-sm font-medium">どこに違和感を覚えた？</p>
            <textarea
              value={frictionText}
              onChange={(event) => setFrictionText(event.target.value)}
              placeholder="例：入る前に、自然と身体を小さくしないといけない感じ。"
              className="mt-3 min-h-28 w-full rounded-2xl bg-[#f7f4ee] px-4 py-4 text-base leading-7 outline-none"
            />
          </section>

          <section className="rounded-[2rem] bg-white p-5 shadow-sm">
            <p className="text-sm font-medium">普通ならどう見える？</p>
            <textarea
              value={normalText}
              onChange={(event) => setNormalText(event.target.value)}
              placeholder="例：ただの古い個人店。"
              className="mt-3 min-h-24 w-full rounded-2xl bg-[#f7f4ee] px-4 py-4 text-base leading-7 outline-none"
            />
          </section>

          <section className="rounded-[2rem] bg-white p-5 shadow-sm">
            <p className="text-sm font-medium">自分にはどう見えた？</p>
            <textarea
              value={personalText}
              onChange={(event) => setPersonalText(event.target.value)}
              placeholder="例：人を少しだけ謙虚にさせる入口に見えた。"
              className="mt-3 min-h-24 w-full rounded-2xl bg-[#f7f4ee] px-4 py-4 text-base leading-7 outline-none"
            />
          </section>

          <section className="rounded-[2rem] bg-white p-5 shadow-sm">
            <p className="text-sm font-medium">
              この違和感に名前をつけるなら？
            </p>
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="例：背を低くする入口"
              className="mt-3 w-full rounded-2xl bg-[#f7f4ee] px-4 py-4 text-base outline-none"
            />
          </section>

          <section className="rounded-[2rem] bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">違和感の強さ</p>
              <p className="text-sm text-black/50">{strength} / 5</p>
            </div>

            <input
              type="range"
              min="1"
              max="5"
              value={strength}
              onChange={(event) => setStrength(Number(event.target.value))}
              className="mt-5 w-full"
            />
          </section>

          <button
            type="button"
            onClick={handleSave}
            disabled={isSaving}
            className="w-full rounded-full bg-black px-6 py-4 text-center text-sm font-medium text-white disabled:opacity-50"
          >
            {isSaving ? "保存中..." : "ページとして保存する"}
          </button>
        </div>
      </div>

      <nav className="fixed bottom-0 left-1/2 w-full max-w-[430px] -translate-x-1/2 border-t border-black/10 bg-white/90 px-5 py-3 backdrop-blur">
        <div className="grid grid-cols-5 text-center text-xs text-black/55">
          <Link href="/">ホーム</Link>
          <Link href="/bookshelf">本棚</Link>
          <Link href="/collect/iwakan" className="font-semibold text-black">
            採集
          </Link>
          <Link href="/me">私</Link>
          <Link href="/login">ログイン</Link>
        </div>
      </nav>
    </main>
  );
}