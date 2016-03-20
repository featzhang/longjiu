// JavaScript Document

$(function(){
	
		function moveBook() {/*图片轮播*/
		 $(".navMenu").first().css({'display':'block'});
         	var index = 0;
            var stop = false;
            var lis = $(".navMenubox").find(".navMenu");
            setInterval(function () {
                if (stop) return;
                index++;
				
                if (index == lis.length) {
                    index = 0;
                }
                $(".navMenu").eq(index).fadeIn('fast').siblings(".navMenu").fadeOut('flow');
				$(".navUl").children("li").eq(index).addClass("selectImg");
				$(".navUl").children("li").eq(index).siblings().removeClass("selectImg");
            }, 3000);
			
            $(".navUl li").hover(function () {
                stop = true;
                index = $(this).index();
				batimer =setTimeout(function(){
					$(".navMenu").eq(index).fadeIn('fast').siblings(".navMenu").fadeOut('flow');
					$(".navUl").children("li").eq(index).addClass("selectImg");
					$(".navUl").children("li").eq(index).siblings().removeClass("selectImg");
					},200);
                
            }, function () {
                stop = false;
				clearTimeout(batimer);
            });
            //鼠标移入停止轮播，鼠标移出继续轮播
            $(".navMenubox").mouseover(function () {
                stop = true;
            }).mouseout(function () {
                stop = false;
            });
		}
		moveBook();

});


