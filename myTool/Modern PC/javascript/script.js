// JavaScript Document
(function(){
	document.onreadystatechange = loading; 
	function loading(){
		if(document.readyState == "complete")
		{ 
			//$("#loading").hide();
			//$(".content").show();
			slideMove();
		}
	}
   $(".page-8-1 .formlist p a").click(function () {
	   $(".remark").show();
	   });
   $(".remark .main .close").click(function () {
	   $(".remark").hide();
	   });  
})();




          

