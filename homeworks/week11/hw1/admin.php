<?php
  session_start();
  require_once("conn.php");
  require_once("utils.php");

  // 取得已登入使用者的資料
  $username = null;
  $user = null;
  if (!empty($_SESSION['username'])) {
    $username = $_SESSION['username'];
    $user = get_user_from_username($username);
  }

  // 檢查權限：只有管理員看得到後台，其他使用者會被導回首頁
  if (!has_permission($user, 'view_page', null)) {
    header("Location: index.php");
    exit;
  }

  // 取得所有使用者資料
  $stmt = $conn->prepare("select * from jackie_users order by created_at desc");
  $result = $stmt->execute();
  if (!$result) {
    die($conn->error);
  }
  $result = $stmt->get_result();
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>後台 | 留言板</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header class="warning"><strong>注意！本站為練習用網站，因教學用途刻意忽略資安的實作，註冊時請勿使用任何真實的帳號或密碼。</strong>
  </header>
  <main>
    <div class="board">
      <div class="board__nav">
        <a href="index.php">回留言板</a>
      </div>
      <h1 class="board__title">後台 | 管理使用者</h1>
      <?php
        // 處理 errCode
        if (!empty($_GET['errCode'])) {
          $msg = '';
          $errCode = $_GET['errCode'];
          switch($errCode) {
            case '1':
              $msg = '管理員數量不能少於 1';
              break;
          }
          echo('<h3 class="error">' . $msg . '</h3>');
        }
      ?>
      <section class="users">
      <?php while ($row = $result->fetch_assoc()) { ?>
        <div class="users__card">
          <div class="users__card__avatar"></div>
          <div class="users__card__body">
            <div class="users__card__info">
              <span class="users__card__info__nickname"><?php echo escape($row['nickname']); ?> (@<?php echo escape($row['username']); ?>)</span>
              <a class="users__card__info__btn edit-btn">編輯身分</a>
            </div>
            <div class="users__card__about">
              <span class="users__card__about__role"><?php echo escape($row['role']); ?>
              </span>
              <span>註冊時間：<?php echo escape($row['created_at']); ?></span>
              <form method="POST" action="handle_role.php" class="users__card__about__dropdown-form hide">
                <select class="users__card__about__dropdown" name="role" id="role">
                  <option>管理員</option>
                  <option>一般使用者</option>
                  <option>停權使用者</option>
                </select>
                <input type="text" class="hide" name="id" value="<?php echo escape($row['id']); ?>">
                <button type="submit">確認變更</button>
              </form>
            </div>
          </div>
        </div>
      <?php } ?>
      </section>
    </div>
  </main>
  <script>
    // 點選「編輯身分」按鈕後顯示下拉選單
    const users = document.querySelector('.users')
    users.addEventListener('click', (e) => {
      if (e.target.classList.contains('edit-btn')) {
        const form = e.target.parentNode.nextSibling.nextSibling.lastChild.previousSibling;
        form.classList.toggle('hide');
      }
    })
  </script>
</body>
</html>
