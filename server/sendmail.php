<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'PHPMailer-master/src/PHPMailer.php';
    require 'PHPMailer-master/src/Exception.php';
    require 'PHPMailer-master/src/SMTP.php';

    $address = 'fj18jz14x2d35jdx@mail.ru';
    $password = 'nZWlyrT0rFn51yZnj9ND';

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

    $mail->setFrom($address, $name = 'orders@ltz.ru', $auto = true);
    $mail->addAddress($address, $name = 'orders@ltz.ru');
    $mail->Subject = 'Заказ запасных частей';
    $body = '<h1>Список запасных частей</h1>';
    $body.='<p><strong>Email заказчика:</strong> '.$_POST['userEmail'].'</p>';
    $body.='<p><strong>Телефон заказчика:</strong> '.$_POST['userPhone'].'</p>';
    $body.='<p><strong>ФИО заказчика:</strong> '.$_POST['userName'].'</p>';
    $body.='<p><strong>Адрес заказчика:</strong> '.$_POST['userAddress'].'</p>';
    $body.='<p><strong>Состав заказа:</strong></p>';
    $body.=$_POST['cart'];
    $body.='<p><strong>Общая цена заказа:</strong> '.$_POST['cart_price'].'</p>';
    $body.='<p><strong>Общий вес заказа:</strong> '.$_POST['cart_weight'].'</p>';

    $mail->Body = $body;

    try {
        $mail->send();
    } catch(Exception $e) {
        print_r($e);
        echo 'Mailer Error: '.$mail->ErrorInfo;
    }

    header('Content-type: application/json');
    echo json_encode($response);

?>