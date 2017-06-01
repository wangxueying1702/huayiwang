var x=2;
function showId(){
	var img1=document.getElementById("imgId");
	img1.src="images/h"+x+".png"
	var liarr=document.getElementsByTagName("li");
	for(var i=0;i<liarr.length;i++){
		liarr[i].style.backgroundColor="red";
	}
	liarr[x-1].style.backgroundColor="yellow";
	x++;
	if(x>5){
		x=1;
	}
}
function init(){
	document.getElementsByTagName("li")[0].style.backgroundColor="yellow";
}
var y;
function kaishi(){
	y=setInterval("showId()",1000);
}
function dingzhu(data){
	clearInterval(y);
	var img1=document.getElementById("imgId");
	img1.src="images/h"+data+".png"
	var liarr=document.getElementsByTagName("li");
	for(var i=0;i<liarr.length;i++){
		liarr[i].style.backgroundColor="red";
	}
	liarr[data-1].style.backgroundColor="yellow";
		x=data+1;
		if(x>5){
		x=1;
	}
}