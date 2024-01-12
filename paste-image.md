## paste Image(markdown里快速粘贴图片插件)
唤起粘贴功能方式: ctrl+shift+p  或者:  ctrl+alt+V(目前可能有快捷键冲突)


## 本项目所需设置(vuePressblog, 勿删!!!)

```js
"pasteImage.path": "${projectRoot}/docs/.vuepress/public/img/${currentFileNameWithoutExt}",
"pasteImage.basePath": "${projectRoot}/docs/.vuepress/public",
"pasteImage.forceUnixStyleSeparator": true,
"pasteImage.prefix": "/"
"pasteImage.defaultName": "vscode_YMMDDHHmmss"
　　
```

## paste Image 设置示例
```js
// 我想保存在博客/源/img的所有图像，并插入图像url到文章。 而hexo将生成blog/source/作为网站的根目录，所以图像的url应该是/img/xxx.png。 所以我可以在blog/。vscode/setting中配置pasteImage。 json是这样的:  
"pasteImage.path": "${projectRoot}/source/img",

"pasteImage.basePath": "${projectRoot}/source",

"pasteImage.forceUnixStyleSeparator": true,

"pasteImage.prefix": "/"
　　

// 如果你想保存图像在单独的目录:  

"pasteImage.path": "${projectRoot}/source/img/${currentFileNameWithoutExt}",
"pasteImage.basePath": "${projectRoot}/source",
"pasteImage.forceUnixStyleSeparator": true,
"pasteImage.prefix": "/"
　　

// 如果你想保存图像与文章名称为前缀:  

"pasteImage.namePrefix": "${currentFileNameWithoutExt}_",
"pasteImage.path": "${projectRoot}/source/img",
"pasteImage.basePath": "${projectRoot}/source",
"pasteImage.forceUnixStyleSeparator": true,
"pasteImage.prefix": "/"
 

// 如果你想在markdown中使用html:

"pasteImage.insertPattern": "<img>${imageFileName}</img>"
"pasteImage.path": "${projectRoot}/source/img",
"pasteImage.basePath": "${projectRoot}/source",
"pasteImage.forceUnixStyleSeparator": true,
"pasteImage.prefix": "/"
```