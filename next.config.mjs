import nextra from "nextra";
import githubDarkDimmed from "shiki/themes/github-dark-dimmed.json" assert { type: "json" };
import { remarkCodeHike } from "@code-hike/mdx";

const withNextra = nextra({
  theme: "nextra-theme-blog",
  themeConfig: "./theme.config.jsx",
  defaultShowCopyCode: true,
  readingTime: true,
  mdxOptions: {
    remarkPlugins: [
      [
        remarkCodeHike,
        {
          lineNumbers: false,
          showCopyButton: true,
          theme: githubDarkDimmed,
          autoImport: true,
        },
      ],
    ],
  },
});

export default withNextra({
  reactStrictMode: true,
  cleanDistDir: true,
});
