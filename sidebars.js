// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docSidebar: [
    "index",
    {
      type: "category",
      label: "Get started",
      collapsed: false,
      items: [
        "get-started/get-guest-program",
        "get-started/quickstart",
        "get-started/install-native",
      ],
    },
    {
      type: "category",
      label: "Concepts",
      collapsed: false,
      items: [
        "concepts/architecture",
        "concepts/inputs-and-outputs",
        "concepts/witness-retrieval",
      ],
    },
    {
      type: "category",
      label: "How to",
      collapsed: false,
      items: [
        "how-to/configure",
      ],
    },
    {
      type: "category",
      label: "Reference",
      collapsed: false,
      items: [
        "reference/cli-options",
        "reference/zkvm-symbols",
      ],
    },
    "troubleshooting",
  ],
};

module.exports = sidebars;
