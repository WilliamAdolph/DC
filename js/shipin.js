//@media (max-width: @screen-xs-max) { ... }
//@media (min-width: @screen-sm-min) and (max-width: @screen-sm-max) { ... }
//@media (min-width: @screen-md-min) and (max-width: @screen-md-max) { ... }
//@media (min-width: @screen-lg-min) { ... }
! function(e) {
	e.fn.slideCarsousel = function(t) {
		t = e.extend({}, e.fn.slideCarsousel.defaultSetting, t);
		var i = e(this),
			n = i.children("ul.item-list"),
			r = n.children(),
			s = {
				slideCarousel: i,
				count: r.length,
				ul: n,
				liList: r,
				currentIndex: 0,
				indicatorList: i.children(".indicator-list").children("a"),
				itemPrev: i.children(".controls").children(".item-prev"),
				itemNext: i.children(".controls").children(".item-next"),
				itemClassArr: [],
				init: function() {
//					alert(s.count)
					for(var e = 0, t = s.count; e < t; e++) s.itemClassArr.push("item" + e);
					s.slideAutoChange()
				},
				slideAutoChange: function() {
					t.isAutoChange && (t.slideInterval = setInterval(function() {
						s.toNext()
					}, t.direction))
				},
				toNext: function() {
					s.itemClassArr.unshift(s.itemClassArr[s.count - 1]), s.itemClassArr.pop(), s.currentIndex++, s.currentIndex = s.currentIndex >= s.count ? 0 : s.currentIndex, s.resetItemClass()
				},
				toPrev: function() {
					s.itemClassArr.push(s.itemClassArr[0]), s.itemClassArr.shift(), s.currentIndex--, s.currentIndex = s.currentIndex < 0 ? s.count - 1 : s.currentIndex, s.resetItemClass()
				},
				processIndicatorEvent: function(t) {
					var i = t - s.currentIndex;
					if(0 != i) {
						if(s.currentIndex = t, i > 0) {
							n = s.itemClassArr.splice(s.itemClassArr.length - i);
							return s.itemClassArr = e.merge(n, s.itemClassArr), void s.resetItemClass()
						}
						if(i < 0) {
							var n = s.itemClassArr.splice(0, -i);
							return s.itemClassArr = e.merge(s.itemClassArr, n), void s.resetItemClass()
						}
					}
				},
				resetItemClass: function() {
					e.each(s.liList, function(t, i) {
						e(i).removeClass().addClass(s.itemClassArr[t])
					}), s.indicatorList.removeClass("selected").eq(s.currentIndex).addClass("selected"), s.processCallbackFunc(s.currentIndex)
				},
				processCallbackFunc: function(e) {
					null != t.callbackFunc && void 0 != t.callbackFunc && t.callbackFunc(e)
				}
			};
		switch(s.init(), s.itemNext.click(function() {
			s.toNext()
		}), s.itemPrev.click(function() {
			s.toPrev()
		}), t.indicatorEvent) {
			case "click":
				s.indicatorList.click(function() {
					s.processIndicatorEvent(e(this).attr("data-slide-index"))
				});
				break;
			case "mouseover":
				s.indicatorList.mouseover(function() {
					s.processIndicatorEvent(e(this).attr("data-slide-index"))
				})
		}
		switch(t.slideType) {
			case "2d":
				break;
			case "3d":
				s.ul.on("click", ".item1 img", function() {
					s.toPrev()
				}), s.ul.on("click", ".item3 img", function() {
					s.toNext()
				})
		}
		s.slideCarousel.mouseover(function() {
			clearInterval(t.slideInterval)
		}).mouseleave(function() {
			s.slideAutoChange()
		})
	}, e.fn.slideCarsousel.defaultSetting = {
		slideInterval: "slideInterval",
		isAutoChange: !0,
		direction: 5e3,
		callbackFunc: null,
		indicatorEvent: "click",
		slideType: "2d"
	}
}(jQuery);

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
//	大图淡化
	$(".items").mouseover(function(){
//		alert(1)
		$(".items>li>div").css("opacity","1");
	})
	$(".items").mouseout(function(){
		$(".items>li>div").css("opacity","0.7");
	})
