'use strict';

const path = require('path');

module.exports = {
    mode: "development",
    entry: './src/app.ts',
    context: path.resolve(__dirname),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/'
      },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [ '.ts','.js']
    },
    devtool: 'inline-source-map',
    plugins: [
    ],
    devServer: {
        static: [
          {
            directory: path.join(__dirname),
          },
        ],
      },

};