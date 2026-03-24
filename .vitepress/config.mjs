import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [
    ['link', { rel: 'icon', href: '/logo2.png' }] // 网站图标，放在 public 目录下
  ],
  title: "My Awesome Project",// 网站标题
  description: "A VitePress Site",// 网站描述
  themeConfig: {
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: '没有找到相关结果',
            resetButtonTitle: '清除查询',
            fotter: {
              selectText: '选择',
              navigateText: '切换',
            }
          }
        }
      }
    },
    outlineTitle: "文章目录",
    outline: [2, 6], // 显示 h2 到 h6 的标题
    logo: '/logo.png', // 网站 logo，放在 public 目录下
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      // 其他链接
      {
        text: 'Examples', items: [
          { text: 'Markdown 示例', link: '/markdown-examples' },
          { text: ' API 示例', link: '/api-examples' }
        ]
      }
    ],

    sidebar: [
      {
        text: '列表',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zyf-19666' }
    ],
    footer: {
      copyright: 'Copyright © 2026 My Awesome Project',
    }
  }
})
