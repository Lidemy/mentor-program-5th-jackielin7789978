<?php
  session_start();
  require_once("conn.php");
  require_once("utils.php");

  // 沒帶 id 或沒登入 → 導回首頁
  if (empty($_GET['id'] || empty($_SESSION['username']))) {
    header("Location: index.php");
    exit;
  }

  // 權限檢查
  $id = $_GET['id'];
  $username = $_SESSION['username'];
  $user = get_user_from_username($username);

  if (is_admin($user) || is_comment_author($user, $id)) {
    $sql = "update jackie_comments set is_deleted=1 where id=?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('i', $id);
    $result = $stmt->execute();
  } else {
    die("不要亂動別人的東西好不好");
  }

  header("Location: index.php");
  exit;
?>
