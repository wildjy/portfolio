/**
 * jQuery PageScroll 
 * Version 0.3.2
 *
 * https://github.com/javion25/PageScroll.js
 * MIT licensed
 *
 * Copyright (C) 2015 Javion.me - A project by Javion
 */
;(function($,window,document,undefined){
	/*说明：获取浏览器前缀*/
	/*实现：判断某个元素的css样式中是否存在transition属性*/
	/*参数：dom元素*/
	/*返回值：Boolean，有则返回浏览器样式前缀，否则返回false*/
	var _prefix = (function(temp){
		var aPrefix = ["webkit","Moz","o","ms"],
			props = "";
		for(var i in aPrefix){
			props = aPrefix[i] + "Transition";
			if(temp.style[ props] != undefined){
				return "-"+ aPrefix[i].toLowerCase()+"-";
			}
		}
		return false;
	})(document.createElement(PageScroll));

	var PageScroll = (function(){
		function PageScroll(element,options){
			this.settings = $.extend(true,$.fn.PageScroll.defaults,options||{});
			this.element = element;
			this.init();
		}
		PageScroll.prototype = {
			init : function(){
				this.selectors = this.settings.selectors;
				this.sections = this.element.find(this.selectors.sections);
				this.section = this.sections.find(this.selectors.section);
				this.insection = this.element.find(this.selectors.insection);
				this.controlPrev = this.insection.find(this.selectors.controlPrev);
				this.controlNext = this.insection.find(this.selectors.controlNext);
				this.direction = this.settings.direction == "vertical" ? true:false;
				this.pagesCount = this.pagesCount();
				this.index = (this.settings.index>=0 && this.settings.index < this.pagesCount)? this.settings.index : 0;
				this.index2 = 0;
				this.canScroll = true;
				  
				if(!this.direction){
					this._initLayout();
				}else if(this.insection && ($(this.insection).length)){
					this._initInside();
				}

				if (this.settings.pagination) {
					this._initPaging();
				}

				if(this.index>0){
					this._scrollPage();
				}

				this._initEvent();
			},
			pagesCount : function(){
				return this.section.length;
			},
			ScrollLength : function(){
				return this.direction ? this.element.height() : this.element.width();
			},
			prev : function(){
				if(this.index > 0){
					this.index --;
				}else if(this.settings.loop){
					this.index = me.pagesCount - 1;
				}
				this._scrollPage();
			},
			next : function(){
				if(this.index < this.pagesCount){
					this.index ++;
				}else if(this.settings.loop){
					this.index = 0;
				}
				this._scrollPage();
			},
			in_prev : function(){
				if(this.index2 > 0){
					this.index2 --;
				}else if(this.settings.loop){
					this.index2 = me.insection.length - 1;
				}
				this._inscrollPage();
			},
			in_next : function(){
				if(this.index2 < this.insection.length){
					this.index2 ++;
				}else if(this.settings.loop){
					this.index2 = 0;
				}
				this._inscrollPage();
			},
			ScrollLength : function(){
				return this.direction ? this.element.height() : this.element.width();
			},
			_initInside : function(){
				var	width = (this.insection.length*100) + "%",
					cellWidth = (100/this.insection.length).toFixed(2)+"%",
					prevClass = this.selectors.controlPrev.substring(1),
					nextClass = this.selectors.controlNext.substring(1),
					
					controlHtml = "<a class="+prevClass+">&lt;</a>";
					controlHtml += "<a class="+nextClass+">&gt;</a>";
					
					this.insection.parent().width(width);
					this.insection.width(cellWidth).css("float","left");
					this.insection.parent().append(controlHtml);
			},
			_initLayout : function(){
				var width = (this.pagesCount*100) + "%",
					cellWidth = (100/this.pagesCount).toFixed(2)+"%";
					this.sections.width(width);
					this.section.width(cellWidth).css("float","left");
			},
			_initPaging : function(){ 
				this.pagesClass = this.selectors.page.substring(1),
				this.activeClass = this.selectors.active.substring(1),
				pageHtml = "<ul class="+this.pagesClass+">";
				for(var i=0;i<this.pagesCount;i++){
					pageHtml +="<li></li>";
				}
				pageHtml+="</ul>"; 
				this.element.append(pageHtml);

				var pages = this.element.find(this.selectors.page);
				this.pageItem = pages.find("li");
				this.pageItem.eq(this.index).addClass(this.activeClass);
				this.sections.children("div").eq(this.index).addClass(this.activeClass);
				
				if(this.direction) {
					pages.addClass("vertical");
				}else{
					pages.addClass("horizontal");
				};
			},
			_initEvent : function(){
				var me = this;

				me.element.on("mouseover",me.selectors.sections,function(){
					$(me.selectors.controlPrev).css("top",me.insection.parent().index()*100+50+"%");
					$(me.selectors.controlNext).css("top",me.insection.parent().index()*100+50+"%");
				});

				me.element.on("click",me.selectors.controlPrev,function(){
					me.in_prev();
				})

				me.element.on("click",me.selectors.controlNext,function(){
					me.in_next();
				})

				me.element.on("click",me.selectors.page + " li",function(){
					me.index = $(this).index();
					me._scrollPage();
				})

				me.element.on("mousewheel DOMMouseScroll",function(e){
					if(me.canScroll){
						var delta = e.originalEvent.wheelDelta || -e.originalEvent.detail;
						if(delta > 0 &&(me.index && !me.settings.loop || me.settings.loop)){
							me.prev();
						}else if(delta < 0 && (me.index < (me.pagesCount - 1) && !me.settings.loop || me.settings.loop)){
							me.next();
						}
					}
				})

				if(me.settings.keyboard){
					$(window).on("keydown",function(e){
						var keyCode = e.keyCode;
						if (keyCode == 37 || keyCode == 38) {
							me.prev();
						}else if(keyCode == 39 || keyCode == 40){
							me.next();
						}
					});
				}

				$(window).resize(function(){
					var currentLength = me.ScrollLength(),
						offset = me.settings.direction ? me.section.eq(me.index).offset().top : me.section.eq(me.index).offset().left;
						if(Math.abs(offset) > currentLength/2 && me.index < (me.pagesCount -1)){
							me.index ++;
						}
						if(me.index){
							me._scrollPage();
						}
				});

				me.sections.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend",function(){
					me.canScroll = true;
					if(me.settings.callback && $.type(me.settings.callback) == "function"){
						me.settings.callback();
					}
				});
			},
			_scrollPage : function(){
				var me = this,
				dest = me.section.eq(me.index).position();
				if(!dest) return;

				me.canScroll = false;

				if(_prefix){
					me.sections.css(_prefix+"transition","all " +me.settings.duration+"ms "+ me.settings.easing);
					var translate = me.direction ? "translateY(-"+dest.top+"px)" : "translateX(-"+dest.left+"px)";
					me.sections.css(_prefix+"transform",translate);
					me.sections.children("div").eq(me.index).addClass(me.activeClass).siblings("div").removeClass(me.activeClass);
				}else{
					var animateCss = me.direction ? {top : -dest.top} : {left : -dest.left};
					me.sections.animate(animateCss,me.settings.duration,function(){
						me.canScroll = true;
						if(me.settings.callback && $.type(me.settings.callback) == "function"){
							me.settings.callback();
						}
					});
				}

				if(me.settings.pagination){
					me.pageItem.eq(me.index).addClass(me.activeClass).siblings("li").removeClass(me.activeClass);
				}
			},
			_inscrollPage : function(){
				var me = this,
				dest = me.insection.eq(me.index2).position();
				if(!dest) return;


				if(!_prefix){
					me.insection.parent().css(_prefix+"transition","all " +me.settings.duration+"ms "+ me.settings.easing);
					var translate = me.direction ? "translateX(-"+dest.left+"px)" : "translateY(-"+dest.top+"px)";
					me.insection.parent().css(_prefix+"transform",translate);
				}else{
					var animateCss = me.direction ?  {left : -dest.left} : {top : -dest.top};
					me.insection.parent().animate(animateCss,me.settings.duration,function(){
						if(me.settings.callback && $.type(me.settings.callback) == "function"){
							me.settings.callback();
						}
					});
				}
			}
		};
		return PageScroll;
	})();

	$.fn.PageScroll = function(options){
		return this.each(function(){
			var me = $(this),
				instance = me.data("PageScroll");

			if(!instance){
				instance = new PageScroll(me,options);
				me.data("PageScroll",instance);
			}
		});
	};

	//默认配置参数
	$.fn.PageScroll.defaults = {
		selectors : {
			sections : ".sections",
			section : ".section",
			insection : ".insection",
			page : ".pages",
			active : ".active",
			controlPrev : ".control-prev",
			controlNext : ".control-next"
		},
		index : 0,	
		easing : "ease",		
		duration : 500,
		loop : false,
		pagination : true,
		keyboard :true,
		direction : "vertical",
		callback : ""
	}
})(jQuery,window,document);