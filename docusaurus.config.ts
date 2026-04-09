import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'SelsiPad',
  tagline: 'Launch Tokens From Your Pocket',
  favicon: 'img/selsila-logo.png',

  // Future flags
  future: {
    v4: true,
  },

  url: 'https://docs.selsipad.com',
  baseUrl: '/',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/', // Docs as homepage (like GitBook)
        },
        blog: false, // Disable blog
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        docsRouteBasePath: '/',
        indexBlog: false,
        highlightSearchTermsOnTargetPage: true,
      },
    ],
  ],

  themeConfig: {
    image: 'img/selsila-logo.png',
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'SELSILA',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://t.me/Selsipad',
          label: 'Telegram',
          position: 'right',
        },
        {
          href: 'https://x.com/SelsilaWorld',
          label: '𝕏',
          position: 'right',
        },
        {
          href: 'https://www.selsiworld.com/',
          label: 'Website',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Introduction',
              to: '/',
            },
            {
              label: 'Fee Structure',
              to: '/fee-structure',
            },
            {
              label: 'Premium Badge',
              to: '/premium-badge',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Telegram Group',
              href: 'https://t.me/Selsipad',
            },
            {
              label: 'Telegram Channel',
              href: 'https://t.me/SelsilaOfficial',
            },
            {
              label: '𝕏 (Twitter)',
              href: 'https://x.com/SelsilaWorld',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Website',
              href: 'https://www.selsiworld.com/',
            },
            {
              label: 'Contact Us',
              to: '/contact-us',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Selsila World. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
