const templates = {
  commentTemplate(prefix) {
    return `
      <div class="${prefix}-container mt-4">
        <div class="row">
          <div class="col-md-8 offset-md-2">
          <div class="card">
            <div class="card-header">
              @nickname
            </div>
            <div class="card-body">
              <p class="card-text break">content</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    `
  },
  appTemplate(prefix) {
    return `
      <div class="${prefix}-row">
        <form id="comment-form" class="col-md-8 offset-md-2">
          <label for="textarea" class="form-label fs-2">Comments</label>
          <div class="form-floating">
            <input type="text" class="form-control" id="nickname" placeholder="您的暱稱">
            <label for="nickname">您的暱稱</label>
          </div>
          <div class="form-floating">
            <textarea class="form-control mt-2" id="textarea" style="height: 160px" placeholder="請輸入留言內容"></textarea>
            <label for="textarea">請輸入留言內容</label>
          </div>
          <button id="btn-submit" type="submit" class="btn btn-primary mb-3 mt-3">送出</button>
        </form>
      </div>
      <section class="cards mt-4 mb-4">
      </section>
      <div class="container mb-4">
        <div class="row">
          <div id="btn-more-container" class="col-auto offset-md-5">
          </div>
        </div>
      </div>
    `
  }
}

export default templates
