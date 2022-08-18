<?php
require_once 'server/db.php';
require_once 'server/db_interface.php';
$category = $_POST['category'];
$catalog = get_catalog_by_category(get_sql_connetion(), $category);
/*echo '<pre>';
    foreach ($catalog as $element) {
        echo $element["ID"] . " " . $element["CATEGORY"] . " " . $element["WEIGHT"] . " " . $element["CATALOG_ID"] . " " . $element["TITLE"] . " " . $element["PRICE"] . "\n";
    }
echo '</pre>';*/

$response = array();

foreach ($catalog as $element) {
    $html = '<tr class="' . $category . '" id="' . $category . '">
    <td scope="row" data-label="Вес">' . $element["WEIGHT"] . '</td>
    <td data-label="№ по каталогу">' . $element["CATALOG_ID"] . '</td>
    <td data-label="Наименование">' . $element["TITLE"] . '</td>
    <td data-label="Цена, руб">' . $element["PRICE"] . '</td>
    <td data-label=" ">
        <div class="counter">
            <div class="text-field__group">
                <div class="hidden_id">' . $element["ID"] .  '</div>
                <input class="text-field__input" type="add" id="add" name="add" placeholder="Количество">
                <button class="text-field__btn" type="button">Добавить в корзину</button>
                <button class="text-field__btn_2_hide" type="button">Удалить из корзины</button>
            </div>
        </div>
    </td>  
    </tr>';
    array_push($response, $html);
}
foreach ($response as $element) {
    echo $element . "\n";
}
//echo $response;
?>