const webpack = require('webpack');
const path = require('path');
const isDevelopment = process.env.NODE_ENV === 'development';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
function recursiveIssuer(m) {
  if (m.issuer) {
    return recursiveIssuer(m.issuer);
  } else if (m.name) {
    return m.name;
  } else {
    return false;
  }
}

const config = {
  mode: "development",
  // entry: './src/index.tsx',
  // entry: {
  //   'bundle':'./src/index.tsx',
  //   'theme-a':'./src/scss/themes/themeA.scss',
  //   'theme-b':'./src/scss/themes/themeB.scss'
  // },
  // entry: {
  //   'bundle':'./src/index.tsx',
  // },
  entry: [
    './src/index.tsx',
    './src/scss/themes/a/a.scss',
    './src/scss/themes/b/b.scss',
  ],

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist'
  },
  devServer: {
    port:8080,
    contentBase: path.join(__dirname, 'dist'),
    writeToDisk: false,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      //  images loader 
      {
        test: /\.svg$/,
        use: 'file-loader'
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'image/png'
            }
          }
        ]
      },

      // sass css loader
      {
        // test: /\.scss$/,
        test: /\.s[ac]ss$/i,
        use: [  
            {
                loader: 'file-loader',
                options: {
                    name: '[name].css',
                    // outputPath: '/',
                    publicPath: '/dist'
                }
            },
            {
                loader: 'extract-loader'
            },
            {
                loader: 'css-loader',
            },
            {
                loader: 'sass-loader',
                options: {
                    sourceMap: true
                }
            }
        ]
      },
      // ............
      // {
      //   test: /\.s[ac]ss$/i,
      //   use: [
      //     // process.env.NODE_ENV !== 'production'
      //     //   ? 'style-loader'
      //     //   : MiniCssExtractPlugin.loader,
      //     // 'css-loader',
      //     // 'sass-loader',
      //     MiniCssExtractPlugin.loader,
      //     'css-loader',
      //     'sass-loader'
      //   ],
      // }
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.tsx',
      '.ts',
      '.scss'
    ]
  },
  plugins: [
    // new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/),
    new MiniCssExtractPlugin({
      // filename: isDevelopment ? '[name].css' : '[name].[hash].css',
      // chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
      filename:'[name].css',
      chunkFilename:'[id].css',
    })
  ]
}

module.exports = config;