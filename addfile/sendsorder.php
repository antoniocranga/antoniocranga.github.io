<?php
echo "entered"
   $subject = $_POST['Budget']. ' ' . $_POST['Email']
   $res = mail(
      "antocranga@gmail.com",
      $subject,
      $_POST['Message']
   );

   if($res == false)
      echo "failed"
   header('Location: /addfile/emailsent.php');
   exit();
?>
<html> </html>