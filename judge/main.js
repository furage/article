(function() {
    'use strict';
    var webhook = 'https://discord.com/api/webhooks/898779969432465428/66lfK5X4fXeT61Z_WIa_-tKACigW7CCTg92GoF2pmgPDzWmm4LvraOJWHav1FEtPVTrg';
    var unique = 'judge1234567890';
    if(window[unique]) return;
    window[unique] = true;
    var h = $('<div>').appendTo($('.article-body').first());
    var h2 = $('<div>').appendTo(h).text('★☆★この記事の評価をよろしく★☆★');
    var flag = false;
    [
        '面白い',
        '及第点',
        '興味が無い話題',
        'つまんね',
        'くっさ',
        '死ね'
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
})();
