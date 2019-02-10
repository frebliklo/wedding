module.exports = {
  siteMetadata: {
    title: 'Sara + Frederik',
    description: 'En bryllups invitation og info om foretagende.',
    author: '@frebliklo',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography'
      }
    },
    'gatsby-plugin-emotion',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Sara + Frederik bryllup',
        short_name: 'SF Bryllup',
        start_url: '/',
        background_color: '#FFFEF4',
        theme_color: '#FFFEF4',
        display: 'fullscreen',
        icon: 'src/images/site-icon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
  ],
}
