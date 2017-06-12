//var cook1=0;
$("#buy1").click(function(){
	var cook=getCookie("userName")
	var ord=getCookie("xuanze")
	if(cook==""){
		alert("请您先登录，在购物");
		location.href="user.html";
	}else if($("#money").children("i").text()=="199.00-399.00"){
		alert("请选择商品");
	}else if($("#shu").val()==0){
		alert("请您选择物品数量");
	}else {
		var cont1=parseInt($("#shu").val());
		$.get("addShoppingCart.php",{"goodsId":ord,"vipName":cook,"goodsCount":cont1},function(data){
			if(data=="1"){
				alert("添加成功")
			}
			
		})
		//cook1=getCookie("gou");
		//cook1++;
		//$("#gou555").html(cook1);
		//saveCookie("gou",$("#gou555").html(),7);
	}
	
});

let str0=0;
$('.month').on('click',"s", function(event) {	
	  let index = $(this).index();
	  str0=parseFloat($("s").eq(index).attr("value"));

	});

$("#jiajia").click(function(){
	var jia=0;
	 jia=parseInt($("#shu").val())+1;
		$("#shu").val(jia)
	var shu=parseInt($("#money").children("i").text())
	$("#money").children("i").html(shu+str0)
})
$("#jianjian").click(function(){
	var jian=0;
	if($("#shu").val()==1){
		$("#shu").val()=1;
	}else{
		jian=parseInt($("#shu").val())-1;
		$("#shu").val(jian)
		var shu=parseInt($("#money").children("i").text())
		$("#money").children("i").html(shu-str0)
	}
	 
})

$("#buy").click(function(){
	var shu=parseInt($("#money").children("i").text())
	saveCookie("jiesuan",shu,7);
	location.href="jiesuan.html"
})
