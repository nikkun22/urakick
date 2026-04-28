"use client";

import { useState, type FormEvent } from "react";

const CONTACT_EMAIL = "contact@urakick.example";

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !message) return;

    setSubmitting(true);

    const mailSubject = subject
      ? `[URAKICK] ${subject}`
      : `[URAKICK] お問い合わせ from ${name}`;
    const mailBody = [
      `お名前: ${name}`,
      `メールアドレス: ${email}`,
      "",
      "------ お問い合わせ内容 ------",
      message,
    ].join("\n");

    const href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      mailSubject,
    )}&body=${encodeURIComponent(mailBody)}`;

    window.location.href = href;
    setTimeout(() => setSubmitting(false), 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label
          htmlFor="contact-name"
          className="mb-2 block text-xs font-bold tracking-widest text-foreground/85"
        >
          お名前 <span className="text-[var(--accent-pink)]">*</span>
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          maxLength={80}
          placeholder="例: 山田 太郎"
          className="w-full rounded-md border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-[var(--accent-kick)] focus:outline-none focus:ring-1 focus:ring-[var(--accent-kick)]"
        />
      </div>

      <div>
        <label
          htmlFor="contact-email"
          className="mb-2 block text-xs font-bold tracking-widest text-foreground/85"
        >
          メールアドレス <span className="text-[var(--accent-pink)]">*</span>
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          maxLength={120}
          placeholder="例: example@example.com"
          className="w-full rounded-md border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-[var(--accent-kick)] focus:outline-none focus:ring-1 focus:ring-[var(--accent-kick)]"
        />
      </div>

      <div>
        <label
          htmlFor="contact-subject"
          className="mb-2 block text-xs font-bold tracking-widest text-foreground/85"
        >
          件名
        </label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          maxLength={120}
          placeholder="例: コラボのご相談"
          className="w-full rounded-md border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-[var(--accent-kick)] focus:outline-none focus:ring-1 focus:ring-[var(--accent-kick)]"
        />
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="mb-2 block text-xs font-bold tracking-widest text-foreground/85"
        >
          お問い合わせ内容 <span className="text-[var(--accent-pink)]">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={8}
          maxLength={2000}
          placeholder="お問い合わせ内容をご記入ください"
          className="w-full resize-y rounded-md border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-[var(--accent-kick)] focus:outline-none focus:ring-1 focus:ring-[var(--accent-kick)]"
        />
      </div>

      <p className="text-xs text-muted-foreground/80">
        送信ボタンを押すとメールアプリが起動し、入力内容が宛先（{CONTACT_EMAIL}）に送られる準備ができます。
        メール送信ボタンを押すと送信完了です。
      </p>

      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded-md border border-[var(--accent-kick)]/60 bg-[var(--accent-kick)]/15 px-6 py-3 text-sm font-bold tracking-widest text-[var(--accent-kick)] transition-all hover:bg-[var(--accent-kick)]/25 disabled:opacity-50"
      >
        {submitting ? "メールアプリを起動中..." : "送信する"}
      </button>
    </form>
  );
}
