module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "My Portfolio Website",
    description: "some description lol",
    author: "Tay Yong Qiang",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-smoothscroll",
    {
      resolve: "gatsby-plugin-page-progress",
      options: {
        color: "#000000",
      },
    },
  ],
};
