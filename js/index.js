//nav的list的 高亮显示
$(".user-app").mouseover(function(){
	$("#app-code").css({"display":"block"})
})
$(".user-app").mouseout(function(){
	$("#app-code").css({"display":"none"})
})


//banner 轮播图
var timer=setInterval(fun,2000)
var index = 0;
function fun(){
	//清空所有   操作当前
	index ++;
	$("#oo li").removeClass("current");
	$("#oo li").eq(index).addClass("current");
	
	$("#uu li").eq(index).siblings().fadeOut(100);
	$("#uu li").eq(index).fadeIn(1000);0
	if(index == $("#oo li").length-1 ){
		index = -1;
	}
}

$("#oo li").mousedown(function(){
	clearInterval(timer);
	$("#oo li").removeClass("current");
	$(this).addClass("current");
	
	$("#uu li").eq($(this).index()).siblings().fadeOut(100);
	$("#uu li").eq($(this).index()).fadeIn(100);
})
$("#oo li").mouseup(function(){
	index = $(this).index();
	timer = setInterval(fun,2000);
})

$(".nav-banner").mouseover(function(){
	$("#left").css({"display":"block"});
	$("#right").css({"display":"block"});
})
$(".nav-banner").mouseout(function(){
	$("#left").css({"display":"none"});
	$("#right").css({"display":"none"});
})
$("#left").click(function(){
	clearInterval(timer);
	index--;
	$("#oo li").eq(index).addClass("current")
			   .siblings()
			   .removeClass("current");
	$("#uu li").eq(index).fadeIn(100)
			   .siblings()
			   .fadeOut(100);
	if( index == -1){
		index = $("#oo li").length-1;
	}
	timer=setInterval(fun,2000);
})
$("#right").click(function(){
	clearInterval(timer);
	index++;
	$("#oo li").eq(index).addClass("current")
			   .siblings()
			   .removeClass("current");
	$("#uu li").eq(index).fadeIn(100)
			   .siblings()
			   .fadeOut(100);
	if( index == $("#oo li").length-1){
		index = -1;
	}
	timer=setInterval(fun,2000)
})

//右边栏  鼠标滑过 显示二维码图片
$(".rightBar-code").mouseover(function(){
	$(".code-box").css({"display":"block"})
})
$(".rightBar-code").mouseout(function(){
	$(".code-box").css({"display":"none"})
})
//滚动条
$(".rightBar-top").click(function(){
	$("html,body").animate({scrollTop:0},200)
})


//*category-recommend-1  手风琴*/
$(".press").mouseover(function(){
	var index=$(this).index();
	$(this).each(function(){
		$(this).animate({"left":90*$(this).index()},600).prevAll().animate({"left":90*($(this).index()-1)},600)
	})
	
})

//footer 官方微博 显示二维码
$(".official-wb-word").mouseover(function(){
	$(".wb-code").css({"display":"block"})
})
$(".official-wb-word").mouseout(function(){
	$(".wb-code").css({"display":"none"})
})