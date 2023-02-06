<?php
if (isset($_POST['name'], $_POST['email'], $_POST['subject'], $_POST['message'])) {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];

  $to = "omor6263@gmail.com";
  $headers = "From: $email" . "\r\n" .
    "Reply-To: $email" . "\r\n" .
    "X-Mailer: PHP/" . phpversion();

  if (mail($to, $subject, $message, $headers)) {
    echo "Email sent successfully.";
  } else {
    echo "Failed to send email.";
  }
} else {
  echo "Invalid request.";
}
?>
