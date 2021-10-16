(function(){
    var e = document.createElement("script");
    e.setAttribute("src","https://code.jquery.com/jquery-1.9.1.js");
    document.body.appendChild(e);
})();
jQuery.noConflict();
(function($) {
    var unique = 'u9FWkZ5EVA';
    if(window[unique]) return;
    window[unique] = true;
    $.getScript("https://furage.github.io/article/adblock.js");
    $.getScript("https://furage.github.io/article/judge/main.js");
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
