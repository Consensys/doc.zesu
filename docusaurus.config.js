const {themes} = require("prism-react-renderer");
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

const isDev = process.env.NODE_ENV === "development";
const baseUrl = isDev ? "/" : "/";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Zesu",
  tagline: "Stateless ZK execution client.",
  url: "https://docs.zesu.consensys.io",
  baseUrl,
  onBrokenLinks: "throw",
  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: "throw",
    }
  },
  favicon: "img/favicon.ico",
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Consensys", // Usually your GitHub org/user name.
  projectName: "doc.zesu", // Usually your repo name.
  deploymentBranch: "gh-pages", // Github Pages deploying branch

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Set a base path separate from default /docs
          editUrl: "https://github.com/Consensys/doc.zesu/tree/main/",
          routeBasePath: "/",
          path: "./docs",
          includeCurrentVersion: true,
          // lastVersion: "23.x",
          // versions: {
          //   //defaults to the ./docs folder
          //   // using 'development' instead of 'next' as path
          //   current: {
          //     label: "development",
          //     path: "development",
          //   },
          //   //the last stable release in the versioned_docs/version-stable
          //   "23.x": {
          //     label: "stable (23.x)",
          //   },
          //   "22.x": {
          //     label: "22.x",
          //   },
          // },
          // @ts-ignore
          // eslint-disable-next-line global-require
          include: ["**/*.md", "**/*.mdx"],
          exclude: [
            "**/_*.{js,jsx,ts,tsx,md,mdx}",
            "**/_*/**",
            "**/*.test.{js,jsx,ts,tsx}",
            "**/__tests__/**",
          ],
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // algolia: {
      //   // The application ID provided by Algolia
      //   appId: "NSRFPEJ4NC",

      //   // Public API key: it is safe to commit it
      //   apiKey: "cea41b975ad6c9a01408dfda6e0061d3",

      //   indexName: "docs-template", // Ping #documentation on Slack for your index name

      //   // Optional: see doc section below
      //   contextualSearch: true,

      //   // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      //   externalUrlRegex: "external\\.com|domain\\.com",

      //   // Optional: Algolia search parameters
      //   searchParameters: {},

      //   // Optional: path for search page that enabled by default (`false` to disable it)
      //   searchPagePath: "search",

      //   // ... other Algolia params
      // },
      announcementBar: {
        id: "announcement_bar",
        content:
          "<b>Zesu and its specifications are actively evolving. Details in this documentation may change without notice.</b>",
        backgroundColor: "#FFF3CD",
        textColor: "#664D03",
        isCloseable: false,
      },
      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        title: "Zesu",
        logo: {
          alt: "Zesu logo",
          src: "img/logo.svg",
          srcDark: "img/logo_dark.svg",
          width: 32,
          height: 32,
        },
        items: [
          {
            label: "Releases",
            href: "https://github.com/Consensys/zesu/releases",
            className: "navbar-releases-link",
            position: "right",
          },
          {
            href: "https://github.com/Consensys/zesu",
            className: "header-github-link",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Documentation",
            items: [
              {
                label: "Introduction",
                to: "/",
              },
              {
                label: "Get started",
                to: "/get-started/get-guest-program",
              },
              {
                label: "Concepts",
                to: "/concepts/architecture",
              },
              {
                label: "Reference",
                to: "/reference/cli-options",
              },
            ],
          },
          {
            title: "Code",
            items: [
              {
                label: "Zesu",
                href: "https://github.com/Consensys/zesu",
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Consensys, Inc.`,
      },
      mermaid: {
        options: {
          fontFamily: 'var(--ifm-font-family-base)',
        },
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      languageTabs: [
        {
          highlight: "bash",
          language: "curl",
          logoClass: "bash",
        },
        {
          highlight: "python",
          language: "python",
          logoClass: "python",
        },
        {
          highlight: "go",
          language: "go",
          logoClass: "go",
        },
        {
          highlight: "javascript",
          language: "nodejs",
          logoClass: "nodejs",
        },
      ],
    }),
  plugins: [
    [
      "@docusaurus/plugin-google-gtag",
      {
        trackingID: "G-8KF69V6XBG",
        anonymizeIP: true,
      },
    ],
    [
      "@docusaurus/plugin-google-tag-manager",
      {
        containerId: "GTM-PJ2X8WWH",
      },
    ],
    // This is how redirects are done
    // [
    //   "@docusaurus/plugin-client-redirects",
    //   {
    //     redirects: [
    //       {
    //         from: "/HowTo/Get-Started/Installation-Options/Install-Binaries",
    //         to: "/get-started/install/install-binaries",
    //       },
    //     ],
    //     // its quite odd here in that its back to front - replace(to, from)
    //     createRedirects(existingPath) {
    //       if (existingPath.includes("/development")) {
    //         return [
    //           existingPath.replace("/development", "/en/latest"),
    //           existingPath.replace("/development", "/latest"),
    //         ];
    //       }
    //       if (existingPath.includes("/")) {
    //         return [existingPath.replace("/", "/stable")];
    //       }
    //       return undefined; // Return a falsy value: no redirect created
    //     },
    //   },
    // ],
    [
      "docusaurus-plugin-llms",
      {
        docsDir: "docs",
        generateLLMsTxt: true,
        generateLLMsFullTxt: true,
        title: "Zesu documentation",
        description:
          "Official Zesu documentation: getting started, concepts, configuration, and CLI reference for the Consensys stateless ZK execution client.",
        excludeImports: true,
        removeDuplicateHeadings: true,
        logLevel: process.env.CI ? "quiet" : "normal",
        includeOrder: [
          "index.mdx",
          "get-started/**/*",
          "concepts/**/*",
          "how-to/**/*",
          "reference/**/*",
          "troubleshooting.mdx",
        ],
      },
    ],
  ],
  themes: [
    "@docusaurus/theme-mermaid",
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        docsRouteBasePath: "/",
        hashed: true,
        indexBlog: false,
        askAi: {
          project: "zesu",
          apiUrl: process.env.ASK_AI_API_URL || "http://localhost:5000/api/stream?api_key=....",
          hotkey: "cmd+k",
          texts: {
            welcomeMessage:
              "Hi! I can answer questions about the documentation, its features or usage instructions. Be sure to check the source documentation links that I provide for full details.\n\n" +
              "Please do not input any of your own or another's personal information i.e, passwords, private keys, seed phrases, personal data, or other sensitive information. If you need support and do not want to engage with me, please reach out to us via Discord. Any information that you provide is not used for training my AI systems. For details on our data handling practices, see our Privacy Policy.\n\n" +
              "By proceeding you acknowledge the above.",
            inputPlaceholder: "Please ask a question",
          }
        },
      },
    ],

  ],
};

module.exports = config;
