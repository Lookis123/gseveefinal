require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: "gsevee",
        accessToken:
          "MC5ZbHgteEJJQUFDd0Fnckhs.77-9dR7vv73vv70Lfx_vv71tUijvv73vv70n77-9LO-_ve-_vV_vv73vv73vv73vv73vv73vv71yde-_ve-_vXbvv70",
        schemas: {
          resource: require("./custom_types/resource.json"),
          category: require("./custom_types/category.json"),
          subtag: require("./custom_types/subtag.json"),
          featured: require("./custom_types/featured.json"),
          member: require("./custom_types/member.json"),
        },
        linkResolver: require("./src/utils/linkResolver").linkResolver,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-prismic-previews",
      options: {
        repositoryName: "gsevee",
        accessToken:
          "MC5ZbHgteEJJQUFDd0Fnckhs.77-9dR7vv73vv70Lfx_vv71tUijvv73vv70n77-9LO-_ve-_vV_vv73vv73vv73vv73vv73vv71yde-_ve-_vXbvv70",
      },
    },
  ],
}
