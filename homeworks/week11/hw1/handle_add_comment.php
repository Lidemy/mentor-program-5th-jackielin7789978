<?php
  session_start();
  require_once("conn.php");
  require_once("utils.php");

  // 權限檢查：把未登入或被停權使用者導回首頁
  if (empty($_SESSION['username'] || is_suspended($user))) {
    header("Location: index.php");
    exit;
  }
  $username = $_SESSION['username'];
  $user = get_user_from_username($username);
  
  // 表單驗證
  if (empty($_POST['comment'])) {
    header("Location: index.php?errCode=1");
    die('錯誤');
  }

  // 通過權限檢查 → 把表單資料存進 db
  $comment = $_POST['comment'];
  $sql = "INSERT INTO jackie_comments(username, comment) VALUES(?, ?)";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param('ss', $username, $comment);
  $result = $stmt->execute();
  if (!$result) {
    die($conn->error);
  }

  header("Location: index.php");
  exit;
?>
