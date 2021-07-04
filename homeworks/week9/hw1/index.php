<?php
  session_start();
  require_once("conn.php");

  $sql = sprintf(
    "SELECT * FROM jackie_comments ORDER BY id DESC"
  );
  $result = $conn->query($sql);
  if (!$result) {
    die($conn->error);
  }
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>留言板</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header class="warning"><strong>注意！本站為練習用網站，因教學用途刻意忽略資安的實作，註冊時請勿使用任何真實的帳號或密碼。</strong></header>
  <main>
    <div class="board">
      <?php if (!empty($_SESSION['username'])) { ?>
        <div class="board__nav">
          <a href="logout.php">登出</a>
        </div>
      <?php }else { ?>
        <div class="board__nav">
          <a href="register.php">註冊</a>
          <a href="login.php">登入</a>
        </div>
      <?php } ?>
      <h1 class="board__title">Comments</h1>
      <?php
        if (!empty($_GET['errCode'])) {
          $msg = '';
          if ($_GET['errCode'] == '1') {
            $msg = '錯誤：請輸入留言內容';
          }
          echo('<h3 class="error">' . $msg . '</h3>');
        }
      ?>
      <?php if (!empty($_SESSION['username'])) { ?>
        <h3>你好！<?php echo($_SESSION['username']); ?></h3>
        <form class="board__form" method="POST" action="handle_add_comment.php">
          <textarea name="comment" rows="5"></textarea>
          <button class="board__submit-btn" type="submit">提交</button>
        </form>
      <?php }else { ?>
        <h3>如要留言請先登入</h3>
      <?php } ?>
      <?php
        while ($row = $result->fetch_assoc()) {
      ?>
        <div class="card">
          <div class="card__avatar"></div>
          <div class="card__body">
            <div class="card__info">
              <span class="card__info__nickname"><?php echo $row['nickname']; ?></span>
              <span class="card__info__time"><?php echo $row['created_at']; ?></span>
            </div>
            <div class="card__comment"><?php echo $row['comment']; ?></div>
          </div>
        </div>
      <?php
        }
      ?>
    </div>
  </main>
</body>
</html>
