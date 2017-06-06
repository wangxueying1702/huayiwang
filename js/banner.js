function Slideshow(obj){
	this.boxId=obj.boxId;	
	this.imgs=obj.imgs;
	this.width =obj.width;
	this.height =obj.height;
	this.timeSpace=obj.timeSpace;
	this.currInOrd =1;
	this.currOutOrd =0;
	this.timer =null;	
	this.fadeInOutTime =obj.fadeInOutTime;
	this.btnColor =obj.btnColor;
	this.btnHighColor =obj.btnHighColor;
	this.btnWidth =obj.btnWidth;
	this.btnHeight =obj.btnHeight;
	this.btnHasOrd =obj.btnHasOrd;
	this.initUI();
	this.go();
}
Slideshow.prototype.initUI=function(){
//创建所有的图片
	for(let i=0;i<this.imgs.length;i++){
		let str="<img src='"+this.imgs[i]+"' style='width:"+this.width+"px;height:"+this.height+"px;position:absolute;display:none'/>"
		$(this.boxId).append(str);
	}
	$(this.boxId+" img:first").css({"display":"block"});
//创建按钮
	let ullistr="<ul style='position:absolute;left:40%;bottom:10px;'>"
	for(let i=0;i<this.imgs.length;i++){
		ullistr+="<li ord='"+(i+1)+"' style='list-style:none;float:left;margin:10px;width:"+this.btnWidth+"px;height:"+this.btnHeight+"px;border-radius:50%;text-align:center;background-color:"+this.btnColor+";'>"+(i+1)+"</li>"
	}
	ullistr+="</ul>"
	$(this.boxId).append(ullistr);
	if(this.btnHasOrd==false){
			$(this.boxId+" ul li").html("");
		}
	let that=this;
	$(this.boxId+" ul li").mouseover(function(){
		that.goImg(this.getAttribute("ord"));
	})
	$(this.boxId+" ul li:first").css({"background-color":this.btnHighColor});
	$(this.boxId).mouseover(function(){
		that.stopChange();
	})
	$(this.boxId).mouseout(function(){
		that.go();
	})
}
Slideshow.prototype.go=function(){
	let that=this;
	this.timer=setInterval(function(){
		that.goStep()
	},this.timeSpace)
}
Slideshow.prototype.goStep=function(){
	this.currInOrd++;
	this.currOutOrd=this.currInOrd-1;
	if(this.currInOrd>this.imgs.length){
		this.currInOrd=1;
	}
	if(this.currOutOrd>this.imgs.length){
		this.currOutOrd=1;
	}
	this.fadeInOut();
	this.changeBtnColor();
}
Slideshow.prototype.fadeInOut=function(){
	$(this.boxId+" img:eq("+(this.currInOrd-1)+")").fadeIn(this.fadeInOutTime);
	$(this.boxId+" img:eq("+(this.currOutOrd-1)+")").fadeOut(this.fadeInOutTime);	
}
Slideshow.prototype.changeBtnColor=function(){
	$(this.boxId+" ul li:eq("+(this.currInOrd-1)+")").css("background-color",this.btnHighColor).siblings().css("background-color",this.btnColor)
}
Slideshow.prototype.stopChange=function(){
	window.clearInterval(this.timer);
}

Slideshow.prototype.goImg=function(ord){
	this.currOutOrd=this.currInOrd;
	this.currInOrd=ord;
	this.fadeInOut();
	this.changeBtnColor();
}