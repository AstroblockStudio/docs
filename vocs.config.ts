import { defineConfig } from "vocs";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

export default defineConfig({
  title: "Astroblock Documentation",
  description: "The onchain galaxy",
  logoUrl: "https://app.astroblock.xyz/logo.png",
  ogImageUrl:
    "https://vocs.dev/api/og?logo=https://docs.astroblock.xyz/logo.png&title=%title&description=%description",
  font: {
    google: "Roboto",
  },
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
  sidebar: [
    {
      text: "What is Astroblock?",
      link: "/what-is-astroblock",
    },
    {
      text: "Explore now !",
      link: "/explore-now",
    },
    {
      text: "How It Works",
      collapsed: false,
      link: "/how-it-works",
      items: [
        {
          text: "The Galaxy Map",
          link: "/concepts/the-map",
        },
        {
          text: "Player Movement",
          link: "/concepts/player-movement",
        },
        {
          text: "Speed & Tokens",
          link: "/concepts/speed-tokens",
        },
      ],
    },
    {
      text: "Applications",
      collapsed: false,
      items: [
        {
          text: "Astroblock:Stories",
          link: "/use-cases/stories",
        },
      ],
    },
    {
      text: "Integration",
      collapsed: false,
      items: [
        {
          text: "Getting Started",
          link: "/integrations/getting-started",
        },
      ],
    },
  ],
  socials: [
    {
      icon: "github",
      link: "https://github.com/AstroblockStudio",
    },
    {
      icon: "x",
      link: "https://x.com/astroblockxyz",
    },
    {
      icon: "warpcast",
      link: "https://farcaster.xyz/~/channel/astroblock",
    },
    {
      icon: "telegram",
      link: "https://t.me/astroblockbase",
    },
  ],
});
