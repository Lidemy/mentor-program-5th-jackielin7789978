document.addEventListener('DOMContentLoaded', () => {
  const BASE_URL = 'https://api.twitch.tv/kraken'
  const CLIENT_ID = 'vvwxov0mlu750xfx45nuirctqnmwbr'
  const streamTemplate = `
    <a href="$URL" target="_blank">
      <div class="stream">
        <img src="$preview" alt="stream preview">
        <div class="stream__data">
          <div class="stream__data__avatar">
            <img src="$avatar" alt="channel logo">
          </div>
          <div class="stream__data__info">
            <div class="stream__data__info__status">$status</div>
            <div class="stream__data__info__channel">$name</div>
          </div>
        </div>
      </div>
    </a>`
  let offset = 0
  // 先抓到前五個遊戲，然後把遊戲名稱 append 到選單上，接著呼叫 changeGame 函示載入第一個遊戲的實況頁面
  getGames((games) => {
    for (const game of games) {
      const li = document.createElement('li')
      li.innerText = game.game.name
      document.querySelector('.header__top-games').append(li)
    }
    changeGame(games[0].game.name)
  })
  // 點擊遊戲名稱即可呼叫 changeGame 改變實況頁面
  document.querySelector('.header__top-games').addEventListener('click', (e) => {
    offset = 0
    changeGame(e.target.innerText)
  })
  // 點擊「載入更多」即可呼叫 changeGame 改變實況頁面
  document.querySelector('.more-btn').addEventListener('click', () => {
    const gamename = document.querySelector('h1').innerText
    offset += 20
    // Twitch API 的 offset 參數上限值為 900，超過之後就隱藏按鈕
    if (offset > 900) {
      document.querySelector('.more-btn').classList.add('hide')
    } else {
      getStreams(gamename, `limit=20&offset=${offset}`, (streams) => {
        for (const stream of streams) {
          appendStream(stream)
        }
      })
    }
  })
  function getGames(callback) {
    const request = new XMLHttpRequest()
    request.open('GET', `${BASE_URL}/games/top?limit=5`, true)
    request.setRequestHeader('Client-ID', CLIENT_ID)
    request.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json')
    request.onload = () => {
      if (request.status >= 200 && request.status < 400) {
        const games = JSON.parse(request.response).top
        callback(games)
      }
    }
    request.onerror = () => {
      console.log('error')
    }
    request.send()
  }
  function getStreams(gamename, otherParams, callback) {
    const request = new XMLHttpRequest()
    request.open('GET', `${BASE_URL}/streams/?game=${gamename}&${otherParams}`, true)
    request.setRequestHeader('Client-ID', 'vvwxov0mlu750xfx45nuirctqnmwbr')
    request.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json')
    request.onload = () => {
      if (request.status >= 200 && request.status < 400) {
        callback(JSON.parse(request.response).streams)
      } else {
        console.log('error')
      }
    }
    request.onerror = () => console.log('error')
    request.send()
  }
  function appendStream(stream) {
    const preview = stream.preview.template
    const preivewSize = preview.replace('{width}', '360').replace('{height}', '220')
    const a = document.createElement('a')
    a.innerHTML = streamTemplate
      .replace('$URL', stream.channel.url)
      .replace('$preview', preivewSize)
      .replace('$avatar', stream.channel.logo)
      .replace('$status', stream.channel.status)
      .replace('$name', stream.channel.display_name)
    document.querySelector('.streams').append(a)
  }
  function changeGame(gamename) {
    document.querySelector('h1').innerText = gamename
    document.querySelector('.streams').innerHTML = ''
    getStreams(gamename, 'limit=20', (streams) => {
      for (const stream of streams) {
        appendStream(stream)
      }
    })
  }
})
