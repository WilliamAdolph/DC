$(function(){
	$(".btn-search").hover(function(){
		$(this).css("background","url(img/background.png)-57px -85px")
	},function(){
		$(this).css("background","url(img/background.png)0px -85px")
	})
	
	$(".btn-search").click(function(){
		$(this).css("background","url(img/background.png)-57px -85px")
		$("#src").fadeIn();
		
	})

})