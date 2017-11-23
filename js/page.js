//放大镜效果
function fdj(){
	var oMagnifier = document.getElementById("magnifier-box");
	var oSmall = document.getElementById("small");
	var oSmallImg = document.getElementsByClassName("smallImg")[0];
	var oBig = document.getElementById("big");
	var oBigChildren = document.getElementById("big").children;
	var oMask = document.getElementsByClassName("mask")[0];
	var ulist = document.getElementsByClassName("uu")[0].children;
	var olist = document.getElementById("oo").children;
	
	oSmall.onmouseover=function(){
		oMask.style.display="block";
		oBig.style.display="block";
	}
	
	oSmall.onmouseout=function(){
		oMask.style.display="none";
		oBig.style.display="none";
	}
		
	oSmall.onmousemove = function(e){
		var e = e || event;
		var x = e.pageX - oMask.offsetWidth/2 - oMagnifier.offsetLeft;
		var y = e.pageY - oMask.offsetHeight/2 - oMagnifier.offsetTop;
		var maxL = oMagnifier.offsetWidth - oMask.offsetWidth -2;
		var maxT = oMagnifier.offsetHeight - oMask.offsetHeight -2;
		//边界处理
		x = x < 0 ? 0 : ( x > maxL ? maxL : x );//左右边界
		y = y < 0 ? 0 : ( y > maxT ? maxT : y );//左右边界
		//800 / 350 = 400 / 175
		//大图的宽度/小图宽度 = 大图的left / mask.left / =  大图显示区宽度 / 小图显示区（mask）宽度
		
		//console.log(oBigChildren[i]);
		//console.log(oBigChildren[index])
		
		for( var i = 0 ; i < oBigChildren.length ; i ++ ){
			var bigImgLeft = x*oBigChildren[i].offsetWidth / oSmallImg.offsetWidth;
			var bigImgTop = y*oBigChildren[i].offsetHeight / oSmallImg.offsetHeight;
			oMask.style.left = x + "px";
			oMask.style.top = y + "px";
			//console.log(oBigChildren[i]);
			oBigChildren[i].style.left = -bigImgLeft + "px";
			oBigChildren[i].style.top = -bigImgTop + "px";
		}	
	}
	
	
	for( let j = 0 ; j < olist.length ; j++  ){
		olist[j].onclick = function(){
			for(var n = 0 ;n < ulist.length; n ++ ){
				ulist[n].style.zIndex="1";
				oBigChildren[n].style.zIndex="1";
			}
			ulist[j].style.zIndex="5";
			oBigChildren[j].style.zIndex="8";
		}
	}
	
}

//点击放大镜ol 实现边框变色
function fun(){
	$("#oo").click(function(){
		$(".oo-son").eq($(this).index()).css({"border":"1px solid #523669"})
					.siblings()
					.css({"border":"1px solid #333"});
	})	
}


//镜框颜色选择
$(".borderCor-son").click(function(){
	$("em").css({"display":"none"});
	$("em").eq($(this).index()).css({"display":"block"});
})


