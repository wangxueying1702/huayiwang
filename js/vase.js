let str=0;
let str1=0;
$('.month').on('click',"s", function(event) {	
	  let index = $(this).index();
	  $("s").eq(index).children([0]).addClass("dianji");
	  str=parseFloat($("s").eq(index).attr("value"));
	  str1=parseFloat($("s").eq(index).attr("name"));
	  $("s").eq(index).children([0]).css({"display":"block"});
	  $("s").eq(index).siblings().children([0]).css({"display":"none"});
	  $("s").eq(index).css({"border":"1px solid #e43669"})
	  $("s").eq(index).siblings().css({"border":"1px solid #a0a0a0"});
	  var shu=$("#shu").val();
	  $("#money").children("i").html(str*shu)
	  $(".count").html("库存:"+str1)
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