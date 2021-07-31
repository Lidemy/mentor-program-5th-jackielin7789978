import $ from 'jquery'
import utils from './utils'

const apiFunctions = {
  getComments(apiURL, site, lastID, cb) {
    let URL = `${apiURL}/api_comments.php?site=${site}`
    if (lastID) {
      URL += `&lastID=${lastID}`
    }
    $.ajax({
      type: 'GET',
      url: URL,
      success: (resp) => {
        const { comments } = resp
        const { total } = resp
        for (let i = 0; i < comments.length; i++) {
          utils.appendComment(site, 'append', comments[i])
        }
        cb(comments, total)
      },
      error: (resp) => {
        console.log(resp.msg)
      }
    })
  },
  addComment(apiURL, commentData, cb) {
    $.ajax({
      type: 'POST',
      url: `${apiURL}/api_add_comment.php`,
      data: commentData
    }).done((data) => {
      if (!data.ok) {
        alert('暱稱和留言不得留空')
        return cb(data.ok)
      }
    })
  }
}
export default apiFunctions
