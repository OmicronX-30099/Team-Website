import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'
import guide from "./sidebar/guide.mts";

export default defineConfig({
  title: "ApexPathing Docs",
  description: 'ApexPathing Docs',
  base: '/Team-Website/',
  themeConfig: {
    nav: [
      { text: 'Our robot', link: '/robot' }
    ],

    search: {
      provider: 'local'
    }
  },
})
