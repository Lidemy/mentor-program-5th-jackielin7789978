/* eslint-disable import/prefer-default-export */
import 'bootstrap'
import './style.sass'
import $ from 'jquery'
import apiFunctions from './api'
import templates from './templates'

let apiURL = ''
let site = ''
let containerSelector = ''
let lastID = null

export function init(options) {
  apiURL = options.apiURL
  site = options.site
  containerSelector = $(options.containerSelector)
  containerSelector.append(templates.appTemplate(site))

  // call 取得留言 API
  apiFunctions.getComments(apiURL, site, null, (comments, total) => {
    // 設定起始頁數 & 取得所有留言數量
    let page = 1
    const commentsPerPage = 5
    const totalCommentsNum = total
    let totalPages = null
    if (totalCommentsNum % commentsPerPage === 0) {
      totalPages = Math.floor(totalCommentsNum / commentsPerPage)
    } else {
      totalPages = Math.floor(totalCommentsNum / commentsPerPage) + 1
    }
    if (totalCommentsNum > 5) {
      $('#btn-more-container').append('<button id="btn-more" type="button" class="btn btn-outline-secondary btn-lg">載入更多</button>')
    }
    lastID = comments[comments.length - 1].id
    $('#btn-more').on('click', () => {
      page++
      if (page === totalPages) {
        apiFunctions.getComments(apiURL, site, lastID, (comments) => {
          lastID = comments[comments.length - 1].id
        })
        $('#btn-more').hide()
      } else {
        apiFunctions.getComments(apiURL, site, lastID, (comments) => {
          lastID = comments[comments.length - 1].id
        })
      }
    })
  })
  // 表單送出後 call 新增留言 API
  $('#comment-form').on('submit', (e) => {
    e.preventDefault()
    const nickname = $('#nickname').val()
    const content = $('#textarea').val()
    const commentData = {
      nickname,
      content,
      site
    }
    apiFunctions.addComment(apiURL, site, commentData)
    $('#nickname').val('')
    $('#textarea').val('')
  })
}
