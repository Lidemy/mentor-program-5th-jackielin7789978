const request = require('request')

const API_ENDPOINT = 'https://api.twitch.tv/kraken/games/top'

const options = {
  url: API_ENDPOINT,
  headers: {
    'Client-ID': 'vvwxov0mlu750xfx45nuirctqnmwbr',
    Accept: 'application/vnd.twitchtv.v5+json'
  }
}

request(options, (err, res, body) => {
  if (err) {
    return console.log(err)
  }
  let data
  try {
    data = JSON.parse(body)
  } catch (err) {
    return console.log(err)
  }
  for (let i = 0; i < data.top.length; i++) {
    console.log(data.top[i].viewers, data.top[i].game.name)
  }
})
