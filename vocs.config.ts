import { defineConfig } from "vocs";

export default defineConfig({
  title: "Docs",
  font: {
    google: "Roboto",
  },
  sidebar: [
    {
      text: "What is Astroblock?",
      link: "/what-is-astroblock",
    },
    {
      text: "The App",
      link: "/applications/app",
    },
    {
      text: "Concepts",
      collapsed: false,
      items: [
        {
          text: "The Map",
          link: "/concepts/the-map",
        },
      ],
    },
    {
      text: "Use Cases",
      collapsed: false,
      items: [
        {
          text: "Stories",
          link: "/use-cases/stories",
        },
      ],
    },
    {
      text: "Integration Options",
      collapsed: false,
      items: [
        {
          text: "Typescript SDK",
          link: "/integrations/sdk",
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
  ],
  logoUrl: "https://app.astroblock.xyz/logo.png",
});
