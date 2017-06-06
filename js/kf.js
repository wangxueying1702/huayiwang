function fasong(){	
	var p=document.createElement("p");
	p.style.cssText="position:relative;right:-190px;width:120px;background:#99f;color:#fff;border-radius:5px;padding:0 15px;margin:10px 10px;text-align:center;font:14px/28px '';"
	p.innerText=document.getElementById("neirong").value;
	var img=document.createElement("img");
	img.src="img/me.png";
	img.style.cssText="position:absolute;right:-32px;top:-4px;"
	p.appendChild(img);
	if(p.innerText!=""){
	document.getElementById("duihuakuang").appendChild(p);
	p.scrollIntoView();
	setTimeout(shuju,300);
	}
}
function shuju(){
	let xhr=new XMLHttpRequest();
		xhr.open("get","demo2.php",true);
		xhr.onreadystatechange=function(){
			if(xhr.readyState==4&&xhr.status==200){
			var obj=JSON.parse(xhr.responseText);
				kefu(obj);	
			}
		}
		xhr.send();
}
function kefu(obj){
	var p=document.createElement("p");
	p.style.cssText="position:relative;left:27px;width:120px;padding:0 5px;width:150px;background:#f9f;color:#fff;border-radius:5px;margin:10px 10px;font:14px/20px '';"
	var img=document.createElement("img");
	img.src="img/ta.png";
	img.style.cssText="position:absolute;left:-37px;top:3px;";
	let arr1=obj.keyword;
		for(let i=0;i<arr1.length;i++){
				let reg=eval("/"+arr1[i]+"/gi");
				if(reg.test(document.getElementById("neirong").value)){
						p.innerHTML=obj.repon[i];
						p.appendChild(img);
				}
			}
		if(p.innerHTML==""){
			p.innerHTML=obj.repon[obj.repon.length-1];
			p.appendChild(img);
		}
		document.getElementById("duihuakuang").appendChild(p);
		p.scrollIntoView();
		document.getElementById("neirong").value="";
		}

	