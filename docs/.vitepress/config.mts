import { defineConfig } from 'vitepress'

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
