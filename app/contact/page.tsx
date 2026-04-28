import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "CONTACT / 裏キック団",
  description:
    "裏キック団へのお問い合わせ・コラボ依頼などはこちらから。",
};

export default function ContactPage() {
  return (
    <section className="mx-auto w-full max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
      <header className="border-b border-border/60 pb-8">
        <p className="text-xs font-bold tracking-[0.3em] text-[var(--accent-kick)]">
          CONTACT
        </p>
        <h1 className="mt-2 text-4xl font-black tracking-tight sm:text-5xl">
          お問い合わせ
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          裏キック団へのお問い合わせ・コラボ依頼などはこちらのフォームよりご連絡ください。
        </p>
      </header>

      <div className="mt-10">
        <ContactForm />
      </div>

      <div className="mt-12 border-t border-border/60 pt-6 text-xs tracking-widest text-muted-foreground/70">
        ※ 内容を確認後、順次ご返信いたします
      </div>
    </section>
  );
}
