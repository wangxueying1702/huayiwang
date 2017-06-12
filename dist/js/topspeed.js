	$(function(){
		//商品详情显示
	let arr=[];
	var arr1=[];
	var arr2=[];
	var arr3=[];
	var arr4=[];
	var ord=getCookie("xuanze")
	$.get("getGoodsInfo.php",{"goodsId":ord},function(data){
			var obj=eval("("+data+")")	
			arr1=eval(obj.beiyong1);
			arr2=eval(obj.beiyong2);
			arr3=eval(obj.beiyong3);
			arr4=eval(obj.beiyong4);
			for(var i=0;i<arr1.length;i++){
				var p="<s value='"+arr2[i]+"' name='"+arr3[i]+"'>"+arr4[i]+"<img src='img1/icon.png' style='display: none;'/></s>";
				$(".month").append(p);
				var img="<img src='img1/"+arr1[i]+"' class='img01'/>";
				$("#box").append(img);
				arr.push("img1/"+arr1[i]);
			}	
		let str=0;
		let str1=0;
		let str2=0;
		$('.month').on('click',"s", function(event) {	
			  let index = $(this).index();
			  $("s").eq(index).children([0]).addClass("dianji");
			  str=parseFloat($("s").eq(index).attr("value"));
			  str2=parseFloat($("s").eq(index).attr("name"));
			  $("s").eq(index).children([0]).css({"display":"block"});
			  $("s").eq(index).siblings().children([0]).css({"display":"none"});
			  $("s").eq(index).css({"border":"1px solid #e43669"})
			  $("s").eq(index).siblings().css({"border":"1px solid #a0a0a0"});
			  $(".img01").attr({ src:arr[index]}); 
			  //$("#bag").children(0).attr({ src:arr[index]}); 
			  $("#money").html("￥"+(str+str1))
			  $("#kucun").html("库存："+str2)
			  $("#box").mirror({
					smallBoxId: "#box",                      
					smallImgId: ".img01",                      
					imgPath: arr[index],                  
					baseLeft: 0,    //图片容器初始的left                    
					baseTop: 0,     //图片容器初始的top                    
					baseWidth: 415,    //图片容器的width                
					baseHeight: 335,  //图片容器的height                    
					mirrorWidth: 83,                     
					mirrorHeight: 60,                    
					multiple: 5,
					position:"下"
			});
						  
 });
			  
			$('.yes1').on('click',"i", function(event) {	
			  let index = $(this).index();
			  $("i").eq(index).children([0]).addClass("shifou");
			  str1=parseFloat($("i").eq(index).attr("value"));
			  $("i").eq(index).children([0]).css({"display":"block"});
			  $("i").eq(index).siblings().children([0]).css({"display":"none"});
			  $("i").eq(index).css({"border":"1px solid #e43669"})
			  $("i").eq(index).siblings().css({"border":"1px solid #a0a0a0"});
			  $("#money").html("￥"+(str+str1))
			});
			
	});
	
	})
	
function showInfo(china){
		var sheng=document.getElementById("sheng");
		for(let i=0;i<china.length;i++){
			var op=document.createElement("option");
			op.innerHTML=china[i].name;
			sheng.appendChild(op);
		}
	sheng.onchange=function(){
		var shi=document.getElementById("shi");
		var sheng=document.getElementById("sheng");
		for(let i=0;i<china.length;i++){
			if(sheng.value==china[i].name){
				shi.innerHTML="";
				for(let j=0;j<china[i].city.length;j++){
				var op1=document.createElement("option");
				op1.innerHTML=china[i].city[j];
				shi.appendChild(op1);
				}
			}
		}
	}
}