import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RULES / 裏キック団ルール",
  description: "裏キック団の一員として必ず守らなければならない鉄則。全10条。",
};

const RULES: string[] = [
  "メンバー同士で揉めないこと。",
  "他サイトでの配信やコラボ相手や配信内容に関しては特に制限をつけない。",
  "配信での暴力行為は禁止。",
  "児童売春、未成年淫行禁止。",
  "交通違反に極力気をつける。",
  "裏キック団以外の配信者にレイドパス禁止。",
  "誕生日は全員からバースデーレイドパスを優先的にもらえる。",
  "裏キック団メンバー以外への技術的な情報漏洩禁止。",
  "チーム内での裏切り行為を禁止する。",
  "レイドパス相手が見つからない場合は裏キック団を脱退した人以外は可とする。",
];

export default function RulesPage() {
  return (
    <section className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <header className="border-b border-border/60 pb-8">
        <p className="text-xs font-bold tracking-[0.3em] text-[var(--accent-kick)]">
          RULES
        </p>
        <h1 className="mt-2 text-4xl font-black tracking-tight sm:text-5xl">
          裏キック団ルール
        </h1>
      </header>

      <div className="mt-10 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
        <p>
          <span className="font-bold text-foreground">裏キック団ルール</span>
          とは、裏キック団の一員として必ず守らなければならない鉄則です。
        </p>
        <p>
          ルールを破った者は
          <span className="font-bold text-[var(--accent-pink)]">裏キック団裁判</span>
          にてその責任を負い、相応の罰を受けることになります。
        </p>
      </div>

      <ol className="mt-12 space-y-5">
        {RULES.map((rule, index) => (
          <li
            key={index}
            className="card-elevated rounded-lg bg-card p-6"
          >
            <p className="text-sm font-bold text-[var(--accent-kick)] sm:text-base">
              第{index + 1}条
            </p>
            <p className="mt-3 text-base leading-relaxed text-foreground/95 sm:text-lg">
              {rule}
            </p>
          </li>
        ))}
      </ol>

      <div className="mt-16 border-t border-border/60 pt-6 text-xs tracking-widest text-muted-foreground/70">
        制定：裏キック団 / 全一会長
      </div>
    </section>
  );
}
