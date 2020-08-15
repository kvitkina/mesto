const path = require('path'); // подключаем path к конфигу вебпак
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: { main: './src/pages/index.js' },
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/, // регулярное выражение, которое ищет все js файлы
          loader: 'babel-loader', // при обработке этих файлов нужно использовать babel-loader
          exclude: '/node_modules/' // исключает папку node_modules, файлы в ней обрабатывать не нужно
        },
         // добавили правило для обработки файлов
         {
          test: /.(png|svg|jpg|gif)$/, // регулярное выражение, которое ищет все файлы с такими расширениями
          loader: 'file-loader?name=./images/[name].[ext]' // при обработке этих файлов нужно использовать file-loader
      },
      {
          test: /.(eot|ttf|woff|woff2)$/,
          loader: 'file-loader?name=./vendor/[name].[ext]',
      },
        // аналогично добавьте правило для работы с html
        {
          test: /\.html$/,
          loader: 'html-loader',
        },
        {
            test: /\.css$/,  //применять это правило только к CSS-файлам
            loader:  [
              MiniCssExtractPlugin.loader,
              {
                loader: 'css-loader', options: { importLoaders: 1 } //добавьте объект options
            },
              'postcss-loader'
            ]   //при обработке этих файлов нужно использовать MiniCssExtractPlugin.loader и css-loader
        }
      ]
    },
    plugins: [ new HtmlWebpackPlugin({
      template: './src/index.html' //путь к файлу index.html
    }),
      new MiniCssExtractPlugin() //подключение плагина для объединения файлов
  ]
}
