# npm-publish-type
npm 发布一个包的几种方式
- 源代码使用 es5 编写，采用 commonJS 模块规范
  这时候不需要进行任何配置，可以将代码提交到 npm 上
- 源代码使用 es6 编写
  - 单独采用 Babel 转码的方式
    第一部是添加 Babel 配置文件，`.babelrc`, 放在项目根目录下。`presets` 字段设置转码规则
    - 命令行转码 babel-cli
    - babel-node 代替 node，能够直接运行 ES6 代码，文件不需要转码
    - babel-polyfill 转换新语法的 API
  - webpack + babel-loader

[Babel Loader](https://github.com/babel/babel-loader)
Babel-Loader 使用 Babel 和 Webpack 转换 JS 文件

```js
npm install -D babel-loader @babel/core @babel/preset-env webpack
```
```js
module: {
  rules: [
    {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }
  ]
}
```