<?php
  session_start();
  require_once("conn.php");
  require_once("utils.php");
  
  // 權限檢查：擋掉沒登入的使用者
  if (empty($_SESSION['username'])) {
    header("Location: index.php");
    exit;
  }

  // 表單驗證
  if (empty($_POST['nickname'])) {
    header("Location: index.php?errCode=2");
    die('錯誤');
  }

  // 去資料庫更改暱稱
  $username = $_SESSION['username'];
  $new_nickname = $_POST['nickname'];
  $sql = "UPDATE jackie_users SET nickname=? WHERE username=?";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param('ss', $new_nickname, $username);
  $result = $stmt->execute();
  if (!$result) {
    die($conn->error);
  }

  header("Location: index.php");
  exit();
?>
