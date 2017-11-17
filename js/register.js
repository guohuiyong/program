//点击事件
var flag=true;
$(".agree-box").click(function(){
	if(flag){
		$("b").addClass("regist-yes")
		flag=false;
	}else{
		$("b").removeClass("regist-yes")
		flag=true;
	}
		
})

//表单验证
$("form").submit(function(){
	if( flagName && flagCode && flagPwd && flagpwdaga){
		return true;
	}else{
		return false;
	}
})

//手机号
var flagName=false;
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
		$("#userName-cue").html("✔");
		flagName = true;
	}
	if(str == "请输入手机号"){
		$("#userName-cue").html("");
	}
})

//验证码
var flagCode=false;
$("#phonecode").blur(function(){
	var str = $("#phonecode").val();
	var reg = /^[0-9]{6}$/;
	if(str == ""){
		$("#phonecode-cue").html("请输入短信验证码");
		flagCode = false;
	}else if(!reg.test(str)){
		$("#phonecode-cue").html("验证码错误");
		flagCode = false;
	}else{
		$("#phonecode-cue").html("✔");
		flagCode = true;
	}
})

//密码
var flagPwd=false;
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
		$("#pwd-cue").html("请输入6-32位字符，需字母数字符号两种以上组合");
		flagPwd = false;
	}else{
		$("#pwd-cue").html("✔");
		flagPwd = true;		
	}
})

//密码验证
var flagpwdaga = false;
$("#pwd-again").blur(function(){
	var str = $("#pwd-again").val();
	if(str == ""){
		$("#pwd-again-cue").html("请再次输入登录密码");
		flagpwdaga = false;
	}else if(str == $("#pwd").val()){
		$("#pwd-again-cue").html("✔");
		flagpwdaga = true;
	}else{
		$("#pwd-again-cue").html("两次输入密码不一致");
		flagpwdaga = false;
	}
})


//用户注册 将注册信息存放到cookie中
$("#accountBtn").click(function(){
	var arr=[];
	var json = {
		"uname" : $("#userName").val(),
		"pwodr" : $("#pwd").val()
	}
	arr.push(json);
	setCookie("data",JSON.stringify(arr));
	location.href="login.html"
})
