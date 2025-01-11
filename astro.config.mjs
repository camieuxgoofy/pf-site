import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from "@astrojs/react";
import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
// import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://velvetmaid.my.id',
  integrations: [sitemap(), react(), image(), tailwind(), mdx()],
  // output: "server",
  // adapter: vercel()
});