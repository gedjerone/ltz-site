<?php
    require_once 'server/db.php';
    require_once 'server/db_interface.php';
    if ($_POST['req_type'] == "add") {
        $title = $_POST['title'];
        $option = $_POST['option'];
        $catalog_id = $_POST['catalog_id'];
        $info_1 = $_POST['info_1'];
        $info_2 = $_POST['info_2'];
        $info_3 = $_POST['info_3'];
        $description = $_POST['description'];
        $img_1 = $_POST['img_1'];
        $img_2 = $_POST['img_2'];
        $img_3 = $_POST['img_3'];
        $img_4 = $_POST['img_4'];
        $img_5 = $_POST['img_5'];
        $img_6 = $_POST['img_6'];
        insert_item(get_sql_connetion(), $title, $option, $catalog_id, $info_1, $info_2, $info_3, $description, $img_1, $img_2, $img_3, $img_4, $img_5, $img_6);
    }
    if ($_POST['req_type'] == "edit") {
        $id = $_POST['id'];
        $title = $_POST['title'];
        $catalog_id = $_POST['catalog_id'];
        $info_1 = $_POST['info_1'];
        $info_2 = $_POST['info_2'];
        $info_3 = $_POST['info_3'];
        $description = $_POST['description'];
        $img_1 = $_POST['img_1'];
        $img_2 = $_POST['img_2'];
        $img_3 = $_POST['img_3'];
        $img_4 = $_POST['img_4'];
        $img_5 = $_POST['img_5'];
        $img_6 = $_POST['img_6'];
        update_item(get_sql_connetion(), $id, $title, $catalog_id, $info_1, $info_2, $info_3, $description, $img_1, $img_2, $img_3, $img_4, $img_5, $img_6);
    }
    if ($_POST['req_type'] == "delete") {
        $id = $_POST['id'];
        delete_item(get_sql_connetion(), $id);
    }
?>