module.exports = {
  siteMetadata: {
    title: "BSK Portfolio",
    description: "Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",
    author: "Bryce Sayers-Kwan",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
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
        icon: "src/images/icons/brand-icon.svg", // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-sass",
  ],
};
