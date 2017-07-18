$(function(){
	
	//(绑定各种检查事件)手机号获得焦点和失去焦点
	$('#username').focus(function(){
		$(this).addClass('denglu_same');
	}).keyup(function(){
 		checkPhone();
	}).blur(function(){
		$(this).removeClass('denglu_same');	
		checkPhone();
	});
	
	//验证码
	$('#number').focus(function(){
		$(this).addClass('denglu_same');
	}).blur(function(){
		$(this).removeClass('denglu_same');
	});	
	
	//密码
	$('#password').focus(function(){
		$(this).addClass('denglu_same');
	}).keyup(function(){
		$(this).removeClass('denglu_same');
 		checkPassword();
	}).blur(function(){
		checkPassword();
	});	
	
	// 检查用户手机号方法
	function checkPhone(){		
		var $username = $('#username').val();
		var $tip = $('.usertipA');
		
		if($username == ''){
			$tip.html('<span class="form_logoA">x</span><span>&nbsp;手机号不能为空</span>');			
			return false;			
		}
		//正则判断
		var reg = /^(13|15|18)[0-9]{9}$/;
		var res = reg.exec($username);
		if(!res){
			$tip.html('<span class="form_logoB">!</span><span class="spanB">&nbsp;请输入正确的手机号码</span>');
			return false;
		}else{
			$tip.html('<span class="form_logoC">√</span><span class="spanC">&nbsp;手机号码格式正确</span>');
				return true;
		}
	}

	// 检查用户密码方法
	function checkPassword(){
		var $password = $('#password').val();
		var $tip = $('.usertipB');
		
		
		if($password == ''){
			$tip.html('<span class="form_logoA">x</span><span>&nbsp;密码不能为空</span>');
			return false;
		}
		//正则判断
		var reg = /^[0-9a-zA-Z]{4,14}$/;
		var res = reg.exec($password);
		
		if(!res){
			$tip.html('<span class="form_logoB">x</span><span class="spanB">&nbsp;密码长度应为4-14位英文和数字组合</span>');
			return false;
		}else if($password.length >= 4 && $password.length <7){
			$tip.html('<em class="form_emA"></em><em></em><em></em><span>&nbsp;&nbsp;密码强度：弱</span>');
			return false;			
		}else if($password.length >= 7 && $password.length <11){
			$tip.html('<em class="form_emB"></em><em class="form_emB"></em><em></em><span>&nbsp;&nbsp;密码强度：中</span>');
			return false;					
		}else{
			$tip.html('<em class="form_emC"></em><em class="form_emC"></em><em class="form_emC"></em><span class="spanC">&nbsp;&nbsp;密码强度：强</span>');
			return false;
		}		
	}
	
	//邮箱注册动画
	function formainmat(){
		$('#phone_login').click(function(){
			var _this = $(this);
			$(".animat_form").animate({"margin-left":"0px"},300,function(){
				_this.siblings().removeClass("active");
				_this.addClass('active');
			})
		});
		$('#email_login').click(function(){
			var _this = $(this);
			$(".animat_form").animate({"margin-left":"-320px"},300,function(){
				_this.siblings().removeClass("active");
				_this.addClass('active');			
			})
		});
	}
	formainmat();
	
});

					
					
				