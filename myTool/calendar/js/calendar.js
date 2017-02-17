var calendar = new inti();

function inti(){
	var mydata = new Date(),//当前时间
	 	year = mydata.getFullYear(),//当前年份
	    month = mydata.getMonth() + 1,//当前月份    getMonth()获取到的值0代表1月 
	    month3 = mydata.getMonth() + 1,//当前月份    getMonth()获取到的值0代表1月,保护不受污染
	    month2 = mydata.getMonth(),//当前月份 的上一月   getMonth()获取到的值0代表1月 
	    nowDay = mydata.getDate(),//当前天
	    nowDay2 = mydata.getDate(),//当前天,保护不受污染
		week = mydata.getDay(),//当前星期几  0-6 0代表星期日
		firstdaysweek = new Date(year + "/" + month + "/" + 01).getDay(),//获取当月1号的星期数
		mycontent = true,//参数，只执行一次
		day;//每个月的天数
	var html = '';
	var calendar = $('#calendar tbody');
	var updatanow = year+""+month+""+nowDay;

	update(year,month);
	writedata();
//日历写入
	function writedata (){
		$('.day').html("");//清除之前月份的数据
		$('tr.weekLine').find('td').removeClass();//清除之前月份每天的数据
		$(".weekLine td").removeAttr("data-day");
		firstdaysweek = new Date(year + "/" + month + "/" + 01).getDay();//获取当月1号的星期数
		var dayNum = 1;//设置每个月中第一天的初始值
		day = getLastDay(year,month);//获取当月中最大的一天
		day2 = getLastDay(year,month2);//获取上月中最大的一天
		var nextday = 1;
		for(var i=0;i<6;i++){
			if(i==0){
				if(firstdaysweek == 0){
					$('.weekLine').eq(i).find("td").eq(6).find("p.day").html(dayNum);
					nowdate(dayNum,i,6);
					dayNum++;
					i++;
				}else{ 
					for(var j=firstdaysweek-1;j>=0;j--){//当前月前面的几个空格
						$('.weekLine').eq(i).find("td").eq(j).addClass("notNowMonth");
						$('.weekLine').eq(i).find("td").eq(j).find("p.day").html(day2);
						day2--;
					}
					for(var j=firstdaysweek;j<7;j++){//判断在第一行的第几个位置
						$('.weekLine').eq(i).find("td").eq(j).find("p.day").html(dayNum);
						nowdate(dayNum,i,j);
						dayNum++;
					}
				}
			}
			if(i != 0){
				for(var j=0;j<7;j++){
					if(day>=dayNum){
						$('.weekLine').eq(i).find("td").eq(j).find("p.day").html(dayNum);
						nowdate(dayNum,i,j);
						dayNum++;
					}
					else if(day<dayNum){//月末的日期小于当前日期，补充下一月的日期
						$('.weekLine').eq(i).find("td").eq(j).addClass("notNowMonth");
						$('.weekLine').eq(i).find("td").eq(j).find("p.day").html(nextday);
						nextday++;
					}
				}
			}
		}
		//为当前日期添加
		$('.weekLine td[data-day = '+updatanow+']').addClass("nowdate");
	}
//为每个td添加日期
	function nowdate(dayNum,i,j){//i,j分别为行和列的下标值
		if(dayNum < 10){
			dayNum = "0" + dayNum;
		}
		$('.weekLine').eq(i).find("td").eq(j).attr("data-day",year+""+month+""+dayNum);
	}
//更新日期
	function update(year,month){
		if(year < 10){
			year = "0" + year;
		}
		if(month < 10){
			month = "0" + month;
		}
		$('#date').html(year + "-" + month+ "-" + nowDay);
	}
//	上一月
	$('#proveMonth').click(function(){
		if(month>1){
			month--;
			month2--;
			update(year,month);
		}else{
			year--;
			month = 12;
			month2 = 11;
			update(year,month);
		}
		writedata();
		updataSign(nowDay2);
	});
//	下一月
	$('#nextMonth').click(function(){
		if(month<12){
			month++;
			month2++;
			update(year,month);
		}else{
			year ++;
			month = 1;
			month2 = 12;
			update(year,month);
		}
		writedata();
		updataSign(nowDay2);
	})
	//获取当前月最大的一天
	function getLastDay(year,month){   
		var new_year = year;  //取当前的年份   
		var new_month = month++;//取下一个月的第一天，方便计算（最后一天不固定）   
		if(month>12){      //如果当前大于12月，则年份转到下一年   
			new_month -=12;    //月份减   
			new_year++;      //年份增   
		}   
		var new_date = new Date(new_year,new_month,1);        //取当年当月中的第一天   
		return (new Date(new_date.getTime()-1000*60*60*24)).getDate();//获取当月最后一天日期   
	}  
//向日历控件中添加是否签到
	updataSign(nowDay2);
	//nowDay2 为当前日期，day为当前月份的最后一天
	function updataSign(nowDay2){
		$(".weekLine td").removeClass("check");
		$(".weekLine td").removeClass("fork");
		var data = myData.Data.signDate;
		for(var i=0;i<data.length;i++){
			$('.weekLine td[data-day = '+data[i]+']').addClass('check');
		}
		nowDay2 = nowDay2 - data.length;//剩余没打卡的天数
		for(var i=0 ;i<nowDay2;i++){
			$(".weekLine td[data-day]:not([class='check'])").eq(i).addClass('fork');
		}
		if(month<month3){
//			var data = myData.Data.signDate;
//			for(var i=0;i<data.length;i++){
//				$('.weekLine td[data-day = '+data[i]+']').addClass('check');
//			}
			var day = getLastDay(year,month);//剩余没打卡的天数
			
			for(var i=0 ;i<day;i++){
				$(".weekLine td[data-day]:not([class='check'])").eq(i).addClass('fork');
			}
		}else if(month>month3){
			$(".weekLine td").removeClass("check");
			$(".weekLine td").removeClass("fork");
		}
	}
}
