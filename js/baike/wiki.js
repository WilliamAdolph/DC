$(function(){
	
	$(".host-li").hover(function(){
		$(this).find("h3>a").css("color","#366df0");
		$(this).find("h4>a").css("color","#366df0");
		
	},function(){
		$(this).find("h3>a").css("color","#666");
		$(this).find("h4>a").css("color","#333");
	});
	
	$(".txt-div").hover(function(){
		$(this).next(".txt-div-hover").show();
		$(this).hide();
		$(this).parent(".hosttxt-li").siblings(".hosttxt-li").children(".txt-div-hover").hide();
		$(this).parent(".hosttxt-li").siblings(".hosttxt-li").children(".txt-div").show();
	},function(){
//		$(this).next(".txt-div-hover").hide();
		$(this).find(".txt-div").show();
	});

	
	
	
})
