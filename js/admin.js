var vm = new Vue({
	el:"#app",
	data:{
		shunxu:"",
		text:"",
		biaoqian:"",
		title:"",
		author:"",
		time:"",
		zhuangtai:"",
		caozuo:"",
		trs:[
			{
				"shunxu":002,
				"biaoqian":"美食",
				"title":"舌尖上的中国",
				"author":"作者1",
				"time":"1234",
				"zhuangtai":"未发布"
			},
			{
				"shunxu":003,
				"biaoqian":"美食",
				"title":"舌尖上的中国",
				"author":"作者1",
				"time":"1234",
				"zhuangtai":"未发布"
			},
			{
				"shunxu":005,
				"biaoqian":"美食",
				"title":"舌尖上的中国",
				"author":"作者1",
				"time":"1234",
				"zhuangtai":"未发布"
			}
			
		]
	},
	methods:{
		del:function(e){
			console.log(e);
//			console.log(this)
			 this.trs.splice(e, 1);
			   localStorage.setItem('trs', JSON.stringify(this.trs))
		},
		state:function(){
			console.log(this.bool)
//			this.trs[index].bool=!this.trs[index].bool
		},
		add:function(e){
			console.log()
			this.trs.push({
//				"shunxu":this.shunxu,
				"biaoqian":this.biaoqian,
				"title":this.title,
				"author":this.author,
				"time":this.time,
				"zhuangtai":this.zhuangtai
			})
			  localStorage.setItem('trs', JSON.stringify(this.trs))
			  console.log(localStorage.setItem('trs', JSON.stringify(this.trs)))
		}
	}, created: function () {
        //如果本地存储里面没有值，就用默认的 notes 数组里面的值
        if (localStorage.getItem('trs') !== null) {
            //把本地存储里面的值赋值给notes
            this.trs = JSON.parse(localStorage.getItem('trs'))
        }
   }	
})



	$(".show").click(function(){
				$(".tian").fadeIn()
			})
			$(".hide").click(function(){
				$(".tian").fadeOut();
			})