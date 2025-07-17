import {themes as prismThemes} from 'prism-react-renderer';
import path from 'node:path';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';


// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  markdown: {
    parseFrontMatter: async (params) => {
      const result = await params.defaultParseFrontMatter(params);
      if (!result.frontMatter.slug) {
        result.frontMatter.slug = path.basename(params.filePath, ".md");
      }
      return result;
    },
  },
  title: 'Shane\'s game spaces',
  tagline: 'A place for my toughts, notes and smalltalk',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://shaneyao.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'future0906', // Usually your GitHub org/user name.
  projectName: 'homepages', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        gtag: {
          trackingID: 'G-9BYF76TH10',
          anonymizeIP: true,
        },
        docs: {
          path: "./shane_pkm/Publish/Notes",
          routeBasePath: "/notes",
          sidebarPath: './sidebars.ts',
          beforeDefaultRemarkPlugins: [
            require('@rise4fun/docusaurus-remark-plugin-import-file'),
          ]
        },
        blog: {
          showReadingTime: true,
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          archiveBasePath: "archive",
          blogSidebarCount: 10,
          path: "./shane_pkm/Publish/Posts",
          routeBasePath: "/",
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-pages',
      {
        /**
         * Required for any multi-instance plugin
         */
        id: 'misc_page',
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: '/',
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: './shane_pkm/Publish/Pages',
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        /**
         * Required for any multi-instance plugin
         */
        id: 'gamedev_news',
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: 'gamedev/news',
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: './shane_pkm/Publish/GameDevPosts',
      },
    ],
    () => ({
      name: "custom-webpack",
      configureWebpack() {
        return { resolve: { symlinks: false } };
      },
    }),
  ],
  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Shane Yao',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'designSidebar',
          position: 'left',
          label: 'GameDesign',
        },
        {
          type: 'dropdown',
          label: 'GameDev',
          position: 'left',
          items: [
            {
              type: 'docSidebar',
              sidebarId: 'unitySidebar',
              label: 'Unity',
            },
            {
              type: 'docSidebar',
              sidebarId: 'unrealSidebar',
              label: 'Unreal',
            },
            {
              type: 'docSidebar',
              sidebarId: 'godotSidebar',
              label: 'Godot',
            },
            {
              type: 'docSidebar',
              sidebarId: 'gamedevMiscSidebar',
              label: 'Misc',
            },
          ]
        },
        {
          type: 'docSidebar',
          sidebarId: 'homelabSidebar',
          position: 'left',
          label: 'Homelab',
        },
        {
          type: 'docSidebar',
          sidebarId: 'miscSidebar',
          position: 'left',
          label: 'Misc',
        },

        { to: "/archive", label: "BlogArchive", position:"right"},        
        { to: "/gamedev/news", label: "GameNews", position:"right"},        
        {
          href: 'https://github.com/shane-yao',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      // links: [
      //   {
      //     title: 'Docs',
      //     items: [
      //       {
      //         label: 'Tutorial',
      //         to: '/docs/intro',
      //       },
      //     ],
      //   },
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Stack Overflow',
        //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //     },
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //     {
        //       label: 'X',
        //       href: 'https://x.com/docusaurus',
        //     },
        //   ],
        // },
        // {
        //   title: 'More',
        //   items: [
        //     {
        //       label: 'Blog',
        //       to: '/blog',
        //     },
        //     {
        //       label: 'GitHub',
        //       href: 'https://github.com/facebook/docusaurus',
        //     },
        //   ],
        // },
      // ],
      copyright: `Copyright © ${new Date().getFullYear()} Shane Yao`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
