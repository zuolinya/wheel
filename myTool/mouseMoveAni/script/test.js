$(function(){
	var imgLeft = -100,//左边偏移量
		imgTop = -100,//顶部偏移量
		mouseX,//鼠标横坐标
		mouseY,//鼠标纵坐标
		speed = 0.2,//移动速度
		mouseX = 0,
		mouseY = 0;
	$('.imgBoxAni').mousemove(function(e){
			e=e? e:window.event;
			mouseNextX = e.screenX;
			mouseNextY = e.screenY;
			if(mouseX > mouseNextX){
				imgLeft = imgLeft - speed;
				$('.imgBoxAni').css({
					"background-position-X":imgLeft
				});
			}else{
				imgLeft += speed;
				$('.imgBoxAni').css("background-position-X",imgLeft);
			}
			if(mouseY > mouseNextY){
				imgTop = imgTop - speed;
				$('.imgBoxAni').css({
					"background-position-Y":imgTop
				});
			}else{
				imgTop += speed;
				$('.imgBoxAni').css("background-position-Y",imgTop);
			}
			mouseX = mouseNextX;
			mouseY = mouseNextY;
	})
	$('.imgBoxAni').mouseleave(function(){
		if(imgLeft>=0){
			imgLeft =0;
		}
		if(imgTop>=0){
			imgTop = 0;
		}
		console.log(imgLeft,imgTop)
		$('.imgBoxAni').css({
			"background-position-X":imgLeft,
			"background-position-Y":imgTop
		});
	})
})
