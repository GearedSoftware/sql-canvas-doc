module.exports = {
  title: 'SQL Canvas (Beta)',
  tagline: 'Visualise your data with a unique drag and drop style canvas for viewing Relational Databases. Create insights into your data that simply cant be seen with traditional tabular style result sets.',
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
        {to: 'docs/dbms', label: 'Docs', position: 'left'},
        {to: 'docs/tutorials/connection', label: 'Tutorials', position: 'left'},
        {to: 'docs/api/connection', label: 'APIs', position: 'left'},
        {to: 'docs/knowledge/mysql', label: 'Knowledge Base', position: 'left'},
        {
          href: 'https://master.test.sqlcanvas.app', 
          label: 'Demo', 
          position: 'right',
        },
        // {
        //   href: 'https://github.com/gearedsoftware/sql-canvas',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Docs',
              to: 'docs/dbms',
            },
            {
              label: 'Tutorials',
              to: 'docs/tutorials/connection',
            },
            {
              label: 'APIs',
              to: 'docs/api/connection',
            },
            {
              label: 'Knowledge Base',
              to: 'docs/knowledge/mysql',
            },
          ],
        },
        {
          title: 'About',
          items: [
            {
              label: 'Terms & Conditions',
              to: 'docs/tc',
            },
            {
              label: 'Contact Us',
              href: 'mailto:long@gearedsoftware.com?Subject=SQLCanvas ',
            },
          ],
        },
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
        //   ],
        // },
        // {
        //   title: 'Social',
        //   items: [
        //     {
        //       label: 'Blog',
        //       to: 'blog',
        //     },
        //     {
        //       label: 'GitHub',
        //       href: 'https://github.com/gearedsoftware/sql-canvas',
        //     },
        //   ],
        // },
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
          // editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
