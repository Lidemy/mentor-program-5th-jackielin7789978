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

  // 表單驗證
  if (empty($_POST['comment'])) {
    header("Location: update_comment.php?errCode=1");
    die;
  }

  // 從 $_POST 拿到剛才透過表單帶上來的 comment, id 和 page
  $comment = $_POST['comment'];
  $id = $_POST['id'];
  $page = $_POST['page'];
  $sql = null;
  // 根據角色下不同的 sql
  if (is_admin($user)) {
    $sql = "update jackie_comments set comment=? where id=?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('si', $comment, $id);
  } else {
    $sql = "update jackie_comments set comment=? where id=? and username=?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('sis', $comment, $id, $username);
  }
  $result = $stmt->execute();
  if (!$result) {
    die($conn->error);
  }

  header("Location: index.php?page={$page}");
  exit();
?>
