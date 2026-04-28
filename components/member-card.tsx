import Image from "next/image";
import type { Member } from "@/content/members";
import type { LiveStatus } from "@/lib/live-status";
import { XIcon } from "@/components/x-icon";
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
      <span className="absolute left-3 top-3 rounded border border-border/60 bg-background/70 px-2 py-0.5 text-[10px] font-bold tracking-widest text-muted-foreground backdrop-blur">
        OFFLINE
      </span>
    );
  }
  return (
    <span className="absolute left-3 top-3 flex items-center gap-1.5 rounded border border-[var(--accent-pink)]/70 bg-background/85 px-2 py-0.5 text-[10px] font-bold tracking-widest text-[var(--accent-pink)] live-pulse backdrop-blur">
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

export function MemberCard({
  member,
  status,
}: {
  member: Member;
  status: LiveStatus;
}) {
  const xSocial = member.socials.find((s) => s.platform === "x");

  return (
    <article
      className={cn(
        "card-elevated group relative flex flex-col overflow-hidden rounded-lg bg-card",
        status.isLive && "live-pulse",
      )}
    >
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
          <span className="absolute right-3 top-3 rounded border border-border/60 bg-background/85 px-2 py-0.5 text-[10px] font-bold tracking-widest text-foreground/85 backdrop-blur">
            👁 {status.viewers.toLocaleString()}
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h3 className="truncate text-lg font-bold tracking-tight">
              {member.name}
            </h3>
            {member.handle ? (
              <p className="truncate font-mono text-xs text-muted-foreground">
                {member.handle}
              </p>
            ) : null}
          </div>
          {xSocial ? (
            <a
              href={xSocial.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name} の X プロフィール`}
              className="shrink-0 rounded-md border border-border bg-background/40 p-2 text-muted-foreground transition-colors hover:border-foreground hover:bg-foreground/10 hover:text-foreground"
            >
              <XIcon size={14} />
            </a>
          ) : null}
        </div>

        <p className="text-[11px] font-bold tracking-widest text-[var(--accent-kick)]">
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

        {status.isLive && status.liveUrl ? (
          <a
            href={status.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-md border border-[var(--accent-pink)]/60 bg-[var(--accent-pink)]/15 px-3 py-2 text-xs font-bold tracking-widest text-[var(--accent-pink)] transition-all hover:bg-[var(--accent-pink)]/25"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent-pink)] opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--accent-pink)]" />
            </span>
            配信ページを開く →
          </a>
        ) : null}
      </div>
    </article>
  );
}
