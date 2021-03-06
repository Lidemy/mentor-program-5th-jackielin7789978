<?php
  require_once("conn.php");
  header("Content-type: application/json; charset=UTF-8");
  header("Access-Control-Allow-Origin: *");

  // 錯誤處理：沒帶該帶的資料
  if (
    empty($_GET["site"])
  ) {
    $json = array(
      "ok" => false,
      "msg" => "Please add all required query strings"
    );
    $response = json_encode($json);
    echo $response;
    die;
  }

  // 抓取留言
  $site = $_GET["site"];
  if (empty($_GET["lastID"])) {
    $sql = "SELECT * FROM jackie_board_comments WHERE site=? ORDER BY id desc LIMIT 5";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('s', $site);
  } else {
    $last_id = $_GET["lastID"];
    $sql = "SELECT * FROM jackie_board_comments WHERE site=? AND id<? ORDER BY id desc LIMIT 5";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('si', $site, $last_id);
  }
  $result = $stmt->execute();
  // 錯誤處理：sql 錯誤
  if (!$result) {
    $json = array(
      "ok" => false,
      "msg" => "An error occurred"
    );
    $response = json_encode($json);
    echo $response;
    die;
  }
  $result = $stmt->get_result();
  $comments = array();
  while ($row = $result->fetch_assoc()) {
    array_push($comments, array(
      "id" => $row["id"],
      "nickname" => $row["nickname"],
      "content" => $row["content"],
      "created_at" => $row["created_at"]
    ));
  }
  // 取得總留言數
  $sql = "SELECT * FROM jackie_board_comments WHERE site=?";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param('s', $site);
  $result = $stmt->execute();
  $result = $stmt->get_result();
  $total = $result->num_rows;
  $json = array(
    "ok" => true,
    "comments" => $comments,
    "msg" => "SUCCEEDED",
    "total" => $total
  );
  $response = json_encode($json);
  echo $response;
?>