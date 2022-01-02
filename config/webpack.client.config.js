// Это настрйоки сборщика webpack.
// Webpack собирает все разрозненые файлы различных расширений и директорий в один js-файл,
// используя, при этом, разные сотронние лоадеры, транспиляторы, расширения и т.д.
// Грубо говоря, здесь описаны инструкции для webpack - что использовать, откуда и с каким расширением файлы взять, куда вставить и т.п.

const path = require('path');
const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development';
const IS_PROD = NODE_ENV === 'production';

function setupDevTool() {
  if (IS_DEV) return 'eval';
  if (IS_PROD) return false;
}

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'] // Здесь мы указываем список расширений, которые webpack будет учитывать
  },
  mode: NODE_ENV ? NODE_ENV : 'development', // Режим сборки. В режиме development конченый js будет отформатированным и читабельным, для production он будет максимально сжатым
  entry: path.resolve(__dirname, '../src/client/index.jsx'), // Путь к файлу откуда начинается выполнение
  output: { // Путь для собраного файла
    path: path.resolve(__dirname, '../dist/client'),
    filename: 'client.js'
  },
  module: {
    rules: [{  // Описываем правило, что для файлов jsx, tsx будем использовать ts-loader - компилятор в js
      test: /\.[tj]sx?$/,
      use: ['ts-loader']
    }]
  },
  devtool: setupDevTool()
};