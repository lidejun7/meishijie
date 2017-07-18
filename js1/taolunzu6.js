  window.onload = function(){
        var animat = false;
        var index = 0;
        var list = document.getElementById('list').getElementsByTagName('a');
        var dots = document.getElementById('dot').getElementsByTagName('span');  	
        
       	var int = setInterval(function(){next()}, 3000);
       
        function next(){
            if(animat){
                return false;
            }
            var new_index = (index+1 >4)?0:index+1 ;
            animation(index, new_index);
            index = new_index;
            checkIndex();
        }

        function pre(){
            if(animat){
                return false;
            }
            var new_index = (index-1 < 0)?4: index-1;
            animation(index, new_index);
            index = new_index;
          	checkIndex();
        }
        
    function animation(index, new_index){
            animat = true;

            var interval = 10;
            var one_time = 1000;
            var offset = 1/(1000/10);


            list[index].style.opacity = 1;             
            list[new_index].style.opacity = 0; 

            list[new_index].style.display = 'block';

            var x = 0;
            go();
            function go(){
                x += offset;        

                list[index].style.opacity -= offset;

                list[new_index].style.opacity = x;

                if(list[index].style.opacity >=0 ){
                   setTimeout(function(){go()}, 10) ;
                }else{
                    list[index].style.display = 'none';
                    animat = false;

                }
            }
        }
        
         function checkIndex(){
            for(var i=0; i<dots.length; i++){
                dots[i].className = '';
            }
            dots[index].className = 'on';
        }

        for(var i=0; i<dots.length; i++){
            dots[i].onclick = function(){
                if(animat){
                    return false;
                }
                var new_index = Number(this.getAttribute('index'));
                animation(index, new_index);
                index = new_index;
                checkIndex();
            }
        }
        
  }