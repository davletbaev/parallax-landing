/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'HELIX',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        cssLoaderOptions: {
          camelCase: false,
        },
      },
    },
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        jsxPragma: 'React',
        allExtensions: true,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        custom: {
          families: [ 'Ubuntu', 'Orbitron' ],
          urls: [ '/fonts/fonts.css' ],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-minify-classnames',
      options: {
        dictionary: 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ0123456789',
        enableOnDevelopment: false,
      },
    },
    {
      resolve: 'gatsby-plugin-polyfill-io',
      options: {
        features: [ 'smoothscroll' ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/assets/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@components': path.resolve(__dirname, 'src/components'),
          '@shared': path.resolve(__dirname, 'src/shared'),
          '@assets': path.resolve(__dirname, 'src/assets'),
          '@layouts': path.resolve(__dirname, 'src/layouts'),
          '@modules': path.resolve(__dirname, 'src/modules')
        },
        extensions: [ 'js', 'jsx', 'ts', 'tsx' ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'HELIX',
        short_name: 'HELIX',
        start_url: '/',
        background_color: '#000',
        theme_color: '#fff',
        display: 'standalone',
        icon: 'src/assets/images/favicon.png'
      }
    }
  ],
};
