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

  if (is_admin($user)) {
    $sql = "update jackie_comments set is_deleted=1 where id=?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('i', $id);
  } else {
    $sql = "update jackie_comments set is_deleted=1 where id=?";
      $stmt = $conn->prepare($sql);
      $stmt->bind_param('i', $id);
  }
  $result = $stmt->execute();
  if (!$result) {
    die($conn->error);
  }

  header("Location: index.php");
  exit;
?>
