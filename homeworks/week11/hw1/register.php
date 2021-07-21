<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>註冊 | 留言板</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header class="warning"><strong>注意！本站為練習用網站，因教學用途刻意忽略資安的實作，註冊時請勿使用任何真實的帳號或密碼。</strong></header>
  <main>
    <div class="board">
      <div class="board__nav">
        <a href="index.php">回留言板</a>
        <a href="login.php">登入</a>
      </div>
      <h1 class="board__title">註冊會員</h1>
      <?php
        if (!empty($_GET['errCode'])) {
          $msg = '';
          $errCode = $_GET['errCode'];
          switch ($errCode) {
            case '2':
              $msg = '錯誤：資料不齊全';
              break;
            case '4':
              $msg = '錯誤：此帳號已被註冊';
              break;
          }
          echo('<h3 class="error">' . $msg . '</h3>');
        }
      ?>
      <form class="board__form" method="POST" action="handle_register.php">
        <div>帳號：<input name="username" type="text"></div>
        <div>密碼：<input name="password" type="password"></div>
        <div>暱稱：<input name="nickname" type="text"></div>
        <button class="board__submit-btn" type="submit">提交</button>
      </form>
    </div>
  </main>
</body>
</html>