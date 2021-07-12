<?php
  $lifetime = 3600;
  $path = "/mtr04group1/jackie/week11/hw1";

  session_set_cookie_params($lifetime, $path);
  session_start();
  require_once("conn.php");
  require_once("utils.php");

  // 表單驗證
  if (
    empty($_POST['username']) ||
    empty($_POST['password'])
  ) {
    header("Location: login.php?errCode=2");
    die;
  }

  // 查詢 db 是否有這名使用者
  $username = $_POST['username'];
  $password = $_POST['password'];
  $user = get_user_from_username($username);
  if (!$user) {
    header("Location: login.php?errCode=3");
    exit();
  }

  // 查到使用者 -> 比對密碼
  if (password_verify($password, $user['password'])) {
    // 密碼正確，重新生成 session，導回首頁
    session_set_cookie_params($lifetime, $path);
    session_regenerate_id();
    $_SESSION['username'] = $username;
    header("Location:index.php");
    exit();
  } else {
    // 密碼錯誤，導回首頁並帶上 errCode 3
    header("Location: login.php?errCode=3");
    exit();
  }
?>
