# lightCat-i18n
这是一个轻量级原生JavaScript国际化(i18n)插件

[GitHub](https://github.com/lightCatStudio/lightCat-i18n)

[lightCatCode](https://lightCatCode.flarum.cloud)
### 一，引入lightCat-i18n
##### 1.通过网络jsDelivr引入
适用于调试环境的js文件
```JavaScript
<script src='https://cdn.jsdelivr.net/gh/lightCatStudio/lightCat-i18n@main/lightCat-i18n.js'></script>
```
适用于生产环境的js文件
```JavaScript
<script src='https://cdn.jsdelivr.net/gh/lightCatStudio/lightCat-i18n@main/lightCat-i18n.min.js'></script>
```
##### 2.通过Github仓库下载之后引入文件
### 二，使用lightCat-i18n
> 在开始之前请确保项目已经正确引入`lightCat-i18n.js`或者`lightCat-i18n.min.js`！

目录结构(仅参考):
```txt
index.html-交互页面
lightCat-i18n.min.js-插件文件
zh-cn.json-语言包
```
首先，你需要通过：
```JavaScript
$lightCat.i18n();
```
来初始化插件，之后你需要配置对应的语言文件包，默认的语言文件包是`zh-cn.json`也就是说如果你不做特殊的配置的话，它默认引入`同目录`下的`zh-cn.json`语言包，如果你的语言包不想放在与交互页面一起的目录下，你可以通过配置`language`来配置语言包路径！
```txt
例(目录文件)：
index.html-交互页面
language-语言包文件夹
    ﹂zh-cn.json-语言包
    ﹂en-us.json-语言包
    ...
lightCat-i18n.min.js-插件文件
```
你需要中文语言包：
```JavaScript
$lightCat.i18n({
    language: './languag/zh-cn.json'
});
```
你需要英文语言包：
```JavaScript
$lightCat.i18n({
    language: './languag/en-us.json'
});
```
这样你就初始化好lightCat-i18n了，接下来，你需要将语言包的内容反映到页面上，你需要通过:
|    参数    | 声明 |
|------------|------|
|    light-i18n    | 普通文本   |
|    light-i18n-p    | placeholder渲染   |
|    light-i18n-v    | value渲染   |
这几个参数来完成。
## 第一步，配置语言包:(zh-cn.json)
```json
{
    "hello": "你好"
}
```
## 第二步，配置页面元素
```Html
<h1 light-i18n="hello"></h1> //普通文本
```
```Html
<input type="text" light-i18n-p="hello"/> //placeholder渲染
```
```Html
<input type="text" light-i18n-v="hello"/> //value渲染
```
之后你就可以在页面看到输出的结果！是不是很简单！
### 最后，语音选择实现的简单小例子
```html
<select id="languageSelect">
  <option value="zh-cn.json" selected>中文简体</option>
  <option value="en-us.json">English</option>
</select>
```
```JavaScript
var languageSelect = document.getElementById('languageSelect');
languageSelect.addEventListener('change', function() {
  var selectedLanguage = languageSelect.value;
  $lightCat.i18n({
    language: selectedLanguage
  });
});
languageSelect.dispatchEvent(new Event('change'));
```
如果语言包不在同一目录下注意配置option的value！

> 这只是简单的例子，你也可以选择效率更高的方法！

如果你也喜欢此插件的话，不要忘了给颗星星哦！(⁄ ⁄•⁄ω⁄•⁄ ⁄)
