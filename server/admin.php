<?php
    $auth_ref = 'YWRtaW5hTTJ2SzlwSmQ3';
    $token = $_POST['auth'];
    if ($token != $auth_ref) {
        $response = array('token_xfs' => '0');
        echo json_encode($response);
    } else {
        $response = array('token_xfs' => '1', 'html' => '<div class="h1_name">
        <h1>Админ панель</h1>
    </div>
    <h3>Главная</h3>
    <div class="main-img">
        <input id="file-input" type="file" name="file" style="display:none;">
    </div>
    <h3>Продукция</h3>
    <div class="products-w-photo">
        <!--что-то там-->
    </div>
    <h3>Прайс-листы</h3>
    <div class="products">
        <!--что-то там-->
    </div>
    <script src="js/admin.js"></script>', 'admin_src' => 'js/admin.js');
        echo json_encode($response);
    }

    /*$main_img = $_POST['main_img'];
    if (file_exists('img/promo2.jpg')) //проверяем, существует ли файл
    {
        $fp = fopen("img/promo2.jpg","r");//если существуем, открываем файл
        fwrite($fp, $main_img, 256);//записываем в файл
        fclose($fp);//закрываем файл.
        echo "Всё успешно записано";//выводим надпись
    }
    else
    {
        fopen("img/promo2.jpg","w");//если файла server/log.txt не существует, создаем его
        echo 'Не найден файл img/promo2.jpg';
    }   */
?>