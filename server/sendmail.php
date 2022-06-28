<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'PHPMailer-master/src/PHPMailer.php';
    require 'PHPMailer-master/src/Exception.php';
    require 'PHPMailer-master/src/SMTP.php';

    $address = 'antittter@mail.ru';
    $password = 'Ohv05gRWqCHAYbBYrc12';

    $mail = new PHPMailer(true);
    $mail->SMTPDebug = true;
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'PHPMailer-master/language/');
    $mail->isHTML(true);
    $mail->isSMTP();
    $mail->Host = "smtp.mail.ru";
    $mail->SMTPAuth = true;
    $mail->SMTPSecure = "ssl";
    $mail->Port = "465";
    $mail->Username = $address;
    $mail->Password = $password;

    //От кого
    $mail->setFrom($address, $name = 'test', $auto = true);
    //Кому
    $mail->addAddress($address, $name = 'test');
    //Тема
    $mail->Subject = 'Заказ запасных частей';

    //Тело письма
    $body = '<h1>Список запасных частей</h1>';

    $body.='<p><strong>Email:</strong> '.$_POST['userEmail'].'</p>';
    //$body.='<p><strong>Email:</strong> ХУЙ</p>';

    $mail->Body = $body;

    //Отправка
    /*if (!$mail->send()) {
        $message = 'Ошибка';
    } else {
        $message = 'Отправлено!';
    }*/

    function console_log($data){ // сама функция
        if(is_array($data) || is_object($data)){
            echo("<script>console.log('php_array: ".json_encode($data)."');</script>");
        } else {
            echo("<script>console.log('php_string: ".$data."');</script>");
        }
    }

    try {
        $mail->send();
    } catch(Exception $e) {
        print_r($e);
        echo 'Mailer Error: ' . $mail->ErrorInfo;
    }

    //$response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);

?>