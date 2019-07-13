var ali=document.querySelectorAll(".f2_main_top li");
var bottom_1=document.querySelectorAll(".f2_main_bottom_1");
bottom_1[0].style.zIndex=999;

for(var i=0;i<ali.length;i++){
     ali[i].index=i;
    
     ali[i].onmouseover=function(){
         for(let j=0;j<bottom_1.length;j++){
            bottom_1[j].style.zIndex=0;
            ali[j].style.opacity=1;
         }
        this.style.opacity=0.6;
        console.log(typeof this.index);
        bottom_1[this.index].style.zIndex=9999;
     }
}






















