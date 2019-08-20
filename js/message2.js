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
		$(this).css({"cursor":"pointer","text-decoration":"none","color":"#0000FF"});
	})
	$(".back").mouseout(function(){
		$(this).css({"cursor":"pointer","text-decoration":"none","color":"#5DCEC6"});
	})
	$('[data-toggle="popover"]').popover();
	$(".message-right>ul>li").mouseover(function(){
		$(this).css("border","1px solid #09BB07");
		$(this).children("a").css("color","#09BB07");
	})
	$(".message-right>ul>li").mouseout(function(){
		$(this).css("border","1px solid #F0F0F0");
		$(this).children("a").css("color","#000000");
	})
	$(".del").click(function(){
		$(this).parent().parent().hide();
	})
	
	
	var st = $(".state").html();
//	alert(st);
})
