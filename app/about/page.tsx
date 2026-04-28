import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ABOUT / 裏キック団",
  description: "裏キック団（URAKICK）について",
};

export default function AboutPage() {
  return (
    <section className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="font-mono text-xs tracking-[0.4em] text-[var(--accent-pink)]">
        // ABOUT
      </p>
      <h1 className="mt-2 text-4xl font-black tracking-tight sm:text-5xl">
        URAKICK
      </h1>
      <p className="mt-1 text-xl font-bold tracking-tight text-foreground/80">
        裏キック団
      </p>

      <div className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
        <p>
          深夜帯のアングラ配信者集団。Kick を中心に毎日どこかで誰かが配信している。
        </p>
        <p>
          このサイトでは、メンバーの配信状況がリアルタイムで反映される。
          配信中のメンバーには{" "}
          <span className="neon-pink-text font-bold">LIVE</span>{" "}
          バッジが付き、カードをクリックすると直接配信ページへ飛ぶ仕組み。
        </p>
        <p className="font-mono text-xs tracking-widest text-foreground/60">
          $ stay tuned --quiet
        </p>
      </div>

      <div className="mt-12 border-t border-border/60 pt-6 font-mono text-xs tracking-widest text-muted-foreground/70">
        DETAILS · PROFILE COPY 後ほど社長が追記
      </div>
    </section>
  );
}
