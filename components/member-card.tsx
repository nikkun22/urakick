import Image from "next/image";
import type { Member } from "@/content/members";
import type { LiveStatus } from "@/lib/live-status";
import { cn } from "@/lib/utils";

const PLATFORM_LABEL: Record<string, string> = {
  kick: "KICK",
  youtube: "YOUTUBE",
  twitch: "TWITCH",
  fuwacchi: "FUWACCHI",
  niconico: "NICONICO",
  twitcasting: "TWITCASTING",
};

function LiveBadge({ status }: { status: LiveStatus }) {
  if (!status.isLive) {
    return (
      <span className="absolute left-3 top-3 rounded border border-border/60 bg-background/70 px-2 py-0.5 font-mono text-[10px] tracking-widest text-muted-foreground backdrop-blur">
        OFFLINE
      </span>
    );
  }
  return (
    <span className="absolute left-3 top-3 flex items-center gap-1.5 rounded border border-[var(--accent-pink)]/60 bg-background/80 px-2 py-0.5 font-mono text-[10px] tracking-widest text-[var(--accent-pink)] shadow-[0_0_12px_rgba(255,16,240,0.45)] backdrop-blur">
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent-pink)] opacity-75" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--accent-pink)]" />
      </span>
      LIVE
      {status.platform ? (
        <span className="text-muted-foreground/80">
          / {PLATFORM_LABEL[status.platform] ?? status.platform.toUpperCase()}
        </span>
      ) : null}
    </span>
  );
}

function CardInner({
  member,
  status,
}: {
  member: Member;
  status: LiveStatus;
}) {
  return (
    <>
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={member.avatar}
          alt={member.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className={cn(
            "object-cover transition-transform duration-500 group-hover:scale-105",
            !status.isLive && "saturate-50 group-hover:saturate-100",
          )}
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        <LiveBadge status={status} />
        {status.isLive && status.viewers !== undefined ? (
          <span className="absolute right-3 top-3 rounded border border-border/60 bg-background/80 px-2 py-0.5 font-mono text-[10px] tracking-widest text-foreground/80 backdrop-blur">
            👁 {status.viewers.toLocaleString()}
          </span>
        ) : null}
      </div>
      <div className="space-y-2 p-4">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="text-lg font-bold tracking-tight">{member.name}</h3>
          {member.handle ? (
            <span className="font-mono text-xs text-muted-foreground">
              {member.handle}
            </span>
          ) : null}
        </div>
        <p className="font-mono text-[11px] tracking-widest text-[var(--accent-pink)]">
          {member.role}
        </p>
        {status.isLive && status.title ? (
          <p className="line-clamp-2 text-sm text-foreground/90">
            🎙 {status.title}
          </p>
        ) : (
          <p className="line-clamp-2 text-sm text-muted-foreground">
            {member.bio}
          </p>
        )}
      </div>
    </>
  );
}

export function MemberCard({
  member,
  status,
}: {
  member: Member;
  status: LiveStatus;
}) {
  const baseClass =
    "glitch-border group relative block overflow-hidden rounded-lg bg-card transition-all";

  if (status.isLive && status.liveUrl) {
    return (
      <a
        href={status.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          baseClass,
          "ring-1 ring-[var(--accent-pink)]/50 hover:ring-[var(--accent-pink)]",
        )}
      >
        <CardInner member={member} status={status} />
      </a>
    );
  }

  return (
    <div className={baseClass}>
      <CardInner member={member} status={status} />
    </div>
  );
}
