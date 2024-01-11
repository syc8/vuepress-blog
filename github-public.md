## git
仓库地址: git@github.com:syc8/syc8.github.io.git

…or 新建仓库
```js
echo "# vuepress-blog" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:syc8/syc8.github.io.git
git push -u origin main
push不成功 - 这时候先通过git pull origin master --allow-unrelated-histories拉取下，再push
```

…or 现有仓库Push
```js
git remote add origin git@github.com:syc8/syc8.github.io.git
git branch -M main
git push -u origin main
push不成功 - 这时候先通过git pull origin master --allow-unrelated-histories拉取下，再push
```



## 说明
> 该网站为vuepress构建打包完成的技术博客静态网站, 来源于vuepress-blog仓库项目, 访问地址: https://syc8.github.io/

地址来源:  github上进入syc8.github.io这个项目, 选中setting---pages----即可看到提供好的地址, 即: https://syc8.github.io/
