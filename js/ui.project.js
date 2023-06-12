/*
	Front and Developer Projcet..
	design : SH
	publishng : JY
*/

//<![CDATA[
$(document).ready(function(){
	//projectList.pojectAjax();
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
		};

		function dragHide(){
			$(".swiper-wrapper, .drag").on("mouseover focusin touchmove", function(){
				TweenMax.to($(".drag"), .1, {opacity:0, visibility:"hidden",  ease: Expo.easeOut});
			}).on("mouseleave focusout touchend", function(){
				TweenMax.to($(".drag"), .5, {delay: 4.5, opacity:1, visibility:"visible", ease: Expo.easeOut});
			});
		};

		pojectAjax();

		function pojectAjax(){
			// type : 1=pc web, 2=mobile, 3=pc/mobile, 4=responsive
			$.ajax({
				type:"GET",
				url:"../portfolio/data.js",
				success:function(data){
					var $htpList = $(".project_Box").find(".swiper-wrapper");
					var tranMsg = $.parseJSON(data);
					var objLen = tranMsg.length;
					var htpInitNum = objLen;

					//console.log(json);
					console.log(objLen);

					var html = '';
					html += '<div class="swiper-slide">';
					html += 		'<a href="#self" class="thumb skel-thumb" target="_blank"><span></span></a>';
					html += 		'<div class="info">';
					html += 			'<h3 class="title skel"></h3>';
					html += 			'<p class="type"></p>';
					html += 		'</div>';
					html += '</div>';

					for(var i=0; i<htpInitNum; i++){
						$htpList.append(html);
					}

					for(var i=0; i<=objLen - 1; i++){
						var item = $(".project_Box div.swiper-slide").eq(i);
						var a = tranMsg[i].sort;
						//console.log(tranMsg[i].msg + "\r\n" + tranMsg[i].data);
						//console.log(a);
								//item.hide();
						if(tranMsg[i].sort == "1"){
							//alert();
							item.addClass("on");
							if(item.hasClass("on")){
								item.show();
							}
						} 

						item.find("a.thumb").attr("href","" + tranMsg[i].href +"");
						item.find("a.thumb").append("<img src=" + tranMsg[i].thumb + " alt='' />");
						item.find("a.thumb>span").html(tranMsg[i].sort);
						item.find(".info>h3").html(tranMsg[i].title);
						item.find("p.type").html(tranMsg[i].type);

					};

					project_slider();
					dragHide();
				}
			});
		};

		$(".project_Box").each(function(index){
			$(this).attr("id","type" + index);
		});
		$(".project-Type>li>a").each(function(index){
			$(this).attr("rel","#type" + index);
		});

		$(".project-Type>li>a").click(function(){
			$(".project-Type>li>a").removeClass("on");
			$(this).addClass("on");
			$(".project_Box").load("/portfolio/project_List.html "+$(this).attr("rel"), function(){
				project_slider();
			});
			return false;
		});
	}
}
//]]>
