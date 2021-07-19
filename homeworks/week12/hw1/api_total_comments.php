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
      "msg" => "Please specify site"
    );
    $response = json_encode($json);
    echo $response;
    die;
  }

  // 抓取留言
  $site = $_GET["site"];
  $sql = "select * from jackie_board_comments where site=?";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param('s', $site);
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
  echo $result->num_rows;
?>
