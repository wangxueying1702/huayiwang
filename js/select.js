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