document.addEventListener('DOMContentLoaded', () => {
  const boxes = document.querySelectorAll('.question-box')
  for (const box of boxes) {
    box.querySelector('.question__title').addEventListener('click', () => {
      box.querySelector('.question__answer').classList.toggle('hide-answer')
    })
  }
  const checkbox = document.querySelector('.openall input')
  checkbox.addEventListener('click', () => {
    if (checkbox.checked) {
      for (const box of boxes) {
        box.querySelector('.question__answer').classList.remove('hide-answer')
      }
    } else {
      for (const box of boxes) {
        box.querySelector('.question__answer').classList.add('hide-answer')
      }
    }
  })
})
