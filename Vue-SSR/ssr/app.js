// vue 实例
import Vue from 'vue'
import App from './src/App.vue'
import createRouter from 'router/index.js'

export default createApp(){
	const router = createRouter();
	const app =new Vue({
		router,
		render:h => h(App)
	});
	return {app,router};
}