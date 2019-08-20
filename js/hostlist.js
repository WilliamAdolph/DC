$(function(){
//	$('#myModal').modal("toggle");
	
	$("#submit").click(function(){
		var mobile = $("#recipient-name").val();
		var regmobile = /^1\d{10}$/;
		if(regmobile.test(mobile) == false){
			$(".warn1").css("display","block");
		}
		if(regmobile.test(mobile) == true){
			$(".warn1").css("display","none");
		}
		
		var $pass = $("#recipient-pwd").val();
		if($pass.length<6){
			$(".warn2").css("display","block");
		}
		else{
			$(".warn2").css("display","none");
		}
		
		return true;
	});
	
	
//	手机号认证
	$("#recipient-name").focus(function(){
		var mobile = $("#recipient-name").val();
		var regmobile = /^1\d{10}$/;
		if(regmobile.test(mobile) == false){
			$(".warn1").css("display","block");
		}
		
	}).blur(function(){
		var mobile = $("#recipient-name").val();
		var regmobile = /^1\d{10}$/;
		if(regmobile.test(mobile) == true){
			$(".warn1").css("display","none");
		}
		
	});
//密码认证	
	$("#recipient-pwd").focus(function(){
		var $pass = $("#recipient-pwd").val();
		if($pass.length<6){
			$(".warn2").css("display","block");
		}
		else{
			$(".warn2").css("display","none");
		}
	});
	
	
	
	
	$(".recipient-btn").hover(function(){
		$(this).css({"background":"#366DF0","color":"#fff"});
	},function(){
		$(this).css({"background":"transparent","color":"#999"});
	});
	
	$("#submit").hover(function(){
		$(this).css({"background":"#4169E1"});
	},function(){
		$(this).css({"background":"#366DF0"});
	});
	
	
	$(".img-span1").hover(function(){
		$(this).css("background","url(img/news/wechat-hover.png) no-repeat");
	},function(){
		$(this).css("background","url(img/news/webchat.png) no-repeat");
	});
	
	$(".img-span2").hover(function(){
		$(this).css("background","url(img/news/login-group.png) no-repeat -40px -40px");
	},function(){
		$(this).css("background","url(img/news/login-group.png) no-repeat 0 -40px");
	});
	
	$(".img-span3").hover(function(){
		$(this).css("background","url(img/news/login-group.png) no-repeat -40px -80px");
	},function(){
		$(this).css("background","url(img/news/login-group.png) no-repeat 0 -80px");
	});
	
	$(".img-span4").hover(function(){
		$(this).css("background","url(img/news/login-group.png) no-repeat -40px -120px");
	},function(){
		$(this).css("background","url(img/news/login-group.png) no-repeat 0 -120px");
	});
	
	$(".send>button").hover(function(){
		$(this).css("background","url(img/news/post-btn-hover.png) no-repeat");
	},function(){
		$(this).css("background","url(img/news/post-btn.png) no-repeat");
	});
	
	
	
	
	
	
});