import { MemberCard } from "@/components/member-card";
import { members } from "@/content/members";
import { getLiveStatusBulk } from "@/lib/live-status";
import type { Metadata } from "next";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "MEMBERS / 裏キック団",
  description:
    "裏キック団 メンバー。配信中のメンバーは LIVE バッジ付きで表示し、クリックでそのまま配信ページへ移動できます。",
};

export default async function MembersPage() {
  const statusMap = await getLiveStatusBulk(members);
  const liveCount = Array.from(statusMap.values()).filter((s) => s.isLive).length;

  const sorted = [...members].sort((a, b) => {
    const aLive = statusMap.get(a.slug)?.isLive ?? false;
    const bLive = statusMap.get(b.slug)?.isLive ?? false;
    if (aLive === bLive) return 0;
    return aLive ? -1 : 1;
  });

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="mb-10 border-b border-border/60 pb-8">
        <p className="text-xs font-bold tracking-[0.3em] text-[var(--accent-kick)]">
          MEMBERS
        </p>
        <h1 className="mt-2 text-4xl font-black tracking-tight sm:text-5xl">
          メンバー
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          配信中のメンバーは{" "}
          <span className="font-bold text-[var(--accent-pink)]">LIVE</span>{" "}
          バッジが付きます。カードをクリックでそのまま配信ページへ。
        </p>
        <p className="mt-3 text-xs text-muted-foreground/80">
          {liveCount > 0 ? (
            <span className="font-bold text-[var(--accent-pink)]">
              ● {liveCount}名 配信中
            </span>
          ) : (
            <span>○ 現在配信中のメンバーはいません</span>
          )}
          <span className="mx-2 text-border">/</span>
          <span>全 {members.length} 名</span>
          <span className="mx-2 text-border">/</span>
          <span>1分ごとに自動更新</span>
        </p>
      </header>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {sorted.map((member) => (
          <MemberCard
            key={member.slug}
            member={member}
            status={statusMap.get(member.slug) ?? { isLive: false }}
          />
        ))}
      </div>
    </section>
  );
}
