import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/my-docs/', // 部署到 GitHub Pages 时需要设置为仓库名
  head: [
    ['link', { rel: 'icon', href: '/my-docs/favicon.ico' }] // 网站图标，放在 public 目录下
  ],
  title: "My Awesome Project",// 网站标题
  description: "A VitePress Site",// 网站描述
  // 关闭死链检查，适合在开发阶段使用
  // 生产环境建议开启，以确保链接的正确性
  ignoreDeadLinks: true,
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
    outlineTitle: "内容导航",
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
      },
    ],

    sidebar: [
      {
        text: '介绍',
        items: [
          { text: '项目简介', link: '/introduction' },
          { text: '快速开始', link: '/quick-start' }
        ]
      },
      {
        text: '基础',
        items: [
          { text: 'HTML', link: '/frontend/html' },
          { text: 'CSS', link: '/frontend/css'},
          { text: 'JavaScript', link: '/frontend/javascript' },
          { text: 'TypeScript', link: '/frontend/ts' }
        ]
      },
      {
        text: "进阶",
        items: [
          { text: '网络请求', link: '/advanced/network' },
          { text: '浏览器原理', link: '/advanced/browser' },
          { text: '性能优化', link: '/advanced/performance' }
        ]
      },
      {
        text: "框架与工程化",
        items: [
          { text: 'Vue全家桶', link: '/framework/vue' },
          { text: 'React全家桶', link: '/framework/react' },
          { text: '前端工程化', link: '/framework/engineering' },
          { text: 'uni-app', link: '/framework/uni-app' },
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
