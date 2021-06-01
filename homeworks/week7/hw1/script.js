document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.form').addEventListener('submit', (e) => {
    let hasError = false
    const values = []
    // 處理必填問題
    const elements = document.querySelectorAll('.Q')
    for (const element of elements) {
      // 簡答題
      if (element.classList.contains('shortAnswer')) {
        const input = element.firstChild.nextSibling
        if (!input.value) {
          element.nextSibling.nextSibling.classList.remove('hidden')
          hasError = true
        } else {
          element.nextSibling.nextSibling.classList.add('hidden')
          const temp = element.previousSibling.previousSibling
          const title = temp.previousSibling.previousSibling.innerText
          values.push(`${title}：${input.value}`)
        }
      }
      // 單選題
      if (element.classList.contains('radio')) {
        const radios = element.querySelectorAll('input')
        const hasCheck = [...radios].some((radio) => radio.checked)
        if (!hasCheck) {
          element.nextSibling.nextSibling.classList.remove('hidden')
          hasError = true
        } else {
          element.nextSibling.nextSibling.classList.add('hidden')
          const temp = element.previousSibling.previousSibling
          const title = temp.previousSibling.previousSibling.innerText
          const checked = [...radios].filter((radio) => radio.checked)
          const checkedValue = checked[0].nextSibling.nextSibling.innerText
          values.push(`${title}：${checkedValue}`)
        }
      }
    }
    // 處理最後一題
    const other = document.querySelector('textarea')
    console.log(other)
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
    if (hasError === true) {
      e.preventDefault()
    } else {
      alert(userInputs)
    }
  })
})
