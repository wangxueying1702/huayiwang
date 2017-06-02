$(function(){
	$(".kuaisu").click(function(){
        $("#xiugai").css({"display":"none"});
        $("#login").css({"display":"none"});
        $("#register").css({"display":"none"});
         $("#phone").css({"display":"block"});
	})
	})
$(function(){
	
$(".zhanghao").click(function(){
        $("#xiugai").css({"display":"none"});
        $("#register").css({"display":"none"});
        $("#phone").css({"display":"none"});
        $("#login").css({"display":"block"});
        
	})
	})
$(function(){
	$(".pass").click(function(){
        $("#xiugai").css({"display":"none"});
        $("#register").css({"display":"none"});
        $("#phone").css({"display":"none"});
		$("#login").css({"display":"block"});
        
	})
	})
$(function(){
	$(".mima").click(function(){
         $("#register").css({"display":"none"});
        $("#phone").css({"display":"none"});
		$("#login").css({"display":"none"});
        $("#xiugai").css({"display":"block"});
        
	})
	})
$(function(){
	$(".but").click(function(){
           $("#phone").css({"display":"none"});
		$("#login").css({"display":"none"});
        $("#xiugai").css({"display":"none"});
           $("#register").css({"display":"block"});
        
	})
	})

$(function(){
	$("#but1").click(function(){
         $("#xiugai").css({"display":"none"});
        $("#register").css({"display":"none"});
        $("#phone").css({"display":"none"});
          $("#login").css({"display":"block"});
        
	})
})

var str1="";
function testF(){
	var i=0;
	var str="";
	while(i<4){
		var num1=parseInt(Math.random()*123);
		if((num1>48 && num1<=57)||(num1>=65 && num1<=90)||(num1>=97 && num1<=122)){
			str+= "<img src='img/"+num1+".jpg'/>";
			str1+=String.fromCharCode(num1);
			i++;
		}
	}
	document.getElementById("showCode").innerHTML=str;
	document.getElementById("showCode1").innerHTML=str;
	document.getElementById("showCode2").innerHTML=str;
}

$(".verify").blur(function(){
	var  verify=this.value;
	verify=verify.toLowerCase();
	str1=str1.toLowerCase();
	if(verify==str1){
		str1="";
		$(this).css({"border":"1px solid green"});
		return;
	}else{
		this.value=" ";
		$(this).css({"border":"1px solid red"});
		str1="";
		testF();
	}
})