function ready()
{ 
    var DEFAULT_CHANGE_OPACITY = 0.05;
    var START_VALUE_OPACITY = 0;
    var END_VALUE_OPACITY = 1;
    var VALUE_TIMER = 10;   
    var BLOCK = "block";
    var NONE = "none";

    var contactUs = document.getElementById("contactUs"); 
    var modalSection = document.getElementById("modalSection"); 
    var modalWindowClose = document.getElementById("modalWindowClose");
    var timer = null;


    contactUs.onclick = function() 
    {
        var opacityOpen = START_VALUE_OPACITY;
        function page_open() 
        {       
            modalSection.style.display = BLOCK;                  
            if (opacityOpen <= END_VALUE_OPACITY)
            {
                opacityOpen = opacityOpen + DEFAULT_CHANGE_OPACITY;
                modalSection.style.opacity = opacityOpen; 
                timer = setTimeout(function(){page_open()}, VALUE_TIMER);
            }
        }
        page_open();
    }

    modalWindowClose.onclick = function()
    {
        var opacityClose = END_VALUE_OPACITY;
        function page_close() 
        {
            if (opacityClose >= DEFAULT_CHANGE_OPACITY) /*ставлю такое, чтобы обратился opacity в ноль а не в бесконечный минус*/
            {
                opacityClose = opacityClose - DEFAULT_CHANGE_OPACITY;
                modalSection.style.opacity = opacityClose;
                timer = setTimeout(function(){page_close()}, VALUE_TIMER);
            }
            else
            {
                modalSection.style.display = NONE;
            }
        }
        page_close();
    }
}

document.addEventListener("DOMContentLoaded", ready);