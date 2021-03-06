module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "CCH Gatsby Page",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
        // path: `${__dirname}/src/pages/blog`,

      }
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    
  ],
};
