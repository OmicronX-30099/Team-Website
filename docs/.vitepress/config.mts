import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "ApexPathing Docs",
  description: 'ApexPathing Docs',
  base: '/Supernova-Docs/',
  themeConfig: {
    nav: [
      { text: 'About', link: '/about' },
      { text: 'Guide', link: '/guide'}

    ]
  }
})
