require( 'dotenv' ).config()

const { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } = process.env

if ( !CONTENTFUL_SPACE_ID || !CONTENTFUL_ACCESS_TOKEN ) {
    throw new Error(
        'Contentful spaceId and the access token need to be provided.'
    )
}

module.exports = {
    siteMetadata: {
        menu: [
            { name: 'Projects', to: '/' },
            { name: 'About', to: '/about' },
            { name: 'Contact', to: '/contact' },
        ],
        links: {
            facebook: 'https://www.facebook.com/',
            instagram: 'https://www.instagram.com/',
            pinterest: 'https://pinterest.com/',
            twitter: 'https://twitter.com/',
        },
        locale: 'en',
        // title: 'Guillermo Gudiño',
        // description: 'Artist website of Guillermo Gudiño',
        // author: '@musuauer',
    },
    plugins: [
        'gatsby-plugin-postcss',
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-source-contentful',
            options: {
                spaceId: CONTENTFUL_SPACE_ID,
                accessToken: CONTENTFUL_ACCESS_TOKEN,
                downloadLocal: true,
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${ __dirname }/src/assets/images`,
            },
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'Guillermo Gudiño',
                short_name: 'guillermo_gudino',
                start_url: '/',
                background_color: '#ffffff',
                theme_color: '#3182ce',
                display: 'minimal-ui',
                icon: 'src/images/icon.png',
            },
        },
    ],
}
