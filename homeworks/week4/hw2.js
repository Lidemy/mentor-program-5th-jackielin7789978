const request = require('request')

const args = process.argv
const API_ENDPOINT = 'https://lidemy-book-store.herokuapp.com'

const func = args[2]
const param = args[3]

switch (func) {
  case 'list':
    listBook()
    break
  case 'read':
    readBook(param)
    break
  case 'delete':
    deleteBook(param)
    break
  case 'create':
    createBook(param)
    break
  case 'update':
    updateBook(param, args[4])
    break
  default:
    console.log('可用參數：list、read,、delete,、create 和 update')
}

function listBook() {
  request(`${API_ENDPOINT}/books?_limit=20`, (err, res, body) => {
    if (err) {
      return console.log('抓取失敗', err)
    }
    let books
    try {
      books = JSON.parse(body)
    } catch (err) {
      console.log(err)
      return
    }

    for (let i = 0; i < books.length; i++) {
      console.log(`${books[i].id} ${books[i].name}`)
    }
  })
}

function readBook(id) {
  request(`${API_ENDPOINT}/books/${id}`, (err, res, body) => {
    if (err) {
      console.log('讀取失敗', err)
    }
    let book
    try {
      book = JSON.parse(body)
    } catch (err) {
      console.log(err)
      return
    }
    console.log(book)
  })
}

function deleteBook(id) {
  request.delete(`${API_ENDPOINT}/books/${id}`, (err) => {
    if (err) {
      return console.log('刪除失敗', err)
    }
    console.log('刪除成功')
  })
}

function createBook(bookname) {
  request.post({
    url: `${API_ENDPOINT}/books`,
    form: {
      bookname
    }
  },
  (err) => {
    if (err) {
      return console.log('新增失敗', err)
    }
    console.log('新增成功')
  })
}

function updateBook(id, bookname) {
  request.patch({
    url: `${API_ENDPOINT}/books/${id}`,
    form: {
      bookname
    }
  },
  (err) => {
    if (err) {
      return console.log('變更失敗', err)
    }
    console.log('變更成功')
  })
}
