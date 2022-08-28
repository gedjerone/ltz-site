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
    <h3>Прайс-листы (PDF/EXCEL)</h3>
    <div class="products" id="add">
        <div class="files_block">
            <input class="file_selector pdf-rus" id="file-input-low" name="file_doc" type="file" accept=".pdf"/>
            <button style="width: 200px;" class="pdf_rus_btn">Изменить PDF (русский)</button>
        </div>
        <div class="files_block">
            <input class="file_selector pdf-eng" id="file-input-low" name="file_doc" type="file" accept=".pdf"/>
            <button style="width: 200px;" class="pdf_eng_btn">Изменить PDF (английский)</button>
        </div>
        <div class="files_block">
            <input class="file_selector excel-rus" id="file-input-low" name="file_doc" type="file" accept=".xls, .xlsx, .csv"/>
            <button style="width: 200px;" class="excel_rus_btn">Изменить EXCEL (русский)</button>
        </div>
        <div class="files_block">
            <input class="file_selector excel-eng" id="file-input-low" name="file_doc" type="file" accept=".xls, .xlsx, .csv"/>
            <button style="width: 200px;" class="excel_eng_btn">Изменить EXCEL (английский)</button>
        </div>
        <!--input class="files_sumbit" id="sumbit-input" type="submit" value="Изменить файлы"/-->
    </div>
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
        <input class="products_submit" id="sumbit-input" type="submit" value="Добавить товар"/>
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
        <select class="rubric" autocomplete="off">
            <option value="">Без категории</option>
            <option value="Навеска">Навеска</option>
            <option value="Т-25">Т-25</option>
            <option value="Коробка передач">Коробка передач</option>
            <option value="Б/У (РЕСТАВРАЦИЯ)">Б/У (реставрация)</option>
            <option value="Ремкомплекты">Ремкомплекты</option>
            <option value="Вал отбора мощности">Вал отбора мощности</option>
            <option value="Двигатель">Двигатель</option>
            <option value="Кабина">Кабина</option>
            <option value="Рама">Рама</option>
            <option value="Пусковой двигатель">Пусковой двигатель</option>
            <option value="Передний ведущий мост">Передний ведущий мост</option>
            <option value="Рулевое управление">Рулевое управление</option>
            <option value="Раздаточная коробка">Раздаточная коробка</option>
            <option value="Сцепление">Сцепление</option>
            <option value="Тормоза">Тормоза</option>
            <option value="Трансмиссия">Трансмиссия</option>
            <option value="Трактор Сельскохозяйственный">Трактор сельскохозяйственный</option>
            <option value="Тяга центральная Т40_ЛТЗ_МТЗ_Т25">Тяга центральная Т40/ЛТЗ/МТЗ/Т25</option>
        </select>
        <div class="item_info">
            <input id="text-input" class="title_input" name="prod_weight" type="text" placeholder="Название"/>
            <input id="text-input" class="catalog_input" name="prod_weight" type="text" placeholder="Номер по каталогу"/>
            <div class="info_block" id="b1">
                <input id="text-input" class="info_input info_1" name="prod_weight" type="text" placeholder="Информация о товаре" style="width: 434px;display: inline-block;"/>
                <button class="add_one" id="one_info" style="width: 24px;height: 24px;border-radius: 24px;font-family: Arial, sans-serif;color: #b80a13;font-weight: 500; margin-left: 8px;border: 2px solid #999; display: inline-block;">+</button>
            </div>
            <div class="info_block" id="b2">
                <input id="text-input" class="info_input info_2" name="prod_weight" type="text" placeholder="Информация о товаре" style="width: 434px;display: none;"/>
                <button class="add_one" id="one_info" style="width: 24px;height: 24px;border-radius: 24px;font-family: Arial, sans-serif;color: #b80a13;font-weight: 500; margin-left: 8px;border: 2px solid #999; display: none;">+</button>
            </div>
            <div class="info_block" id="b3">
                <input id="text-input" class="info_input info_3" name="prod_weight" type="text" placeholder="Информация о товаре" style="width: 434px;display: none;"/>
            </div>
            <textarea class="description_input" id="text-area-input" placeholder="Описание товара">
            </textarea>
        </div>
        <div class="item_photo">
            <div class="img_block" id="b1">
                <input class="img_selector img_1" id="file-input-low" name="file_main_jpg" type="file" accept=".jpg, .jpeg, .png" placeholder="Добавьте фото" style="display: inline-block;"/>
                <button class="add_one" id="one_file" style="width: 24px;height: 24px;border-radius: 24px;font-family: Arial, sans-serif;color: #b80a13;font-weight: 500; margin-left: 8px;border: 2px solid #999; display: inline-block;">+</button>
            </div>
            <div class="img_block" id="b2">
                <input class="img_selector img_2" id="file-input-low" name="file_main_jpg" type="file" accept=".jpg, .jpeg, .png" placeholder="Добавьте фото" style="display: none;"/>
                <button class="add_one" id="one_file" style="width: 24px;height: 24px;border-radius: 24px;font-family: Arial, sans-serif;color: #b80a13;font-weight: 500; margin-left: 8px;border: 2px solid #999; display: none;">+</button>
            </div>
            <div class="img_block" id="b3">
                <input class="img_selector img_3" id="file-input-low" name="file_main_jpg" type="file" accept=".jpg, .jpeg, .png" placeholder="Добавьте фото" style="display: none;"/>
                <button class="add_one" id="one_file" style="width: 24px;height: 24px;border-radius: 24px;font-family: Arial, sans-serif;color: #b80a13;font-weight: 500; margin-left: 8px;border: 2px solid #999; display: none;">+</button>
            </div>
            <div class="img_block" id="b4">
                <input class="img_selector img_4" id="file-input-low" name="file_main_jpg" type="file" accept=".jpg, .jpeg, .png" placeholder="Добавьте фото" style="display: none;"/>
                <button class="add_one" id="one_file" style="width: 24px;height: 24px;border-radius: 24px;font-family: Arial, sans-serif;color: #b80a13;font-weight: 500; margin-left: 8px;border: 2px solid #999; display: none;">+</button>
            </div>
            <div class="img_block" id="b5">
                <input class="img_selector img_5" id="file-input-low" name="file_main_jpg" type="file" accept=".jpg, .jpeg, .png" placeholder="Добавьте фото" style="display: none;"/>
                <button class="add_one" id="one_file" style="width: 24px;height: 24px;border-radius: 24px;font-family: Arial, sans-serif;color: #b80a13;font-weight: 500; margin-left: 8px;border: 2px solid #999; display: none;">+</button>
            </div>
            <div class="img_block" id="b6">
                <input class="img_selector img_6" id="file-input-low" name="file_main_jpg" type="file" accept=".jpg, .jpeg, .png" placeholder="Добавьте фото" style="display: none;"/>
            </div>
        </div>
        <div style="clear: both;justify-content: center;align-items: center;display: flex;">
            <input class="items_submit" id="sumbit-input" type="submit" value="Добавить товар"/>
        </div>
    </div>
    <h3>Продукция (Изменить товары)</h3>
    <div class="products-w-photo">
        <select class="rubric2" autocomplete="off">
            <option class="after_option">Выберите товар из списка</option>
        </select>
        <div class="item_editor">
        </div>
        <div style="clear: both;justify-content: center;align-items: center;display: flex;">
            <input class="items_edit" id="sumbit-input" type="submit" value="Изменить товар" style="width: 250px; border-radius: 15px 0px 0px 15px; border-right: solid 1px #950000;"/>
            <input class="items_delete" id="sumbit-input" type="submit" value="Удалить товар" style="width: 250px; border-radius: 0px 15px 15px 0px; border-left: solid 1px #950000;"/>
        </div>
    </div>', 'admin_src' => 'js/admin.js');
        echo json_encode($response);
    }
?>