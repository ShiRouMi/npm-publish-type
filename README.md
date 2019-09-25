# npm-publish-type
npm 发布一个包的几种方式
- 源代码使用 es5 编写，采用 commonJS 模块规范
  这时候不需要进行任何配置，可以将代码提交到 npm 上
- 源代码使用 es6 编写
  - 单独采用 Babel 转码的方式
    - 命令行转码 babel-cli (2019-9-25 晚 由于网速问题只是暂缓执行)
    - babel-node 转码
    - babel-polyfill 的应用
  - webpack + babel-loader