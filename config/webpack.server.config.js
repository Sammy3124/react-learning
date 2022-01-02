const path = require('path');
const nodeExternals = require('webpack-node-externals');

const NODE_ENV = process.env.NODE_ENV;

module.exports = {
  mode: NODE_ENV ? NODE_ENV : 'development',
  target: 'node', // webpack соберет js-файл не для браузера, а для nodeJS. Есть различия. Не используется document, window и ещё много всего
  entry: path.resolve(__dirname, '../src/server/server.js'),
  output: {
    path: path.resolve(__dirname, '../dist/server'),
    filename: 'server.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'] // Здесь мы указываем список расширений, которые webpack будет учитывать
  },
  externals: [nodeExternals()], // Исключает из бандла все зависимости node_modules
  optimization: {
    minimize: false // Отключаем минимизацию серверного бандла, потому что она не нужна
  },
  module: {
    rules: [{  // Описываем правило, что для файлов jsx, tsx будем использовать ts-loader - компилятор в js
      test: /\.[tj]sx?$/,
      use: ['ts-loader']
    }]
  }
};