import type { Member, StreamingHandle, StreamingPlatform } from "@/content/members";

export type LiveStatus = {
  isLive: boolean;
  platform?: StreamingPlatform;
  liveUrl?: string;
  title?: string;
  viewers?: number;
  thumbnail?: string;
};

const FETCH_TIMEOUT_MS = 4000;
const REVALIDATE_SECONDS = 60;

async function fetchWithTimeout(url: string): Promise<Response | null> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  try {
    const res = await fetch(url, {
      signal: controller.signal,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (compatible; URAKICK-LiveStatus/1.0; +https://urakick.vercel.app)",
        Accept: "application/json",
      },
      next: { revalidate: REVALIDATE_SECONDS },
    });
    return res;
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

async function checkKick(handle: StreamingHandle): Promise<LiveStatus | null> {
  const res = await fetchWithTimeout(
    `https://kick.com/api/v2/channels/${encodeURIComponent(handle.username)}`,
  );
  if (!res || !res.ok) return null;
  try {
    const data = (await res.json()) as {
      livestream?: {
        is_live?: boolean;
        session_title?: string;
        viewer_count?: number;
        thumbnail?: { url?: string } | null;
      } | null;
    };
    const stream = data.livestream;
    if (!stream || stream.is_live !== true) return null;
    return {
      isLive: true,
      platform: "kick",
      liveUrl: handle.url,
      title: stream.session_title,
      viewers: stream.viewer_count,
      thumbnail: stream.thumbnail?.url ?? undefined,
    };
  } catch {
    return null;
  }
}

async function checkPlatform(
  handle: StreamingHandle,
): Promise<LiveStatus | null> {
  switch (handle.platform) {
    case "kick":
      return checkKick(handle);
    default:
      return null;
  }
}

export async function getLiveStatus(member: Member): Promise<LiveStatus> {
  if (member.streamingPlatforms.length === 0) {
    return { isLive: false };
  }
  for (const handle of member.streamingPlatforms) {
    const status = await checkPlatform(handle);
    if (status?.isLive) return status;
  }
  return { isLive: false };
}

export async function getLiveStatusBulk(
  members: Member[],
): Promise<Map<string, LiveStatus>> {
  const entries = await Promise.all(
    members.map(async (m) => [m.slug, await getLiveStatus(m)] as const),
  );
  return new Map(entries);
}
