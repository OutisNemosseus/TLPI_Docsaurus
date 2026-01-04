// @ts-check
const {themes} = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TLPI - The Linux Programming Interface',
  tagline: 'Source code examples with Monaco Editor',
  favicon: 'img/favicon.ico',

  url: 'https://tlpi-docsaurus.onrender.com',
  baseUrl: '/',

  organizationName: 'OutisNemosseus',
  projectName: 'TLPI_Docsaurus',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'TLPI Source Code',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: '/code-pages/index.html',
            label: 'Code Browser',
            position: 'left',
          },
          {
            to: '/docs/scripts/',
            label: 'Scripts Guide',
            position: 'left',
          },
          {
            href: 'https://github.com/OutisNemosseus/TLPI_Docsaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Code Browser',
                href: '/code-pages/index.html',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/OutisNemosseus/TLPI_Docsaurus',
              },
            ],
          },
        ],
        copyright: `The Linux Programming Interface by Michael Kerrisk - Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['c', 'bash'],
      },
    }),
};

module.exports = config;
