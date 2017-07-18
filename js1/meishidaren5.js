window.onload = function(){
		
	var container = document.getElementById('container');
	var list = document.getElementById('list');
	var dots = document.getElementById('dot').getElementsByTagName('span');
	var next = document.getElementById('next');
	var pre = document.getElementById('pre');
	var index = 1;
	
	var animat = false;
	
	
	//索引	
	function checkIndex(){   		
    		for(var i=0;i<dots.length;i++){
    			
    			dots[i].className = '';
    		}
  		
    		dots[index-1].className = 'on';
    }
	
	
/*	function animation(offset){
		var newleft = parseInt(list.style.left) + offset;
		list.style.left = newleft + 'px';
		if(newleft > -1030){
			list.style.left = 3090+'px';
		}
		if(newleft < -3090){
			list.style.left = -1030+'px';
		}
		
	}	
	*/
		/*var int = setInterval(function(){next()},3000);*/
	
		function animation(offset){
			animat = true;
			var newleft = parseInt(list.style.left) + offset;
			
			var one_time = 1000;
			var interval = 10;
			var speed = offset/(one_time/interval);//每次位移量
			
			function go(){
				animat = false;
				if((speed < 0 && parseInt(list.style.left) > newleft) || (speed > 0 && parseInt(list.style.left)<newleft)){
					list.style.left = parseInt(list.style.left)+speed+'px';
					setTimeout(go,interval);
					/*setTimeout(function(){  	  			
    	  			go();
    	  			},interval);*/
				}else{
					list.style.left = newleft + 'px';
					if(newleft > -1030){
						list.style.left = -3090+'px';
					}
					if(newleft < -3090){
						list.style.left = -1030+'px';
					}
				}
				
			}
			
			go();
		
	}	
	

	function play(){
		int1 = setInterval(function(){
			next.onclick();
		},3090);
	}
	
	play();
	
	function stop(){
		clearInterval(int1);
	}

	next.onclick = function(){
		if(index == 3){
			index = 1;
		}else{
			index +=1;
		}
		
		checkIndex();
		animation(-1030);
		
		if(!animat){
			animat(-1030);
		}
	}
	pre.onclick = function(){
		if(index == 1){
			index = 3;
		}else{
		index -= 1;			
		}		

		checkIndex();
		animation(1030);
		
		if(!animat){
			animat(1030);
		}
	}
	
		for(var i = 0;i<dots.length;i++){
			dots[i].onclick = function(){
				if(this.classname == 'on'){
					return;
				}
				
				var new_index = parseInt(this.getAttribute('index'));
				var offset = -1030 * (new_index-index);
				
				animation(offset);
				index = new_index;
				checkIndex();
				
				if(!animat){
					animat(offset);
				}
			}
		}
	
	container.onmouseover = stop;
	container.onmouseout = play;
	
}