// output.pathに絶対パスを指定する必要があるため、pathモジュールを読み込んでおく
const path = require('path');

module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: "development",
  entry: './src/index.js',
  output: {
    // 出力するファイル名
      filename: 'index.js',
      // 出力先のパス（絶対パスを指定する必要がある）
      path: path.join(__dirname, '../webroot/js')
  },
  module: {
    rules: [
      {
        // 拡張子 .js の場合
        test: /\.js$/,
        use: [
          {
            // Babel を利用する
            loader: "babel-loader",
            // Babel のオプションを指定する
            options: {
              presets: [
                // プリセットを指定することで、ES2019 を ES5 に変換
                "@babel/preset-env",
                // React の JSX を解釈
                "@babel/react"
              ]
            }
          }
        ]
      }
    ]
  }
};
