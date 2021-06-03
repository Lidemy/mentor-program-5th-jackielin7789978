function capitalizeFirst(str) {
  let result = str[0].toUpperCase()
  for (let i = 1; i < str.length; i++) {
    result += str[i]
  }
  return result
}
document.addEventListener('DOMContentLoaded', () => {
  // 新增項目
  const form = document.querySelector('.app__input-box')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const div = document.createElement('div')
    const input = form.querySelector('input')
    if (!input.value) return
    const newInput = capitalizeFirst(input.value)
    div.innerHTML = `
    <div class="app__todo">
      <div class="wrapper">
        <div>
          <div class="pretty p-default p-round p-thick">
            <input class="custom-checkbox" type="checkbox" />
            <div class="state">
              <label></label>
            </div>
          </div>
        </div>
        <div class="app__todo__taskname"></div>
        <form class="edit-form">
          <input class="app__todo__taskname--edit hide" type="text">
        </form>
      </div>
      <button class="btn-remove">Remove</button>
    </div>
`
    document.querySelector('.app__todos').append(div)
    const tasknames = document.querySelectorAll('.app__todo__taskname')
    for (const taskname of tasknames) {
      if (!taskname.innerText) {
        taskname.innerText = newInput
      }
    }
    input.value = ''
  })
  // 加上刪除和勾選的功能
  document.querySelector('.app__todos').addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-remove')) {
      e.target.parentNode.remove()
    }
    if (e.target.classList.contains('custom-checkbox')) {
      if (e.target.checked) {
        e.target.closest('.app__todo').classList.add('checked')
      } else {
        e.target.closest('.app__todo').classList.remove('checked')
      }
    }
  })
  // 加上編輯功能
  document.querySelector('.app__todos').addEventListener('dblclick', (e) => {
    if (e.target.classList.contains('app__todo__taskname')) {
      const taskname = e.target
      const inputEdit = e.target.nextSibling.nextSibling.firstChild.nextSibling
      inputEdit.setAttribute('value', `${capitalizeFirst(taskname.innerText)}`)
      taskname.classList.add('hide')
      inputEdit.classList.remove('hide')
      inputEdit.parentNode.addEventListener('submit', (e) => {
        e.preventDefault()
        taskname.innerText = capitalizeFirst(inputEdit.value)
        taskname.classList.remove('hide')
        inputEdit.classList.add('hide')
      })
    }
  })
})
