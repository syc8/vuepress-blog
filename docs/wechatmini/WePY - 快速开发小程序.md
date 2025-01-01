# [WePY](https://tencent.github.io/wepy/index.html) - 快速开发小程序

## 为什么要选择 WePY？

1. 开发风格接近 Vue.js
   + 支持 `组件化` 开发
   + 支持 `props` 传值
   + 支持 `data` 数据
   + 支持 `methods` 处理函数
   + 支持 `computed` 计算属性
   + 支持 `@` 绑定元素的处理事件 `bindtap` , `bindinput`
   + etc...
2. 支持 Promise 和 ES6 新特性 、async 和 await
3. 支持 Less 、 Sass 等 CSS 预编译语言
4. 支持 npm 第三方资源
5. 对小程序本身的优化，如请求列对处理，优雅的事件处理，生命周期的补充，性能的优化等等





![wepy创建小程序的步骤](/img/WePY - 快速开发小程序/wepy创建小程序的步骤.png)

## 创建WePY项目

1. 全局安装 `WePY` 命令行工具：

   ```
   npm i wepy-cli -g
   ```

2. 创建 `WePY` 项目：

   ```js
   wepy init standard [myproject]
   # 其中， myproject 为合法的项目名称
   ```

3. 切换到项目根目录，安装所需依赖项：

   ```
   cd myproject
   npm  install
   ```

4. 开启实时编译：

   ```
   wepy build --watch
   ```



## 配置微信开发者工具

1. 使用`微信开发者工具`-->`添加项目`，`项目目录`请选择`dist`目录。
2. `微信开发者工具`-->`项目`-->`关闭ES6转ES5`。 重要：漏掉此项会运行报错。
3. `微信开发者工具`-->`项目`-->`关闭上传代码时样式自动补全`。 重要：某些情况下漏掉此项也会运行报错。
4. `微信开发者工具`-->`项目`-->`关闭代码压缩上传`。 重要：开启后，会导致真机computed, props.sync 等等属性失效。（注：压缩功能可使用WePY提供的build指令代替，详见后文相关介绍以及Demo项目根目录中的`wepy.config.js`和`package.json`文件。）
5. 本地项目根目录运行`wepy build --watch`，开启实时编译。（注：如果同时在`微信开发者工具`-->`设置`-->`编辑器`中勾选了`文件保存时自动编译小程序`，将可以实时预览，非常方便。）



## vsCode中设置 `.wpy` 文件代码高亮

1. 在 Code 里先安装 Vue 的语法高亮插件 `Vetur`。

2. 打开任意 `.wpy` 文件。

3. 点击右下角的选择语言模式，默认为`纯文本`。
4. 在弹出的窗口中选择 `.wpy 的配置文件关联...`。
5. 在`选择要与 .wpy 关联的语言模式` 中选择 `Vue`。



## 使用 `.wpy` 文件创建页面

1. data
2. config
3. methods
   + 注意  methods 中只能定义处理函数，无法定义“自定义函数”；自定义函数需要与methods节点平级；
4. computed



## 使用repeat循环

```jsx
<repeat for="{{categorylist}}" key="id" item="it" index="i">
  <view>索引：{{i}} --- 编号：{{it.id}} --- 分类名称：{{it.name}}</view>
</repeat>
```



## 绑定tap事件

```jsx
<button type="primary" @tap="changeMsg">修改Msg消息</button>
```



## [wepy项目中使用Promise](https://github.com/Tencent/wepy/wiki/wepy%E9%A1%B9%E7%9B%AE%E4%B8%AD%E4%BD%BF%E7%94%A8Promise)

在1.4.1以下版本，wepy生成的项目默认都会加入promise polyfill。

在1.4.1以后的版本，需要用户手动加入，具体方法如下：

- **进入项目根目录，安装polyfill**

```
npm install wepy-async-function --save
```

- **在app.wpy中引入polyfill**

```
import 'wepy-async-function'
```

- **在app.wpy中使API promise化**

```js
export default class extends wepy.app {

    constructor () {
        super();
    +    this.use('promisify')
    }

}
```



## wepy项目中发起数据请求

> 注意： 在小程序项目中，没有 浏览器的概念，因此，也就没有 Ajax 的概念；
>
> 只要 请求的数据接口，是 HTTPS 协议的，同时，请求的接口域名，配置到了后台的 `安全域名`中，则，小程序就能够正常请求接口数据；

代码示例：

```js
const result =  await wepy.request('https://locally.uieee.com/categories')
this.categorylist = result.data
this.$apply()
```

注意使用 `$apply()` 函数通知数据变化；

> 需注意的是，在异步函数中更新数据的时，必须手动调用`$apply`方法，才会触发脏数据检查流程的运行。

## 引入wxs脚本模块文件(作为过滤器使用)

**注意:  引入的wxs脚本代码只能用作过滤器 , 且只能在html部分使用**

1. 定义模块文件:  home.wxs

```
module.exports = {
    // 过滤图片地址的api
    resolveImgPath: function(imgPath) {
        // 把 图片路径中的 w.h 替换为 真正的宽和高
        console.log('ok')
        console.log(imgPath)
        return imgPath.replace('w.h', '100.100')
  }
}
```

2. 在wpy文件中引入 wxs脚本

   ```js
   improt module1 from '../wxs/home.wxs'
   
   exprot default class Home extents wepy.page{
       wxs = {
   		m1: module1
       }
   }
   ```

3. 在wpy文件中使用: 模块.api名字

   ```
   m1.resolveImgPath('实参')
   ```

   

## wepy框架中引入css文件

- 将要引入的css文件后缀改为wxss

- 在app.wpy的style标签中引入

  ![1533289017819](/img/WePY - 快速开发小程序/1533289017819.png)

## ESLint 禁用 `no-undef ` 报错

方式1：(不推荐，麻烦)

```
// eslint-disable-next-line no-undef
wx.request({
    url: 'https://locally.uieee.com/categories',
    method: 'GET',
    success: function(result) {
      console.log(result)
    }
})
```

方式2：

1. 打开 wepy 项目根目录中的 `.eslintrc.js` 配置文件

2. 找到最底部的 `rules ` 规则，新增，如下规则：

   ```
   'no-undef': 0
   ```

   

