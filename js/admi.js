Vue.component('note', {
    props: ['todo'],
    template: `<div class="bs-example" data-example-id="bordered-table">
			    <table class="table table-bordered">
			      <thead>
			        <tr>
			          <th><input type="checkbox" /></th>
			          <th>文章ID</th>
			          <th>文章标签</th>
			          <th>文章标题</th>
			          <th>作者</th>
			          <th>上传时间</th>
			          <th>发布状态</th>
			          <th>操作</th>
			        </tr>
			      </thead>
			      <tbody>
			        <tr>
			          <th><input type="checkbox" /></th>
			          <th scope="row">001</th>
			          <td>美食</td>
			          <td>舌尖上的中国第一季</td>
			          <td>作者1</td>
			          <td>20121204</td>
			          <td><button>已发布</button></td>
			          <td><button>编辑</button><button>删除</button></td>
			        </tr>
			        <tr>
			          <th><input type="checkbox" /></th>
			          <th scope="row">{{todo.shunxu}}</th>
			          <td>{{todo.biaoqian}}</td>
			          <td>{{todo.title}}</td>
			          <td>{{todo.author}}</td>
			          <td>{{todo.time}}</td>
			          <td><button>{{todo.zhuangtai}}</button></td>
			          <td><button>编辑</button><button>删除</button></td>
			        </tr>
			         
			      </tbody>
			    </table>
 			 </div>`
})
new Vue({
	el:'#app',
	data:{
		trs:[
		{
				"shunxu":001,
				"biaoqian":"美食",
				"title":"舌尖上的中国",
				"author":"作者1",
				"time":"1234",
				"zhuangtai":"未发布",
		}
		]
	},
	
})