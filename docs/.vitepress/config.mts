import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "FTC 30099 - OmicronX",
  description: 'FTC Team 30099 - OmicronX Team Website',
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
