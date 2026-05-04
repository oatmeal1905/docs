// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TourClub',
  tagline: 'Техническая документация для информационной системы TourClub',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },
  markdown: {
    format: 'detect',
  },

  // Set the production url of your site here
  url: 'https://oatmeal1905.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'oatmeal1905', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,
  deploymentBranch: 'gh-pages', 

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
  [
    'classic',
    ({
      docs: {
        sidebarPath: './sidebars.js',
        editUrl: 'https://github.com/oatmeal1905/docs/edit/main/',
        remarkPlugins: [
          [require('@akebifiky/remark-simple-plantuml'), { baseUrl: 'https://www.plantuml.com/plantuml/svg' }]
        ],
      },
      blog: false,
      theme: {
        customCss: './src/css/custom.css',
      },
    }),
  ],
  [
    'redocusaurus',
    {
      specs: [
        {
          id: 'tourclub',
          spec: 'static/api/openapi.yaml',
          route: '/api/',
        },
      ],
      theme: {
        primaryColor: '#2e7d32',
      },
    },
  ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'TourClub',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Документация',
          },
          {
            to: '/docs/docs/api/api-reference',
            label: 'API',
            position: 'left',
          },
          {
            href: 'https://github.com/oatmeal1905/docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Документация',
            items: [
              {
                label: 'Главная',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Репозиторий',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/oatmeal1905/docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Мария Овсянникова. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
