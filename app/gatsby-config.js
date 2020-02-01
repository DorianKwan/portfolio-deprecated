const tailwindcss = require("tailwindcss");

module.exports = {
  siteMetadata: {
    title: "BSK",
    description: "Portfolio",
    author: "Bryce Sayers-Kwan",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/assets`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "bryce-sayers-kwan-portfolio",
        short_name: "BSK Portfolio",
        start_url: "/",
        display: "minimal-ui",
        icon: "src/assets/icons/brand-logo.inline.svg",
      },
    },
    {
      resolve: "gatsby-plugin-sass",
      options: {
        postCssPlugins: [tailwindcss("./tailwind.config.js")],
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline.svg$/,
        },
      },
    },

    /**
     * ---------------------------------------------------------------------------
     * PurgeCSS          https://www.gatsbyjs.org/packages/gatsby-plugin-purgecss/
     * ---------------------------------------------------------------------------
     *
     * Remove unused css from css/sass/less/stylus files and modules in your
     * Gatsby project using purgecss.
     *
     * NOTE: Add the plugin AFTER other css/postcss plugins
     *
     * Available options:
     * {
     *   printRejected: true, // Print removed selectors and processed file names
     *   develop: true, // Enable while using `gatsby develop`
     *   tailwind: true, // Enable tailwindcss support
     *   whitelist: ['whitelist'], // Prevent removal this list of selectors
     *   ignore: ['/ignored.css'], // Ignore purge of this list of files/folders
     *   purgeOnly : ['components', '/main.css'], // Purge specific files/folders
     * }
     */

    "gatsby-plugin-tailwindcss",
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        tailwind: true,
      },
    },
  ],
};
