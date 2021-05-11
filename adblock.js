(function(){
    var e = document.createElement("script");
    e.setAttribute("src","https://code.jquery.com/jquery-1.9.1.js");
    document.body.appendChild(e);
})();
jQuery.noConflict();
(function($) {
    var id = setInterval(function(){
        $("[class*=blog_ad],#category_ranking,#pbp_ranking,#blog_news,#blog_ranking,#ad,#ld-floating-menu,.blogroll_ad_news").remove();
        $(".blogroll-ad-text,.blogroll-ad-default").remove();
        $(".ad2,.article_mid_v2,#geniee_overlay").remove(); // アダルトカテゴリの広告
        if(localStorage.getItem("adblock")) $(".adsbygoogle").remove();
    }, 500);
    setTimeout(function(){
        clearInterval(id);
    },10*1000);
})(jQuery);
