//obj-- 操作的元素    target--目标值   attr --  操作的属性  （多物体运动+缓冲+透明度）
function startMove(obj,target,attr){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var current = 0;
		if( attr == "opacity" ){
			current = parseFloat( getStyle( obj,attr ) ) * 100 ;
		}else{
			current =parseInt( getStyle( obj, attr ) ) ;//每次调用定时器 获取操作的attr样式值
		}
		var speed = (target - current)/10;
		speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
		if( current == target ){
			clearInterval( obj.timer );
		}else{
			if( attr == "opacity" ){
				obj.style.opacity = (current+speed)/100;
			}else{
				obj.style[attr] = current + speed + "px";
			}
		}
	},30)
}
function getStyle(obj,attr){
	if( window.getComputedStyle ){
		return window.getComputedStyle(obj,false)[attr];
	}else{
		return obj.currentStyle[attr];
	}
}
