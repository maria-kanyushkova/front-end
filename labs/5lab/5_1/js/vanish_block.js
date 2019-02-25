function ready()
{   
    var DEFAULT_WIDTH_TABLET = 1210;
    var DEFAULT_WIDTH_PHONE = 768;
    var BLOCK = "block";
    var NONE = "none";

    /*if ( window.screen.width < DEFAULT_WIDTH_TABLET ) не знаю почему, но не работает это условие
    {*/
        var navBar = document.getElementById("navBar"); 
        var hamburger = document.getElementById("hamburger"); 
        var searchForm = document.getElementById("searchForm");

        hamburger.onclick = function() 
        {
            if (navBar.style.display == BLOCK) 
            {
                navBar.style.display = NONE;
                searchForm.style.display = BLOCK;
            }
            else
            {
                navBar.style.display = BLOCK;
                searchForm.style.display = NONE;
            }
        }
    /*}*/

    /*if ( window.screen.width < DEFAULT_WIDTH_PHONE )
    {*/
        var linkContainer = document.getElementById("linkContainer"); 
        var linkContainerMobile = document.getElementById("linkContainerMobile"); 

        linkContainer.onclick = function()  
        {
            linkContainer.style.display = NONE;
            linkContainerMobile.style.display = BLOCK;
        }

        linkContainerMobile.onclick = function() 
        {
            linkContainer.style.display = BLOCK;
            linkContainerMobile.style.display = NONE;
        }
    /*}*/
}

document.addEventListener("DOMContentLoaded", ready);