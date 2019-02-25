var HW_SLIDE_SPEED = 1000;
var HW_TIME_OUT = 3000;
var hwNeedLinks = true;
 
document.addEventListener("DOMContentLoaded", ready); 

function ready() 
{
	function resizeSlide()
	{
		$('.slide').css("width", $(window).width());
		$('.navigation').css("left", ($(window).width())/2-70);
	}
	resizeSlide();
	$(window).resize(resizeSlide);

    $('.slide').css({"position" : "absolute", "top":'0', "left":'0'})
			   .hide()
			   .eq(0)
			   .show();

    var slideNum = 0;
    var slideTime;
    slideCount = $("#slides .slide").size();
    var animSlide = function(arrow)
	{
        clearTimeout(slideTime);
        $('.slide').eq(slideNum).fadeOut(HW_SLIDE_SPEED);
        if (arrow == "next")
        {
            slideNum = (slideNum == (slideCount - 1)) ? 0 : slideNum + 1;
        }
        else if (arrow == "prew")
        {
			slideNum = (slideNum == 0) ? slideCount - 1 : slideNum - 1;
        }
        else
        {
            slideNum = arrow;
        }
        $('.slide').eq(slideNum).fadeIn(HW_SLIDE_SPEED, rotator);
        $(".dot").removeClass('active');
        $('.dot').eq(slideNum).addClass('active');
	}

	buttonSlider();
	addingPoints();
	function buttonSlider()
	{
		if(hwNeedLinks)
		{  
		    $('#next').click(function(){animSlide("next");})
		    $('#prew').click(function(){animSlide("prew");})
		}
	}

    function addingPoints()
    {
    	var $adderSpan = '';
	    $('.slide').each(function(index)
	    {
	    	$adderSpan = $adderSpan + '<span class = "dot">' + index + '</span>';
	    });
	    $('<div id="navigation" class="navigation">' + $adderSpan +'</div>').appendTo('.slider_section');
	    $(".dot:first").addClass("active");
	    $('.dot').click(function()
	    	{
			    var goToNum = parseFloat($(this).text());
			    animSlide(goToNum);
	    	});
    }
    

	var pause = false;
    var rotator = function()
    	{
    		if (!pause)
    		{
    			slideTime = setTimeout(function(){animSlide('next')}, HW_TIME_OUT);
    		}
    	}
    $('.slider_section').hover(    
        function(){
        	clearTimeout(slideTime); 
        	pause = true;
        },
        function(){
        	pause = false; 
        	rotator();
        });
    rotator();
}