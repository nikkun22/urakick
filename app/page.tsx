import { Hero } from "@/components/hero";
import { MemberCard } from "@/components/member-card";
import { members } from "@/content/members";
import Link from "next/link";

export default function Home() {
  const featured = members.slice(0, 3);

  return (
    <>
      <Hero />

      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs tracking-[0.4em] text-[var(--accent-pink)]">
              // 01_MEMBERS
            </p>
            <h2 className="mt-1 text-3xl font-black tracking-tight sm:text-4xl">
              CREW
            </h2>
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
            <MemberCard key={member.slug} member={member} />
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="font-mono text-xs tracking-[0.4em] text-[var(--accent-pink)]">
            // 02_LATEST_BROADCAST
          </p>
          <h2 className="mt-1 text-3xl font-black tracking-tight sm:text-4xl">
            LATEST
          </h2>
        </div>
        <div className="glitch-border rounded-lg bg-card p-8 text-center">
          <p className="font-mono text-sm text-muted-foreground">
            アーカイブは順次追加予定。
            <Link
              href="/archive"
              className="ml-2 text-[var(--accent-neon)] underline-offset-4 hover:underline"
            >
              archive →
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
