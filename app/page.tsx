import { Hero } from "@/components/hero";
import { MemberCard } from "@/components/member-card";
import { members } from "@/content/members";
import { getLiveStatusBulk } from "@/lib/live-status";
import Link from "next/link";

export const revalidate = 60;

export default async function Home() {
  const featured = members.slice(0, 6);
  const statusMap = await getLiveStatusBulk(featured);
  const liveCount = Array.from(statusMap.values()).filter((s) => s.isLive).length;

  return (
    <>
      <Hero />

      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs tracking-[0.4em] text-[var(--accent-pink)]">
              // 01_CREW
            </p>
            <h2 className="mt-1 text-3xl font-black tracking-tight sm:text-4xl">
              MEMBERS
            </h2>
            <p className="mt-2 font-mono text-xs tracking-widest text-muted-foreground">
              {liveCount > 0 ? (
                <span className="neon-pink-text">
                  {liveCount} LIVE NOW
                </span>
              ) : (
                <span>NO ACTIVE BROADCAST</span>
              )}
              <span className="mx-2 text-border">/</span>
              <span>{members.length} MEMBERS</span>
            </p>
          </div>
          <Link
            href="/members"
            className="font-mono text-xs tracking-widest text-muted-foreground hover:text-[var(--accent-neon)]"
          >
            ALL MEMBERS →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((member) => (
            <MemberCard
              key={member.slug}
              member={member}
              status={statusMap.get(member.slug) ?? { isLive: false }}
            />
          ))}
        </div>
      </section>
    </>
  );
}
