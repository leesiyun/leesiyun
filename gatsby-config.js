module.exports = {
    siteMetadata: {
      title: `SIYUN'S PORTFOLIO`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
      "gatsby-plugin-image",
      "gatsby-plugin-sharp",
      {
        resolve: `gatsby-source-filesystem`,
        options: {
        name: `contents`,
        path: `${__dirname}/contents/`,
        }
      },
      "gatsby-plugin-mdx",
      "gatsby-transformer-sharp",
    ],
}