wx.ready(function () {

    //wx.checkJsApi({
    //    jsApiList: [
    //      'onMenuShareTimeline',
    //      'onMenuShareAppMessage'
    //    ],
    //    success: function (res) {
    //         //alert(JSON.stringify(res));
    //    }
    //});

    function getShareData(shareType) {
        return shareData = {
            title: '营销大师包2.0测试问卷',
            desc: '营销大师包2.0测试问卷',
            link: 'http://marketingguru.chinacloudsites.cn/mobile/index.html',
            imgUrl: 'http://marketingguru.chinacloudsites.cn/img/weixin.png',
            complete: function (res) {
                //alert(JSON.stringify(res));
            },
            success: function (res) {
                shareConfirm(shareType);
            },
            cancel: function (res) {
                shareCancel(shareType);
            },
            fail: function (res) {
                shareFail(shareType);
            }
        };
    }


    function shareCancel(type) {

    }

    function shareFail(type) {

    }

    function shareConfirm(type) {
        //$.ajax({
        //    url: '/wechat/share',
        //    type: 'post',
        //    datatype: 'json',
        //    data: {type:type,url:window.location.href},
        //    success: function (data) {

        //    }
        //});
    }


    wx.onMenuShareAppMessage(getShareData(1));
    wx.onMenuShareTimeline(getShareData(2));
    wx.onMenuShareQQ(getShareData(3));
});

wx.error(function (res) {
    // alert(res.errMsg);
});

if(/Android (\d+\.\d+)/.test(navigator.userAgent)) {
	var version = parseFloat(RegExp.$1);
	if(version > 2.3) {
		var phoneScale = parseInt(window.screen.width) / 640;
		document.write('<meta name="viewport" content="width=640, minimum-scale = ' + phoneScale + ', maximum-scale = ' + phoneScale + ', target-densitydpi=device-dpi">');
	} else {
		document.write('<meta name="viewport" content="width=640, target-densitydpi=device-dpi">');
	}
} else {
	document.write('<meta name="viewport" content="width=640, user-scalable=no, target-densitydpi=device-dpi">');
}
//微信去掉下方刷新栏
if(navigator.userAgent.indexOf('MicroMessenger') >= 0) {
	document.addEventListener('WeixinJSBridgeReady', function() {
		//WeixinJSBridge.call('hideToolbar');
	});
}
(function() {
	document.onreadystatechange = loading;

	function loading() {
		if(document.readyState == "complete") {
			$(".load").hide();
			$(".container").show();
		}
	}
})();