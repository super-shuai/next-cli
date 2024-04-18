module.exports = {
  printWidth: 120, // 超过最大值换行
  tabWidth: 2, // tab 样式宽度
  useTabs: false, // 缩进使用tab, 不使用空格
  semi: false, // 结尾不用分号
  singleQuote: true, // 使用单引号代替双引号
  quoteProps: 'as-needed',
  bracketSpacing: true, // 对象数组, 文字间加空格 {a: 1} => { a: 1 }
  trailingComma: 'es5', //结尾是否添加逗号
  jsxBracketSameLine: false, // jsx标签多行属性写法时，尖括号是否另起一行(jsxBracketSameLine: <bool>)
  jsxSingleQuote: false, // 在jsx文件中的引号需要单独设置（jsxSingleQuote: <bool>）
  arrowParens: 'always', // always箭头函数参数始终添加括号; avoid如果可以, 自动去除括号 (x) => x 变为 x => x
  insertPragma: false,
  requirePragma: false,
  proseWrap: 'never',
  htmlWhitespaceSensitivity: 'strict', //html存在空格是不敏感的
  endOfLine: 'auto', //行结尾形式 mac和linux是\n  windows是\r\n
  rangeStart: 0,
  singleAttributePerLine: false, //组件或者标签的属性是否控制一行只显示一个属性
}
