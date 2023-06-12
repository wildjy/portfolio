/*
	Front and Developer Projcet..
	design : SH
	publishng : JY
*/

//<![CDATA[
$(document).ready(function(){
	projectList.init();
});

var projectList = {
	init : function(){
		function project_slider(){
			var swiper = new Swiper(".swiper-container", {
				slidesPerView: "auto",
				centeredSlides: false,
				spaceBetween: 35,
				nextButton: '.swiper-button-next',
				prevButton: '.swiper-button-prev',
				speed: 600,
				mousewheel: true
			});

			/*
			var sw = $(window).width(),
			spv = 4;

			if(sw > 1024){
				spv=4
			} else if((sw > 768) && (sw <=1024)){
				spv=3;
			} else if((sw > 640) && (sw <=768)){
				spv=3;
			} else if(sw <= 640){
				spv=1;
			};


			$(window).resize(function(){
				var sw = $(window).width();
				if(sw > 1024){
					swiper.params.slidesPerView = 4;
				} else if((sw > 768) && (sw <=1024)){
					swiper.params.slidesPerView = 3;
				} else if((sw > 640) && (sw <=768)){
					swiper.params.slidesPerView = 3;
				} else if(sw <= 640){
					swiper.params.slidesPerView = 1;
				};
			});
			*/

			/*
			var $p_view = $(".porfolio a"),
			$web_view = $(".porfolio_web a"),
			$mobile_view = $(".porfolio_mobile a"),
			$etc_view = $(".porfolio_etc a"),
			$detail_Layer = $("#popup_Layer");
			
			//all portfolio

			$p_view.each(function(index){
				index++;
				$(this).attr("rel","#port_"+index);
			});

			$p_view.click(function(){
				$(this).addClass("on");
				TweenMax.to($detail_Layer, 0.6, {"display" :"block","visibility":"visible", "scale":"1", ease: Power3.easeInOut});
				$detail_Layer.find(".inner").load("/portfolio/project_all.html "+$(this).attr("rel"), function(){$(".scroll").mCustomScrollbar();});
				return false;
			});
			*/

			//web portfolio
			/*
			$web_view.each(function(index){
				index++;
				$(this).attr("rel","#port_"+index);
			});

			$web_view.click(function(){
				$(this).addClass("on");
				TweenMax.to($detail_Layer, 0.6, {"display" :"block","visibility":"visible", "scale":"1", ease: Power3.easeInOut});
				$detail_Layer.find(".inner").load("/portfolio/project_web.html "+$(this).attr("rel"), function(){$(".scroll").mCustomScrollbar();});
				return false;
			});
			*/

			//mobile portfolio
			/*
			$mobile_view.each(function(index){
				index++;
				$(this).attr("rel","#port_"+index);
			});

			$mobile_view.click(function(){
				$(this).addClass("on");
				TweenMax.to($detail_Layer, 0.6, {"display" :"block","visibility":"visible", "scale":"1", ease: Power3.easeInOut});
				$detail_Layer.find(".inner").load("/portfolio/project_mobile.html "+$(this).attr("rel"), function(){$(".scroll").mCustomScrollbar();});
				return false;
			});
			*/

			//etc portfolio
			/*
			$etc_view.each(function(index){
				index++;
				$(this).attr("rel","#port_"+index);
			});

			$etc_view.click(function(){
				$(this).addClass("on");
				TweenMax.to($detail_Layer, 0.6, {"display" :"block","visibility":"visible", "scale":"1", ease: Power3.easeInOut});
				$detail_Layer.find(".inner").load("/portfolio/project_etc.html "+$(this).attr("rel"), function(){$(".scroll").mCustomScrollbar();});
				return false;
			});
			*/
		};

		function dragHide(){
			$(".swiper-wrapper, .drag").on("mouseover focusin touchmove", function(){
				TweenMax.to($(".drag"), .1, {opacity:0, visibility:"hidden",  ease: Expo.easeOut});
			}).on("mouseleave focusout touchend", function(){
				TweenMax.to($(".drag"), .5, {delay: 4.5, opacity:1, visibility:"visible", ease: Expo.easeOut});
			});
		};

		$(".project_Box").each(function(index){
			$(this).attr("id","type" + index);
		});
		$(".project-Type>li>a").each(function(index){
			$(this).attr("rel","#type" + index);
		});

		$(".project_Box").load("/portfolio/project_List.html #type0", function(){
			project_slider();
			dragHide();
		});

		$(".project-Type>li>a").click(function(){
			$(".project-Type>li>a").removeClass("on");
			$(this).addClass("on");
			$(".project_Box").load("/portfolio/project_List.html "+$(this).attr("rel"), function(){
				project_slider();
				dragHide();
			});
			return false;
		});
	}
}
//]]>