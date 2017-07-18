window.onload = function(){
	var animat = false;    	    	
    var index = 1;
    
    var list_a = document.getElementById('list_a');
    var dots_a = document.getElementById('dot_a').getElementsByTagName('span');
    document.getElementById('next_a').onclick = function(){next()}
    document.getElementById('pre_a').onclick = function(){pre()}
	//调用
	checkIndex();
	
	var int = setInterval(function(){next()},3000);
	
	function next(){    		
            if(animat){
                return false;
            }    		
    		
    		var width = parseInt(list_a.style.left);    		
    		var next_width = width-990;
    		
    		index = (++index > 3)? 1: index;    		    		
    		animation(width,next_width);
    	}
	
	function pre(){
            if(animat){
                return false;
            }
            
    		var width= parseInt(list_a.style.left);    		
    		var next_width = width+990;
    		
    		index = (--index < 1)? 3: index;
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
	    	  	
	    	  	list_a.style.left = w+'px';	    	  	
	    	  	
	    	  	w += offset;  

	    	 	if(w>=next_width　&& width > next_width || w<=next_width && width<next_width){
	    	 		setTimeout(function(){
    	  			
    	  			go(w,offset,next_width);
    	  			},interval);
	    	 	}else{	    	 		
	    	 		if(next_width <= -3960){
	    	 			list_a.style.left = -990+'px';
	    	 		}else if(next_width > -990){
	    	 			list_a.style.left = -2970+'px';
	    	 		}else{
	    	 			list_a.style.left = next_width+'px';
	    	 		}
	    	 		
	    	 		animat = false;
	    	 		
	    	 	}	    	  
    		}
    	}
	
		function checkIndex(){   		
    		for(var i=0;i<dots_a.length;i++){    			
    			dots_a[i].className = '';
    			
    		}
  		
    		dots_a[index-1].className = 'on_a';
    	}
	
	
		for(var i=0;i<dots_a.length;i++){
    		dots_a[i].onclick = function(){
    			if(animat){
    			return false;
    			}
    			    			
    			var new_index = this.getAttribute('index');
    			
    			var width = parseInt(list_a.style.left);    			
    			var next_width = (new_index)*-1000;    			
    			
    			index = new_index;	    			
    			animation(width,next_width);
    		}
    	}
	
		
		var container_a = document.getElementById('container_a')
    	
    	container_a.onmouseover = function(){
    		clearInterval(int);
    	};
    	
    	container_a.onmouseout = function(){
    	int = setInterval(function(){next()},3000);	
    	}
		
}	