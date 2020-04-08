// nodejs服务器
const express = require('express')
const Vue = require('vue')

//实例
const app =express();

//渲染器
const renderer = require('vue-server-renderer').createRenderer();

//得到html
const page = new Vue({
	template : "<div>hello ssr</div>"
});

app.get("/",async(req,res) =>{
	try{
		const html = await renderer.renderToString(page);
		console.log(html);
		res.send(html)
	}catch(error){
		//TODO handle the exception
		res.status(500).send('内部错误');
	}
})

app.listen(8000, ()=>{
	console.log('successful')
})