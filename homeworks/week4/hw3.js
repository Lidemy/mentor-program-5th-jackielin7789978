const request = require('request')

const arg = process.argv[2]
const API_ENDPOINT = 'https://restcountries.eu/rest/v2/name'

request(`${API_ENDPOINT}/${arg}?fields=name;capital;currencies;callingCodes`, (err, res, body) => {
  if (err) {
    console.log(err)
    return
  }
  const data = JSON.parse(body)
  if (data.status === 404) {
    return console.log('找不到國家資訊')
  }
  for (let i = 0; i < data.length; i++) {
    console.log('============')
    console.log(`國家：${data[i].name}`)
    console.log(`首都：${data[i].capital}`)
    console.log(`貨幣：${data[i].currencies[0].code}`)
    console.log(`國碼：${data[i].callingCodes}`)
  }
})
