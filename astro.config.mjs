// https://astro.build/config
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // --- 
  //'shiki' | 'prism' | false
  // --- 
  // --- 
  //你最终部署的链接。Astro 会使用这个完整的链接来生成网站地图和最终构建的规范链接。
  // site: 'https://www.my-site.dev' 
  // ---
  //   typescript: false,
  // --- 
  //类型：'static' | 'server' | 'hybrid'
  //默认值：'static'
  // static - 构建静态网站，部署到任何静态托管服务器上。
  // server - 构建应用，部署到支持 SSR（服务器端渲染）的托管服务器上。
  // hybrid - 构建包含少量服务端渲染页面的静态网站。
  // output: 'static'
  // --- 
  // 增量构建
  experimental: {
    contentCollectionCache: true,
  },
  markdown: {
    // 示例：在 Markdown 中使用 prism 进行语法高亮显示
    // syntaxHighlight: 'prism',
    shikiConfig: {
    theme: "github-dark",
    // themes: {
    //   light: 'github-light',
    //   dark: 'github-dark',
    // },
    wrap: true,
    }
  },
  site: 'https://blog-template.606design.art/',
  integrations: [sitemap()]
})