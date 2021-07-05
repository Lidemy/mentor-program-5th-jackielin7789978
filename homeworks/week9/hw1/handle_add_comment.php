<?php
  session_start();
  require_once("conn.php");

  // 表單驗證
  if (empty($_POST['comment'])) {
    header("Location: index.php?errCode=1");
    die('錯誤');
  }

  // 從 session 取得 username，再到資料庫找出 nickname
  $username = $_SESSION['username'];
  $sql = sprintf(
    "SELECT nickname FROM jackie_users WHERE username='%s'",
    $username
  );
  $nickname = null;
  $result = $conn->query($sql);
  if (!$result) {
    die($conn->error);
  }
  $row = $result->fetch_assoc();
  $nickname = $row['nickname'];

  // 把表單資料丟進資料庫
  $comment = $_POST['comment'];
  $sql = sprintf(
    "INSERT INTO jackie_comments(nickname, comment) VALUES('%s','%s')",
    $nickname, $comment
  );
  $result = $conn->query($sql);
  if (!$result) {
    die($conn->error);
  }

  header("Location: index.php");
?>
