var index = 0;
var playCount = null;

$(".but li").hover(function() {
 		//when hover on the control buttons, cancel the auto play and add 'current' class and remove siblings's current class
    clearInterval(playCount);
    $(this).addClass("current").siblings().removeClass('current');
		// get the index of the button that's being hovered on
    index = $(this).index();
    $(".con li").eq(index).fadeIn().siblings().fadeOut();

})
// when the mouse move out of the control buttons, let's activate the auto play one more time
.mouseout(function() {
    auto_play();
});

function auto_play() {
	//playCount contains is a fucntio, it will be called every 3 seconds
    playCount = setInterval(function() {

        index++;
        if (index > 3) {
            index = 0;
        }

				// when the index is bigger than the slides we have, re set it to zero

				// and add current class to whatever is being hover on and current class on all rest elements
        $(".but li").eq(index).addClass("current").siblings().removeClass("current");
				//show the current image/li with a fadein effect all fadeout all the rest
        $(".con li").eq(index).fadeIn().siblings().fadeOut();
    }, 3000);


};

auto_play(); //调用方法
