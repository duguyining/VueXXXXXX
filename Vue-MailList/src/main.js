import Vue from 'vue'
import App from './App.vue'
import router from'./router'
import store from './store/vuex.js'

Vue.config.productionTip = false


//根据导航守卫来判断是否登录
router.beforeEach((to,from,next)= >{
	if (to.meta.logied) {
		if (sessionStorage.login ==1) {
			next();
		}else {
			next({
				path:'/home/login',
			})
		}
	}else {
		next();
	}
})
new Vue({
  el: '#app',
      router,
      store,
      template: '<App/>',
      components: { App }, 
})
