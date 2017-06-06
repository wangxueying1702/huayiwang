let str=0;
let str1=0;
$('.month').on('click',"s", function(event) {	
	  let index = $(this).index();
	  $("s").eq(index).children([0]).addClass("dianji");
	  str=parseFloat($("s").eq(index).attr("value"));
	  $("s").eq(index).children([0]).css({"display":"block"});
	  $("s").eq(index).siblings().children([0]).css({"display":"none"});
	  $("s").eq(index).css({"border":"1px solid #e43669"})
	  $("s").eq(index).siblings().css({"border":"1px solid #a0a0a0"});
	  $("#img01").attr({ src: "img1/tu"+index+".png"}); 
	  $("#bag").children([0]).attr({ src: "img1/tu"+index+".png"}); 
	  $("#money").html("￥"+(str+str1))
	  $("#kucun").html("库存："+(str+156))
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