(function () {
  'use strict'

  var articleBody = document.getElementsByClassName('article-body')

  if (articleBody.length !== 1) {
    return
  }

  var WEBHOOK = 'https://discord.com/api/webhooks/898779969432465428/66lfK5X4fXeT61Z_WIa_-tKACigW7CCTg92GoF2pmgPDzWmm4LvraOJWHav1FEtPVTrg'
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

  var articlePollContain = articleBody[0].appendChild(document.createElement('div'))

  articlePollContain.classList.add('ArticlePollContain')

  var articlePollText = articlePollContain.appendChild(document.createElement('span'))

  articlePollText.textContent = '★☆★この記事の評価をよろしく★☆★'

  var articlePollButtonContain = articlePollContain.appendChild(document.createElement('div'))

  articlePollButtonContain.classList.add('ArticlePollButtonContain')

  var styleText = (
    '.ArticlePollContain { text-align: center; } ' +
    '.ArticlePollButtonContain__button { font-size: 1rem; font-weight: 700; line-height: 1.5; position: relative; display: inline-block; padding: 0.5rem 1rem; cursor: pointer; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; -webkit-transition: all 0.3s; transition: all 0.3s; text-align: center; vertical-align: middle; text-decoration: none; letter-spacing: 0.1em; color: #212529; border-radius: 0.5rem; } ' +
    '.ArticlePollButtonContain__button { text-decoration: none !important; color: #fff !important; } ' +
    '.ArticlePollButtonContain__button:hover { margin-top: 3px; } '
  )

  var onClick = function (e) {
    var firstButton

    while (firstButton = articlePollButtonContain.firstChild) {
      firstButton.removeEventListener('click', onClick)
      articlePollButtonContain.removeChild(firstButton)
    }

    var receivedPoll = e.target.textContent

    articlePollText.textContent = '評価を受け取りました。「' + receivedPoll + '」'

    var form = new FormData

    form.append(
      'content',
      '```\n【記事】' + document.getElementsByClassName('article-title')[0].textContent.trim() +
      '\n【タグ】' + Array.prototype.slice.call(document.getElementsByClassName('article-tags')[0].getElementsByTagName('a')).map(function (e) {
        return e.textContent
      }).join(', ') +
      '\n【評価】' + receivedPoll +
      '\n```'
    )

    var xhr = new XMLHttpRequest

    xhr.open('post', WEBHOOK)
    xhr.send(form)
  }

  for (var i = 0; i < LABEL_TEXTS.length; i++) {
    var pollButton = articlePollButtonContain.appendChild(document.createElement('a'))

    pollButton.textContent = LABEL_TEXTS[i]
    pollButton.classList.add('ArticlePollButtonContain__button')
    pollButton.addEventListener('click', onClick)

    var next = i + 1
    var baseSelector = '.ArticlePollButtonContain__button:nth-child(' + next + ')'
    var hue = 360 / LABEL_TEXTS.length * next
    var shadowColor = 'hsl(' + hue + ', 100%, 25%)'

    styleText += (
      baseSelector + ' { border-bottom: 5px solid ' + shadowColor + '; background-color: hsl(' + hue + ', 100%, 40%); } ' +
      baseSelector + ':hover { border-bottom: 2px solid ' + shadowColor + ' }'
    )
  }

  var style = document.head.appendChild(document.createElement('style'))

  style.textContent = styleText
})()
