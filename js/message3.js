$(function(){
//	$(".show-a").mouseover(function(){
//		$(".add-a").css("display","block");
//	})
	$(".show-a").mouseout(function(){
		$(".add-a").mouseover(function(){
			$(".add-a").css("display","block");
		})
		$(".add-a").mouseout(function(){
			$(".add-a").css("display","none");
		})
	})
	$(".show-a").bind("click",function(){
		$(".add-a").toggle();
	})
	$(".exit").mouseover(function(){
		$(this).css({"text-decoration":"none","cursor":"pointer","color":"#0000FF"});
	})
	$(".exit").mouseout(function(){
		$(this).css("color","#FFFFFF");
	})
	$(".back").mouseover(function(){
		$(this).css({"cursor":"pointer","text-decoration":"none","color":"#FF0000"});
	})
	$(".back").mouseout(function(){
		$(this).css({"cursor":"pointer","text-decoration":"none","color":"#0000FF"});
	})
//	$(".bottom-1>ul>li").mouseover(function(){
//		$(this).children().children("p").show();
//		$(this).children().children("span").show();
//		$(this).children().children("div").show();
//	})
//	$(".bottom-1>ul>li").mouseout(function(){
//		$(this).children().children("p").hide();
//		$(this).children().children("span").hide();
//		$(this).children().children("div").hide();
//	})
	$(".choose ul li").click(function(){
		$(this).css("background","#FF6900");
		$(this).children("a").css("color","#FFFFFF");
		$(this).siblings().css("background","#FFFFFF");
		$(this).siblings().children("a").css("color","#000000");
	})
	$(".bottom-1>ul>li").mouseover(function(){
		$(this).children().children("b").show();
	})
	$(".bottom-1>ul>li").mouseout(function(){
		$(this).children().children("b").hide();
	})
	$(".close-it").click(function(){
		$(this).parent().parent().hide();
	})
	$(".del-out").click(function(){
		$("input:checkbox").prop("checked",false);
		$(this).hide();$(".del-no").show();
		$(".del-out1").show();
//		$('.ck').attr('checked',false);
		
		$(".bottom-1>ul>li img").css("opacity",".5");
		$('.ck').show();
		$(".bottom-1>ul>li").mouseover(function(){
			$(this).children().children("b").hide();
		})
		$(".del-out1").click(function(){
			if($('.bottom-1>ul>li').eq(0).hasClass('wtf')){
				$('.bottom-1>ul>li').eq(0).hide();
			}
			if($('.bottom-1>ul>li').eq(1).hasClass('wtf')){
				$('.bottom-1>ul>li').eq(1).hide();
			}
			if($('.bottom-1>ul>li').eq(2).hasClass('wtf')){
				$('.bottom-1>ul>li').eq(2).hide();
			}
			if($('.bottom-1>ul>li').eq(3).hasClass('wtf')){
				$('.bottom-1>ul>li').eq(3).hide();
			}
			if($('.bottom-1>ul>li').eq(4).hasClass('wtf')){
				$('.bottom-1>ul>li').eq(4).hide();
			}
			if($('.bottom-1>ul>li').eq(5).hasClass('wtf')){
				$('.bottom-1>ul>li').eq(5).hide();
			}
			if($('.bottom-1>ul>li').eq(6).hasClass('wtf')){
				$('.bottom-1>ul>li').eq(6).hide();
			}
			if($('.bottom-1>ul>li').eq(7).hasClass('wtf')){
				$('.bottom-1>ul>li').eq(7).hide();
			}
			$(".bottom-1>ul>li img").css("opacity","1");
			$('.ck').hide();
			$(".del-no").hide();
			$(this).hide();
			$(".del-out").show();
		})
	})
	$(".ck").click(function(){
	 	$(this).parent().toggleClass("wtf");
	})
	$(".del-no").click(function(){
//		clearInterval()
		$(".bottom-1>ul>li img").css("opacity","1");
//		$(".ck").prop('checked',false);
		$("input:checkbox").prop("checked",false);
		$('.ck').hide();
		$(this).hide();
		$(".del-out1").hide();
		$(".del-out").show();
		$(".bottom-1>ul>li").mouseover(function(){
			$(this).children().children("b").show();
		})
		$(".bottom-1>ul>li").mouseout(function(){
			$(this).children().children("b").hide();
		})
		$(".del-out").click(function(){
//			alert(1)
//			$("input:checkbox").prop("checked",false);
//			alert(1);
			$(".bottom-1>ul>li img").css("opacity",".5");
			$('.ck').show();
			$(".del-no").show();
			$(".ck").click(function(){
			 	$(this).parent().toggleClass("wtf");
			})
			$(".del-out1").click(function(){
				if($('.bottom-1>ul>li').eq(0).hasClass('wtf')){
					$('.bottom-1>ul>li').eq(0).hide();
				}
				if($('.bottom-1>ul>li').eq(1).hasClass('wtf')){
					$('.bottom-1>ul>li').eq(1).hide();
				}
				if($('.bottom-1>ul>li').eq(2).hasClass('wtf')){
					$('.bottom-1>ul>li').eq(2).hide();
				}
				if($('.bottom-1>ul>li').eq(3).hasClass('wtf')){
					$('.bottom-1>ul>li').eq(3).hide();
				}
				if($('.bottom-1>ul>li').eq(4).hasClass('wtf')){
					$('.bottom-1>ul>li').eq(4).hide();
				}
				if($('.bottom-1>ul>li').eq(5).hasClass('wtf')){
					$('.bottom-1>ul>li').eq(5).hide();
				}
				if($('.bottom-1>ul>li').eq(6).hasClass('wtf')){
					$('.bottom-1>ul>li').eq(6).hide();
				}
				if($('.bottom-1>ul>li').eq(7).hasClass('wtf')){
					$('.bottom-1>ul>li').eq(7).hide();
				}
				$(".bottom-1>ul>li img").css("opacity","1");
				$('.ck').hide();
				$(".del-no").hide();
				$(this).hide();
				$(".del-out").show();
			})
		})
	})
})