//请求json数据库
window.onload = function(){
	//http://127.0.0.1/program/js/page.html?pid=shop01&cname=classify001
	//获取路径信息
	var str = location.href;
	//console.log(str)
	//如果路径没有参数   ？   就说明没有传递数据
	if( str.indexOf( "?" ) == -1){
		return;
	}
	str = str.split("?")[1];//"pid=shop01&cname=classify001"
	var arr = str.split("&");//["pid=shop01","cname=classify001"]
	var pid = arr[0].split("=")[1];
	var cname = arr[1].split("=")[1];
	
	//请求ajax  获取数据  根据cname确定要遍历的数组
	//  根据pid 确定要显示的数组中哪一个商品的详情
	$.ajax({
		type:"get",
		url:"http://127.0.0.1/program/yanjingData.json",
		async:true,
		success : function(json){
			
			var html = "";//图片
			var shopName = "";//商品名
			var shopPrice = ""//价格
			var Name = "";//商品标题name
			var pointInfo = "";//商品特点
			//确定操作的数组  json[cname].list
			//console.log(cname)
			for( var i = 0 ; i < json[cname].list.length ; i++ ){
				var pro = json[cname].list[i];//每一个商品
				
				if( pro.id == pid ){
					pointInfo = `<p class="td">${pro.point}</p>`;
					Name = `<p class="name">${pro.name}</p>`;
					shopName = `<a class="path-father" href="index.html">首页</a>
								<p class="path-son">>&nbsp;${pro.name}</p>`;
					shopPrice = `<p class="price-con1">售价</p>
								 <p class="price-con2">${pro.price}</p>
							     <p class="price-con3">生产周期：15天</p>`;
					//console.log(pathName);
					html = `<div id="small">
							<ul class="uu">
								<li style="z-index: 5;" class="uu-son"><img src="../img2/${pro.src[1]}" class="smallImg"/></li>
								<li style="z-index: 4;" class="uu-son"><img src="../img2/${pro.src[2]}" class="smallImg"/></li>
								<li style="z-index: 3;" class="uu-son"><img src="../img2/${pro.src[3]}" class="smallImg"/></li>
								<li style="z-index: 2;" class="uu-son"><img src="../img2/${pro.src[4]}" class="smallImg"/></li>
								<li style="z-index: 1;" class="uu-son"><img src="../img2/${pro.src[5]}" class="smallImg"/></li>
							</ul>
							<div class="mask" style="z-index: 6;"></div>
						</div>
						<ol id="oo">
							<li class="oo-son"><img src="../img2/${pro.src[1]}"/></li>
							<li class="oo-son"><img src="../img2/${pro.src[2]}"/></li>
							<li class="oo-son"><img src="../img2/${pro.src[3]}"/></li>
							<li class="oo-son"><img src="../img2/${pro.src[4]}"/></li>
							<li class="oo-son"><img src="../img2/${pro.src[5]}"/></li>
						</ol>
						<div id="big">
							<img style="z-index: 4;" src="../img2/${pro.src[1]}"/>
							<img style="z-index: 3;" src="../img2/${pro.src[2]}"/>
							<img style="z-index: 2;" src="../img2/${pro.src[3]}"/>
							<img style="z-index: 1;" src="../img2/${pro.src[4]}"/>
							<img style="z-index: 1;" src="../img2/${pro.src[5]}"/>
						</div>`;
						/*<span style="display:none" data-id=${pro.id} data-name=${pro.name} data-scr=${pro.src[0]} data-price=${pro.price}></span>*/
					break;
				}
			}
			$("#magnifier-box").html( html );
			$("#page-path").html(shopName);
			$(".shop-price").html(shopPrice);
			$(".shop-name").html(Name+pointInfo);
			fdj();
			fun();
		}
	});
	
	//点击“添加到购物车”，将当前商品的pid=shop02和cname=classify001存入到cookie中
	$(".btn2").click(function(){
		var arr = [];
		var flag = true;//若是真，就向arr中push商品；
		var datajson = {
			id : pid,//当前商品编号 shop02
			cname : cname,//当前商品类classify001
			count : 1
		}
		//再次点击时   商品会被覆盖    可以先将cookie中的数据取出来  存入到arr中
		var oldCookie = getCookie("Prolist");
		//如果cookie中没有数据 直接push
		if(oldCookie.length != 0 ){
			arr = oldCookie;
			//再次点击商品时  判断这个商品在原cookie中是否存在  如果存在就将数量++
			for(var i = 0 ; i < arr.length ; i ++ ){
				if(datajson.id == arr[i].id && datajson.cname == arr[i].cname){
					arr[i].count++;
					flag = false;
					break;
				}
			}
		}
		
		if(flag){//如果为真，向arr中    push datajson数据
			arr.push(datajson);
		}
		
		//将数组存入到cookie中
		setCookie("Prolist",JSON.stringify(arr));
	})
}
