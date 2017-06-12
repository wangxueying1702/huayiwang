//var cook1=0;
$("#buy1").click(function(){
	var cook=getCookie("userName")
	var ord=getCookie("xuanze")
	if(cook==""){
		alert("请您先登录，在购物");
		location.href="user.html";
	}else if($("#money").text()=="￥199.00~￥138.00"){
		alert("请选择商品");
	}else if($("#shu").val()==0){
		alert("请您选择物品数量");
	}else {
		$.get("addShoppingCart.php",{"goodsId":ord,"vipName":cook,"goodsCount":1},function(data){
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
$("#jiajia").click(function(){
	var jia=0;
	 jia=parseInt($("#shu").val())+1;
		$("#shu").val(jia)
})
$("#jianjian").click(function(){
	var jian=0;
	if($("#shu").val()==0){
		$("#shu").val()=0;
	}else{
		jian=parseInt($("#shu").val())-1;
		$("#shu").val(jian)
	}
	 
})


