<?php
  session_start();
  require_once("conn.php");

  //表單驗證
  if (
    empty($_POST['username']) ||
    empty($_POST['password']) ||
    empty($_POST['nickname'])
  ) {
    header("Location: register.php?errCode=2");
    die('錯誤');
  }

  //檢查 Username 是否重複
  $username = $_POST['username'];
  $sql = sprintf(
    "SELECT username FROM jackie_users WHERE username='%s'",
    $username
  );
  $result = $conn->query($sql);
  if ($result->num_rows) {
    header("Location: register.php?errCode=4");
    die("錯誤");
  }

  //把會員資料存進資料庫
  $password = $_POST['password'];
  $nickname = $_POST['nickname'];
  $sql = sprintf(
    "INSERT INTO jackie_users(username, password, nickname) VALUES('%s', '%s', '%s')",
    $username, $password, $nickname
  );
  $result = $conn->query($sql);
  if (!$result) {
    die($conn->error);
  }

  $_SESSION['username'] = $username;
  header("Location: index.php");
?>
