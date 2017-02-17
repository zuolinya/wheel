 var bar = 0;
        var step = "||";
        /*
        *第一种方式即 ：$(document).ready(function(){.....});
        */
        //$(function () {
        //    progress();
        //});
        /*
        *第二种方式 
        */
        //window.onload = function () {
        //    progress();
        //}
        /*
        *第三种方式模拟 $(document).ready(function(){.....});
        */
        (function () {
            var ie = !!(window.attachEvent && !window.opera);
            var wk = /webkit\/(\d+)/i.test(navigator.userAgent) && (RegExp.$1 < 525);
            var fn = [];
            var run = function () { for (var i = 0; i < fn.length; i++) fn[i](); };
            var d = document;
            d.ready = function (f) {
                if (!ie && !wk && d.addEventListener)
                    return d.addEventListener('DOMContentLoaded', f, false);
                if (fn.push(f) > 1) return;
                if (ie)
                    (function () {
                        try { d.documentElement.doScroll('left'); run(); }
                        catch (err) { setTimeout(arguments.callee, 0); }
                    })();
                else if (wk)
                    var t = setInterval(function () {
                        if (/^(loaded|complete)$/.test(d.readyState))
                            clearInterval(t), run();
                    }, 0);
            };
        })();
        document.ready(function () {
            progress();
        });

        function progress() {
            bar = bar + 2;
            step = step + "||";
            document.getElementById("percent").value = bar + "%";
            document.getElementById("progressbar").value = step;
            if (bar <= 96) {
                setTimeout("progress()", 200);
            }
        }