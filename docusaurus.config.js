// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OpenCyber Protocol',
  tagline: 'Documentation for OpenCyber Protocol',
  favicon: 'img/logo.svg',

  url: 'https://protocol.opencyber.xyz',
  baseUrl: '/',

  organizationName: 'OpenCyberXyz',
  projectName: 'protocol-docs',

  onBrokenLinks: 'throw',
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
          routeBasePath: '/',
          editUrl: 'https://github.com/OpenCyberXyz/protocol-docs/tree/main/',
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
      image: 'img/opencyber-social-card.jpg',
      navbar: {
        title: 'OpenCyber Protocol',
        logo: {
          alt: 'OpenCyber Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            href: 'https://github.com/OpenCyberXyz',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://opencyber.xyz/',
            label: 'App',
            position: 'left',
          },
          {
            href: 'https://cyberchain.xyz/',
            label: 'CyberChain',
            position: 'left',
          },
          {
            href: 'https://x.com/opencyberxyz',
            label: 'Twitter',
            position: 'right',
          }
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;