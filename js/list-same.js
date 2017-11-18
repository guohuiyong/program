window.onload=function(){
	$.ajax({
		type:"get",//请求方式
		url:"http://127.0.0.1/program/yanjingData.json",//路径
		async:true,
		success:function(json){//通过参数res，得到返回的数据；
			var str = "";
			var title = "";
			var conStr = "";
			for(var attr in json){
				title +=`<p class="list-info-title">${json[attr].name}</p>`;
				str +=`<li class="classify-link">${json[attr].name}</li>`;
				for(var i = 0 ; i <json[attr].list.length ; i ++ ){
					var product = json[attr].list[i];//一个商品对象；
					conStr += `<li>
							<a href="page.hmtl?pid=${product.id}&cname=${attr}">
								<img src="../img2/${product.src}" alt="" />
								<p class="name">${product.name}</p>
								<p class="price">${product.price}</p>
							</a>
						</li>`
				}
			}
			$(".classify-link-father").html(str);
			$(".shop-list").html(title+conStr);
		}
	})
}
