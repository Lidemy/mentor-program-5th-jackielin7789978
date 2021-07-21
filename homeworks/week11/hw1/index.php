<?php
  session_start();
  require_once("conn.php");
  require_once("utils.php");

  // 設定每一頁的留言數量和 offset 值
  $page = 1;
  if(!empty($_GET['page'])) {
    $page = intval($_GET['page']);
  }
  $items_per_page = 5;
  $offset = ($page - 1) * $items_per_page;

  // 根據頁數取得每一則留言的相關資料 (id, comment, created_at, nickname 和 username)
  $sql = 
  "SELECT C.id as id, C.comment as comment, C.created_at as created_at, U.nickname as nickname, U.username as username" . 
  " FROM jackie_comments as C LEFT JOIN jackie_users as U" . 
  " ON C.username=U.username WHERE is_deleted is null ORDER BY C.id DESC limit ? offset ?";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param('ii', $items_per_page, $offset);
  $result = $stmt->execute();
  if (!$result) {
    die($conn->error);
  }

  $result = $stmt->get_result();
  $username = null;
  $user = null;
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>留言板</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header class="warning"><strong>注意！本站為練習用網站，因教學用途刻意忽略資安的實作，註冊時請勿使用任何真實的帳號或密碼。</strong></header>
  <main>
    <div class="board">
      <!-- 如果已登入，就根據角色顯示按鈕 -->
      <?php if (!empty($_SESSION['username'])) {
        $username = $_SESSION['username'];
        $user = get_user_from_username($username);
        include "js.php";
      ?>
        <div class="board__nav">
          <a href="logout.php">登出</a>
          <a class="update-nickname">編輯暱稱</a>
        <?php if (is_admin($user)) { ?>
          <a href="admin.php">前往後台</a>
        <?php } ?>
        </div>
      <?php }else { ?>
        <div class="board__nav">
          <a href="register.php">註冊</a>
          <a href="login.php">登入</a>
        </div>
      <?php } ?>
      <h1 class="board__title">Comments</h1>
      <?php
        // 處理 errCode
        if (!empty($_GET['errCode'])) {
          $msg = '';
          $errCode = $_GET['errCode'];
          switch($errCode) {
            case '1':
              $msg = '錯誤：請輸入留言內容';
              break;
            case '2':
              $msg = '錯誤：請輸入暱稱';
              break;
          }
          echo('<h3 class="error">' . $msg . '</h3>');
        }
      ?>
      <!-- 根據角色判斷顯示內容 -->
      <?php if (!empty($username)) {
        $user = get_user_from_username($username);  
      ?>
      <?php if (!is_suspended($user)) { ?>
        <form class="board__update-nickname-form hide" method="POST" action="handle_update_nickname.php">
          新暱稱：<input name="nickname" type="text">
          <button class="board__submit-btn" type="submit">提交</button>
        </form>
        <h3>你好！<?php echo escape($_SESSION['username']); ?></h3>
        <form class="board__form" method="POST" action="handle_add_comment.php">
          <textarea name="comment" rows="5"></textarea>
          <button class="board__submit-btn" type="submit">提交</button>
        </form>
      <?php }else { ?>
        <h3>您已遭停權，如要新增留言請與管理員聯絡。</h3>
      <?php } ?>
      <?php }else { ?>
        <h3>如要留言請先登入</h3>
       <?php } ?>
      <div class="line"></div>
      <?php
        while ($row = $result->fetch_assoc()) {
      ?>
      <div class="card">
        <div class="card__avatar"></div>
        <div class="card__body">
          <div class="card__info">
            <span class="card__info__nickname">
              <?php echo escape($row['nickname'] . " (@{$row['username']})"); ?>
            </span>
            <span class="card__info__time">
              <?php echo escape($row['created_at']); ?>
            </span>
            <!-- 查看使用者有無編輯和刪除權限 -->
            <?php if (!empty($username) && has_permission($user, 'edit&delete', $row)) { ?>
              <span class="card__info__btns">
                <a href="update_comment.php?id=<?php echo $row['id']; ?>&page=<?php echo escape($page);?>">編輯</a>
                <a href="handle_delete_comment.php?id=<?php echo $row['id']?>">刪除</a>
              </span>
            <?php } ?>
          </div>
          <div class="card__comment"><?php echo escape($row['comment']); ?></div>
        </div>
      </div>
      <?php
        }
      ?>
      <div class="line"></div>
      <?php
        // 取得總留言數
        $sql = "SELECT count(id) as count from jackie_comments where is_deleted is null";
        $stmt = $conn->prepare($sql);
        $result = $stmt->execute();
        $result = $stmt->get_result();
        $row = $result->fetch_assoc();
        $count = $row['count'];
        $total_page_num = ceil($count / $items_per_page);
      ?>
      <div class="page">
        <span>總共有 <?php echo($count); ?> 筆留言，頁數：</span>
        <span><?php echo($page); ?> / <?php echo($total_page_num); ?></span>
      </div>
      <div class="paginator">
        <?php if ($page != 1) {?>
          <a href="index.php?page=1">首頁</a>
          <a href="index.php?page=<?php echo($page - 1) ?>">上一頁</a>
        <?php } ?>
        <?php if ($page != $total_page_num) { ?>
          <a href="index.php?page=<?php echo($page + 1) ?>">下一頁</a>
          <a href="index.php?page=<?php echo($total_page_num) ?>">最後一頁</a>
        <?php } ?>
      </div>
    </div>
  </main>
</body>
</html>
