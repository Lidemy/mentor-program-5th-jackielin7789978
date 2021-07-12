<?php
  session_start();
  require_once("conn.php");
  require_once("utils.php");

  //權限檢查，只有管理員可以更新角色
  $username = $_SESSION['username'];
  $user = get_user_from_username($username);
  if (!is_admin($user)) {
    header("Location: index.php");
    exit;
  }

  $role = $_POST['role'];
  $id = $_POST['id'];
  $sql = "update jackie_users set role=? where id=?";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param('si', $role, $id);
  $result = $stmt->execute();

  header("Location: admin.php");
  exit;
?>