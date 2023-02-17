<?php
if(isset($_POST['submit'])){
    $to = "rinshadmorayur09@gmail.com";
    $name = $_POST['name'];
    $email= $_POST['email'];
    $message= $_POST['message'];
    $headers = 'From: '.$email . "\r\n";


    $body = "name : ".$name. "\r\n" .
    		"Message : " . $message;
    if(mail($to, $subject, $message , $headers)){
        echo "Mail Sent!";
    }else{
         echo "Failed To Send Mail";
    }
}

?>