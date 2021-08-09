document.addEventListener('DOMContentLoaded', () => {
  const BASE_URL = 'https://api.twitch.tv/kraken'
  const CLIENT_ID = 'vvwxov0mlu750xfx45nuirctqnmwbr'

  // 先抓到前五個遊戲，把遊戲名稱 append 到選單上並渲染第一個遊戲的實況
  getGames(`${BASE_URL}/games/top?limit=5`, CLIENT_ID)

  // 點擊遊戲名稱即可呼叫 changeGame 改變實況頁面
  document.querySelector('.header__top-games').addEventListener('click', (e) => {
    const target = e.target.innerText
    const currentGame = document.querySelector('h1').innerText
    if (target !== currentGame) {
      changeGame(target)
    }
  })
  // 點擊「載入更多」即可呼叫 changeGame 改變實況頁面
  let isClick = true
  document.querySelector('.more-btn').addEventListener('click', () => {
    if (isClick) {
      isClick = false
      const gamename = document.querySelector('h1').innerText
      const currentStreamsNum = document.querySelectorAll('.stream').length
      if (currentStreamsNum > 900) {
        document.querySelector('.more-btn').classList.add('hide')
      } else {
        getStreams(`${BASE_URL}/streams/?game=${gamename}&limit=20&offset=${currentStreamsNum}`, CLIENT_ID)
      }
      setTimeout(() => {
        isClick = true
      }, 1000)
    }
  })
  // funciton 區
  async function sendFetch(url, clientID) {
    const response = await fetch(url, {
      method: 'GET',
      headers: new Headers({
        'Client-ID': clientID,
        Accept: 'application/vnd.twitchtv.v5+json'
      })
    })
    const data = await response.json()
    return data
  }
  async function getGames(url, clientID) {
    try {
      const result = await sendFetch(url, clientID)
      const games = result.top
      for (const game of games) {
        const li = document.createElement('li')
        li.innerText = game.game.name
        document.querySelector('.header__top-games').append(li)
      }
      changeGame(games[0].game.name)
    } catch (err) {
      console.log(err)
    }
  }
  async function getStreams(url, clientID) {
    try {
      const result = await sendFetch(url, clientID)
      const { streams } = result
      for (const stream of streams) {
        appendStream(stream)
      }
    } catch (err) {
      console.log(err)
    }
  }
  function appendStream(stream) {
    const a = document.createElement('a')
    const { url, logo, status, display_name: displayName } = stream.channel
    const { preview } = stream
    a.innerHTML = `
      <a href="${url}" target="_blank">
        <div class="stream">
          <img src="${preview.medium}" alt="stream preview">
          <div class="stream__data">
            <div class="stream__data__avatar">
              <img src="${logo}" alt="channel logo">
            </div>
            <div class="stream__data__info">
              <div class="stream__data__info__status">${status}</div>
              <div class="stream__data__info__channel">${displayName}}</div>
            </div>
          </div>
        </div>
      </a>
    `
    document.querySelector('.streams').append(a)
  }
  function changeGame(gamename) {
    document.querySelector('h1').innerText = gamename
    document.querySelector('.streams').innerHTML = ''
    getStreams(`${BASE_URL}/streams/?game=${gamename}&limit=20`, CLIENT_ID)
  }
})
