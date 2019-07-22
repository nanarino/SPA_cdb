# cdb-spa

> A Vue.js project adapted from my django project "cdb"



cdb项目的前后端分离版的前端vue部分

只做了图册部分 其他部分未完成 暂停更新

由另一个仓库：REST_cdb，作为后台提供api接口



## 依赖

```bash
#通过脚手架创建时的配置
npm install vue-cli -g
vue init webpack 项目名
#5个yes 3个no 再选npm/yarn
#修改config/index.js的proxyTable可以配置cors

#其他依赖的安装
npm install axios --save
npm install stylus --save
npm install stylus-loader --save
```



## cli-setup

``` bash
# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

