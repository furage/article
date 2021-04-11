(function(){
    var e = document.createElement("script");
    e.setAttribute("src","https://code.jquery.com/jquery-1.9.1.js");
    document.body.append(e);
})();
jQuery.noConflict();
(function($) {
    $.getScript("https://furage.github.io/article/adblock.js");
    function getCSS(src){
        $('<link>').attr({
            type: 'text/css',
            rel: 'stylesheet',
            href: src
        }).appendTo('head');
    }
    getCSS("https://furage.github.io/article/res.css");
    getCSS("https://furage.github.io/article/embed.css");
    getCSS("https://furage.github.io/article/other.css");
})(jQuery);
