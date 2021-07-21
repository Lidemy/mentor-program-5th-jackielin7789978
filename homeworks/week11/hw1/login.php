<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>登入 | 留言板</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header class="warning"><strong>注意！本站為練習用網站，因教學用途刻意忽略資安的實作，註冊時請勿使用任何真實的帳號或密碼。</strong></header>
  <main>
    <div class="board">
      <div class="board__nav">
        <a href="index.php">回留言板</a>
        <a href="register.php">註冊</a>
      </div>
      <h1 class="board__title">登入會員</h1>
      <?php
        if (!empty($_GET['errCode'])) {
          $msg = '';
          $errCode = $_GET['errCode'];
          switch ($errCode) {
            case '2':
              $msg = '錯誤：資料不齊全';
              break;
            case '3':
              $msg = '錯誤：帳號或密碼有誤';
              break;
          }
          echo('<h3 class="error">' . $msg . '</h3>');
        }
      ?>
      <form class="board__form" method="POST" action="handle_login.php">
        <div>帳號：<input name="username" type="text"></div>
        <div>密碼：<input name="password" type="password"></div>
        <button class="board__submit-btn" type="submit">提交</button>
      </form>
    </div>
  </main>
</body>
</html>
