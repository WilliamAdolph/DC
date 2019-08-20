$(function(){
	//电影
	$('.pageTest').page({
      leng: 36,//分页总数
      activeClass: 'activP' , //active 类样式定义
      clickBack:function(page){
//      console.log(page);
      }
   });
    // $('.pageTest').setLength(10)
	
	
	//剧集
	$('.pageTest1').page({
      leng: 20,//分页总数
      activeClass: 'activP' , //active 类样式定义
      clickBack:function(page){
//      console.log(page);
      }
   });
    // $('.pageTest1').setLength(10)
	
	
	//漫画
	$('.pageTest2').page({
      leng: 4,//分页总数
      activeClass: 'activP' , //active 类样式定义
      clickBack:function(page){
//      console.log(page);
      }
   });
    // $('.pageTest2').setLength(10)
	
	
	
	
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
	
	
	
});

