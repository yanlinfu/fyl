class GoodsList{
    constructor(){ 
        this.left=document.getElementById("add") 
        this.id=getCookie("id")    
        this.addEvent();
    }
    addEvent(){
        var that = this;
        this.left.onclick = function(eve){
           
                that.setData();
                location.href="http://localhost/1905/fyl/car.html";
        
        }
    }
    setData(){
        
        
        this.goods = localStorage.getItem("goods");
         console.log(this.goods);
        if(this.goods){
            // 不是第一次
            this.goods = JSON.parse(this.goods)

            var onoff = true;
            // 之后存
            for(var i=0;i<this.goods.length;i++){
                // 老的
                if(this.goods[i].id == this.id){
                    this.goods[i].num++;
                    onoff = false;
                }
            }
            // 新的
            if(onoff){
                this.goods.push({
                    id:this.id,
                    num:1
                })
            }
        }else{
            // 第一次存
            //     直接存
            this.goods = [{
                id:this.id,
                num:1
            }];
        }
        
        // 最后将数据设置回去
        localStorage.setItem("goods",JSON.stringify(this.goods))
    }

}
new GoodsList;