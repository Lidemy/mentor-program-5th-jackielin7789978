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
  const n = Number(lines[0].split(' ')[0])
  const m = Number(lines[0].split(' ')[1])

  for (let num = n; num <= m; num++) {
    const digits = String(num).length
    const arr = String(num).split('')

    let powerSum = 0
    for (let num = 0; num < digits; num++) {
      powerSum += Number(arr[num]) ** digits
    }

    if (powerSum === num) {
      console.log(num)
    }
  }
}
