var vm=new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!'
  }
})

vm.message='jjfie';

var applePrice=new Vue({
	el:'#apple',              //View
	data:{                    //Model
		p13:6888,
		p15:9888,
		dazhe:function(){
			console.log(this.p13)
			this.p13*=0.8;
			this.p15*=0.8;
		}		
	},

})

applePrice.dazhe()