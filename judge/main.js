(function(){
    var e = document.createElement("script");
    e.setAttribute("src","https://code.jquery.com/jquery-1.9.1.js");
    document.body.appendChild(e);
})();
jQuery.noConflict();
(function($) {
    var webhook = 'https://discord.com/api/webhooks/898779969432465428/66lfK5X4fXeT61Z_WIa_-tKACigW7CCTg92GoF2pmgPDzWmm4LvraOJWHav1FEtPVTrg';
    var h = $('<div>').appendTo($('.article-body').first());
    var h2 = $('<div>').appendTo(h).text('★☆★この記事の評価をよろしく★☆★');
    var flag = false;
    [
        '面白い',
        '及第点',
        'つまんね',
        'くっさ',
        '死ね',
        '興味が無い話題',
        '前も見た',
        '対立煽りやめろ',
        'グロ画像貼るな'
    ].forEach(function(v, i){
        $('<button>').appendTo(h).text(v).on('click', function(){
            if(flag) return;
            flag = true;
            var s = '```\n記事名:' + $('title').text() + '\n評価:' + v + '```';
            $.post(webhook, {content: s});
            h2.text('記事の評価を受け取りました。「' + v + '」');
            h.find('button').remove();
        }).addClass('judgeButton' + i % 2);
    });
})(jQuery);
