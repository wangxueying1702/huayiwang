$(".nav").mouseover(function(){
          $(this.children).css({"display":"block"});
        
	})
	$(".nav").mouseout(function(){
          $(".nav"+" ul").css({"display":"none"});
        
	})
	$(".nav"+" ul li a").mouseover(function(){
			$(this).css({"color":"pink"});
	})
	$(".nav"+" ul li a").mouseout(function(){
			$(this).css({"color":"#000"});
	})
		$(".nav"+" ul").mouseover(function(){
			$(this).css({"display":"block"});
	})
	$(".nav"+" ul").mouseout(function(){
			$(this).css({"display":"none"});
	})
	