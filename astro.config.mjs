import { defineConfig } from 'astro/config';
import compress from "astro-compress";
import robotsTxt from "astro-robots-txt";

export default defineConfig({
  integrations: [
    compress({ css: false }),
    robotsTxt(),
  ]
});
