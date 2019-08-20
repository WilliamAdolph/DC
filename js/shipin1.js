//@media (max-width: @screen-xs-max) { ... }
//@media (min-width: @screen-sm-min) and (max-width: @screen-sm-max) { ... }
//@media (min-width: @screen-md-min) and (max-width: @screen-md-max) { ... }
//@media (min-width: @screen-lg-min) { ... }
$(function(){
	//导航栏固定
	 $(window).bind("scroll", function(){ 
        var top = $(this).scrollTop(); // 当前窗口的滚动距离
//      alert(top);
        if(top>=55){
        	$(".top-1").addClass("header-fixed");
        	$(".top-ul1").addClass("header-fixed");
        }if(top<55){
        	$(".top-1").removeClass("header-fixed");
        	$(".top-ul1").removeClass("header-fixed");
        }
  });
	//轮播图
//	小图淡化
	$(".items>a").mouseover(function(){
//		alert(1)
		$(this).css("opacity","1");
		$(this).siblings().css("opacity","0.3");
	})
	$(".items>a").mouseout(function(){
		$(".items>a").css("opacity","0.7");
	})
//	边框出现
//	$(".item-list").click(function(){
//		for(var i =0;i<7;i++){
//			if($(".items").children("a").eq(i).attr("class")=="selected"){
//				var j=0;
//				j=j+i+1;
////				alert(j);
//				for(var index=1;index<8;index++){
//					$(".slide-tip"+index).hide();
//				}
//				$(".slide-tip"+j).show();
//			}
//		}
//	})
	$(".items").mouseover(function(){
		$(".items>a").each(function(){
			if($(this).attr("class")=="selected"){
					var index = $(this).index();
					index = index+1;
					$(".slide-tip1").hide();
					$(".slide-tip2").hide();
					$(".slide-tip3").hide();
					$(".slide-tip4").hide();
					$(".slide-tip5").hide();
					$(".slide-tip6").hide();
					$(".slide-tip7").hide();
					$(".slide-tip"+index).show();
				}
		})
	})
	$(".item-list").mouseout(function(){
		for(var index=1;index<8;index++){
			$(".slide-tip"+index).hide();
//			alert(index);
		}
	})
	$(".items").mouseout(function(){
		for(var index=1;index<8;index++){
			$(".slide-tip"+index).hide();
//			alert(index);
		}
	})

	/* 图片滚动效果 */
	$(".mr_frbox").slide({
		titCell: "",
		mainCell: ".mr_frUl ul",
		autoPage: true,
		effect: "leftLoop",
		autoPlay: true,
		vis: 4
	});
	
	/* 鼠标悬停图片效果 */
	$(".mr_zhe_hover").css("top", $('.mr_zhe').eq(0).height());
	$("li").mouseout(function (e) {
		if ((e.pageX < $(this).offset().left || e.pageX > ($(this).offset().left + $(this).width())) || (e.pageY < $(this).offset().top || e.pageY > ($(this).offset().top + $(this).height()))) {
			$(this).find('.mr_zhe_i').show();
			$(this).find('.mr_zhe_hover').hide().stop().animate({ top: '190px' }, { queue: false, duration: 190 });
			return false;
		}

	});
	$('.mr_zhe').mouseover(function (event) {
		$(this).find('.mr_zhe_i').hide();
		$(this).find('.mr_zhe_hover').show().stop().animate({ top: '190px' }, { queue: false, duration: 190 });
		return false;
	});
	$(".frBtnL").mouseover(function(){
		$(this).css({"opacity":"1","background":"#000000"});
		$(".mr_frBtnL").css("opacity","1");
	})
	$(".frBtnL").mouseout(function(){
		$(this).css({"opacity":"1","background":"#FFFFFF"});
		$(".mr_frBtnL").css("opacity","0.5");
	})
	$(".frBtnR").mouseover(function(){
		$(this).css({"opacity":"1","background":"#000000"});
		$(".mr_frBtnR").css("opacity","1");
	})
	$(".frBtnR").mouseout(function(){
		$(this).css({"opacity":"1","background":"#FFFFFF"});
		$(".mr_frBtnR").css("opacity","0.5");
	})
	
	$("#mr_fu>li").mouseover(function(){
		$(this).children("span").css("opacity","0.25");
//		$(this).css("box-shadow","0 -5px 10px #c2c2c2");
		$(this).children("p").css({"color":"blue","cursor":"pointer"});
		$(this).children("em").css({"opacity":"1"});
	})
	$("#mr_fu>li").mouseout(function(){
		$(this).children("span").css("opacity","0");
//		$(this).css("box-shadow","none");
		$(this).children("p").css({"color":"#666666","cursor":"pointer"});
		$(this).children("em").css({"opacity":"0"});
	})
//	图集
	$(".fsbanner>div").mouseover(function(){
		$(this).children("span").hide();
		$(this).children("p").show();
	})
	$(".fsbanner>div").mouseout(function(){
		$(this).children("span").show();
		$(this).children("p").hide();
	})
//	最新
	$(".latest1").mouseover(function(){
			$(this).css("cursor","pointer");
			$(this).children("span").css("opacity","0.25");
			$(this).css("box-shadow","0 -5px 10px #c2c2c2");
			$(this).children("p").children("strong").css({"color":"blue","cursor":"pointer"});
			$(this).children("em").css({"opacity":"1"});
		})
		$(".latest1").mouseout(function(){
			$(this).children("span").css("opacity","0");
			$(this).css("box-shadow","none");
			$(this).children("p").children("strong").css({"color":"#666666","cursor":"pointer"});
			$(this).children("em").css({"opacity":"0"});
		})
})
