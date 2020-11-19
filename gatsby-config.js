/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */



require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
	siteMetadata:{
		title : 'Evangelist Elma Hampton - Website',
		author : 'Elma Hampton',
		developer : 'Stratton Press Publishing',
		version : 'version 1.0.0'
	},
 	plugins: [
 		`gatsby-plugin-sass`,
 		`gatsby-plugin-react-helmet`,
 		`gatsby-transformer-remark`,
 		{
 			resolve : 'gatsby-source-filesystem',
 			options : {
 				name: 'src',
 				path : `${__dirname}/src/`
 			}
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
	        theme_color: `#663399`,
	        display: `minimal-ui`,
	        icon: `src/asset/logo/main_logo.png`, // This path is relative to the root of the site.
	      },
	    },
 	],
}