function toggleWarning(element, boolean) {
  if (boolean === true) {
    element.querySelector('.warning').classList.remove('hide')
  } else {
    element.querySelector('.warning').classList.add('hide')
  }
}
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.form').addEventListener('submit', (e) => {
    e.preventDefault()
    let hasError = false
    const values = []
    // 處理必填問題
    const requiredQuestions = document.querySelectorAll('.required')
    for (const requiredQuestion of requiredQuestions) {
      // 簡答題
      if (requiredQuestion.classList.contains('short-answer')) {
        const input = requiredQuestion.querySelector('input')
        if (!input.value) {
          toggleWarning(requiredQuestion, true)
          hasError = true
        } else {
          toggleWarning(requiredQuestion, false)
          values.push(`${requiredQuestion.querySelector('.question__title').innerText}：${input.value}`)
        }
      }
      // 單選題
      if (requiredQuestion.classList.contains('radio')) {
        const checked = requiredQuestion.querySelector('input[type=radio]:checked')
        if (!checked) {
          toggleWarning(requiredQuestion, true)
          hasError = true
        } else {
          toggleWarning(requiredQuestion, false)
          values.push(`${requiredQuestion.querySelector('.question__title').innerText}：${checked.parentNode.innerText}`)
        }
      }
    }
    // 處理最後一題
    const other = document.querySelector('textarea')
    if (other.value) {
      const otherTitle = document.querySelector('label[for=textarea]').innerText
      values.push(`${otherTitle}：${other.value}`)
    }

    let userInputs = ''
    for (const data of values) {
      userInputs += `
      ${data}
      `
    }
    hasError ? e.preventDefault() : alert(userInputs)
  })
})
