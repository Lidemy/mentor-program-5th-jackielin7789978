<?php
  session_start();
  require_once("conn.php");
  require_once("utils.php");

  $role = $_POST['role'];
  $id = $_POST['id'];

  // 權限檢查，只有管理員可以更新角色
  $username = $_SESSION['username'];
  $user = get_user_from_username($username);
  if (!is_admin($user)) {
    header("Location: index.php");
    exit;
  }
  // 檢查目前管理員數量，如果等於 1 原本的管理員就不能改變身分
  $admin_num = get_current_admin_num();
  if ($admin_num == 1 && $role !== "管理員") {
    header("Location: admin.php?errCode=1");
    exit;
  }
  $sql = "update jackie_users set role=? where id=?";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param('si', $role, $id);
  $result = $stmt->execute();

  header("Location: admin.php");
  exit;
?>