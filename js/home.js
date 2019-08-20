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
	
	$("#src").on("input",function(e){
                //获取input输入的值
                console.log(e.delegateTarget.value);
                $("#s1").click(function(){
                	if($("#src").val()=='海王'){
                		window.location.href='search.html'
                	}else{
                		window.location.href='search_none.html'
                	}
                	
                })
            });
	
	$("#s1").click(function(){
		$("#s1").click(function(){
			window.location.href='search_none.html'	
		})
	})
	
	
	//轮播
	$(".carousel-caption").hover(function(){
		$(this).find("p").css("background","#000000")
	},function(){
		$(this).find("p").css("background","#061f33")
	})
	
	
	//今日推荐
	$(".f1").hover(function(){
		$(this).find(".f1-1").css({"background":"#366df0","color":"white"})
		$(this).find(".f1-1 span").css("background","#366df0").show()

		
	},function(){
		$(this).find(".f1-1").css({"background":"white","color":"black"})
		$(this).find(".f1-1 span").hide()
		
		
	})
	
	//猛男
	$(".middle-1").hover(function(){
		$(this).find("h3").css("color","#366DF0")
		$(this).find(".time").css("color","#366DF0")
	},function(){
		$(this).find("h3").css("color","black")
		$(this).find(".time").css("color","#9b9b9b")
	})
	
//	$("#middle-2").hover(function(){
//		$(this).find("h3").css("color","#366DF0")
//		$(this).find(".time").css("color","#366DF0")
//	},function(){
//		$(this).find("h3").css("color","black")
//		$(this).find(".time").css("color","#9b9b9b")
//	})
//	
//	$("#middle-3").hover(function(){
//		$(this).find("h3").css("color","#366DF0")
//		$(this).find(".time").css("color","#366DF0")
//	},function(){
//		$(this).find("h3").css("color","black")
//		$(this).find(".time").css("color","#9b9b9b")
//	})
	
	//tu
	$(".tu1").hover(function(){
		$(this).find("h3").css("color","#366DF0")
		$(this).find(".time").css("color","#366DF0")
	},function(){
		$(this).find("h3").css("color","black")
		$(this).find(".time").css("color","#9b9b9b")
	})
	

	//动态
	$(".dynamic").hover(function(){
		$(this).find(".h1").css("background","#366DF0")
		$(this).find(".kind").fadeIn()
	},function(){
		
	})
	
	

})

//手风琴
$(function(){
		$('#wrap li').mouseover(function(){
			if(!$(this).hasClass('curr')){
				$('#wrap li').removeClass('curr');
				$(this).addClass('curr');

				// 切换背景
				$('#wrap li').each(function(index){
					if($(this).hasClass('curr')){
						$('.bg').fadeOut(300);
						$('.bg:eq(' + index + ')').fadeIn(500);
					}
				});

				$('.curr').stop().animate({
					width: 885
				}, 500, 'linear');
				$('#wrap li').not('.curr').stop().animate({
					width: 100
				}, 500, 'linear');
			}
		});
		
		//手风琴
		$(".f2").hover(function(){
			$(this).find(".f2-1").css({"background":"#366df0","color":"white"})
		},function(){
			$(this).find(".f2-1").css({"background":"rgba(255,255,255,0.4)","color":"black"})
		})
		
		$(".d1").hover(function(){
		$(this).find("h3").css("color","#366DF0")
		$(this).find(".time").css("color","#366DF0")
	},function(){
		$(this).find("h3").css("color","white")
		$(this).find(".time").css("color","#9b9b9b")
	})
	
	$(".vdo").hover(function(){
		$(this).find(".h1").css("background","#366DF0")
		$(this).find(".h1 a").css("color","white")
		$(this).find(".kind").fadeIn()
	},function(){
		
	})
	
	//视频
	
	$(".p1").hover(function(){
			$(this).find(".p1-1").css({"background":"#366df0","color":"white"})
		},function(){
			$(this).find(".p1-1").css({"background":"rgba(255,255,255,0.4)","color":"black"})
		})
	
	$(".d2").hover(function(){
		$(this).find("h3").css("color","#366DF0")
		$(this).find(".time").css("color","#366DF0")
	},function(){
		$(this).find("h3").css("color","black")
		$(this).find(".time").css("color","#9b9b9b")
	})
	
	//影视
	$(".movie-1").hover(function(){
		$(this).find(".totle").fadeIn()
	},function(){
		$(this).find(".totle").hide()
	})
	
	var num=0;
	$(".movie-top2").click(function(){
		num++;
		if(num>1){num=0};
		$("#m"+num).fadeIn();
		$("#m"+num).siblings().hide();
	})
	
})
	
	
