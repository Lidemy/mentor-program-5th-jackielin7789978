<?php
  session_start();
  require_once("conn.php");

  //表單驗證
  if (
    empty($_POST['username']) ||
    empty($_POST['password'])
  ) {
    header("Location: login.php?errCode=2");
    die;
  }

  //到資料庫比對登入資訊
  $username = $_POST['username'];
  $password = $_POST['password'];
  $sql = sprintf(
    "SELECT * FROM jackie_users WHERE `username`='%s' AND `password`='%s'",
    $username, $password
  );
  $result = $conn->query($sql);
  if (!$result) {
    die($conn->error);
  }
  
  $row = $result->fetch_assoc();
  if (!$row) {
    header("Location: login.php?errCode=3");
    die;
  }

  $_SESSION['username'] = $username;
  header("Location: index.php");
?>
