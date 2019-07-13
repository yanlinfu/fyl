$(".banner1").banner({
    aimg:$(".banner1").find("img"),   //必传
    left:$(".banner1").find("#left"),  //可选
    right:$(".banner1").find("#right"),  //可选
  //   isList:true,
    autoPlay:true,
    delayTime:2000,
    moveTime:1000,
    index:0
})

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

var log=document.getElementById("log");
console.log(getCookie("username"));
if(getCookie("username")!=""){
  log.innerHTML=getCookie("username")+"已登陆";}











      