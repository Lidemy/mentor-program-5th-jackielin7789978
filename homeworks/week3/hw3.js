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
  const n = Number(lines[0])
  const isPrime = function(num) {
    if (num === 1) return false
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false
    }
    return true
  }

  for (let i = 1; i <= n; i++) {
    console.log(isPrime(Number(lines[i])) ? 'Prime' : 'Composite')
  }
}
