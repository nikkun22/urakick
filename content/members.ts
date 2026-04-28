export type StreamingPlatform =
  | "kick"
  | "youtube"
  | "twitch"
  | "fuwacchi"
  | "niconico";

export type SocialPlatform = "x" | "instagram" | "tiktok" | "discord";

export type Member = {
  slug: string;
  name: string;
  handle: string;
  role: string;
  bio: string;
  avatar: string;
  streamingPlatforms: { platform: StreamingPlatform; url: string }[];
  socials: { platform: SocialPlatform; url: string }[];
};

export const members: Member[] = [
  {
    slug: "noir",
    name: "ノワール",
    handle: "@noir_urk",
    role: "リーダー / 雑談配信",
    bio: "深夜帯の雑談配信を主軸に、リスナーとの距離感が近いトークで知られる裏キック団のリーダー格。",
    avatar: "https://picsum.photos/seed/urakick-noir/600/600",
    streamingPlatforms: [
      { platform: "kick", url: "https://kick.com/" },
      { platform: "youtube", url: "https://youtube.com/" },
    ],
    socials: [{ platform: "x", url: "https://x.com/" }],
  },
  {
    slug: "kvn",
    name: "ケヴン",
    handle: "@kvn_urk",
    role: "ゲーム配信 / FPS",
    bio: "FPS中心のゲーム配信者。荒っぽい実況と高難度プレイで毎晩リスナーを煽り倒している。",
    avatar: "https://picsum.photos/seed/urakick-kvn/600/600",
    streamingPlatforms: [
      { platform: "kick", url: "https://kick.com/" },
      { platform: "twitch", url: "https://twitch.tv/" },
    ],
    socials: [{ platform: "x", url: "https://x.com/" }],
  },
  {
    slug: "rei",
    name: "ゼロレイ",
    handle: "@zero_rei",
    role: "音楽配信 / DJ",
    bio: "週末のDJミックス配信を担当。Y2K〜ハイパーポップを軸にしたセレクトで深夜のフロアを作る。",
    avatar: "https://picsum.photos/seed/urakick-rei/600/600",
    streamingPlatforms: [
      { platform: "youtube", url: "https://youtube.com/" },
      { platform: "fuwacchi", url: "https://whowatch.tv/" },
    ],
    socials: [
      { platform: "x", url: "https://x.com/" },
      { platform: "instagram", url: "https://instagram.com/" },
    ],
  },
];
