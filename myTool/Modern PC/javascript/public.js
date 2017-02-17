$(function(){
	$('.selectb').click(function(){
		mySwiper.slideTo(3, 10, true);
	});
	$('.question1').click(function(){
		mySwiper.slideTo(5, 10, true);
	});
//	音乐效果
    var a2 = document.getElementById('a2');
    $(document).one('touchstart', function () {
        a2.play();
    });
	$('.closeMusic').click(function(){
		if($('.closeMusic').hasClass('active')){
			$('.closeMusic').removeClass('active');
			a2.pause();
		}else{
			$('.closeMusic').addClass('active');
			a2.play();
		};
	});
	//本地存储
	var href = window.location.href;
	var ifAccess=sessionStorage.getItem("access");
	var clickHref = ["clearVision","easy1","enduranceLife","intelligentOperation","naturalInteraction","secureAccess","unifiedApplication"];
	if(ifAccess == null){
		for(var i=0; i<clickHref.length; i++){
			if(href.indexOf(clickHref[i])>0){
				ifAccess = i;
				console.log(ifAccess);
				sessionStorage.setItem("access",ifAccess);
			};
		};
	}else{
		for(var i=0; i<clickHref.length; i++){
			if(href.indexOf(clickHref[i])>0){
				if(ifAccess.indexOf(i)<0){
					ifAccess = ifAccess + i;
					sessionStorage.setItem("access",ifAccess);
				};
			};
		}
	}
});
