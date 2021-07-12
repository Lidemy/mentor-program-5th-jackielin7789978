<script>
// 點選「編輯暱稱按鈕」就顯示編輯表單
document.addEventListener('DOMContentLoaded', (e) => {
  var btn = document.querySelector('.update-nickname');
  btn.addEventListener('click', function() {
    var form = document.querySelector('.board__update-nickname-form');
    form.classList.toggle('hide');
  })
})
</script>
