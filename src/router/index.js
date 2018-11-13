import Vue from 'vue'
import Router from 'vue-router'
import totalIndex from '../pages/totalIndex'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import tuIdx from '../../新建文件夹/echarts'
Vue.use(Router)
Vue.use(iView)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'tuIdx',
      component: tuIdx
    },

  ]
})
