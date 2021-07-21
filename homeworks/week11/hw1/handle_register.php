<?php
  session_start();
  require_once("conn.php");
  require_once("utils.php");

  // 表單驗證
  if (
    empty($_POST['username']) ||
    empty($_POST['password']) ||
    empty($_POST['nickname'])
  ) {
    header("Location: register.php?errCode=2");
    die('錯誤');
  }

  // 檢查 username 是否重複
  $username = $_POST['username'];
  $user = get_user_from_username($username);
  if ($user) {
    header("Location: register.php?errCode=4");
    exit;
  }

  // 把會員資料存進資料庫
  $password = password_hash($_POST['password'], PASSWORD_DEFAULT);
  $nickname = $_POST['nickname'];
  $sql = "INSERT INTO jackie_users(username, password, nickname) VALUES(?, ?, ?)";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param('sss', $username, $password, $nickname);
  $result = $stmt->execute();
  if (!$result) {
    die($conn->error);
  }
  // 註冊成功立即登入
  $_SESSION['username'] = $username;
  header("Location: index.php");
  exit();
?>