var cook1=0;
$("#buy1").click(function(){
	cook1=getCookie("gou");
		cook1++;
	$("#gou555").html(cook1);
	saveCookie("gou",$("#gou555").html(),7);
})
