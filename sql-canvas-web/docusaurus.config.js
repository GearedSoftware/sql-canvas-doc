module.exports = {
  title: 'SQL Canvas',
  tagline: 'Nam iaculis et lectus ac blandit. Fusce tempus euismod velit, eget maximus dui condimentum aliquet. Sed efficitur, nisi luctus aliquam rhoncus, ipsum tellus pellentesque est, eget pulvinar diam risus nec est. Donec sollicitudin mauris sapien, id scelerisque libero ultricies quis. Cras faucibus.',
  url: 'https://sqlcanvas.com',
  baseUrl: '/',
  favicon: 'img/sqlCanvasBadge.png',
  organizationName: 'GearedSoftware', // Usually your GitHub org/user name.
  projectName: 'sql-canvas', // Usually your repo name.
  themeConfig: {
    navbar: {
      logo: {
        alt: 'SQL Canvas Logo',
        src: 'img/sqlCanvasLogo.png',
      },
      links: [
        {to: 'https://master.test.sqlcanvas.gearedserver.com', label: 'Demo', position: 'left', target: "#blank"},
        {to: 'docs/intro', label: 'Docs', position: 'left'},
        {to: 'docs/connection', label: 'Tutorials', position: 'left'},
        {
          href: 'https://github.com/gearedsoftware/sql-canvas',
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
              label: 'Style Guide',
              to: 'docs/doc1',
            },
            {
              label: 'Docs',
              to: 'docs/intro',
            },
            {
              label: 'Tutorials',
              to: 'docs/connection',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} SQL Canvas, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
