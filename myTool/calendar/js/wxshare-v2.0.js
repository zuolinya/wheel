var _shareData = {
    title: "",
    desc: "",
    link: '',
    imgUrl: '',
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
        return shareData = _shareData;
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
