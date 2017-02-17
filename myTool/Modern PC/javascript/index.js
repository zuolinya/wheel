$(function(){
	$('.mask').click(function(){
		$('.mask').removeClass('show').addClass('hidden');
	});
//	sessionStorage.setItem("isAccess",'1');
	var href = window.location.href;
	 if(href.indexOf('access')!= -1){
	 	var isClick = sessionStorage.getItem("access");
	 	console.log(isClick);
		var classArr = [".clearVision",".easy",".enduranceLife",".intelligentOperation",".naturalInteraction",".secureAccess",".unifiedApplication",];
		for(var i =0;i<7;i++){
			if(isClick.indexOf(i)!=-1){
				$(classArr[i]).addClass('add');
			}
		}
	 }
	
})
