;(function($){
	"use strict";
	
	$.fn.banner = function(options){
		var _this = this;
		class Banner{
			constructor(options){
				this.img = options.aimg;
				this.left = options.left;
				this.right = options.right;
				this.isList = options.isList===false ? false : true;
				this.autoPlay = options.autoPlay===false ? false : true;
				this.delayTime = options.delayTime || 2000;
				this.moveTime = options.moveTime || 200;
				this.index = options.index || 0;
				this.iPrev = this.img.length-1;
				this.w = this.img.eq(0).width();
				this.img.css({
					left:this.w
				}).eq(this.index).css({
					left:0
				})
			this.init();
				this.btnEevnt();
				this.play();
			}
			init(){
				if(this.isList) return;
				this.list = $("<div class='list'></div>");
				for(var i=0;i<this.img.length;i++){
					this.list.append($(`<span>${i+1}</span>`))
				}
				_this.append(this.list);
				this.list.css({
					width:"100%",
					height:30,
					display:"flex",
					position:"absolute",
					bottom:0,
					background:"rgba(200,200,200,0.6)"
				}).children("span").css({	
					flex:1,
					textAlign:"center",
					lineHeight:"30px",
					borderLeft:"solid 1px #ccc",
					borderRight:"solid 1px #ccc"
				}).eq(this.index).css({	
					background:"red"
				})
				
			}
						
			btnEevnt(){
				if(this.left == undefined || this.left.length < 1) return;
				var that = this;
				this.left.on("click",function(){
					that.changeIndex(1)
				})
				this.right.on("click",function(){
					that.changeIndex(-1)
				})
			}
			changeIndex(type){
				if(type == 1){
					if(this.index == 0){
						this.index = this.img.length-1;
						this.iPrev = 0;
					}else{
						this.index--;
						this.iPrev = this.index + 1;
					}
				}else{
					if(this.index == this.img.length-1){
						this.index = 0;
						this.iPrev = this.img.length-1;
					}else{
						this.index++;
						this.iPrev = this.index - 1;
					}
				}
				this.btnMove(type);
			}
			btnMove(type){
				this.img.eq(this.iPrev).css({
					left:0
				}).stop().animate({
					left:this.w * type
				},this.moveTime).end().eq(this.index).css({
					left:-this.w * type
				}).stop().animate({
					left:0
				},this.moveTime)
			
			}
			play(){
				if(!this.autoPlay) return;
				this.t = setInterval(()=>{
					this.changeIndex(-1);
				},this.delayTime)
				_this.hover(()=>{
					clearInterval(this.t)
				},()=>{
					this.t = setInterval(()=>{
						this.changeIndex(-1);
					},this.delayTime)
				})
			}
		}
		new Banner(options)
	}
})(jQuery);
