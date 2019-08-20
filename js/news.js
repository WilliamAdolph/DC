$(function(){
	
	
//	4、正文信息--右侧--“图文资讯”--电影资讯------------------------
	$(".file-news").hover(function(){
		$(this).siblings("a").children(".news-hover").css("display","block");
		
	},function(){
		
	});
	$(".news-hover").hover(function(){
		
	},function(){
		$(this).css("display","none");
		
	});
	
	
//	4、正文信息--右侧--“图文资讯”--剧集资讯图------------------------	
	$(".right-tv1").hover(function(){
		$(this).children("h3").children("a").css("color","#366df0");
	},function(){
		$(this).children("h3").children("a").css("color","#666");
	});
	
//	4、正文信息--右侧--“图文资讯”--漫画资讯图------------------------	
	$(".comice-news1").hover(function(){
		$(this).find("h3").children("a").css("color","#FF0000");
	},function(){
		$(this).find("h3").children("a").css("color","#fff");
	});
	$(".comice-news2").hover(function(){
		$(this).find("h3").children("a").css("color","#FF0000");
	},function(){
		$(this).find("h3").children("a").css("color","#fff");
	});
	$(".comice-news3").hover(function(){
		$(this).find("h3").children("a").css("color","#FF0000");
	},function(){
		$(this).find("h3").children("a").css("color","#fff");
	});
//左箭头
	var img=1;//从1到3
	$(".arrowLeft").click(function(){
		img--;
		if(img<=0){img=3;}
		$(".comice-news"+img).show();
		$(".comice-news"+img).siblings().hide();
		
		//定时器的位置
		time=img;
	});	
	
//右箭头
	$(".arrowRight").click(function(){
		img++;
		if(img>3){img=1;}
		$(".comice-news"+img).show();
		$(".comice-news"+img).siblings().hide();
		
		if(img==4){
			img=1;
			$(".comice-news"+img).show();
			$(".comice-news"+img).siblings().hide();
		}
		
		//定时器的位置
		time=img;
	});	
	
//定时轮播
	var time=1;
	function time1(){
		time++;
		if(time>3){time=1;}
		//左右滑动的位置
		img=time;
		$(".comice-news"+img).show();
		$(".comice-news"+img).siblings().hide();
	}
	var lunbo =setInterval(time1,3000);	

//图片、左右箭头放鼠标停止轮播
	$(".comice-news,.arrowLeft,.arrowRight").mouseover(function(){
		//终止轮播定时器
		clearInterval(lunbo);
	}).mouseout(function(){
		//开启定时器
		lunbo =setInterval(time1,3000);
	});	
	
	
//	5、动态信息------------------------------------------	
	$(".news-emotion>.tv-news").hover(function(){
		$(this).children("h3").children("a").css("color","#366df0");
	},function(){
		$(this).children("h3").children("a").css("color","#000");
	});	
	
	$(".film-ul>li").hover(function(){
		$(this).css({"padding-left":"15px","background":"url(img/news/star_icon.png) no-repeat 3px -285px"});
	},function(){
		$(this).css({"padding-left":"0","background":"url()"});
	});
	
	
	
	
	
	
});