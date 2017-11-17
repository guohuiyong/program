//点击事件
var flag=true;
$(".auto-box").click(function(){
	if(flag){
		$("b").addClass("login-remember")
		$(".auto-box p").html("请勿在公用电脑上勾选此选项");
		flag=false;
	}else{
		$("b").removeClass("login-remember")
		$(".auto-box p").html("下次自动登录");
		flag=true;
	}
		
})

//获取cookie里的数据 进行登录验证
$("#loginBtn").click(function(){	
	var arr = getCookie("data");
	console.log(arr);
	for(var i = 0 ; i< arr.length ; i++ ){
		var info = arr[i];//info={uname: "15201031159", pwodr: "ghy123@"}
		if(info.uname == $("#userName").val() && info.pwodr == $("#pwd").val()){
			location.href="index.html";
		}else{
			alert("登录失败");
		}
	}
})

