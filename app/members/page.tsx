import { MemberCard } from "@/components/member-card";
import { members } from "@/content/members";
import { getLiveStatusBulk } from "@/lib/live-status";
import type { Metadata } from "next";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "MEMBERS / 裏キック団",
  description: "裏キック団 全メンバー一覧。配信中のメンバーは LIVE バッジ付きで表示。",
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
        <p className="font-mono text-xs tracking-[0.4em] text-[var(--accent-pink)]">
          // ROSTER
        </p>
        <h1 className="mt-2 text-4xl font-black tracking-tight sm:text-5xl">
          MEMBERS
        </h1>
        <p className="mt-3 font-mono text-xs tracking-widest text-muted-foreground">
          {liveCount > 0 ? (
            <span className="neon-pink-text">
              ● {liveCount} LIVE NOW
            </span>
          ) : (
            <span>○ NO ACTIVE BROADCAST</span>
          )}
          <span className="mx-2 text-border">/</span>
          <span>TOTAL {members.length} MEMBERS</span>
          <span className="mx-2 text-border">/</span>
          <span className="text-muted-foreground/70">AUTO-REFRESH 60s</span>
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
