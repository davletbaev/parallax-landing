module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "parallax-landing",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-plugin-svgr",
    "gatsby-transformer-sharp",
    "gatsby-plugin-typescript",
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["Inter"],
          urls: ["/fonts/fonts.css"],
        },
      },
    },
    {
      resolve: "gatsby-plugin-minify-classnames",
      options: {
        dictionary: "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ0123456789",
        enableOnDevelopment: false,
      },
    },
    {
      resolve: "gatsby-plugin-polyfill-io",
      options: {
        features: ["smoothscroll"],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/assets/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@components": path.resolve(__dirname, "src/components"),
          "@shared": path.resolve(__dirname, "src/shared"),
          "@assets": path.resolve(__dirname, "src/assets"),
          "@layouts": path.resolve(__dirname, "src/layouts"),
        },
        extensions: ["js", "jsx", "ts", "tsx"],
      },
    },
  ],
};
