//这是注册的js代码
// /^(((13[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/ 手机号的正则
// /^[a-zA-Z0-9]{4,10}$/ 密码正则

class login{
	constructor() {
	    //获取元素
		this.txt1=document.getElementById("txt1");
		this.txt2=document.getElementById("txt2");
		this.pwd=document.getElementById("pwd");
		this.pwd2=document.getElementById("pwd2");
		this.txt3=document.getElementById("txt3");
		this.zhuce=document.querySelector(".zhuce");
		this.p1=document.querySelectorAll(".p1");
		this.arr=['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 
'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
 'j', 'k','l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

		this.span=document.querySelector(".yanzhnegma_txt_right span")
		this.yanzhnegma_txt_right=document.querySelector(".yanzhnegma_txt_right")
		this.randomChart();
		this.checkChart();
		this.pwdcheck();
		this.pwd2check();
		this.peoplcheck();
		this.database();
		this.timer1=null;
		this.timer2=null;
		this.a=0;
		this.time=3;
	}
	
	randomChart(){
		let that=this;
		let str="";
		for (let i=0;i<4;i++) {
			str+=this.arr[this.random(0,61)];
		}
		this.span.innerHTML=str;
		this.span.style.color=this.rancolor();
		this.span.onclick=function(){
			if(that.a===1){
				this.timer1=setTimeout(function(){
					that.randomChart();
				},3000)
			}else{
				that.randomChart();
			}
			that.a=1;
		}
	}
	
	checkChart(){
		let that=this;
		this.txt2.onblur=function(){
			that.check1();
		}	
	}
	check1(){
		 let a=this.txt2.value===this.span.innerHTML
		if(a){
			this.p1[1].style.display="none";
			return 1;	
		}else{
			this.p1[1].style.display="block";
			this.p1[1].innerHTML="验证码不正确";
			 return 0;
		}
	}
	
	rancolor(){
		let r=this.random(0,255);
		let g=this.random(0,255);
		let b=this.random(0,255);
		return `rgb(${r},${g},${b})`
	}
	
    random(a,b){
		return Math.round(Math.random()*(a-b)+b)
	}
	
	pNcheck(){
		let that=this;
		
		this.txt1.onblur=function(){
			 that.check2();
		}
	}
	check2(){
		let reg=/^(((13[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/
		if(reg.test(this.txt1.value)==false){
						 this.p1[0].style.display="block";
						 this.p1[0].innerHTML="手机号书写错误，请输入正确的手机号" 
						  return 0;
		}else{
						 this.p1[0].style.display="none";
						 return 1;
		}		
	}
	
	pwdcheck(){
		let that=this;
		
		this.pwd.onblur=function(){
			 that.check3();
		}
	}
	check3(){
		let reg=/^[a-zA-Z0-9]{4,10}$/;
		if(reg.test(this.pwd.value)==false){
						 this.p1[2].style.display="block";
						 this.p1[2].innerHTML="密码格式错误，请重新输入密码" 
						  return 0;
		}else{
						 this.p1[2].style.display="none";
						 return 1;
		}		
	}
	
	pwd2check(){
		let that=this;
		this.pwd2.onblur=function(){
			 that.check4();
		}	
	}
	check4(){
		if(this.pwd2.value!=this.pwd.value){
						 this.p1[3].style.display="block";
						 this.p1[3].innerHTML="密码错误，请重新输入" 
						 return 0;
		}else{
						 this.p1[3].style.display="none";
						 return 1;
		}			
	}
	peoplcheck(){
		let that=this;
		let reg=/^(((13[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/
		this.txt3.onblur=function(){
			 if(reg.test(that.txt3.value)==false){
				 that.p1[4].style.display="block";
				 that.p1[4].innerHTML="推荐人手机号书写有误，请重新输入" 
			 }else{
				 that.p1[4].style.display="none";
				 return 1;
			 }		
		}
	}
	
	database(){
		let that=this;
		this.zhuce.onclick=function(){
				let username=that.txt1.value;
				let password=that.pwd.value;
				let message=JSON.stringify({"username":username,"password":password});
				console.log(message);
				if(that.check1()&&that.check2()&&that.check3()&&that.check4()){
					
					if(localStorage.getItem(username)!=null){
						that.p1[0].style.display="block";
						that.p1[0].innerHTML="用户已经存在";
					}else{
						window.localStorage.setItem(username,password)
						that.timer2=setInterval(function(){
						body.innerHTML=`距离跳转到登陆页面还有三秒${that.time}...`;
						that.time--;
						body.style.color="red";
						},1000)
						setTimeout(function(){ 
						that.time=3;
						location.href="http://localhost/1905/fyl/login.html"	 
						},3000) 
					}
					
				}
				
			   
		}
	}
}
var a=new login();
a.pNcheck();
// 
 // 