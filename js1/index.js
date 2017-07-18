window.onload = function(){  
	lunBo_a();
	lunBo_b();				
}	
	
	function lunBo_a(){
		var animat = false;    	    	
    var index = 1;
    	   	
    var list = document.getElementById('list');
    var dots = document.getElementById('dot').getElementsByTagName('li');  
    document.getElementById('next').onclick = function(){next()}
    document.getElementById('pre').onclick = function(){pre()}
    
        //调用
    checkIndex();
  
    
	var int = setInterval(function(){next()},3000);
    	
    	function next(){    		
            if(animat){
                return false;
            }
	
    		var width = parseInt(list.style.left);    		
    		var next_width = width-990;
    		
    		index = (++index > 5)? 1: index;    		    		
    		animation(width,next_width);
    	}
    
    	function pre(){
            if(animat){
                return false;
            }
    		var width= parseInt(list.style.left);
    		
    		var next_width = width+990;
    		index = (--index < 1)? 5: index;
    		animation(width,next_width);
    	}
    
    	function animation(width,next_width,one_time,interval){    		    		
    		if(animat){
    			return false;
    		}    		    			
    		checkIndex();
            
            animat = true;   		
	    		    	  	    	  
	    	one_time = one_time || 1000;		    	
	    	interval = interval || 10;		
	    	  
	    	var offset = (next_width-width)/(one_time/interval);
	    	  
	    	go(width,offset,next_width);
	    	  
	    	  
	    	function go(w,offset,next_width){
	    	  	
	    	  	list.style.left = w+'px';
	    	  	
	    	  	
	    	  	w += offset;
  

	    	 	if(w>=next_width　&& width > next_width || w<=next_width && width<next_width){
	    	 		setTimeout(function(){
    	  			
    	  			go(w,offset,next_width);
    	  			},interval);
	    	 	}else{
	    	 		
	    	 		if(next_width <= -5940){
	    	 			list.style.left = -990+'px';
	    	 		}else if(next_width > -990){
	    	 			list.style.left = -4950+'px';
	    	 		}else{
	    	 			list.style.left = next_width+'px';
	    	 		}
	    	 		
	    	 		animat = false;
	    	 		
	    	 	}	    	  
    		}
    	}
    	
       	function checkIndex(){   		
    		for(var i=0;i<dots.length;i++){    			
    			dots[i].className = '';
    		}
  		
    		dots[index-1].className = 'on';
    	}
    	    	
    	
    	for(var i=0;i<dots.length;i++){
    		dots[i].onclick = function(){
    			if(animat){
    			return false;
    			}
    			
    			
    			var new_index = this.getAttribute('index');
    			
    			var width = parseInt(list.style.left);
    			
    			var next_width = (new_index)*-990;    			
    			index = new_index;	
    			
    			animation(width,next_width);
    		}
    	}
    	
    	
    	var container = document.getElementById('container');
    	
    	container.onmouseover = function(){
    		clearInterval(int);
    	};
    	
    	container.onmouseout = function(){
    	int = setInterval(function(){next()},3000);	
    	}
	}






	/*分割线	*/
	
	



	function lunBo_b(){
		var animat1 = false;
    	var index = 1;
    	
		var list_a = document.getElementById('list_a');
    	var dots_a = document.getElementById('dot_a').getElementsByTagName('span');
    	
    	checkIndex_a();
    	
    	var int_a = setInterval(function(){next_a()},3000);
    	
    	document.getElementById('next_a').onclick = function(){next_a()}
    	document.getElementById('pre_a').onclick = function(){pre_a()}
    	
		function next_a(){
            if(animat1){
                return false;
            }    		
    		var width = parseInt(list_a.style.left);    		
    		var next_width = width-990;
    		
    		index = (++index > 3)? 1: index;    		
    		animation_a(width,next_width);
	
		}
		
		function pre_a(){
            if(animat1){
                return false;
            }
    		var width= parseInt(list_a.style.left);
    		
    		var next_width = width+990;
    		index = (--index < 1)? 3: index;
    		animation_a(width,next_width);
		}
		
		
		function animation_a(width,next_width,one_time,interval){    		    		
    		if(animat1){
    			return false;
    		}
    			
    		checkIndex_a();
    		
            
            animat1 = true;   		
	    	  
	    	var one_time = one_time || 1000;		    	
	    	var interval = interval || 10;		
	    	  
	    	  var offset = (next_width-width)/(one_time/interval);
	    	  
	    	  go_a(width,offset,next_width);
	    	  
	    	  
	    	function go_a(w,offset,next_width){
	    	  	
	    	  	list_a.style.left = w+'px';
	    	  	
	    	  	
	    	  	w += offset;
  

	    	 	if(w>=next_width　&& width > next_width || w<=next_width && width<next_width){
	    	 		setTimeout(function(){
    	  			
    	  			go_a(w,offset,next_width);
    	  			},interval);
	    	 	}else{
	    	 		
	    	 		if(next_width <= -3960){
	    	 			list_a.style.left = -990+'px';
	    	 		}else if(next_width > -990){
	    	 			list_a.style.left = -2970+'px';
	    	 		}else{
	    	 			list_a.style.left = next_width+'px';
	    	 		}
	    	 		
	    	 		animat1 = false;
	    	 		
	    	 	}	    	  
    		}
    	}
		
		function checkIndex_a(){
    		for(var i=0;i<dots_a.length;i++){
    			dots_a[i].className = '';
    		}
    		dots_a[index-1].className = 'on_a';
    	}
    	
    	for(var i=0;i<dots_a.length;i++){
    		dots_a[i].onclick = function(){
    			if(animat1){
    				return false;
    			}
    			
    			var new_index = this.getAttribute('index');
    			var width = parseInt(list_a.style.left);
    			var next_width = new_index*-990;
    			index = new_index;
    			animation_a(width,next_width);
    			
    		}
    	}
		
		var container_a = document.getElementById('container_a')
    	container_a.onmouseover = function(){
    		clearInterval(int_a);
    	}
    	container_a.onmouseout = function(){
    	int_a = setInterval(function(){next_a()},3000);	
    	}
	}