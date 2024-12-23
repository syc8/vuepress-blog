#!/usr/bin/env sh
git 提交
git add .
if [ x$1 != x ];
then
    #...有参数
    git commit -m $1
else
    #...没有参数
    # 提交变更，包括当前日期
    current_date=$(date +%Y%m%d%H%M%S)
    git commit -m "updated${current_date}_"
    echo "提交信息为当前日期: updated${current_date}_";
fi

git pull
git push
echo 'Success: 一键提交成功!';



# 如果你想要部署到 https://USERNAME.github.io
# git push -f git@github.com:syc8/syc8.github.io.git main