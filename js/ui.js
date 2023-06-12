/*
	Front and Developer Projcet..
	design : SH
	publishng : JY
*/
//<![CDATA[
$(document).ready(function(){
	project.init();
});

var project = {
	init : function(){
		project.common();
		//project.main();
		//project.sub();
	},

	common : function(){
		//gnb
		var $target = $(".gnbBtn"),
			$gnb = $(".gnb>li>a"),
			$gnb_Layer = $(".gnb_Layer"),
			//$gnb_Close = $(".close"),
			$view = $(".main-slider .more"),
			$p_view = $(".porfolio a"),
			$detail_Layer = $("#popup_Layer"),
			$detail_Close = $("#popup_Layer .close");

		/* start : gnb_POPUP */
		$(window).resize(function(){
			if($(window).width() > 640){
				$(".gnbBtn").addClass("hover");
			} else {
				$(".gnbBtn").removeClass("hover");
			}
		});

		if($(window).width() > 640){
			$(".gnbBtn").addClass("hover");
		};

		var $on = true;
		$target.on("click", function(){
			if($on){
				$on = false;
				$(this).removeClass("hover").addClass("close");
				TweenMax.to($gnb_Layer, .6, {"visibility":"visible", "scale":"1", ease: Expo.easeOut});
			} else {
				$on = true;
				$(this).removeClass("close").addClass("hover");
				TweenMax.to($gnb_Layer, .1, {"visibility":"hidden","scale":"0", ease: Power3.easeInOut});
				//mobile 기기터치감지
				var is_touch_device = "ontouchstart" in document.documentElement;
				if(is_touch_device){
					$(this).removeClass("hover");
				}
			};
		});

		$gnb.on("mouseover", function(){
			TweenMax.to($(this), .5, {"letter-spacing":"15px", ease: Expo.easeOut});
			TweenMax.to($(this).next("span"), .5, {"opacity":"1","letter-spacing":"25px", ease: Expo.easeOut});
		}).on("mouseleave", function(){
			TweenMax.to($(this), .5, {"letter-spacing":"5px", ease: Expo.easeOut});
			TweenMax.to($(this).parent().find("span"), .5, {"opacity":"0","letter-spacing":"15px", ease: Expo.easeOut});
		});

		/*
			$gnb_Close.click(function(){
			$gnb_Layer.fadeOut();
			$gnb_Layer.removeClass("on");
			TweenMax.to($gnb_Layer, .6, {"visibility":"hidden","scale":".6", ease: Power3.easeInOut});
		});
		
		$gnb_Close.on("mouseover", function(){
			$(this).rotate({animateTo:360,  duration:350, easing: $.easing.easeInOutSine});
		}).on("mouseleave", function(){
			$(this).rotate({animateTo:0,  duration:350, easing: $.easing.easeInOutSine});
		});
		*/


		/* start : project portfolio_POPUP */
		$p_view.each(function(index){
			index++;
			$(this).attr("rel","#port_"+index);
		});

		$p_view.click(function(){
			$(this).addClass("on");
			TweenMax.to($detail_Layer, 0.6, {"display" :"block","visibility":"visible", "scale":"1", ease: Power3.easeInOut});
			$detail_Layer.find(".inner").load("../portfolio/project_all.html "+$(this).attr("rel"), function(){$(".scroll").mCustomScrollbar();});
			return false;
		});

		$detail_Close.click(function(){
			$detail_Layer.find(".scroll").mCustomScrollbar("destroy");
			$detail_Layer.find(".inner").empty();
			$detail_Layer.fadeOut();
			$detail_Layer.removeClass("on");
			$(".logo").addClass("on");
			//TweenMax.to($(".logo"), 0.6, {"top":"2%","width" :"","z-index":"110", ease: Power3.easeInOut});
			TweenMax.to($detail_Layer, 0.6, {"display" :"none","visibility":"hidden","scale":"0.6", ease: Power3.easeInOut});
		});
		
		$detail_Close.on("mouseover", function(){
			$(this).children("img").rotate({animateTo:360,  duration:250, easing: $.easing.easeInOutSine});
		}).on("mouseleave", function(){
			$(this).children("img").rotate({animateTo:0,  duration:250, easing: $.easing.easeInOutSine});
		});
	},

	main : function(){
		/* start : main portfolio_POPUP */
		var $mainSlider = $(".main-slider");

		if($mainSlider.is(":visible")){
			//main interaction

			$mainSlider.on('init', function(event, slick){
				//alert();
				$(this).find("div").addClass("active");
			});

			$mainSlider.slick({
				arrows: true,
				infinite: false,
				speed:350,
				cssEase: 'linear'
			});

			$.ajax({
				type:"GET",
				url:"../portfolio/main.js",
				success:function(data){
					var $htpList = $(".main").find(".main-slider .slick-track");
					var tranMsg = $.parseJSON(data);
					var objLen = tranMsg.length;
					var htpInitNum = objLen;

					//console.log(json);
					console.log(objLen);

					var html = '';
					html += '<div class="pf slick-slide">';
					html += 		'<div class="pic"></div>';
					html += 		'<div class="info">';
					html += 			'<h3 class="name"><b></b></h3>';
					html += 			'<p class="day"></p>';
					html += 			'<p class="type"></p>';
					html += 		'</div>';
					html += 		'<div class="more"><a href="#self"><b></b> Project View</a></div>';
					html += '</div>';

					for(var i=0; i<htpInitNum; i++){
						$htpList.append(html);
					}
					
					$mainSlider.slick('reinit');

					$mainSlider.find(".more").each(function(index){
						index++;
						$(this).attr("rel","#port_"+index);
					});

					$mainSlider.find(".more").click(function(){
						$(this).addClass("on");
						TweenMax.to($("#popup_Layer"), 0.6, {"display" :"block","visibility":"visible", "scale":"1", ease: Power3.easeInOut});
						$("#popup_Layer").find(".inner").load("portfolio/main_portfolio.html "+$(this).attr("rel"), function(){$(".scroll").mCustomScrollbar();});
						return false;
					});

					for(var i=0; i<=objLen - 1; i++){
						var item = $(".main-slider div.slick-slide").eq(i);

						item.attr("class","pf slick-slide pf_" + tranMsg[i].num +"");
						item.find(".pic").append("<img src=" + tranMsg[i].thumb + " alt='' />");
						item.find(".info>h3").html(tranMsg[i].title);
						item.find(".day").html(tranMsg[i].day);
						item.find("p.type").html(tranMsg[i].type);

					};

					var a = new TimelineMax({});
					a.add(TweenMax.to(".loader",2, {
						delay: 0.5,
						visibility: "visible",
						clip: "rect(0px, 80px, 6px, 80px)",
						ease: Expo.easeOut
					})).add(TweenMax.to(".cover", 1, {
						//delay: .5,
						x: "100%",
						y:"0%",
						ease: Expo.easeOut
					})).add(TweenMax.to(".logo", .3, {
						delay:.1,
						opacity: 1,
						x: "0%",
						y: "0%",
						ease: Quad.easeOut
					})).add(TweenMax.to(".gnbBtn", .3, {
						opacity: 1,
						top: "2%",
						right: "2%",
						ease: Quad.easeOut
					}), "=-.3").add(TweenMax.to(".main .pf_1 .info", .3, {
						 //delay: .1,
						 //opacity: 1,
						 bottom:"5%",
						 ease: Expo.easeOut
					}), "=-.3").add(TweenMax.to(".main .pf_1 .more", .3, {
						 //delay: .3,
						 //opacity: 1,
						 right:"2%",
						 ease: Expo.easeOut
					})).add(TweenMax.to(".main .pf_1 .pic", .3, {
						 delay: .1,
						 opacity: 1,
						 ease: Expo.easeOut
					}), "=-.3").add(TweenMax.to(".main .pf_1 .pic img", 1, {
						 //delay: .4,
						 opacity: 1,
							 scale:1,
						 top:"50%",
						 ease: Expo.easeOut
					})).add(TweenMax.to(".main .left", .35, {
						opacity: 1,
						left: "32px",
						ease: Expo.easeOut
					})).add(TweenMax.to(".main .right", .35, {
						opacity: 1,
						right: "20px",
						ease: Expo.easeOut
					})).add(TweenMax.to(".main", 1, {
						overflowY: "auto",
						overflowX: "hidden" 
					}), "=-1");
				}
			});
		};
	},

	sub : function(){
		if($(".jquery").is(":visible")){
			$("#wrap").addClass("scroll");
			$(".loader").hide();
			$(".cover").hide();
			var j = new TimelineMax({});
			j.add(TweenMax.to(".logo", .3, {
				delay:.1,
				opacity: 1,
				x: "0%",
				y: "0%",
				ease: Quad.easeOut
			}), "=.3").add(TweenMax.to(".gnbBtn", .3, {
				opacity: 1,
				top: "2%",
				right: "2%",
				ease: Quad.easeOut
			}), "=-.3").add(TweenMax.to("#wrap", 1, {
				overflowY: "auto",
				overflowX: "hidden"
			}), "=-1");
		};

		if($(".about").is(":visible")){
			//about interaction
			var b = new TimelineMax({});
			
			b.add(TweenMax.to(".loader", 0, {// time 2
				delay: 0,
				visibility: "visible",
				clip: "rect(0px, 80px, 6px, 80px)",
				ease: Expo.easeOut
			})).add(TweenMax.to(".cover", 0, {// time 1
				//delay: .5,
				x: "100%",
				y:"0%",
				ease: Expo.easeOut
			})).add(TweenMax.to(".sub .c_bg", .75, {
				delay: .5,
				opacity: .75,
				scale: 1,
				ease: Expo.easeOut
			})).add(TweenMax.to(".sub .about .info>div", .5, {
				opacity: 1,
				scale: 1,
				ease: Expo.easeOut
			})).add(TweenMax.to(".logo", .3, {
				opacity: 1,
				x: "0%",
				y: "0%",
				ease: Quad.easeOut
			}), "=-.3").add(TweenMax.to(".gnbBtn", .3, {
				opacity: 1,
				top: "2%",
				right: "2%",
				ease: Quad.easeOut
			}), "=.3");
		};

		//project interaction
		if($(".project_Box").is(":visible")){
			//project interaction
			$(".swiper-wrapper, .drag").on("mouseover focusin touchmove", function(){
				TweenMax.to($(".drag"), .1, {opacity:0, visibility:"hidden",  ease: Expo.easeOut});
			}).on("mouseleave focusout touchend", function(){
				TweenMax.to($(".drag"), .5, {delay: 4.5, opacity:1, visibility:"visible", ease: Expo.easeOut});
			});

			var c = new TimelineMax({});
			c.add(TweenMax.to(".loader", 0, {// time 2
				delay: 0.5,
				visibility: "visible",
				clip: "rect(0px, 80px, 6px, 80px)",
				ease: Expo.easeOut
			})).add(TweenMax.to(".cover", 0, {// time 1
				//delay: .5,
				x: "100%",
				y:"0%",
				ease: Expo.easeOut
			})).add(TweenMax.to(".sub .bg_text", .3, {
				opacity: 1,
				scale: 1,
				ease: Expo.easeOut
			})).add(TweenMax.to(".sub .bg_text_1", .3, {
				//delay:.1,
				opacity: 1,
				scale: 1,
				ease: Expo.easeOut
			})).add(TweenMax.to(".sub .project-List-Area", .75, {
				 //delay: .4,
				 //opacity: 1,
				 top:"50%",
				 ease: Expo.easeOut
			})).add(TweenMax.to(".logo", .3, {
				opacity: 1,
				x: "0%",
				y: "0%",
				ease: Quad.easeOut
			}), "=-.3").add(TweenMax.to(".gnbBtn", .3, {
				opacity: 1,
				top: "2%",
				right: "2%",
				ease: Quad.easeOut
			}), "=.3").add(TweenMax.to("html,body", 1, {
				//overflowY: "auto",
				//overflowX: "hidden" 
			}), "=-1");
		};
			/*
			.add(TweenMax.to(".sub .drag", .3, {
					 //delay: .4,
					 visibility: "visible",
					 opacity: 1,
					 //top:"50%",
					 ease: Expo.easeOut
				}));
			 */

		//contact interaction
		if($(".contact").is(":visible")){
			$(".input-Box").find("input, textarea").each(function(){
				if($(this).val() == ""){
					$(this).parent().removeClass("active");
				} else {
					$(this).parent().addClass("active");
				};

				$(this).on("click focus", function(){
					if($(this).val() ==""){
						$(this).parent().addClass("active");
					};
				});

				$(this).on("focusout", function(){
					if($(this).val()==""){
						$(this).parent().removeClass("active");
					};
				});
			});

			var d = new TimelineMax({});
			d.add(TweenMax.to(".loader", 0, {// time 2
				delay: 0.5,
				visibility: "visible",
				clip: "rect(0px, 80px, 6px, 80px)",
				ease: Expo.easeOut
			})).add(TweenMax.to(".cover", 0, {// time 1
				//delay: .5,
				x: "100%",
				y:"0%",
				ease: Expo.easeOut
			})).add(TweenMax.to(".sub .c_bg", .5, {
				opacity: .75,
				scale: 1,
				ease: Expo.easeOut
			})).add(TweenMax.to(".sub .contact .info>div", .5, {
				opacity: 1,
				scale: 1,
				ease: Expo.easeOut
			})).add(TweenMax.to(".logo", .3, {
				opacity: 1,
				x: "0%",
				y: "0%",
				ease: Quad.easeOut
			}), "=-.3").add(TweenMax.to(".gnbBtn", .3, {
				opacity: 1,
				top: "2%",
				right: "2%",
				ease: Quad.easeOut
			}), "=.3").add(TweenMax.to(".sub .bg_text_2", .3, {
				opacity: 1,
				left:"5%",
				scale: 1,
				ease: Expo.easeOut
			})).add(TweenMax.to(".sub .bg_text_3", .3, {
				//delay:.1,
				opacity: 1,
				right:"5%",
				scale: 1,
				ease: Expo.easeOut
			}))
			
			var z = new TimelineMax({
				repeat: -1
			});

			z.add(TweenMax.to(".line-scroll-down", 0, {
				y: "-100%"
			})).add(TweenMax.to(".line-scroll-down", 1, {
				delay: .5,
				y: "100%",
				ease: Expo.easeOut
			}));
		}
	}
}
//]]>