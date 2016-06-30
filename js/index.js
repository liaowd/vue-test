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
applePrice.dazhe()  //不规范的写法



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




// v-for  template***************************************************************************
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
		},
		// 表单绑定 双向绑定（其他是单向？M->V？） v-model
		Shenqing:{
			xingming:'张三',
			mudidi:'火星',
			nianling:'32',
			// 表单绑定checkbox为数组，需要初始化为数组。value属性会进入数组
			unaccepted:[],
			fuse:'yellow',
		},
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
		},
		// <!-- 事件绑定、除了原生的click，还可以绑定zepto的tap -->
		dayin:function(){
			console.log("事件打印")
			console.log(event.target)
			console.log(event)
		}
	}
})

Planet.juzhu();
var biao={
	xingming:Planet.xingming,
	mudidi:Planet.mudidi,
	nianling:Planet.nianling,
	unaccepted:Planet.unaccepted,
	fuse:Planet.fuse
}

// Planet.planets.pop();

// **********组件********************************************************
// 定义
var TaocanA=Vue.extend({
	// template:'<div>看起来不错</div>'
	template:'<div class="title"> <p class="title">{{title}}</p> <p class="price">{{price}}</p> </div>'
})

// 注册
Vue.component('shangpin',TaocanA)	

// 实例化
new Vue({
	el:'#shangpinliebiao',
	data:{
		title:'只能是普通字符串？',
		price:"只能是普通字符串？",
		item:[
			{
				title:'题目1',
				price:"价格1",				
			},
			{
				title:'题目2',
				price:"价格2",
			},
		]		
	}

})





// ***jQuery.Deferred()***********************************************************************************
var yanchi=new $.Deferred;

setTimeout(function(){
	console.log('延迟时间到')
	yanchi.resolve();
},2000)
function wancheng1(){
	for(var i=0;i<10;i++){
		console.log('第1个马上执行')
	}
	setTimeout(function(){
		console.log("第1个延迟函数完成了")
	},1000)
}
function wancheng2(){
	console.log("第2个延迟函数完成了")
}
yanchi.done([wancheng1,wancheng2])



