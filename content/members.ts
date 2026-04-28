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
const memberRole = "裏キック団 / メンバー";

export const members: Member[] = [
  {
    slug: "zenichi",
    name: "全一",
    role: "裏キック団 / 会長",
    bio: placeholderBio,
    avatar: "https://picsum.photos/seed/urakick-zenichi/600/600",
    streamingPlatforms: [
      {
        platform: "kick",
        username: "zenitu_desu",
        url: "https://kick.com/zenitu_desu",
      },
    ],
    socials: [{ platform: "x", url: "https://x.com/zenitu1217" }],
  },
  {
    slug: "kuru",
    name: "くる",
    role: memberRole,
    bio: placeholderBio,
    avatar: "https://picsum.photos/seed/urakick-kuru/600/600",
    streamingPlatforms: [
      {
        platform: "kick",
        username: "kuru96",
        url: "https://kick.com/kuru96",
      },
    ],
    socials: [{ platform: "x", url: "https://x.com/kurupaccho" }],
  },
  {
    slug: "eseaka-nyan",
    name: "エセアカにゃん",
    role: memberRole,
    bio: placeholderBio,
    avatar: "https://picsum.photos/seed/urakick-eseaka/600/600",
    streamingPlatforms: [
      {
        platform: "kick",
        username: "eseakanyan0928",
        url: "https://kick.com/eseakanyan0928",
      },
    ],
    socials: [{ platform: "x", url: "https://x.com/eseakanyan2525" }],
  },
  {
    slug: "seki-shingo",
    name: "関慎吾",
    role: memberRole,
    bio: placeholderBio,
    avatar: "https://picsum.photos/seed/urakick-seki/600/600",
    streamingPlatforms: [
      {
        platform: "kick",
        username: "sekishingo0226",
        url: "https://kick.com/sekishingo0226",
      },
    ],
    socials: [{ platform: "x", url: "https://x.com/supersekishingo" }],
  },
  {
    slug: "occhichi-hime",
    name: "おっちち姫",
    role: memberRole,
    bio: placeholderBio,
    avatar: "https://picsum.photos/seed/urakick-occhichi/600/600",
    streamingPlatforms: [
      {
        platform: "kick",
        username: "akirametai_hime",
        url: "https://kick.com/akirametai_hime",
      },
    ],
    socials: [{ platform: "x", url: "https://x.com/akirametai_hime" }],
  },
  {
    slug: "erupi",
    name: "えるぴ",
    role: memberRole,
    bio: placeholderBio,
    avatar: "https://picsum.photos/seed/urakick-erupi/600/600",
    streamingPlatforms: [
      {
        platform: "kick",
        username: "erupi1022",
        url: "https://kick.com/erupi1022",
      },
    ],
    socials: [{ platform: "x", url: "https://x.com/erupi1022" }],
  },
  {
    slug: "aizawa-koki",
    name: "相沢香輝",
    role: memberRole,
    bio: placeholderBio,
    avatar: "https://picsum.photos/seed/urakick-aizawa/600/600",
    streamingPlatforms: [
      {
        platform: "kick",
        username: "kokiaizawa",
        url: "https://kick.com/kokiaizawa",
      },
    ],
    socials: [{ platform: "x", url: "https://x.com/Kana_A369" }],
  },
  {
    slug: "murohi",
    name: "奇天烈むろひ",
    role: memberRole,
    bio: placeholderBio,
    avatar: "https://picsum.photos/seed/urakick-murohi/600/600",
    streamingPlatforms: [
      {
        platform: "kick",
        username: "kiteretsu661",
        url: "https://kick.com/kiteretsu661",
      },
    ],
    socials: [{ platform: "x", url: "https://x.com/kiteretsumurohi" }],
  },
  {
    slug: "torikara",
    name: "とりから",
    role: memberRole,
    bio: placeholderBio,
    avatar: "https://picsum.photos/seed/urakick-torikara/600/600",
    streamingPlatforms: [
      {
        platform: "kick",
        username: "torikara2929",
        url: "https://kick.com/torikara2929",
      },
    ],
    socials: [{ platform: "x", url: "https://x.com/torikara8325" }],
  },
  {
    slug: "endy",
    name: "エンディー",
    role: memberRole,
    bio: placeholderBio,
    avatar: "https://picsum.photos/seed/urakick-endy/600/600",
    streamingPlatforms: [
      {
        platform: "kick",
        username: "endynomikamado",
        url: "https://kick.com/endynomikamado",
      },
    ],
    socials: [{ platform: "x", url: "https://x.com/endy_yokosuka" }],
  },
  {
    slug: "kotacche",
    name: "こたっちぇ",
    role: memberRole,
    bio: placeholderBio,
    avatar: "https://picsum.photos/seed/urakick-kotacche/600/600",
    streamingPlatforms: [
      {
        platform: "kick",
        username: "cotache",
        url: "https://kick.com/cotache",
      },
    ],
    socials: [{ platform: "x", url: "https://x.com/kotakota4642" }],
  },
];
