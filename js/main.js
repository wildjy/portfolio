//<![CDATA[
var $window = $(window),
	winW = $window.width(),
	winH = $window.height();

var xStart,xEnd,yStart,yEnd;
$swipe = $('#swiper-wrap'),
$pagerWrap = $('.pager'),
$test = $("<span></span>");

for(var p = 0; p<=($('.section').length -1); p++){
	$('.pager').append("<span><span></span><b></b></span>");
};

var $pager = $('.pager>span'),
$boxWrapper = $swipe.find('.wrapper'),
$box = $swipe.find('.section'),
$hybrid = $(".in_section"),
boxLength = $box.length,
pagerLength = $test * boxLength;

var pH = $pagerWrap.height();
$pagerWrap.css({"margin-top":-pH/2});

for(var i = 0; i<=(boxLength -1); i++){
	$pager.eq(i).attr("rel","#box_"+i);
	$box.eq(i).attr("id","box_"+i);
};

$boxWrapper.height(winH*boxLength);
$box.height(winH);

$boxH = $("#wrap").height() / boxLength;

$(window).resize(function(){
	var $window = $(window),
	winH = $window.height(),
	$boxWrapper = $swipe.find('.wrapper'),
	$box = $swipe.find('.section'),
	boxLength = $box.length;

	$boxWrapper.height(winH*boxLength);
	$('.section').height(winH);
	$boxH = $("#wrap").height() / boxLength;
});

$pagerWrap.on("mouseover", function(){
	$(this).css({"opacity":"1"});
});

//swipe event
function handleTouchEvent(event){
	event = event.originalEvent;

	switch(event.type){
		case "touchstart":
			xStart = event.touches[0].clientX;
			yStart = event.touches[0].clientY;
			break;
		case "touchend":
			xEnd = event.changedTouches[0].clientX;
			yEnd = event.changedTouches[0].clientY;
			var $this = $(this);
			swipehadle($this,xStart,xEnd,yStart,yEnd);
			break;
		case "mousedown":
			xStart = event.clientX;
			yStart = event.clientY;
			break;
		case "mouseup":
			xEnd = event.clientX;
			yEnd = event.clientY;
			var $this = $(this);
			swipehadle($this,xStart,xEnd,yStart,yEnd);
			break;
		case "touchmove":
			event.preventDefault();
			break;
		case "mousemove":
			event.preventDefault();
			break;
	};
};

$pager.eq(0).addClass('on');
$pager.click(function(){
	var posIndex = $(this).index();
	var posY = $($(this).attr("rel")).height();
	//console.log(posIndex);

	$pager.removeClass('on');
	$(this).addClass('on');
	$boxWrapper.css({
		 '-webkit-transform': 'translate3d(0,'+(-posY*posIndex)+'px,0)',
		 'transform': 'translate3d(0,'+(-posY*posIndex)+'px,0)'
	});
});

function swipehadle(thebox,xStart,xEnd,yStart,yEnd){
	var verticalDistance = yEnd-yStart,
	$thebox = thebox,
	theIndex = $thebox.index();
	//console.log(theIndex);
			$box.eq(1).find(".in_section").addClass("active");
	if(verticalDistance>30){
		if(theIndex>0){
			//slider down action
			$boxWrapper.css({
				 '-webkit-transform': 'translate3d(0,'+(-$boxH*(theIndex-1))+'px,0)',
				 'transform': 'translate3d(0,'+(-$boxH*(theIndex-1))+'px,0)'
			});
			$thebox.addClass('box-active').siblings().removeClass('box-active');
			console.log(theIndex - 2);

			$pager.removeClass('on');
			$pager.eq(theIndex -1).addClass('on');
	  }
	}else if(verticalDistance<-30){
		if(theIndex<boxLength-1){
			//slider up action
			$boxWrapper.css({
				 '-webkit-transform': 'translate3d(0,'+(-$boxH*(theIndex+1))+'px,0)',
				 'transform': 'translate3d(0,'+(-$boxH*(theIndex+1))+'px,0)'
			});
			$thebox.addClass('box-active').siblings().removeClass('box-active');
			console.log(theIndex );


			$pager.removeClass('on');
			$pager.eq(theIndex + 1).addClass('on');
	  };
	};
};

function mousewheel_(){
	$swipe.find(".section").each(function(){
		$(this).mousewheel(function(event,delta){

				$(this).find(".in_section").addClass("active");
				$(".section").eq($(this).index()+1).find(".in_section").addClass("active");
				//console.log($(this).index());
			if(delta>0){
				// 마우스 휠을 올렸을때
				//console.log("up");
				console.log($(this).index() - 2);
				if($(this).index()>0){
					$boxWrapper.css({
						 '-webkit-transform': 'translate3d(0,'+(-$boxH*($(this).index()-1))+'px,0)',
						 'transform': 'translate3d(0,'+(-$boxH*($(this).index()-1))+'px,0)'
					});
					$pager.removeClass('on');
					$pager.eq($(this).index() -1).addClass('on');
					$(".section").eq($(this).index() + 1).children(".in_section").addClass("active");
				};
			}else if(delta<0){
				//내렸을때
				//console.log("down");
				//console.log($(this).index());
				if($(this).index()<boxLength-1){
					$boxWrapper.css({
						'-webkit-transform': 'translate3d(0,'+(-$boxH*($(this).index()+1))+'px,0)',
						'transform': 'translate3d(0,'+(-$boxH*($(this).index()+1))+'px,0)'
					});
					$pager.removeClass('on');
					$pager.eq($(this).index() +1).addClass('on');
				};
			};
		});
	});
};
mousewheel_();

$.fn.extend({
	mouse_wheel: function() {
		$(this).on('mousewheel', function(e) {
			if (e.originalEvent.wheelDelta >= 120) {
				this.scrollTop -= 50;
			} else if (e.originalEvent.wheelDelta <= -120) {
				this.scrollTop += 50;
			}
			mousewheel_();
		});
	}
});

//$('.scroll_Layer').mouse_wheel();
/*
$(window).resize(function(){
	var $window = $(window),
	winH = $window.height(),
	$boxWrapper = $swipe.find('.wrapper'),
	$box = $swipe.find('.section'),
	$pop_Layer = $("#popup_Layer"),
	boxLength = $box.length;

	$boxWrapper.height(winH*boxLength);
	//console.log($(this).index());
	$boxWrapper.css({
		'-webkit-transform': 'translate3d(0,'+(winH*($(this).index()+1))+'px,0)',
		'transform': 'translate3d(0,'+(winH*($(this).index()+1))+'px,0)'
	});
	$pager.removeClass('on');
	$pager.eq($(this).index() +1).addClass('on');
	$pop_Layer.fadeOut();
});
*/

$("html, body").on("touchstart touchend touchmove mousedown mouseup mousemove",'.section',handleTouchEvent);
//]]>