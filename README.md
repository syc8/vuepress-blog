## git
仓库地址: git@github.com:syc8/vuepress-blog.git

…or 新建仓库
```js
echo "# vuepress-blog" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:syc8/vuepress-blog.git
git push -u origin main
```

…or 现有仓库Push
```js
git remote add origin git@github.com:syc8/vuepress-blog.git
git branch -M main
git push -u origin main
```




## 启动
yarn docs:dev # npm run docs:dev

## 打包
yarn docs:build

## 提交(本工程)
yarn push 或 yarn push "message"

注：在本工程根目录，通过gitbash面板执行(具体执行脚本在push.sh中)

## 发布&提交(静态网站)
yarn deploy

注：在本工程根目录，通过gitbash面板执行(指执行下方deploy.sh中的脚本)


## 编辑
#### 如在typora上编辑（推荐）
编辑前注意：修改图片路径为"img/同markdown文件名/**"，方可在typora上正常显示；

编辑结束后
1. 必须更改图片路径为"/img/同markdown文件名/**"
2. 同步当前文件的的图片到/public/img/对应文件中
3. 然后保存、发布。

#### 如在vscode上编辑并启动预览，
编辑前：图片路径为"/img/同markdown文件名/**"，方可保证预览及发布后能正常显示；

编辑结束后
1. 最好将public/img/有更改的图片，同步回/intrview(指对应笔记所在文件夹)/img/对应文件中
2. 然后保存、发布。


## 搭建问题

#### 图片路径
##### 引入时正确的书写为:  "/img/同markdown文件名/(***.png)"
- 开发源码:  根路径为/docs/.vuepress/pulbic/,  
- dist包: 根路径为assets, 引入时为: /img/同markdown文件名/(***.png)
> **!!!注意**: 开发的路径以上面规则正确放置并书写引入路径, 打包后会自动输出到对应assets文件中并引入

##### typora编辑粘贴图片(路径不对)
直接粘贴路径为："img/同markdown文件名/**"

- 存放位置有误, 需手动修改
- 引入路径不对，与静态网站可显示的路径不同，img前面少了一个斜杠

> 目前typora路径设置有不足, 需编辑完笔记后手动移过去
> 若将根路径为/docs/.vuepress/pulbic/, 引入路径上会携带, 故无法使用, 需手动复制到/docs/.vuepress/pulbic/下

**平时用可以在typora上编辑, 结束后, 手动复制图片到public/img/对应文件下, 再启动vuepress-blog查看图片访问是否成功;**




##### vscode编辑粘贴(路径正确)

ctrl + shift + p  选择 paste Image 进行粘贴图片

直接粘贴路径为："/img/同markdown文件名/**"
路径可参数上面解释正常使用, 没问题
- 存放位置正确, 不用手动修改
- 引入路径正确, 但与typora的引入路径不同，img前面多了一介斜杠


##### build时报错, dev启动没问题
> 出现这个错误是因为 node.js V17以后 的版本中最近发布的OpenSSL3.0, 而OpenSSL3.0对允许算法和密钥大小增加了严格的限制，可能会对生态系统造成一些影响.
在node.js V17以前一些可以正常运行的的应用程序,但是在 V17 版本可能会抛出这个异常。
解决:  尝试卸载Node.js 17+版本并重新安装Node.js 16+版本，然后再重新启动







### deploy.sh 自动发布并提交静态网站的脚本
**注意: ** 如果发布执行不成功, 检查下面的脚本(命令、路径、地址、分支等)

0: 保脚本抛出遇到的错误
> set -e

1: 生成静态文件, 生成dist包

> yarn run docs:build

2: 清空要部署的静态网站代码库中的文件(在另外一个文件夹.../dist-blog)
> rm -rf ../dist-blog*

3: 将build生成的dist目录拷贝至上一层目录的(.../dist-blog)中
> cp -rf dist ../dist-blog/

4: 进入静态网站文件夹
> cd ../dist-blog

5: 并git初始化, 因为第二步中把仓库清队了, 包括git
```
git init
git add -A
git commit -m 'deploy'
git branch -M main
```
6: 静态网站再次push到远程
> git push -f git@github.com:syc8/syc8.github.io.git main
