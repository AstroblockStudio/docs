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
          text: "🌌 Map",
          link: "/concepts/the-map",
        },
        {
          text: "☀️ Entities",
          link: "/concepts/entities",
        },
        {
          text: "🛸 Players",
          link: "/concepts/player-movement",
        },
        {
          text: "⛽ Fuel",
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
    {
      text: "Reference",
      collapsed: false,
      items: [
        {
          text: "AstroblockMap",
          link: "/reference/astroblockmap",
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
