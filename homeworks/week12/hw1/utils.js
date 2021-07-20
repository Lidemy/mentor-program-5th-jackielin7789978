/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
function getComments(site, lastID, cb) {
  let URL = `http://mentor-program.co/mtr04group1/jackie/week12/hw1/api_comments.php?site=${site}`
  if (lastID) {
    URL += `&lastID=${lastID}`
  }
  $.ajax({
    type: 'GET',
    url: URL,
    success: (resp) => {
      const { comments } = resp
      for (const comment of comments) {
        $('.cards').append(`
          <div class="container mt-4">
            <div class="row">
              <div class="col-md-8 offset-md-2">
              <div class="card">
                <div class="card-header">
                  @${escapeXSS(comment.nickname)}
                </div>
                <div class="card-body">
                  <p class="card-text break">${escapeXSS(comment.content)}</p>
                </div>
              </div>
              </div>
            </div>
          </div>
        `)
      }
      cb(comments)
    },
    error: (resp) => {
      console.log(resp.msg)
    }
  })
}

function getTotalComments(site, cb) {
  $.ajax({
    type: 'GET',
    url: `http://mentor-program.co/mtr04group1/jackie/week12/hw1/api_total_comments.php?site=${site}`,
    success(resp) {
      cb(resp)
    },
    error() {
      alert('系統不穩定')
    }
  })
}

function addComment(commentData) {
  $.ajax({
    type: 'POST',
    url: 'http://mentor-program.co/mtr04group1/jackie/week12/hw1/api_add_comment.php',
    data: commentData
  }).done((data) => {
    if (!data.ok) {
      alert('暱稱和留言不得留空')
      return
    }
    $('#nickname').val('')
    $('#textarea').val('')
    $('.cards').prepend(`
      <div class="container mt-4">
        <div class="row">
          <div class="col-md-8 offset-md-2">
          <div class="card">
            <div class="card-header">
              @${escapeXSS(commentData.nickname)}
            </div>
            <div class="card-body">
              <p class="card-text break">${escapeXSS(commentData.content)}</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    `)
  })
}

function escapeXSS(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;')
}
