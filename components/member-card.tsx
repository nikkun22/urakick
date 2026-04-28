import Image from "next/image";
import Link from "next/link";
import type { Member } from "@/content/members";

export function MemberCard({ member }: { member: Member }) {
  return (
    <Link
      href={`/members/${member.slug}`}
      className="glitch-border group relative overflow-hidden rounded-lg bg-card transition-all"
    >
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={member.avatar}
          alt={member.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        <span className="absolute left-3 top-3 rounded border border-[var(--accent-neon)]/40 bg-background/70 px-2 py-0.5 font-mono text-[10px] tracking-widest text-[var(--accent-neon)] backdrop-blur">
          MEMBER
        </span>
      </div>
      <div className="space-y-2 p-4">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="text-lg font-bold tracking-tight">{member.name}</h3>
          <span className="font-mono text-xs text-muted-foreground">
            {member.handle}
          </span>
        </div>
        <p className="font-mono text-[11px] tracking-widest text-[var(--accent-pink)]">
          {member.role}
        </p>
        <p className="line-clamp-2 text-sm text-muted-foreground">
          {member.bio}
        </p>
      </div>
    </Link>
  );
}
