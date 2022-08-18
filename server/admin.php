<?php
    $auth_ref = 'YWRtaW5hTTJ2SzlwSmQ3';
    $token = $_POST['auth'];
    if ($token != $auth_ref) {
        $response = array('token_xfs' => '0');
        echo json_encode($response);
    } else {
        $response = array('token_xfs' => '1', 'html' => '<div class="h1_name">
        <h1>Админ панель</h 1>
    </div>
    <h3>Главная</h3>
    <form class="main_img_form" enctype="multipart/form-data" action="main_photo.php" method="POST">
        <!-- Поле MAX_FILE_SIZE должно быть указано до поля загрузки файла -->
        <input type="hidden" name="MAX_FILE_SIZE" value="3000000" />
        <!-- Название элемента input определяет имя в массиве $_FILES -->
        <div class="main-img">
            <input id="file-input" name="file_main_jpg" type="file" style="display:none;"/>
        </div>
        <input  id="sumbit-input" type="submit" value="Изменить картинку"/>
    </form>
    <h3>Прайс-листы (Добавить товар)</h3>
    <div class="products" id="add">
        <select class="products_select" name="category">
            <option>Выберите категорию из списка</option>
            <option value="1">Каталоги</option>
            <option value="2">Стекла</option>
            <option value="3">Кабина</option>
            <option value="4">Узлы и агрегаты</option>
            <option value="5">ПД</option>
            <option value="6">Прочее</option>
            <option value="7">Сальники прокладки</option>
            <option value="8">Ремкомплекты</option>
            <option value="9">Т-40 ЛТЗ Запасные части</option>
            <option value="10">Д-144 двигатель в сборе</option>
            <option value="11">Электрооборудование</option>
            <option value="12">Комплекты прокладок Д-144</option>
            <option value="13">Д-144 Запасные части</option>
        </select>
        <input id="text-input" class="prod_weight" name="prod_weight" type="number" placeholder="Вес" step="0.001"  min="0" max="100000000"/>
        <input id="text-input" class="prod_catnum" name="prod_catnum" type="text" placeholder="Номер по каталогу"/>
        <input id="text-input" class="name" name="name" type="text" placeholder="Название"/>
        <input id="text-input" class="price" name="price" type="number" placeholder="Цена" step="0.01" min="0.01" max="100000000"/>
        <input class="products_submit" id="sumbit-input" type="submit" value="Добавить новый продукт"/>
    </div>
    <h3>Прайс-листы (Изменить товары)</h3>
    <div class="products" id="edit">
        <select class="products_select" id="edit_prod" name="category">
            <option>Выберите категорию из списка</option>
            <option value="1">Каталоги</option>
            <option value="2">Стекла</option>
            <option value="3">Кабина</option>
            <option value="4">Узлы и агрегаты</option>
            <option value="5">ПД</option>
            <option value="6">Прочее</option>
            <option value="7">Сальники прокладки</option>
            <option value="8">Ремкомплекты</option>
            <option value="9">Т-40 ЛТЗ Запасные части</option>
            <option value="10">Д-144 двигатель в сборе</option>
            <option value="11">Электрооборудование</option>
            <option value="12">Комплекты прокладок Д-144</option>
            <option value="13">Д-144 Запасные части</option>
        </select>
    </div>
    <div class="products_table">
        <table class="tb-1">
            <thead>
                <tr>
                    <th scope="col">Вес</th>
                    <th scope="col">№ по каталогу</th>
                    <th scope="col">Наименование</th>
                    <th scope="col">Цена, руб</th>
                    <th scope="col"> </th>
                </tr>
            </thead>
            <tbody class="t_bd">
                <tr class="category" id="Каталоги_collection">
                </tr>
            </tbody>
        </table>
    </div>
    <h3>Продукция (Добавить товар)</h3>
    <div class="products-w-photo">
        <!--что-то там-->
    </div>
    <h3>Продукция (Изменить товары)</h3>
    <div class="products-w-photo">
        <!--что-то там-->
    </div>', 'admin_src' => 'js/admin.js');
        echo json_encode($response);
    }
?>