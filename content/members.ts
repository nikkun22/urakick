export type StreamingPlatform =
  | "kick"
  | "youtube"
  | "twitch"
  | "fuwacchi"
  | "niconico"
  | "twitcasting";

export type SocialPlatform = "x" | "instagram" | "tiktok" | "discord";

export type StreamingHandle = {
  platform: StreamingPlatform;
  username: string;
  url: string;
};

export type Member = {
  slug: string;
  name: string;
  handle?: string;
  role: string;
  bio: string;
  avatar: string;
  streamingPlatforms: StreamingHandle[];
  socials: { platform: SocialPlatform; url: string }[];
};

const placeholderBio = "プロフィール準備中。";
const placeholderRole = "裏キック団 / メンバー";

export const members: Member[] = [
  {
    slug: "zenichi",
    name: "全一",
    role: placeholderRole,
    bio: placeholderBio,
    avatar: "https://picsum.photos/seed/urakick-zenichi/600/600",
    streamingPlatforms: [],
    socials: [],
  },
  {
    slug: "kuru",
    name: "くる",
    role: placeholderRole,
    bio: placeholderBio,
    avatar: "https://picsum.photos/seed/urakick-kuru/600/600",
    streamingPlatforms: [],
    socials: [],
  },
  {
    slug: "eseaka-nyan",
    name: "エセアカにゃん",
    role: placeholderRole,
    bio: placeholderBio,
    avatar: "https://picsum.photos/seed/urakick-eseaka/600/600",
    streamingPlatforms: [],
    socials: [],
  },
  {
    slug: "seki-shingo",
    name: "関慎吾",
    role: placeholderRole,
    bio: placeholderBio,
    avatar: "https://picsum.photos/seed/urakick-seki/600/600",
    streamingPlatforms: [],
    socials: [],
  },
  {
    slug: "occhichi-hime",
    name: "おっちち姫",
    role: placeholderRole,
    bio: placeholderBio,
    avatar: "https://picsum.photos/seed/urakick-occhichi/600/600",
    streamingPlatforms: [],
    socials: [],
  },
  {
    slug: "erupi",
    name: "えるぴ",
    role: placeholderRole,
    bio: placeholderBio,
    avatar: "https://picsum.photos/seed/urakick-erupi/600/600",
    streamingPlatforms: [],
    socials: [],
  },
  {
    slug: "aizawa-koki",
    name: "相沢香輝",
    role: placeholderRole,
    bio: placeholderBio,
    avatar: "https://picsum.photos/seed/urakick-aizawa/600/600",
    streamingPlatforms: [],
    socials: [],
  },
  {
    slug: "murohi",
    name: "むろひ",
    role: placeholderRole,
    bio: placeholderBio,
    avatar: "https://picsum.photos/seed/urakick-murohi/600/600",
    streamingPlatforms: [],
    socials: [],
  },
  {
    slug: "torikara",
    name: "とりから",
    role: placeholderRole,
    bio: placeholderBio,
    avatar: "https://picsum.photos/seed/urakick-torikara/600/600",
    streamingPlatforms: [],
    socials: [],
  },
  {
    slug: "endy",
    name: "エンディー",
    role: placeholderRole,
    bio: placeholderBio,
    avatar: "https://picsum.photos/seed/urakick-endy/600/600",
    streamingPlatforms: [],
    socials: [],
  },
  {
    slug: "kotacche",
    name: "こたっちぇ",
    role: placeholderRole,
    bio: placeholderBio,
    avatar: "https://picsum.photos/seed/urakick-kotacche/600/600",
    streamingPlatforms: [],
    socials: [],
  },
];
