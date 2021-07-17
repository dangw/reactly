const fs = require('fs');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const ver = process.env.npm_package_version;
const dir = process.env.PWD;
const name = process.env.npm_package_name;
const main = process.env.npm_package_config_main;
const title = process.env.npm_package_config_title;

const paths = {
  main: path.resolve(dir, main),
  src: path.resolve(dir, './src'),
  dist: path.resolve(dir, './dist'),
  ver: path.resolve(dir, `./dist/v${ver}`),
  modules: path.resolve(__dirname, "./node_modules")
};

if (fs.existsSync(path.resolve(dir, './static'))) {
  paths.static = path.resolve(dir, './static');
}

module.exports = (env) => {
  const config = {
    mode: env.production ? 'production' : 'development',
    devtool: env.production ? undefined : 'source-map',
    entry: `${paths.main}`,
    output: {
      filename: () => `v${ver}/index.js`,
      path: `${paths.dist}`
    },
    module: {
      rules: [{
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: `${paths.modules}/babel-loader`,
          options: {
            presets: [
              `${paths.modules}/@babel/preset-react`,
              `${paths.modules}/@babel/preset-typescript`
            ],
            plugins: [
              `${paths.modules}/@babel/plugin-proposal-class-properties`,
              `${paths.modules}/@babel/plugin-proposal-object-rest-spread`,
              `${paths.modules}/@babel/plugin-proposal-optional-chaining`,
              `${paths.modules}/@babel/plugin-proposal-nullish-coalescing-operator`
            ]
          },
        },
      }, {
        test: /\.css$/,
        use: [env.production ? MiniCssExtractPlugin.loader : `${paths.modules}/style-loader`, `${paths.modules}/css-loader`]
      }]
    },
    resolve: {
      modules: [paths.modules, 'node_modules'],
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.css']
    },
    externals: env.production ? {
      'react': 'React',
      'react-dom': 'ReactDOM',
      'react-router-dom': 'ReactRouterDOM'
    } : {},
    optimization: env.production ? {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.css$/,
            chunks: 'all',
            enforce: true,
          },
        },
      },
    } : {},
    plugins: [
      paths.static ? new CopyPlugin({
        patterns: [
          { from: `${paths.static}/` },
        ]
      }) : () => { },
      new HtmlWebpackPlugin({
        inject: false,
        minify: { collapseWhitespace: false },
        templateParameters: {
          'production': env.production,
          'version': ver,
          'name': name,
          'base': `/v${ver}`,
          'title': title
        },
        template: `${__dirname}/index.ejs`,
        filename: `${paths.dist}/index.${ver}.html`
      })
    ],
    devServer: {
      port: 8080,
      host: '0.0.0.0',
      inline: true,
      historyApiFallback: {
        index: `/index.${ver}.html`,
        verbose: true
      },
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
      }
    }
  }

  if (env.production) {
    config.plugins.push(new MiniCssExtractPlugin({
      filename: `./v${ver}/index.css`
    }));
  }

  return config;
};
