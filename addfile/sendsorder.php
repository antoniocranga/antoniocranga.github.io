<?php
echo "entered"
   $subject = $_POST['Budget']. ' ' . $_POST['Email']
   $res = mail(
      "office.uiglobal@gmail.com",
      $subject,
      $_POST['Message']
   );
   echo $_POST['Email'] . ' ' . $_POST['Email'] . ' ' . $_POST['Message'];
   if($res == false)
      echo "failed"
   header('Location: /emailsent.php');
   exit();
?>
<html> </html>