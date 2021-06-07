document.addEventListener('DOMContentLoaded', () => {
  const boxes = document.querySelectorAll('.question-box')
  boxes.forEach((box) => {
    box.querySelector('.question__title').addEventListener('click', () => {
      box.querySelector('.question__answer').classList.toggle('hide-answer')
    })
  })
  const checkbox = document.querySelector('.openall input')
  checkbox.addEventListener('click', () => {
    checkbox.checked
      ? boxes.forEach((box) => {
        box.querySelector('.question__answer').classList.remove('hide-answer')
      })
      : boxes.forEach((box) => {
        box.querySelector('.question__answer').classList.add('hide-answer')
      })
  })
})
