"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function loadUser() {
      const { data } = await supabase.auth.getUser();

      if (data.user?.email) {
        setUserEmail(data.user.email);
      }
    }

    loadUser();
  }, []);

  async function handleSignUp() {
    if (!email || !password) {
      setMessage("メールアドレスとパスワードを入力してください。");
      return;
    }

    setIsLoading(true);
    setMessage("");

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    setIsLoading(false);

    if (error) {
      setMessage(`新規登録に失敗しました：${error.message}`);
      return;
    }

    if (data.user && !data.session) {
      setMessage(
        "確認メールを送信しました。メール内のリンクを開いた後、ログインしてください。"
      );
      return;
    }

    setUserEmail(data.user?.email ?? null);
    setMessage("新規登録しました。");
  }

  async function handleLogin() {
    if (!email || !password) {
      setMessage("メールアドレスとパスワードを入力してください。");
      return;
    }

    setIsLoading(true);
    setMessage("");

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setIsLoading(false);

    if (error) {
      setMessage(`ログインに失敗しました：${error.message}`);
      return;
    }

    setUserEmail(data.user?.email ?? null);
    setMessage("ログインしました。");
  }

  async function handleLogout() {
    setIsLoading(true);
    setMessage("");

    const { error } = await supabase.auth.signOut();

    setIsLoading(false);

    if (error) {
      setMessage(`ログアウトに失敗しました：${error.message}`);
      return;
    }

    setUserEmail(null);
    setMessage("ログアウトしました。");
  }

  return (
    <main className="min-h-screen bg-[#f7f4ee] text-[#1f1f1f]">
      <div className="mx-auto min-h-screen max-w-[430px] bg-[#f7f4ee] px-5 pb-28 pt-5">
        <header className="flex items-center justify-between">
          <div>
            <p className="text-xs tracking-[0.25em] text-black/40">LOGIN</p>
            <h1 className="mt-1 text-xl font-semibold">ログイン</h1>
          </div>

          <Link
            href="/"
            className="rounded-full bg-white px-4 py-2 text-sm shadow-sm"
          >
            ホーム
          </Link>
        </header>

        <section className="mt-8 rounded-[2rem] bg-[#ebe4d8] p-6">
          <p className="text-sm text-black/50">アカウント</p>

          <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight">
            自分の図鑑を
            <br />
            保存するために
            <br />
            ログインする。
          </h2>

          <p className="mt-6 text-sm leading-7 text-black/60">
            ログインすると、採集した標本を自分のアカウントに紐づけて保存できるようになります。
          </p>
        </section>

        {userEmail && (
          <section className="mt-7 rounded-[2rem] bg-white p-5 shadow-sm">
            <p className="text-xs text-black/40">Current User</p>
            <p className="mt-2 text-sm font-medium">{userEmail}</p>

            <button
              type="button"
              onClick={handleLogout}
              disabled={isLoading}
              className="mt-5 w-full rounded-full bg-black px-6 py-4 text-center text-sm font-medium text-white disabled:opacity-50"
            >
              ログアウト
            </button>
          </section>
        )}

        {!userEmail && (
          <section className="mt-7 rounded-[2rem] bg-white p-5 shadow-sm">
            <label className="block">
              <p className="text-sm font-medium">メールアドレス</p>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="example@email.com"
                className="mt-3 w-full rounded-2xl bg-[#f7f4ee] px-4 py-4 text-base outline-none"
              />
            </label>

            <label className="mt-5 block">
              <p className="text-sm font-medium">パスワード</p>
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="6文字以上"
                className="mt-3 w-full rounded-2xl bg-[#f7f4ee] px-4 py-4 text-base outline-none"
              />
            </label>

            <div className="mt-6 space-y-3">
              <button
                type="button"
                onClick={handleLogin}
                disabled={isLoading}
                className="w-full rounded-full bg-black px-6 py-4 text-center text-sm font-medium text-white disabled:opacity-50"
              >
                {isLoading ? "処理中..." : "ログイン"}
              </button>

              <button
                type="button"
                onClick={handleSignUp}
                disabled={isLoading}
                className="w-full rounded-full bg-white px-6 py-4 text-center text-sm font-medium shadow-sm disabled:opacity-50"
              >
                新規登録
              </button>
            </div>
          </section>
        )}

        {message && (
          <section className="mt-5 rounded-[2rem] bg-white p-5 shadow-sm">
            <p className="text-sm leading-7 text-black/60">{message}</p>
          </section>
        )}

        <section className="mt-7 rounded-[2rem] border border-black/10 p-5">
          <p className="text-xs text-black/40">Next Step</p>
          <h2 className="mt-2 text-xl font-semibold">次にやること</h2>
          <p className="mt-4 text-sm leading-7 text-black/60">
            このログインが動いたら、採集ページをログイン必須にし、保存データにユーザーIDを入れます。
          </p>
        </section>
      </div>

      <nav className="fixed bottom-0 left-1/2 w-full max-w-[430px] -translate-x-1/2 border-t border-black/10 bg-white/90 px-5 py-3 backdrop-blur">
        <div className="grid grid-cols-5 text-center text-xs text-black/55">
          <Link href="/">ホーム</Link>
          <Link href="/bookshelf">本棚</Link>
          <Link href="/collect/iwakan">採集</Link>
          <Link href="/me">私</Link>
          <Link href="/login" className="font-semibold text-black">
            ログイン
          </Link>
        </div>
      </nav>
    </main>
  );
}