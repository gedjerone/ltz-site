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
    <td scope="row" data-label="Вес">
        <input id="tb-text-input" class="prod_weight" name="prod_weight" type="number" placeholder="' . $element["WEIGHT"] . '" step="0.001"  min="0" max="100000000"/>
    </td>
    <td data-label="№ по каталогу">
        <input id="tb-text-input" class="prod_catnum" name="prod_catnum" type="text" placeholder="' . $element["CATALOG_ID"] . '"/>
    </td>
    <td data-label="Наименование">
        <input id="tb-text-input" class="name" name="name" type="text" placeholder="' . $element["TITLE"] . '"/>
    </td>
    <td data-label="Цена, руб">
    <input id="tb-text-input" class="price" name="price" type="number" placeholder="' . $element["PRICE"] . '" step="0.01" min="0.01" max="100000000"/>
    </td>
    <td data-label=" ">
        <div class="counter">
            <div class="text-field__group">
                <div class="hidden_id">' . $element["ID"] .  '</div>
                <button class="edit" id="' . $element["ID"] .  '" type="button">Изменить товар</button>
                <button class="delete" id="' . $element["ID"] .  '" type="button">Удалить товар</button>
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