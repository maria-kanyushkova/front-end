function ready()
{
    var START_COORDINATE = 0;
    var DEFAULT_VALUE_COORDINATE = 20;
    var VALUE_TIMER = 10;

    var aboutUs = document.getElementById("aboutUs"); 
    var latestWorks = document.getElementById("latestWorks"); 
    var getInTouch = document.getElementById("getInTouch"); 
    var aboutUsLink = document.getElementById("aboutUsLink"); 
    var latestWorksLink = document.getElementById("latestWorksLink"); 
    var getInTouchLink = document.getElementById("getInTouchLink"); 
    
    var scrolled = window.pageYOffset;;
    var timer = null;
    var coordinate;

    function scroll(coordinate, scrolled) /*скроллинг до coords*/
    { 
        if (scrolled < coordinate) 
        {
            window.scrollTo(START_COORDINATE, scrolled);
            scrolled = scrolled + DEFAULT_VALUE_COORDINATE;
            timer = setTimeout(function(){scroll(coordinate, scrolled)}, VALUE_TIMER);
        } 
        else
        {
            clearTimeout(timer);
            window.scrollTo(START_COORDINATE, coordinate);
        }
    }

    aboutUs.onclick = function()
    {
        coordinate = aboutUsLink.getBoundingClientRect().top;
        scroll(coordinate, scrolled);
    }

    latestWorks.onclick = function() 
    {
        coordinate = latestWorksLink.getBoundingClientRect().top;
        scroll(coordinate, scrolled);
    }

    getInTouch.onclick = function()
    {
        coordinate = getInTouchLink.getBoundingClientRect().top;
        scroll(coordinate, scrolled);
    }
}

document.addEventListener("DOMContentLoaded", ready);