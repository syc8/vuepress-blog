if [ x$1 != x ];
then
    #...有参数
    git 提交
    git add .
    git commit -m $1
    git pull
    git push
    echo 'Success: 一键提交成功!';
else
    #...没有参数
    echo 'Error: 请输入commit信息!';
fi




# 如果你想要部署到 https://USERNAME.github.io
# git push -f git@github.com:syc8/syc8.github.io.git main