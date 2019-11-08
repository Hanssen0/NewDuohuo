# 这是什么？

多火是南京信息工程大学的 IT 热爱者们组成的一个社团。
在 2019 年，多火成立的第十个年头，我们启动了新官网计划 -- New Duo Huo 。

# 它想要做到什么？

多火需要成为不一样的社团，而这需要我们做出不一样的事情，
所以，我们希望它能为多火注入新的活力。
同时，这份代码本身也将会成为供人学习的样例。

# 我该怎么帮忙？

开发环境依赖于[`nodejs`](https://nodejs.org/zh-cn/)。
而整个项目基于[`Vue`框架](https://cn.vuejs.org/index.html)，
它有完善的中文手册/教程可供学习。
同时，网页页面的切换使用[`vue-router`](https://router.vuejs.org/zh/)实现。

全部代码文件都位于`src`文件夹中，其中的`main.js`是入口文件，它初始化了`App.vue`作为主页面。

各个页面保存于`src/router`目录中，由`router.js`脚本加载。

资源文件保存于`src/assets`目录中。

## 项目初始化
```
npm install
```

### 编译开发版本，提供即时反馈修改功能
```
npm run serve
```

### 编译生产版本，最小化文件
```
npm run build
```

### 检查并尝试修复代码错误
```
npm run lint
```

### 自定义设置
参阅[Configuration Reference](https://cli.vuejs.org/config/).
