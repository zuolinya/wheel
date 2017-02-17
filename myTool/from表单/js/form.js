// JavaScript Document
$(document).ready(function () {

	$("#mask").append(' <div class="mask-box"><div class="mask-title">亲爱的用户，请填写以下信息，我们将尽快为您开通免费试用7天</div><div class="mask-close" id="mask-close">X</div><form method="" action=""><ul class="mask-list"><li><label>联系人：</label><div class="form-item"><input autofocus="autofocus" style="width: 346px" id="name" /><span>(必填)</span></div></li><li><label>联系电话：</label><div class="form-item"><input type="tel" step="4" id="tel1" style="width: 120px"/>&nbsp;-&nbsp<input  type="tel" step="8" id="tel2" style="width: 200px"/><span>(必填)</span></div></li><li><label>公司名称：</label><div class="form-item"><input  id="partner" style="width: 346px"/><span>(必填)</span></div></li><li><label>公司域名：</label><div class="form-item"><input  type="url" style="width: 346px"/></div></li><li><label>联系Email：</label><div class="form-item"><input id="mailbox"  type="email" style="width: 346px"/></div></li><li><label>所在地区：</label><div class="form-item"><select  name="province" id="province" style="width: 175px;height: 30px;"></select><select  name="city" id="market" style="width: 175px;height: 30px;margin-left: 10px;"></select></div></li><li><div class="form-item" style="margin-left:169px"><a class="mask-btn" type="submit" id="btnSubmit" style="margin-right:10px;">提交</a><a class="mask-btn" type="button" id="closeForm" style="background-color:#8e827e;" >取消</a></div></li></ul></form></div>')
  	$("#mask1").append('<div class="mask1-box"><div class="layer" id="layer"><div class="mask"></div><div class="img_box"><div class="close" id="close"><div class="mask-close">X</div></div><div class="certificate" id="certificate1"><img id="certificate" src="images/popup-warn.png" alt="提示！！！"></div><div><p id="message" style="height: 39px;font-size: 24px;color :#666;">111</p></div></div></div></div>')
//  省市二级联动 start
	var sid;
        var i=0;
        $.each(data.data,function() {
            $("#province").append('<option value='+(i++)+' zid='+this.region_id+'>'+this.region_name+'</option>');
        });
        $("#province").change(function(){
            sid=$(this).val();
            var lan=data.data[sid].child_list;
            $("#market").html("");
            i=0;
            $.each(lan,function(){
                $("#market").append('<option value='+(i++)+' zid='+this.region_id+'>'+this.region_name+'</option>');
            });
            $("#market option:selected").change();
        });
        $("#market").change(function(){
            var siden=$(this).val();
            var lanen=data.data[sid].child_list[siden].child_list;
            $("#area").html("");
            i=0;
            $.each(lanen,function(){
                $("#area").append('<option value='+(i++)+' zid='+this.region_id+'>'+this.region_name+'</option>');
            })
        });
        $("#province option:selected").change();
//  省市二级联动 end
    $("#btnSubmit").click(function () {
    	$("ol").append("<li>Appended item</li>"); 
        var name = $("#name").val();
        var tel1 = $("#tel1").val().length;
        var tel2= $("#tel2").val().length;
        var partner =$("#partner").val();
        var mailbox=$("#mailbox").val();
        var province = $("#province").val();
        var city = $("#city").val();
		$("#certificate1").html('<img id="certificate" src="images/popup-warn.png" alt="提示！！！">');
        if(name==""){
            $("#message").html("请输入联系人");
            $("#mask1").show();
        }else if(((tel1==0)&&(tel2==0))||((tel1==0)&&(tel2!=11))){
            $("#message").html("请输入联系电话");
            $("#mask1").show();
        }else if(!((tel2==11)||((tel2==8)))){
            	$("#message").html("请输入正确的联系方式");
          	    $("#mask1").show();
          	    $("#tel1").val("");
	       		$("#tel2").val("");
        }
        else if(partner==""){
            $("#message").html("请输入公司名称");
            $("#mask1").show();
        } else{
            $("#certificate1").html('<img id="certificate" src="images/popup-suc.png" alt="提示！！！">');
            $("#message").html("您已提交成功，我们将尽快协助您开通<br> Office 365 试用！");
            $('.form-item input').val("");
            $("#mask1").show();
            $("#mask").hide();

        }
    });

    $("#closeForm").click(function () {
        $("#mask").hide();
    })
    $("#close").click(function () {
        $("#mask1").hide();
    }) 
    $("#mask-close").click(function() {
	    $("#mask").hide();
	})
});
$(".buttonShow").click(function(){
	$("#mask").show();
});





