# kiwi-vue

轻量级快速搭建后台管理系统，基于[webpack](https://www.webpackjs.com/) + [vuejs](https://cn.vuejs.org/index.html) + [ElementUI](https://element-cn.eleme.io/#/zh-CN/guide/design)

## 目录说明

```
|--项目根目录
    |--dist // 构建包
    |--mock // 本地代理mock数据
    |--src
        |--assets // 静态资源文件
        |--commons // 定义通用变量方法
        |--components // 平台自定义封装组件
        |--errors  // 错误处理页面
        |--i18n  // 国际化配置文件
            |--messages
                |--language_en.json 英文配置文件
                |--language_zh.json 中文配置文件
        |--lib
        |--models // 数据管理层
        |--pages  // 页面
        |--plugin  // 平台插件
            |--ajax // 平台封装ajax请求
            |--directives  // 指令
            |--mixins  // 通用mixin
            |--array.js
            |--date.js
            |--event.js
            |--filters.js
            |--index.js  // 平台组件注册配置
        |--routes  // routes文件，根据pages目录自动生成
        |--services  // 数据接口
        |--store  // store
        |--utils  // 常用工具类文件
        |--App.vue  // 程序页面结构文件
        |--main.js  // 程序入口文件
    |--static  // 无需编译第三方静态资源
    |--style  // 通用样式文件
        |--animate  // 通用动画样式
        |--base  // 常用基础样式
        |--element  // element theme变量文件
        |--iconfont  // 平台图标样式，使用‘http://www.iconfont.cn/home/index’
        |--layout  // 平台架构布局样式文件
        |--theme  // 平台主题样式文件
        |--index.less  // 平台less配置文件
        |--variables.less  // 通过less变量声明文件
    |--template_conf // 使用 baymax g {模板名称} list -c {配置文件名}生成列表文件，例如：baymax g  soc-template list -c list.js
    |--.editorconfig // 代码样式统一格式文件
    |--commitlint.config.js  // npm 提交统一格式化文件
    |--custom.config.js  // 自定义webpack常用变量文件
    |--deploy.config.js  // 部署机器配置文件
    |--index.ejs  // 模板文件
    |--mock.config.js  // mock配置文件
    |--package.json
```


## 快速安装

### 1.安装依赖

```shell
npm install
```

### 2.编译 dll 文件

```shell
npm run dll
```

### 3.启动

```shell
npm start
```

### 4.编译发布

```shell
npm run build
```

### 5.将本地编译文件部署到服务器

```shell
npm run deploy
```

## 其他 npm 命令说明

### 预编译 style 文件中的样式

```shell
npm run style
```

### 通过 element theme 生成主题变量文件

```shell
npm run theme
npm run theme:black
npm run theme:blue
npm run theme:orange
```

### 编译主题样式

```shell
npm run build:theme
npm run build:theme:black
npm run build:theme:blue
npm run build:theme:orange
```

## 数据 mock 说明

### 1.本地 JSON 数据

```javascript
module.exports = {
  'GET /api/example': {
    data: {},
    code: 0,
    msg: ''
  }
};
```

### 2.支持[mockjs](http://mockjs.com/examples.html)配置规则

### 3.代理远程服务器

```javascript
module.exports = {
  'GET /api/example': 'http://example.com'
};

module.exports = {
  'GET /api/example': {
    target: 'http://10.179.25.22',
    pathRewrite(path) {
      return path.replace(/^http:\/\/kiwi-test.kiwi.com\//, '');
    }
  }
};
```

更多例子[http-proxy-middleware](https://github.com/chimurai/http-proxy-middleware#options)

## git 提交规范

```
<type>(<scope>): <subject>
```

- type
  - commit 的类别
    - build：影响构建系统或外部依赖项的修改
    - ci：对持续集成配置或脚本的修改
    - docs： 文档的修改
    - feat：新功能
    - fix：修复bug
    - perf：优化，提升性能
    - refactor：重构
    - style： 代码格式，不影响代码含义的更改（空格，格式，缺少分号等）
    - test：增加测试或修改测试
    - chore：构建工具相关的修改
    - revert：回滚
- scope
  - commit 影响的范围
- subject
  - commit 的目的，不超过 50 个字符
