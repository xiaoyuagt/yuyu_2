$(function(){
	$('.cebian').on('tap',function(){
   			if ($('aside').hasClass('k_xiala')) {
   				$('aside').removeClass('k_xiala');
   			}else{
   				$('aside').addClass('k_xiala');
   			}
   		});
	$('section').on('tap', function(event) {
		$('aside').removeClass('k_xiala');
	});
    var nam = $(".username");
        var pho = $(".telephone");
        var qq = $(".qq");
        var add = $(".dizhi");
        function zhengze(){
          if(nam.val() == ''){
            $(".bt01").css({"display":"block"});
            nam.focus();
            return false;
        }else{
            var re = /[^\u0000-\u00FF]/;
            if(!re.test(nam.val())){
                $(".bt01").html("请填写您的真实姓名！").css({"display":"block"});
                nam.focus();
                return false;
            }else{$(".bt01").css({"display":"none"});}}

        if(pho.val()=='')
        {
            $(".bt03").html("请填写您的手机号码！").css({"display":"block"});
            pho.focus();
            return false;
        }else{
            var re = /^1\d{10}$/;
            if(!re.test(pho.val())){
                $(".bt03").html("手机号码格式不正确！").css({"display":"block"});
                pho.focus();
                return false;
            }else{$(".bt03").css({"display":"none"});}}

        if(qq.val() == ''){
            $(".bt02").css({"display":"block"});
            qq.focus();
            return false;
        }else{
            var re = /^\d{5,10}$/;
            if(!re.test(qq.val()))
            {
                $(".bt02").html("qq格式不正确").css({"display":"block"});
                qq.focus();
                return false;
            }else{ $(".bt02").css({"display":"none"});}}

        if(add.val()=='')
        {
            $(".bt05").css({"display":"block"});
            add.focus();
            return false;
        }
        if($('textarea').val()=='')
        {
            $("textarea").html("请填写您的留言");
            $("textarea").focus();
            return false;
        }
        }
			$('.k_tijiao').on('touchend', function (event) {
				zhengze();
				return false
			});
		$('.chongzhi').on('touchend', function (event) {
				$('.bt').hide();
		})
})
