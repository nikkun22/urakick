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
  bio?: string;
  avatar: string;
  streamingPlatforms: StreamingHandle[];
  socials: { platform: SocialPlatform; url: string }[];
};

const memberRole = "裏キック団 / メンバー";
const avatarFor = (xHandle: string) => `https://unavatar.io/x/${xHandle}`;

export const members: Member[] = [
  {
    slug: "zenichi",
    name: "全一",
    role: "裏キック団 / 団長",
    avatar: "/members/zenichi.jpg",
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
    slug: "eseaka-nyan",
    name: "エセアカにゃん",
    role: memberRole,
    avatar: "/members/eseaka-nyan.png",
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
    slug: "occhichi-hime",
    name: "おっちち姫",
    role: memberRole,
    avatar: avatarFor("akirametai_hime"),
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
    avatar: "/members/erupi.jpg",
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
    avatar: avatarFor("Kana_A369"),
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
    avatar: avatarFor("kiteretsumurohi"),
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
    slug: "endy",
    name: "エンディー",
    role: memberRole,
    avatar: avatarFor("endy_yokosuka"),
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
    slug: "maruco",
    name: "まるこ",
    role: memberRole,
    avatar: "https://unavatar.io/maruco10",
    streamingPlatforms: [
      {
        platform: "kick",
        username: "maruco10",
        url: "https://kick.com/maruco10",
      },
    ],
    socials: [],
  },
  {
    slug: "naka-chan",
    name: "なかちゃん",
    role: memberRole,
    avatar: avatarFor("7980ken"),
    streamingPlatforms: [
      {
        platform: "kick",
        username: "naka7980naka",
        url: "https://kick.com/naka7980naka",
      },
    ],
    socials: [{ platform: "x", url: "https://x.com/7980ken" }],
  },
];
