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
			console.log("111")
		}else{
			alert("登录失败");
		}
	}
})

$("#userName").blur(function(){
	var str = $("#userName").val();
	var reg = /^1[358][0-9]{9}$/;
	if(str == ""){
		$("#userName-cue").html("请输入手机号");
		flagName = false;
	}else if(!reg.test(str)){
		$("#userName-cue").html("手机格式错误");
		flagName = false;
	}else{
		$("#userName-cue").html("");
		flagName = true;
	}
})

$("#pwd").blur(function(){
	var str = $("#pwd").val();
	var reg = /^[\w!@#$%^&*.]{6,32}$/;//数字、字母和字符
	
	var reg1=/^[0-9a-z]+$/i; //只包含数字和字母；
	var reg2=/^[@#$%^&*.a-z]+$/i;//只包含字母和字符，字母不区分大小写；
	var reg3=/^[0-9@#$%^&*.]+$/;//只包含数字和字符；

	var regNum=/^\d+$/; //只包含数字；
	var regLetter=/^[a-z]+$/i;//只包含字母，不区分大小写；
	var regChar=/^[@#$%^&*.]+$/;//只包含字符；
	if(str == ""){
		$("#pwd-cue").html("请输入登录密码");
		flagPwd = false;
	}else if(regNum.test(str) || regLetter.test(str) || regChar.test(str) || reg1.test(str) || reg2.test(str) || reg3.test(str)){
		$("#pwd-cue").html("登录密码格式错误");
		flagPwd = false;
	}else{
		$("#pwd-cue").html("");
		flagPwd = true;		
	}
})