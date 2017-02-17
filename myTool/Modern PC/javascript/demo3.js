function slideMove() {
    var now = {
        row: 1,
        col: 1
    },
		last = {
		    row: 0,
		    col: 0
		};
    var pagenow = {
        row: 1,
        col: 1
    },
		pagelast = {
		    row: 0,
		    col: 0
		};
    const towards = {
        up: 1,
        right: 2,
        down: 3,
        left: 4
    };
    var isAnimating = false;
    var outClass = 'pt-page-moveToLeft';
    var inClass = 'pt-page-moveFromRight';
    var outClassToTop = "pt-page-moveToTop";
    var inClassToTop = "pt-page-moveFromBottom"

    s = window.innerHeight / 500;
    ss = 250 * (1 - s);

    $('.wrap').css('-webkit-transform', 'scale(' + s + ',' + s + ') translate(0px,-' + ss + 'px)');

    document.addEventListener('touchmove', function (event) {
        event.preventDefault();
    }, false);

    $(document).swipeLeft(function (event) {
        if (isAnimating) return;
        pageMove(towards.left);
    })

    $(document).swipeRight(function () {
        if (isAnimating) return;
        pageMove(towards.right);
    })

    $(document).swipeUp(function () {
        if (isAnimating) return;
        pageMove(towards.up);
    })




    $(".swiper-button-next").on("click", function () {
        var id = $(this).attr("id");
        if (id == null || id == "" || id != "finishButton") {
            last.row = now.row;
            last.col = now.col;
            now.row = last.row + 1;
            now.col = 1;
            var lastPage = ".page-" + last.row + "-" + last.col,
				nowPage = ".page-" + now.row + "-" + now.col;
            changePage(nowPage, lastPage,inClassToTop,outClassToTop);
//          audio.play();
        } else {
            //$(".page").removeClass("hide").addClass("hide").removeClass("page-current");
            //$(".page-1-1").removeClass("hide").addClass("page-current");
            //now.row = 1;
            //now.col = 1;
            window.location.href = "index.html#a";
        }
    });


    $("#send").on("click", function () {
        $(".page").removeClass("hide").addClass("hide").removeClass("page-current");
        $(".page-4-2").removeClass("hide").addClass("page-current");

        now.row = 4;
        now.col = 1;
    });
    $(".d1,.d11,.d2,.d22").click(function () {
        $("#dd3").html($(this).data("body"));
        $(".dt1, .d1,.d11,.d2,.d22").hide(400);
        $(".dt2, .d3,.d4,.jt").show(1000);
    });

    $("#start").on("click", start);


    function start(e) {
        moveToTop();
        loadMessages();
        loadSlides();
    }

    function moveToTop() {

        last.row = now.row;
        last.col = now.col;
        now.row = last.row + 1;
        now.col = 1;
        var lastPage = ".page-" + last.row + "-" + last.col,
			nowPage = ".page-" + now.row + "-" + now.col;

        changePage(nowPage, lastPage, inClassToTop, outClassToTop);
    }



    function pageMove(tw) {

        if (now.row == 1 && tw == towards.up) {
            start();
        }
        else if (now.row == 2 && tw == towards.right) {
            last.row = now.row;
            last.col = now.col;
            now.row = last.row + 1;
            now.col = 1;
            var lastPage = ".page-" + last.row + "-" + last.col,
				nowPage = ".page-" + now.row + "-" + now.col;
            changePage(nowPage, lastPage);
            loadReply();
        } 

    }

    function changePage(nowPage, lastPage, iclass, oclass) {

        if (iclass == null)
            iclass = inClass;
        if (oclass == null)
            oclass = outClass;

        isAnimating = true;
        $(nowPage).removeClass("hide");
        $(lastPage).addClass(oclass);
        $(nowPage).addClass(iclass);

        setTimeout(function () {
            $(".page").removeClass("page-current");
            $(".page").removeClass("hide").addClass("hide");

            $(lastPage).removeClass(oclass);

            $(lastPage).find(".move").addClass("hide");

            $(nowPage).removeClass("hide").addClass('page-current');
            $(nowPage).removeClass(iclass);
            $(nowPage).find(".move").removeClass("hide");

            isAnimating = false;
        }, 600);
    }



    function loadMessages() {
        var n = 0;
        $(".status4").html("");
        $(".mail").remove();
        _timer = setInterval(function () {
            if (n >= 4) {
                clearInterval(_timer);
            } else {

                var audio = document.getElementById("mail");
                audio.play();

                $(".status4 li").removeClass("receive");
                var content = _msgTemp.replace("#content#", _msgs[n]);
                if (n == 0) {
                    $(".status4").append(content);
                } else {
                    $(content).insertBefore(".status4 li:first-child");
                }
                n++;
            }

        }, 1000);

    }

    function loadSlides() {
        clearInterval(_slidesTimer);
        var s = 0;
        _slidesTimer = setInterval(function () {
            var currnetPosition = $("#lock").attr("position");
            if (currnetPosition == null || currnetPosition > 30) {
                $("#lock").attr("position", 0);
            } else {
                $("#lock").attr("position", parseInt(currnetPosition) + 1);
            }

            currnetPosition = $("#lock").attr("position");

            $("#lock").css("backgroundPositionY", (currnetPosition * -45) + "px");

            s++;
        }, 150);
    }

    function loadReply() {
        var reply = "老板，我还堵在路上，到公司再发您。";
        var n = 0;
        _replyTimer = setInterval(function () {
            if (n < reply.length) {
                n++;
                $("#wechatInput div").text(reply.substr(0, n));
                $("#wechatInput").scrollTop($("#wechatInput div").height() - $("#wechatInput").height());

            } else {
                clearInterval(_replyTimer);
                var t = reply.length;
                _clearTimer = setInterval(function () {
                    t--;
                    if (t >= 0) {
                        $("#wechatInput div").text(reply.substr(0, t));
                    } else {
                        clearInterval(_clearTimer);
                        var confirmReply = "这就改，马上发！";
                        var c = 0;
                        _confirmTimer = setInterval(function () {
                            c++;
                            if (c < confirmReply.length) {
                                $("#wechatInput div").text(confirmReply.substr(0, c));
                            } else {
                                $(".page").removeClass("page-current");
                                $(".page-4-1").removeClass("hide").addClass("page-current");

                                now.row = 4;
                                now.col = 1;

                                clearInterval(_confirmTimer);
                            }
                        }, 300);
                    }
                }, 100);
            }
        }, 300);
    }

    var _replyTimer;
    var _clearTimer;
    var _confirmTimer;

    var _slidesTimer;

    var _msgTemp = '<li class="receive"><span>微信<u>现在</u></span><em>老板：#content#</em><bdo>滑动来查看</bdo><i class="wx"></i></li>';
    var _msgs = ["这都上班时间了，怎么还没到公司？", "在哪呢？", "昨天的方案还需要修改一下，速度！", "还有，记得用我昨天说的那个模板啊！"];
    var _timer;
};


$(function () {
    $(".swiper-button-next").each(function () {
        var posStr = $(this).attr("data-position");
        if (posStr != null && posStr != "") {
            var posObj = eval("(" + posStr + ")");
            if (posObj.left != null) {
                $(this).css({
                    left: posObj.left
                });
            } else if (posObj.right != null) {
                $(this).css({
                    left: posObj.right
                });
            }

            if (posObj.top != null) {
                $(this).css({
                    top: posObj.top
                });
            } else if (posObj.bottom != null) {
                $(this).css({
                    bottom: posObj.bottom
                });
            }

            if (posObj.width != null) {
                $(this).css({
                    width: posObj.width
                });
            }
            if (posObj.height != null) {
                $(this).css({
                    height: posObj.height
                });
            }
            if (posObj.radius != null) {
                $(this).css({
                    borderRadius: posObj.radius
                });
            }
        }
    });
});