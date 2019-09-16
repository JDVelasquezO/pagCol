<?php

$to = "info@ctvwc.com";
$name = $_POST['name'];
$email = $_POST['email'];
$title = $_POST['title'];
$body = $_POST['body'];
$headers = 'From: ' . $name . "(" . $email . ")" . "\r\n" .
    'Reply-To: webmaster@example.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $title, $body, $headers);
