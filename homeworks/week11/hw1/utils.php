<?php
  function escape($str) {
    return htmlspecialchars($str, ENT_QUOTES);
  }

  function get_user_from_username($username) {
    global $conn;
    $sql = "SELECT * FROM jackie_users WHERE username=?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('s', $username);
    $result = $stmt->execute();
    if (!$result) {
      die($conn->error);
    }
    $result = $stmt->get_result();
    return $row = $result->fetch_assoc();
  }

  // action: view_page, add
  function has_permission($user, $action) {
    if ($user['role'] === "管理員") {
      return true;
    }

    if ($action === "view_page" && $user['role'] !== "管理員") {
      return false;
    }

    if ($action === "add") {
      return $user['role'] !== "停權使用者";
    }
  }
  function is_comment_author($user, $id) {
    global $conn;
    $sql = "select username from jackie_comments where id=?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('s', $id);
    $result = $stmt->execute();
    $result = $stmt->get_result();
    $row = $result->fetch_assoc();
    if ($user['username'] === $row['username']) {
      return true;
    }
    return false;
  }

  function is_admin($user) {
    return $user['role'] === "管理員";
  }

  function is_suspended($user) {
    return $user['role'] === "停權使用者";
  }

  function get_current_admin_num() {
    global $conn;
    $sql = "select * from jackie_users where role=?";
    $stmt = $conn->prepare($sql);
    $row = "管理員";
    $stmt->bind_param('s', $row);
    $result = $stmt->execute();
    $result = $stmt->get_result();
    $admin_num = $result->num_rows;
    return $admin_num;
  }
?>
