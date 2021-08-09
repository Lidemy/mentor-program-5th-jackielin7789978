import $ from 'jquery'
import templates from './templates'

function escapeXSS(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;')
}

const utils = {
  appendComment(site, method, comment) {
    const { commentTemplate } = templates
    if (method === 'prepend') {
      $('.cards').prepend(commentTemplate(site).replace('nickname', escapeXSS(comment.nickname)).replace('content', escapeXSS(comment.content)))
    } else if (method === 'append') {
      $('.cards').append(commentTemplate(site).replace('nickname', escapeXSS(comment.nickname)).replace('content', escapeXSS(comment.content)))
    }
  }
}

export default utils
