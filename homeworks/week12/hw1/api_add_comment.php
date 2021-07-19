<?php
  require_once("conn.php");
  header("Content-type: application/json; charset=UTF-8");
  header("Access-Control-Allow-Origin: *");

  // 錯誤處理：沒帶該帶的資料
  if (
    empty($_POST["site"]) ||
    empty($_POST["nickname"]) ||
    empty($_POST["content"])
  ) {
    $json = array(
      "ok" => false,
      "msg" => "Please fill in all required fields"
    );
    $response = json_encode($json);
    echo $response;
    die;
  }

  // 新增留言
  $site = $_POST["site"];
  $nickname = $_POST["nickname"];
  $content = $_POST["content"];

  $sql = "insert into jackie_board_comments(site, nickname, content) values(?, ?, ?)";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param('sss', $site, $nickname, $content);
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

  $json = array(
    "ok" => true, 
    "msg" => "succeeded"
  );

  $response = json_encode($json);
  echo $response;
?>