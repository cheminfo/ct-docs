/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'CosmicTruth documentation',
  tagline: 'Documentation of CT',
  url: 'https://nmrsolutions.io',
  baseUrl: '/ct-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'cheminfo',
  projectName: 'ct-docs',
  plugins: ['@orama/plugin-docusaurus-v3'],
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'CT Logo',
        src: 'img/ct-logo.png',
      },
      items: [
        {
          to: '/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://nmrsolutions.io/',
          label: 'nmrsolutions.io',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} CT documentation contributors. Built with Docusaurus.`,
    },
    docs: {
      sidebar: {
        hideable: true,
      },
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/cheminfo/ct-docs/edit/main/',
          routeBasePath: '/',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        blog: {
          onUntruncatedBlogPosts: 'ignore',
          blogSidebarCount: 'ALL',
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
