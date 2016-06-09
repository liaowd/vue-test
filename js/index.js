var vm=new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!'
  }
})
vm.message='jjfie';

// **************************************************VM
var applePrice=new Vue({
	el:'#apple',              //View
	data:{                    //Model
		p13:6888,
		p15:9888,
		dazhe:function(){
			// console.log(this.p13)
			this.p13*=0.8;
			this.p15*=0.8;
		}
	},
})
applePrice.dazhe()



// ***********************切换数据模型、v-bind属性绑定  v-on:click 事件绑定
var Niu1={
	result:102,
	higher100:false,
	highest:3,
	init:function(){
		this.result>100?this.higher100=true:this.higher100=false;
	},
	qingzhu:function(){
		console.log("给你庆祝啦！偷偷给你的成绩减一点");
		Niu1.result=99;    //此时higher100没有更新！没有执行init函数（改变higher100的）
		console.log(Niu1.result)
	}
}
Niu1.init();
var Tiao=new Vue({
	el:"#tiaogao",
	data:Niu1
})


// ***************绑定了计算属性，自动变化，不用手动调用函数。
var Niu2={
	result:102,
	higher100:false,
	highest:3,
	// init:function(){ 
	// 	this.result>100?this.higher100=true:this.higher100=false;
	// },
	qingzhu:function(){
		console.log("给你庆祝啦！偷偷给你的成绩减一点")
		Niu2.result=99;
		console.log(Niu2.result)
	}

}
var Tiao2= new Vue({
	el:"#tiaogao2",
	data:Niu2,
	computed:{
		higher100:function(){
			// return	this.result>100?this.higher100=true:this.higher100=false;
			return	this.result>100||false;
		}
	},

})

// **********绑定类  绑定内联样式*****************************************************
var Bg={
	"blue":true,
	"green":false
}
var Hg={
	"height":"35px",
	"border":"1px solid red"
}
var CSbind=new Vue({
	el:".lei",
	data:{
		Bg:Bg,
		Hg:Hg
	}
})

// ********条件渲染*列表渲染********************************************************
var Tj=new Vue({
	el:".tiaojian",
	data:{
		bucuo:false,
		queryResult:true,
		dt:true,
		yc:true,
		// items:[{"不错","真的"}]
		items:[
			{name:"dance"},
			{name:"lives"}
		],
		gn:['ht','fy']
	}
})
Tj.bucuo=true;




// v-for  template***************************************
var Planet=new Vue({
	el:"#planet",
	data:{
		// 数组v-for 
		planets:[
			{
				name:"水星",
				radius:'9km',
				temperature:'500',
				isJuzhu:''
			},
			{
				name:"金星",
				radius:'14km',
				temperature:'200',
				isJuzhu:''
			},
			{
				name:"地球",
				radius:'23km',
				temperature:'20',
				isJuzhu:''
			}
		],
		Stu:{
			'LWD':'good',
			'FEF':'bad'
		}
	},
	methods:{
		juzhu:function(){
			// console.log(this);
			// console.log(this.planets[0])
			for(var index in this.planets){
				console.log(this.planets[index].name)
				if(this.planets[index].temperature<50){
					console.log(this.planets[index].name)
					this.planets[index].isJuzhu='是'
				}else{
					this.planets[index].isJuzhu='否'
				}
			}
		}
	}
})

Planet.juzhu();

// Planet.planets.pop();












