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
  const m = Number(lines[0])

  const result = function(a, b, k) {
    if (a === b) return 'DRAW'
    switch (k) {
      case 1:
        if (a.length > b.length) return 'A'
        if (a.length < b.length) return 'B'
        if (a.length === b.length) {
          return a > b ? 'A' : 'B'
        }
        break
      case -1:
        if (a.length < b.length) return 'A'
        if (a.length > b.length) return 'B'
        if (a.length === b.length) {
          return a < b ? 'A' : 'B'
        }
        break
    }
  }

  for (let i = 1; i <= m; i++) {
    const a = lines[i].split(' ')[0]
    const b = lines[i].split(' ')[1]
    const k = Number(lines[i].split(' ')[2])
    console.log(result(a, b, k))
  }
}
