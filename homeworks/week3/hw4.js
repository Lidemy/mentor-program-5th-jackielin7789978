const readline = require('readline')

const lines = []
const rl = readline.createInterface({
  input: process.stdin
})

rl.on('line', (line) => {
  lines.push(line)
})

rl.on('close', () => {
  solve(lines)
})

function solve(lines) {
  const string = lines[0]
  if (string === reverse(string)) {
    console.log('True')
  } else {
    console.log('False')
  }

  function reverse(str) {
    let temp = ''
    for (let i = 1; i <= str.length; i++) {
      temp += str[str.length - i]
    }
    return temp
  }
}
