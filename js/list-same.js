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
				console.log(attr);
				str +=`<li class="classify-link">${json[attr].name}</li>`;
				/*var index=attr.indexOf("y");
				console.log(index);
				var index0 =attr.substring(index+1);
				console.log(index0);//001  002;
				var cname = "classify"+index0;
				console.log(cname);//classify001 classify
				if(attr == "cname" ){
					var index2=attr.indexOf("y");
					console.log(index2);
					for (var i=0;i<json[attr].list.length;i++) {
							var product = json[attr].list[i];//一个商品对象；
							title=`<p class="list-info-title">${json[attr].name}</p>`
							conStr += `
							<li>
								<a href="page.hmtl?pid=${product.id}&cname=${attr}">
									<img src="../img2/${product.src}" alt="" />
									<p class="name">${product.name}</p>
									<p class="price">${product.price}</p>
								</a>
							</li>`
						}
						$(".shop-list").eq(Number(attr.substring(index2+1))-1).html(title+conStr);
						break;
				}*/
				if(json[attr].name=="眼镜"){
					var index=attr.indexOf("y")
					//console.log(index);
					for (var i=0;i<json[attr].list.length;i++) {
						var product = json[attr].list[i];//一个商品对象；
						title=`<p class="list-info-title">${json[attr].name}</p>`
						conStr += `
						<li>
							<a href="http://127.0.0.1/program/js/page.html?pid=${product.id}&cname=${attr}">
								<img src="../img2/${product.src[0]}" alt="" />
								<p class="name">${product.name}</p>
								<p class="price">${product.price}</p>
							</a>
						</li>`
					}
					$(".shop-list").eq(Number(attr.substring(index+1))-1).html(title+conStr);
//						break;
				}else if(json[attr].name=="眼镜2"){
					var index=attr.indexOf("y")
					for (var i=0;i<json[attr].list.length;i++) {
						var product = json[attr].list[i];//一个商品对象；
						title=`<p class="list-info-title">${json[attr].name}</p>`
						conStr += `
						<li>
							<a href="http://127.0.0.1/program/js/page.html?pid=${product.id}&cname=${attr}">
								<img src="../img2/${product.src[0]}" alt="" />
								<p class="name">${product.name}</p>
								<p class="price">${product.price}</p>
							</a>
						</li>`
					}
					$(".shop-list").eq(Number(attr.substring(index+1))-1).html(title+conStr);
					break;
				}
			}
			$(".classify-link-father").html(str);
		}
	})
}


// 点击导航楼层   让内容楼层向上运动；
$(".classify-link-father").on("click",".classify-link",function(){
	var index = $(this).index();
	//获取内容楼层距离文档顶部的偏移量
	var top = $(".shop-list").eq(index).offset().top;
	$("html,body").animate({scrollTop:top},200);
})


/*rightBar-share右侧分享*/
$(".rightBar-share").click(function(){
	$("#shareCon").css({"display":"block"});
})
$(".share-off").click(function(){
	$("#shareCon").css({"display":"none"});
})
