$(".nav").mouseover(function(){
          $(this.children).css({"display":"block"});
        
});
	$(".nav").mouseout(function(){
          $(".nav"+" ul").css({"display":"none"});
        
});
$(function(){
	var obj;
	$.post("getGoodsList.php",function(data){
			var obj=eval(data)
			for(var key in obj){
				if(obj[key].goodsType=="订阅鲜花"){				
					var lis="<li name='"+obj[key].goodsId+"'><a href='缤纷设计.html'>"+obj[key].goodsName+"</a></li>";
					$(".nav1").append(lis);
			}				
			if(obj[key].goodsType=="礼品鲜花"){			
				var lis="<li name='"+obj[key].goodsId+"'><a href='topspeed.html'>"+obj[key].goodsName+"</a></li>";
					$(".nav2").append(lis);
			}
			if(obj[key].goodsType=="绿植盆栽"){				
				var lis="<li name='"+obj[key].goodsId+"'><a href='gP.html' target='_blank'>"+obj[key].goodsName+"</a></li>";
					$(".nav3").append(lis);
			}
			if(obj[key].goodsType=="花边小物"){				
				var lis="<li name='"+obj[key].goodsId+"'><a href='vase.html'>"+obj[key].goodsName+"</a></li>";
					$(".nav4").append(lis);
			}
		}
			
			$(".nav1").on("click","li",function(event){
				var ord=$(this).attr("name");
				saveCookie("xuanze",ord,7);
			});
			$(".nav2").on("click","li",function(event){
				var ord=$(this).attr("name");
				saveCookie("xuanze",ord,7);
			});
			$(".nav3").on("click","li",function(event){
				var ord=$(this).attr("name");
				saveCookie("xuanze",ord,7);
			});
			$(".nav4").on("click","li",function(event){
				var ord=$(this).attr("name");
				saveCookie("xuanze",ord,7);
			});
	
			
			
})
	
	
	
	
})
	
	