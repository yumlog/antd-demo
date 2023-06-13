# antd-demo

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### Vue2 + Antd + Vue Router Install
```
yarn global add @vue/cli
vue create 프로젝트명
Default ([Vue 2] babel, eslint) 선택
yarn add ant-design-vue@1.7.8
yarn add vue-router@3.5.3
```
**Main.js에 아래 내용 추가**
```
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import router from './router/index'
Vue.use(Antd)
new Vue({ router, ...})
```

>yarn remove 모듈명 하면 삭제할 수 있음