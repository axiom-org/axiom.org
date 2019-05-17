module.exports = {
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/docs`,
        name: "markdown-pages"
      }
    },
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-remark-prismjs",
      options: {
        classPrefix: "language-",
        inlineCodeMarker: null,
        aliases: {},
        showLineNumbers: false,
        noInlineHighlight: false
      }
    }
  ]
};
