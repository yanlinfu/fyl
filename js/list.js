class GoodsList{
    constructor(){
        this.cont = document.getElementById("cont");
        this.url = "http://localhost/1905/fyl/data/goods.json";
        
        this.init();
        // 1.绑定事件
        this.addEvent();
    }
    addEvent(){
        var that = this;
        this.cont.onclick = function(eve){
            var e = eve || window.event;
            var t = e.target || e.srcElement;
            if(t.className == "detail"){
                // 2.获取当前的商品ID
                that.id = t.parentNode.getAttribute("index");
                that.setData();
            }
        }
    }
    setData(){
        getCookie("goods",JSON.stringify(this.goods))
        
    }
    init(){
        var that = this;
        ajaxPost(this.url,function(res){
            // console.log(res);
            that.res = JSON.parse(res);
            that.display()
            
        })
    }
    display(){
        var str = "";
        for(var i=0;i<this.res.length;i++){
            str += `<div class="box" index="${this.res[i].goodsId}">
                        <img src="${this.res[i].src}" alt="">
                        <i>${this.res[i].goodsId}</i>
                        <p>${this.res[i].name}</p>
                        <span>${this.res[i].price}</span>
                        <a href="http://localhost/1905/fyl/details.html">点击详情</a>
                    </div>`;
        }
        this.cont.innerHTML = str;
        let list =document.querySelectorAll('.box');
        
        // console.log(list); 
        for(let i=0 ;i<list.length;i++){
            // console.log(i);
            list[i].onclick=function(){
                let a= this.children[1].innerHTML;
                // console.log(a);
                console.log(setCookie("id",a,100));
                location.href="http://localhost/1905/fyl/details.html"
            }
        }
    }

}
new GoodsList;