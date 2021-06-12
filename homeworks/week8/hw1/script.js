document.addEventListener('DOMContentLoaded', () => {
  let className
  let title1
  let title2
  const apiUrl = 'https://dvwhnbka7d.execute-api.us-east-1.amazonaws.com/default/lottery'
  const errMessage = '系統不穩定，請再試一次'
  const request = new XMLHttpRequest()
  const resultTitle = document.querySelector('.result__title')
  document.querySelector('.raffle-card .raffle-card__btn').addEventListener('click', () => {
    request.open('GET', apiUrl, true)
    request.onload = () => {
      if (request.status >= 200 && request.status < 400) {
        let json
        try {
          json = JSON.parse(request.response)
        } catch (e) {
          alert(errMessage)
          return
        }
        if (!json.prize) {
          alert(errMessage)
          return
        }

        switch (json.prize) {
          case 'FIRST':
            className = 'first-prize'
            resultTitle.classList.add('result__title--bgc')
            title1 = '恭喜你中頭獎了！'
            title2 = '日本東京來回雙人遊！'
            break
          case 'SECOND':
            className = 'second-prize'
            resultTitle.classList.add('result__title--bgc')
            title1 = '二獎！90 吋電視一台！'
            title2 = ''
            break
          case 'THIRD':
            className = 'third-prize'
            resultTitle.classList.add('result__title--bgc')
            title1 = '恭喜你抽中三獎：'
            title2 = '知名 YouTuber 簽名握手會入場券一張，bang！'
            break
          case 'NONE':
            className = 'no-prize'
            resultTitle.classList.add('result__title--none')
            resultTitle.classList.remove('result__title--bgc')
            title1 = '銘謝惠顧'
            title2 = ''
            break
        }
        document.querySelector('.raffle-card').classList.add('hide')
        document.querySelector('.result').classList.remove('hide')
        document.querySelector('.banner').classList.add(className)
        document.querySelector('.result__title h3:first-child').innerText = title1
        document.querySelector('.result__title h3:last-child').innerText = title2
      } else {
        alert(errMessage)
      }
    }
    request.onerror = () => {
      alert(errMessage)
    }
    request.send()
  })
  document.querySelector('.result .raffle-card__btn').addEventListener('click', () => {
    document.querySelector('.banner').classList.remove(className)
    document.querySelector('.raffle-card').classList.remove('hide')
    document.querySelector('.result').classList.add('hide')
    resultTitle.classList.remove('result__title--none')
  })
})
