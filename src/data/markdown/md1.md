# git同步代码至github和gitee

> 如果需要更改origin分支名字
>-  删除已关联的名为origin的远程库
>- `git remote rm origin`
1. 关联GitHub的远程库
````
git remote add github git@github.com:chloneda/demo.git
````

2. 项目git配置 `.git` > `config`
````
[remote "github"]
	url = git@github.com:chloneda/demo.git
	fetch = +refs/heads/*:refs/remotes/github/*
[remote "gitee"]
	url = git@gitee.com:chloneda/demo.git
	fetch = +refs/heads/*:refs/remotes/gitee/*
````
3. 查看远程库
````
git remote -v
````
4. 提交代码
````
git add .
git commit -m "update"
````
5. 上传到gitee
````
git push origin master
````
6. 上传到github
````
git push github master
````
7. 更新代码
````
# 从gitee拉取更新
git pull origin

# 从github拉取更新
git pull github
````
## 踩到的坑
上述过程中，更新或提交代码时可能会遇到`fatal:refusing to merge unrelated histories` (拒绝合并无关的历史) 错误，解决办法：

- 首先将远程仓库和本地仓库关联起来。
````
git branch --set-upstream-to=origin/remote_branch  your_branch
````
> *origin/remote_branch是你本地分支对应的远程分支，your_branch是你当前的本地分支。*

- 然后使用git pull整合远程仓库和本地仓库。
````
git pull --allow-unrelated-histories
````
>*忽略版本不同造成的影响*