//	边框出现
	$(".items li").mouseover(function(){
//		alert(1);
		$(this).children("div").css("border","5px solid #FF0000");
		$(this).children("div").children("img").css("opacity","1");
		$(this).siblings().children("div").css("border","5px solid transparent");
		$(this).siblings().children("div").children("img").css("opacity","0.5");
	})
//	大小框互相选择
//	小图选大图
	$(".items li").click(function(){
		var index = $(this).index();
//		alert(index);
		$(this).children("div").css("border","5px solid #FF0000");
		$(this).children("div").children("img").css("opacity","1");
		$(this).siblings().children("div").css("border","5px solid transparent");
		$(this).siblings().children("div").children("img").css("opacity","0.5");
		if(index==0){
			$(".indicator-list").children("a").siblings().removeClass("selected");
			$(".indicator-list").children("a").eq(0).addClass("selected");
			$(".item-list").children("li").eq(0).removeClass();
			$(".item-list").children("li").eq(0).addClass("item0");
			$(".item-list").children("li").eq(1).removeClass();
			$(".item-list").children("li").eq(1).addClass("item1");
			$(".item-list").children("li").eq(2).removeClass();
			$(".item-list").children("li").eq(2).addClass("item2");
			$(".item-list").children("li").eq(3).removeClass();
			$(".item-list").children("li").eq(3).addClass("item3");
			$(".item-list").children("li").eq(4).removeClass();
			$(".item-list").children("li").eq(4).addClass("item4");
			$(".item-list").children("li").eq(5).removeClass();
			$(".item-list").children("li").eq(5).addClass("item5");
			$(".item-list").children("li").eq(6).removeClass();
			$(".item-list").children("li").eq(6).addClass("item6");
//			alert(s.currentIndex);
		}if(index==1){
			$(".indicator-list").children("a").siblings().removeClass("selected");
			$(".indicator-list").children("a").eq(1).addClass("selected");
			$(".item-list").children("li").eq(0).removeClass();
			$(".item-list").children("li").eq(0).addClass("item6");
			$(".item-list").children("li").eq(1).removeClass();
			$(".item-list").children("li").eq(1).addClass("item0");
			$(".item-list").children("li").eq(2).removeClass();
			$(".item-list").children("li").eq(2).addClass("item1");
			$(".item-list").children("li").eq(3).removeClass();
			$(".item-list").children("li").eq(3).addClass("item2");
			$(".item-list").children("li").eq(4).removeClass();
			$(".item-list").children("li").eq(4).addClass("item3");
			$(".item-list").children("li").eq(5).removeClass();
			$(".item-list").children("li").eq(5).addClass("item4");
			$(".item-list").children("li").eq(6).removeClass();
			$(".item-list").children("li").eq(6).addClass("item5");
		}if(index==2){
			$(".indicator-list").children("a").siblings().removeClass("selected");
			$(".indicator-list").children("a").eq(2).addClass("selected");
			$(".item-list").children("li").eq(0).removeClass();
			$(".item-list").children("li").eq(0).addClass("item5");
			$(".item-list").children("li").eq(1).removeClass();
			$(".item-list").children("li").eq(1).addClass("item6");
			$(".item-list").children("li").eq(2).removeClass();
			$(".item-list").children("li").eq(2).addClass("item0");
			$(".item-list").children("li").eq(3).removeClass();
			$(".item-list").children("li").eq(3).addClass("item1");
			$(".item-list").children("li").eq(4).removeClass();
			$(".item-list").children("li").eq(4).addClass("item2");
			$(".item-list").children("li").eq(5).removeClass();
			$(".item-list").children("li").eq(5).addClass("item3");
			$(".item-list").children("li").eq(6).removeClass();
			$(".item-list").children("li").eq(6).addClass("item4");
		}if(index==3){
			$(".indicator-list").children("a").siblings().removeClass("selected");
			$(".indicator-list").children("a").eq(3).addClass("selected");
			$(".item-list").children("li").eq(0).removeClass();
			$(".item-list").children("li").eq(0).addClass("item4");
			$(".item-list").children("li").eq(1).removeClass();
			$(".item-list").children("li").eq(1).addClass("item5");
			$(".item-list").children("li").eq(2).removeClass();
			$(".item-list").children("li").eq(2).addClass("item6");
			$(".item-list").children("li").eq(3).removeClass();
			$(".item-list").children("li").eq(3).addClass("item0");
			$(".item-list").children("li").eq(4).removeClass();
			$(".item-list").children("li").eq(4).addClass("item1");
			$(".item-list").children("li").eq(5).removeClass();
			$(".item-list").children("li").eq(5).addClass("item2");
			$(".item-list").children("li").eq(6).removeClass();
			$(".item-list").children("li").eq(6).addClass("item3");
		}if(index==4){
			$(".indicator-list").children("a").siblings().removeClass("selected");
			$(".indicator-list").children("a").eq(4).addClass("selected");
			$(".item-list").children("li").eq(0).removeClass();
			$(".item-list").children("li").eq(0).addClass("item3");
			$(".item-list").children("li").eq(1).removeClass();
			$(".item-list").children("li").eq(1).addClass("item4");
			$(".item-list").children("li").eq(2).removeClass();
			$(".item-list").children("li").eq(2).addClass("item5");
			$(".item-list").children("li").eq(3).removeClass();
			$(".item-list").children("li").eq(3).addClass("item6");
			$(".item-list").children("li").eq(4).removeClass();
			$(".item-list").children("li").eq(4).addClass("item0");
			$(".item-list").children("li").eq(5).removeClass();
			$(".item-list").children("li").eq(5).addClass("item1");
			$(".item-list").children("li").eq(6).removeClass();
			$(".item-list").children("li").eq(6).addClass("item2");
		}if(index==5){
			$(".indicator-list").children("a").siblings().removeClass("selected");
			$(".indicator-list").children("a").eq(5).addClass("selected");
			$(".item-list").children("li").eq(0).removeClass();
			$(".item-list").children("li").eq(0).addClass("item2");
			$(".item-list").children("li").eq(1).removeClass();
			$(".item-list").children("li").eq(1).addClass("item3");
			$(".item-list").children("li").eq(2).removeClass();
			$(".item-list").children("li").eq(2).addClass("item4");
			$(".item-list").children("li").eq(3).removeClass();
			$(".item-list").children("li").eq(3).addClass("item5");
			$(".item-list").children("li").eq(4).removeClass();
			$(".item-list").children("li").eq(4).addClass("item6");
			$(".item-list").children("li").eq(5).removeClass();
			$(".item-list").children("li").eq(5).addClass("item0");
			$(".item-list").children("li").eq(6).removeClass();
			$(".item-list").children("li").eq(6).addClass("item1");
		}if(index==6){
			$(".indicator-list").children("a").siblings().removeClass("selected");
			$(".indicator-list").children("a").eq(6).addClass("selected");
			$(".item-list").children("li").eq(0).removeClass();
			$(".item-list").children("li").eq(0).addClass("item1");
			$(".item-list").children("li").eq(1).removeClass();
			$(".item-list").children("li").eq(1).addClass("item2");
			$(".item-list").children("li").eq(2).removeClass();
			$(".item-list").children("li").eq(2).addClass("item3");
			$(".item-list").children("li").eq(3).removeClass();
			$(".item-list").children("li").eq(3).addClass("item4");
			$(".item-list").children("li").eq(4).removeClass();
			$(".item-list").children("li").eq(4).addClass("item5");
			$(".item-list").children("li").eq(5).removeClass();
			$(".item-list").children("li").eq(5).addClass("item6");
			$(".item-list").children("li").eq(6).removeClass();
			$(".item-list").children("li").eq(6).addClass("item0");
		}
	})
})
