const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackTemplate = require('html-webpack-template');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = env => {
  const isProduction = env.NODE_ENV === 'production';
  return {
    mode: env.NODE_ENV,
    entry: {
      app: './src/index.js'
    },
    devServer: {
      contentBase: './public',
      historyApiFallback: true,
      port: 9000,
      open: true,
    },
    resolve: {
      extensions: ['*', '.js', '.jsx'],
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          use: ['babel-loader', 'eslint-loader'],
          exclude: /node_modules/,
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                hmr: env.NODE_ENV === 'development'
              }
            },
            'css-loader'
          ],
        },
        {
          test: /\.svg$/,
          use: [
            'babel-loader',
            {
              loader: 'react-svg-loader',
              options: { jsx: true }
            }
          ],
        },
        {
          test: /\.(jpe?g|png)/,
          use: [
            'file-loader',
            {
              loader: 'image-webpack-loader',
              options: {
                optipng: {
                  optimizationLevel: 7,
                },
                mozjpeg: {
                  progressive: true,
                  quality: 80,
                },
                webp: {
                  quality: 75
                }
              }
            }
          ]
        },
      ]
    },
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: isProduction ? '[name].[hash].css' : '[name].css',
        chunkFilename: isProduction ? '[id].[hash].css' : '[id].[hash].css',
      }),
      new HtmlWebpackPlugin({
        title: 'StyleQ - Find professional stylists',
        template: HtmlWebpackTemplate,
        inject: false,
        hash: true,
        mobile: true,
        links: [
          {
            href: '/apple-touch-icon.png',
            rel: 'apple-touch-icon',
            sizes: '180x180'
          },
          {
            href: '/favicon-32x32.png',
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
          },
          {
            href: '/favicon-16x16.png',
            rel: 'icon',
            type: 'image/png',
            sizes: '16x16'
          },
          {
            href: '/safari-pinned-tab.svg',
            rel: 'mask-icon',
            color: '#a43f6a',
          },
          {
            href: '/site.webmanifest',
            rel: 'manifest',
          },
        ],
        meta: [
          { name: 'msapplication-TileColor', content: '#a43f6a' },
          { name: 'theme-color', content: '#ffffff' },
          { name: 'description', content: 'StyleQ connects users to beauty and wellness professionals, instantly. StyleQ empowers local salons and independent stylists to generate profitable appointments during gaps in their schedules, and allows users to book appointments on the spot.'},
        ],
        // Mount ids for main app and modal portal
        appMountIds: ['app', 'modal']
      }),
      new CopyPlugin([
        { from: 'static' }
      ]),
    ],
    output: {
      filename: '[name]-[hash].bundle.js',
      path: path.resolve(__dirname, 'public'),
      publicPath: '/',
    },
  };
};
