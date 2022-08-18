<?php
    require_once 'server/db.php';
    require_once 'server/db_interface.php';
    //INPUT querry
    if ($_POST['req_type'] == "add") {
        //Define params
        $category_num = $_POST['category'];
        $category = '';
        switch ($category_num) {
            case 1:
                $category = 'Каталоги';
                break;
            case 2:
                $category = 'Стекла';
                break;
            case 3:
                $category = 'Кабина';
                break;
            case 4:
                $category = 'Узлы_и_агрегаты';
                break;
            case 5:
                $category = 'ПД';
                break;
            case 6:
                $category = 'Прочее';
                break;
            case 7:
                $category = 'Сальники_прокладки';
                break;
            case 8:
                $category = 'Ремкомплекты';
                break;
            case 9:
                $category = 'Т-40_ЛТЗ_Запасные_части';
                break;
            case 10:
                $category = 'Д-144_двигатель_в_сборе';
                break;
            case 11:
                $category = 'Электрооборудование';
                break;
            case 12:
                $category = 'Комплекты_прокладок_Д-144';
                break;
            case 13:
                $category = 'Д-144_Запасные_части';
                break;
        }
        $weight = $_POST['prod_weight'];
        $catalog_id = $_POST['prod_catnum'];
        $title = $_POST['name'];
        $price = $_POST['price'];
        //Define params
        insert_catalog(get_sql_connetion(), $category, $weight, $catalog_id, $title, $price);
    }
    //UPDATE querry
    if ($_POST['req_type'] == "edit") {
        //Define params
        $id = $_POST['id'];
        $weight = $_POST['prod_weight'];
        $catalog_id = $_POST['prod_catnum'];
        $title = $_POST['name'];
        $price = $_POST['price'];
        //Define params
        update_catalog(get_sql_connetion(), $id, $weight, $catalog_id, $title, $price);
    }
    //REMOVE querry
    if ($_POST['req_type'] == "delete") {
        //Define params
        $id = $_POST['id'];
        //Define params
        delete_catalog(get_sql_connetion(), $id);
    }
?>