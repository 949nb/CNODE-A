import router from 'vue-router'
import Vue from 'vue'
import HelloWorld from '../components/HelloWorld'
import HelloEarth from '../components/HelloEarth'

Vue.use(router)

//配置路由
export default new router({
  routes:[{
    path: '/helloWorld',
    component: HelloWorld
  },{
    path: '/helloEarth',
    component: HelloEarth
  }],

})