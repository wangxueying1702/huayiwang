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
/*
$(function(){
	showCity($("#selId").val());
	
	 $("#selId").change(function(){
		showCity($("#selId").val());
	 });
	 showXian($("#selId01").val());
	 
	 $("#selId01").change(function(){
		showXian($("#selId01").val());
	 });
	 showZhen($("#selId02").val());
	 
	 $("#selId02").change(function(){
		showZhen($("#selId02").val());
	 });
})
function showProvince(cityObj){
	$("#selId").html("");
	for(let i=0;i<cityObj.城市代码.length;i++){
		let opt1="<option value='"+cityObj.城市代码[i].省+"'>"+cityObj.城市代码[i].省+"</option>";
		$("#selId").append(opt1);
	}
}

//显示城市
//参数：省
function showCity(provinceName){
	$("#shi").html("");
	//1、先在json中查找对应的省
	let citys = [];
	for(let i=0;i<cityObj.城市代码.length;i++){
		if(cityObj.城市代码[i].省==provinceName){
			citys = cityObj.城市代码[i].市;
			break; 
		}
	}
	//2、把该省的市循环显示出来	
	for(let i=0;i<citys.length;i++){
		let opt="<option value='"+citys[i].市名+"'>"+citys[i].市名+"</option>";
		$("#selId01").append(opt);		
	}
}
function showXian(xian){
	$("#qu").html("");
	//1、先在json中查找对应的省
	let citys=cityObj.城市代码;
	let xians = [];
	for(let i=0;i<citys.length;i++){
		for(let j=0;j<citys[i].市.length;j++){
			if(citys[i].市[j].市名==xian){
				xians =citys[i].市[j].县;
				break; 
			}
		}
	}
	
	//2、把该省的市循环显示出来	
	for(let i=0;i<xians.length;i++){
		let opt="<option value='"+xians[i].县名+"'>"+xians[i].县名+"</option>";
		$("#qu").append(opt);		
	}
}
function showZhen(zhen){
	$("#jie").html("");
	//1、先在json中查找对应的省
	let citys=cityObj.城市代码;
	let zhens = [];
	for(let i=0;i<citys.length;i++){
		for(let j=0;j<citys[i].市.length;j++){
			for(let z=0;z<citys[i].市[j].县.length;z++){
				if(citys[i].市[j].县[z].县名==zhen){
					zhens =citys[i].市[j].县[z].镇;
					break; 
				}
			}
		}
	}
	//2、把该省的市循环显示出来	
	for(let i=0;i<zhens.length;i++){
		let opt="<option value='"+zhens[i]+"'>"+zhens[i]+"</option>";
		$("#jie").append(opt);		
	}
}
*/





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
	  var shu=$("#shu").val();
	  $("#money").children("i").html(str*shu)
	  $(".count").html("库存:"+str2)
	});
	$('.yes1').on('click',"i", function(event) {	
	  let index = $(this).index();
	  $("i").eq(index+2).children([0]).addClass("shifou");
	  str1=parseFloat($("i").eq(index+2).attr("value"));
	  $("i").eq(index+2).children([0]).css({"display":"block"});
	  $("i").eq(index+2).siblings().children([0]).css({"display":"none"});
	  $("i").eq(index+2).css({"border":"1px solid #e43669"})
	  $("i").eq(index+2).siblings().css({"border":"1px solid #a0a0a0"});
	  var money=parseInt($("#money").children("i").text())
	  $("#money").children("i").html(money+str1);
	});
