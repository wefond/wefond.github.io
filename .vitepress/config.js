javascript
import { defineConfig } from 'vitepress'

export default defineConfig({
  // 默认语言（中文）
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      themeConfig: {
        nav: [
          { text: '首页', link: '/' },
          { text: '关于我们', link: '/about' }
        ],
        sidebar: [
          { text: '指南', items: [{ text: '介绍', link: '/intro' }] }
        ]
      }
    },
    // 英文版配置
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/', // 英文版所有的路由都会加上 /en/ 前缀
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'About', link: '/en/about' }
        ],
        sidebar: [
          { text: 'Guide', items: [{ text: 'Introduction', link: '/en/intro' }] }
        ]
      }
    }
  }
})
