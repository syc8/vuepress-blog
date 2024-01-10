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


## 发布
yarn deploy      (在gitbash可执行)
#### deploy.sh 自动发布脚本
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




## 搭建问题
##### build时报错, dev启动没问题
> 出现这个错误是因为 node.js V17以后 的版本中最近发布的OpenSSL3.0, 而OpenSSL3.0对允许算法和密钥大小增加了严格的限制，可能会对生态系统造成一些影响.
在node.js V17以前一些可以正常运行的的应用程序,但是在 V17 版本可能会抛出这个异常。
解决:  尝试卸载Node.js 17+版本并重新安装Node.js 16+版本，然后再重新启动
