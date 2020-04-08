import Vue from 'vue'
import Router from 'vue-router'

import Index from '../src/components/index.vue'
import Detail from '../src/components/detail.vue'

Vue.use(Router)

// 这里为什么不导出router实例
export default function createRouter(){
	return new Router ({
		mode:'history',
		routes:[
			{path:'/',component:Index},
			{path:'/detail',component:Detail},
		]
		]
	})
}
