window.onload = function(){
	//放大镜效果
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
		/*var bigImgLeft = x*800 /  350;
		var bigImgTop = y*800 /  350;
		
		console.log( oBigChildren[0].offsetWidth );  
		oMask.style.left = x + "px";
		oMask.style.top = y + "px";*/
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

