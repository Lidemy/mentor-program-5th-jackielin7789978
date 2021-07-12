<?php
  session_start();
  require_once("conn.php");
  require_once("utils.php");

  // 權限檢查：擋掉沒登入的使用者
  if (empty($_SESSION['username'])) {
    header("Location: index.php");
    exit;
  }
  $username = $_SESSION['username'];
  $user = get_user_from_username($username);

  // 到 db 取得要編輯的留言內容
  $sql = "SELECT comment FROM jackie_comments WHERE id = ?";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param('i', $_GET['id']);
  $result = $stmt->execute();
  if (!$result) {
    die($conn->error);
  }

  $result = $stmt->get_result();
  $row = $result->fetch_assoc();
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
      <h1 class="board__title">編輯留言</h1>
      <?php
        if (!empty($_GET['errCode'])) {
          $msg = '';
          $errCode = $_GET['errCode'];
          switch($errCode) {
            case '1':
              $msg = '錯誤：請輸入留言內容';
              break;
          }
          echo('<h3 class="error">' . $msg . '</h3>');
        }
      ?>
      <form class="board__form" method="POST" action="handle_update_comment.php">
        <textarea name="comment" rows="5"><?php echo escape($row['comment']) ?></textarea>
        <input class="hide" type="text" name="id" value="<?php echo escape($_GET['id']); ?>">
        <input class="hide" type="text" name="page" value="<?php echo escape($_GET['page']); ?>">
        <button class="board__submit-btn" type="submit">提交</button>
      </form>
    </div>
  </main>
</body>
</html>
