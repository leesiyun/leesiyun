module.exports = {
    siteMetadata: {
      title: `My First Gatsby Site`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
      "gatsby-plugin-image",
      "gatsby-plugin-sharp",
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: `blog`, 
          path: `${__dirname}/blog`,
        }
      },
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: `learn`, 
          path: `${__dirname}/learn`,
        }
      },
      "gatsby-plugin-mdx",
      "gatsby-transformer-sharp",
    ],
}