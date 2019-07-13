        function Magnifier(){
                    this.sBox = document.querySelector(".s_box");
                    this.bBox = document.querySelector(".b_box");
                    this.span = document.querySelector(".s_box span");
                    this.bImg = document.querySelector(".b_box img");
                    this.sImg = document.querySelector(".s_box img");
                    this.addEvent()
                }
                Magnifier.prototype.init = function(){
                    var w = this.bImg.offsetWidth / this.bBox.offsetWidth;
                    var h = this.bImg.offsetHeight / this.bBox.offsetHeight;
                    this.span.style.width = this.sBox.offsetWidth / w + "px";
                    this.span.style.height = this.sBox.offsetHeight / h + "px";
                }
                Magnifier.prototype.addEvent = function(){
                    var that = this;
                    this.sBox.addEventListener("mouseover",function(){
                        that.over()
                        that.init()
                    })
                    this.sBox.addEventListener("mouseout",function(){
                        that.out()
                    })
                    this.sBox.addEventListener("mousemove",function(eve){
                        var e = eve || window.event;
                        that.move(e);
                    })
                }
                Magnifier.prototype.over = function(){
                    this.span.style.display = "block";
                    this.sImg.style.opacity = "0.6";
                    this.bBox.style.display = "block";
                }
                Magnifier.prototype.out = function(){
                    this.span.style.display = "none";
                    this.sImg.style.opacity = "1";
                    this.bBox.style.display = "none";
                }
                Magnifier.prototype.move = function(e){
                    var l = Math.round(e.offsetX - this.span.offsetWidth/2);
                    var t = Math.round(e.offsetY - this.span.offsetHeight/2);
                    if(l < 0) l=0;
                    if(t < 0) t=0;
                    if(l > this.sBox.offsetWidth - this.span.offsetWidth){
                    l = this.sBox.offsetWidth - this.span.offsetWidth;
                }
                if(t > this.sBox.offsetHeight - this.span.offsetHeight){
                    t = this.sBox.offsetHeight - this.span.offsetHeight;
                }
                    console.log(l,t);
                    var x = l / (this.sBox.offsetWidth - this.span.offsetWidth);
                    var y = t / (this.sBox.offsetHeight - this.span.offsetHeight);
                    
                    this.span.style.left = l + "px";
                    this.span.style.top = t + "px";
                    
                    this.bImg.style.left = -x * (this.bImg.offsetWidth - this.bBox.offsetWidth) + "px";
                    this.bImg.style.top = -y * (this.bImg.offsetHeight - this.bBox.offsetHeight) + "px";
                    
                    this.span.style.backgroundPosition = -l + "px "+ -t +"px";
                    console.log(this.span.style.backgroundPosition)
                }
        new Magnifier();
          
        function Det(){
             this.sImg=document.querySelector(".s_box img");
             this.bImg=document.querySelector(".b_box img");
             this.url="http://localhost/1905/fyl/data/goods.json";
             
             var that=this;
               ajaxPost(this.url,function(res){
                   let res1 = JSON.parse(res);
                   console.log(res1);
                   let a=getCookie("id")
                   let BImg=document.querySelector("#f3 img");
                   for(let i=0;i<res1.length;i++){
                       if(a==res1[i].goodsId){
                           that.sImg.src=res1[i].src;
                           that.bImg.src=res1[i].src;
                           BImg.src=res1[i].bsrc;
                     }
                   }
               })
            }
            new Det();

            $(".btns").children("li").click(function(){
                var index=$(this).index();
                console.log(index);
                var iNowFloor=$(".floor").eq(index);
                console.log(iNowFloor)
                var t=iNowFloor.offset().top;
                console.log(t)
                $("html").stop().animate({
                  scrollTop:t
                })
              })

            
                

         
         
            
            






                