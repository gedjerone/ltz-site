<?php
//$uploaddir = 'img/';
//$uploadfile = $uploaddir . basename($_FILES['file_main_jpg']['name']);
//header('HTTP/1.0 302 Found');
//header('Location: http://'.$_SERVER['HTTP_HOST'].$redirect_url);
$uploaddir = "img/promo2.jpg";
if (move_uploaded_file($_FILES['file_main_jpg']['tmp_name'], $uploaddir)) {
    //$redirect_url = "/index.html";
    //header('Location: =http://'.$_SERVER['HTTP_HOST'].$redirect_url, true, 302);
    //echo "Файл корректен и был успешно загружен.\n";
    //$redirect_url = "/admin.html";
    //header('HTTP/1.1 200 OK');
    //header('Location: http://'.$_SERVER['HTTP_HOST'].$redirect_url);
} else {
    //echo "Возможная атака с помощью файловой загрузки!\n";
    //echo 'Ошибка номер: ' . $_FILES['file_main_jpg']['error']."\n";
}
//echo 'img/' . basename($_FILES['file_main_jpg']['name'])."\n";
//echo 'Некоторая отладочная информация:';
//print_r($_FILES);
//$redirect = isset($_SERVER['HTTP_REFERER'])? $_SERVER['HTTP_REFERER']:'redirect-form.html';
//header("Location: http://co19125.tmweb.ru/admin.html");
?>