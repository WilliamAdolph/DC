
jQuery(document).ready(function() {

    $('.page-container form').submit(function(){
        var username = $(this).find('.username').val();
        var password = $(this).find('.password').val();
        if(username == '') {
            $(this).find('.error').fadeOut('fast', function(){
                $(this).css('top', '27px');
            });
            $(this).find('.error').fadeIn('fast', function(){
                $(this).parent().find('.username').focus();
            });
            return false;
        }
        if(username!='') {
        	if(username!='admin'){
        		$(this).find('.error').fadeOut('fast', function(){
                $(this).css('top', '27px');
            });
            $(this).find('.error').fadeIn('fast', function(){
                $(this).parent().find('.password').focus();
            });
            	return false;
        	}
        	if(username=='admin'){
        		if(password==''){
        			$(this).find('.error').fadeOut('fast', function(){
                		$(this).css('top', '96px');
            		});
            		$(this).find('.error').fadeIn('fast', function(){
                		$(this).parent().find('.password').focus();
            		});
            			return false;
        		}
        		if(password!='admin'){
        			$(this).find('.error').fadeOut('fast', function(){
                		$(this).css('top', '96px');
            		});
            		$(this).find('.error').fadeIn('fast', function(){
                		$(this).parent().find('.password').focus();
            		});
            			return false;
        		}
        	}
        }
//      if(username != 'hwh'||username != 'lyk'||username != 'yqy'||username != 'zyy') {
////      	alert("有输入")
//          $(this).find('.error').fadeOut('fast', function(){
//              $(this).css('top', '27px');
//          });
//          $(this).find('.error').fadeIn('fast', function(){
//              $(this).parent().find('.username').focus();
//          });
//          return false;
//      }
//      if(username == 'hwh'||username == 'lyk'||username == 'yqy'||username == 'zyy') {
//      	alert(1)
//	        if(username=="hwh"){
//	        	alert(1)
//	        	 if(password == ''||password!='hwh') {
//		            $(this).find('.error').fadeOut('fast', function(){
//		                $(this).css('top', '96px');
//		            });
//		            $(this).find('.error').fadeIn('fast', function(){
//		                $(this).parent().find('.password').focus();
//		            });
//		            return false;
//		        }
//	        	 else{window.location.href='/houtai.html'}
//	        }
//	        if(username=="lyk"){
//	        	 if(password == ''||password!='lyk') {
//		            $(this).find('.error').fadeOut('fast', function(){
//		                $(this).css('top', '96px');
//		            });
//		            $(this).find('.error').fadeIn('fast', function(){
//		                $(this).parent().find('.password').focus();
//		            });
//		            return false;
//		        }
//	        	 else{window.location.href='/houtai.html'}
//	        }
//	        if(username=="yqy"){
//	        	 if(password == ''||password!='yqy') {
//		            $(this).find('.error').fadeOut('fast', function(){
//		                $(this).css('top', '96px');
//		            });
//		            $(this).find('.error').fadeIn('fast', function(){
//		                $(this).parent().find('.password').focus();
//		            });
//		            return false;
//		        }
//	        	 else{window.location.href='/houtai.html'}
//	        }
//	        if(username=="zyy"){
//	        	 if(password == ''||password!='zyy') {
//		            $(this).find('.error').fadeOut('fast', function(){
//		                $(this).css('top', '96px');
//		            });
//		            $(this).find('.error').fadeIn('fast', function(){
//		                $(this).parent().find('.password').focus();
//		            });
//		            return false;
//		        }
//	        	 else{window.location.href='/houtai.html'}
//	        }
//      }
        if(password == '') {
            $(this).find('.error').fadeOut('fast', function(){
                $(this).css('top', '96px');
            });
            $(this).find('.error').fadeIn('fast', function(){
                $(this).parent().find('.password').focus();
            });
            return false;
        }else{window.location.href='/houtai.html'}
    });

    $('.page-container form .username, .page-container form .password').keyup(function(){
        $(this).parent().find('.error').fadeOut('fast');
    });

});
