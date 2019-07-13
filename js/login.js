class login{
	constructor() {
	    this.txt1=document.getElementById("txt1");
	    this.txt2=document.getElementById("txt2");
	    this.pwd=document.getElementById("pwd");
		this.span=document.querySelector(".yanzhnegma_txt_right span")
		this.arr=['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 
		'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
		 'j', 'k','l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
		this.yanzhnegma_txt_right=document.querySelector(".yanzhnegma_txt_right");
		this.p1=document.querySelectorAll(".p1");
		this.denflu=document.querySelector(".denflu");
	    this.randomChart();
		this.a=this.checkChart();
		this.b=this.pwdcheck();
		this.c=this.pNcheck();
		this.logincheck();
		// console.log(this.a);
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
						 return 0
		}else{
						 this.p1[0].style.display="none";
						 return 1;
		}		
	}
	
	pwdcheck(){
		let that=this;
		
		this.pwd.onblur=function(){
			that.check3()
			
		}
	}
	check3(){
		let reg=/^[a-zA-Z0-9]{4,10}$/;
		 if(reg.test(this.pwd.value)==false){
						 this.p1[2].style.display="block";
						 this.p1[2].innerHTML="密码格式错误，请重新输入密码" 
						 return 0
		}else{
						 this.p1[2].style.display="none";
						 return 1;
		}		
	}
	
	logincheck(){
		let that=this;
		this.denflu.onclick=function(){
			let username=that.txt1.value;
			let password=that.pwd.value;
			let a=that.check1();
			let b=that.check2();
			let c=that.check3();
			console.log(a,b,c)
			if(a===1&&b===1&&c===1){
				
							 if(localStorage.getItem(username)===null){
								 that.p1[2].style.display="block";
								 that.p1[2].innerHTML="该用户不存在";
							 }else if(password!=localStorage.getItem(username)){					  
								 that.p1[2].style.display="block";
								 that.p1[2].innerHTML="密码错误";
							 }else{
								 setCookie("username",username,1);
								 location.href="http://localhost/1905/fyl/index.html"	 
							 }					
			}			
		}		
	}	
}
var a=new login();