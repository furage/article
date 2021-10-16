(function(){
    var e = document.createElement("script");
    e.setAttribute("src","https://code.jquery.com/jquery-1.9.1.js");
    document.body.appendChild(e);
})();
jQuery.noConflict();
(function($) {
    'use strict'
    var WEBHOOK = 'https://discord.com/api/webhooks/898779969432465428/66lfK5X4fXeT61Z_WIa_-tKACigW7CCTg92GoF2pmgPDzWmm4LvraOJWHav1FEtPVTrg'
    var PARENT_NODE_SELECTOR = '.article-body'
    if($(PARENT_NODE_SELECTOR).length !== 1) return;
    var LABEL_TEXTS = [
        '面白い',
        '及第点',
        'つまんね',
        'くっさ',
        '死ね',
        '興味が無い話題',
        '前も見た',
        '対立煽りやめろ',
        'グロ画像貼るな'
    ]

    var articleVoteContain = (
        $('<div>')
        .addClass('ArticleVoteContain')
        .appendTo(PARENT_NODE_SELECTOR)
    )
    var articleVoteText = (
        $('<span>')
        .text('★☆★この記事の評価をよろしく★☆★')
        .addClass('ArticleVoteContain__text')
        .appendTo(articleVoteContain)
    )
    var articleVoteButtonContain = (
        $('<div>')
        .addClass('ArticleVoteButtonContain')
        .appendTo(articleVoteContain)
    )

    var styleText = `
    .ArticleVoteContain {
      text-align: center;
    }

    .ArticleVoteButtonContain__button {
      font-size: 1rem;
      font-weight: 700;
      line-height: 1.5;
      position: relative;
      display: inline-block;
      padding: 0.5rem 1rem;
      cursor: pointer;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      -webkit-transition: all 0.3s;
      transition: all 0.3s;
      text-align: center;
      vertical-align: middle;
      text-decoration: none;
      letter-spacing: 0.1em;
      color: #212529;
      border-radius: 0.5rem;
    }

    .ArticleVoteButtonContain__button {
      text-decoration: none !important;
      color: #fff !important;
    }

    .ArticleVoteButtonContain__button:hover {
      margin-top: 3px;
    }
  `

    var onClick = function (e) {
        articleVoteButtonContain
            .find('a')
            .off('click', onClick)
            .remove()

        var voteResult = $(e.target).text()

        articleVoteText.text('評価を受け取りました。「' + voteResult + '」')
        $.post(WEBHOOK, {
            content: (
                '```\n【記事】' + $('.article-title').text().trim() +
                '\n【タグ】' + Array.prototype.slice.call($('.article-tags').find('dd a')).map(function(e){
                    return e.textContent
                }).join(', ') +
                '\n【評価】' + voteResult +
                '\n```'
            )
        })
    }

    for (var i = 0; i < LABEL_TEXTS.length; i++) {
        $('<a>')
            .text(LABEL_TEXTS[i])
            .addClass('ArticleVoteButtonContain__button')
            .appendTo(articleVoteButtonContain)
            .on('click', onClick)

        var next = i + 1
        var baseSelector = '.ArticleVoteButtonContain__button:nth-child(' + next + ')'
        var hue = 360 / LABEL_TEXTS.length * next
        var buttonShadow = 'hsl(' + hue + ', 100%, 25%)'

        styleText += baseSelector + ' { border-bottom: 5px solid ' + buttonShadow + '; background-color: hsl(' + hue + ', 100%, 40%); }'
        styleText += baseSelector + ':hover { border-bottom: 2px solid ' + buttonShadow + ' }'
    }

    $('<style>')
        .text(styleText)
        .appendTo('head')
})(jQuery)
