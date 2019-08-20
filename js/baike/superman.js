$(function(){
	$(".sur-big").click(function(){
		$(".sur-head").hide();	
		$(".about-big").show();
	})
	
	$("#close").click(function(){
		$(".about-big").hide();	
		$(".sur-head").show();	
		
	})
	
	
	$(".fly-big").hover(function(){
		$(this).css({"padding":"0px"})	
		$(this).find("h3").css({"font-size":"28px","color":"blue"})
		$(this).find("p").css("font-size","16px")
		$(this).find(".fly").css("box-shadow","10px 10px 5px #888888")
	},function(){
		$(this).css({"padding":"0 15px"})
		$(this).find("h3").css({"font-size":"24px","color":"black"})
		$(this).find("p").css("font-size","14px")
		$(this).find(".fly").css("box-shadow","none")
	})
	
	
	
	
	
	
})
