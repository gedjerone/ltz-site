<?php
    require_once 'server/db.php';
    require_once 'server/db_interface.php';
    if ($_POST['req_type'] == 'title') {
        $response = array();
        $catalog = get_items_only_title(get_sql_connetion());
        $html = '';
        foreach ($catalog as $element) {
            $html = '<option value="'. $element["ID"] . '">'. $element["TITLE"] . '</option>';
            array_push($response, $html);
        }
        foreach ($response as $element) {
            echo $element . "\n";
        }
    }
    if ($_POST['req_type'] == 'render') {
        $id = $_POST['id'];
        $response = array();
        $catalog = get_items_by_id(get_sql_connetion(), $id);
        $html = '';
        $img_1 = '';
        $img_2 = '<div class="img_block" id="b2" style="display: inline-flex;align-items: center;height: 86px;">
            <input class="img_edit img_2" id="file-input-low" name="file_main_jpg" type="file" accept=".jpg, .jpeg, .png" placeholder="Добавьте фото" style="display: inline-block;"/>
            <img id="img_edit_2" class="mimi_img" src="img/no_img.png">
        </div>';
        $img_3 = '<div class="img_block" id="b3" style="display: inline-flex;align-items: center;height: 86px;">
            <input class="img_edit img_2" id="file-input-low" name="file_main_jpg" type="file" accept=".jpg, .jpeg, .png" placeholder="Добавьте фото" style="display: inline-block;"/>
            <img id="img_edit_3" class="mimi_img" src="img/no_img.png">
        </div>';
        $img_4 = '<div class="img_block" id="b4" style="display: inline-flex;align-items: center;height: 86px;">
            <input class="img_edit img_2" id="file-input-low" name="file_main_jpg" type="file" accept=".jpg, .jpeg, .png" placeholder="Добавьте фото" style="display: inline-block;"/>
            <img id="img_edit_4" class="mimi_img" src="img/no_img.png">
        </div>';
        $img_5 = '<div class="img_block" id="b5" style="display: inline-flex;align-items: center;height: 86px;">
            <input class="img_edit img_2" id="file-input-low" name="file_main_jpg" type="file" accept=".jpg, .jpeg, .png" placeholder="Добавьте фото" style="display: inline-block;"/>
            <img id="img_edit_5" class="mimi_img" src="img/no_img.png">
        </div>';
        $img_6 = '<div class="img_block" id="b6" style="display: inline-flex;align-items: center;height: 86px;">
            <input class="img_edit img_2" id="file-input-low" name="file_main_jpg" type="file" accept=".jpg, .jpeg, .png" placeholder="Добавьте фото" style="display: inline-block;"/>
            <img id="img_edit_6" class="mimi_img" src="img/no_img.png">
        </div>';
        foreach ($catalog as $element) {
            $img_1 = '<div class="img_block" id="b1" style="display: inline-flex;align-items: center;height: 86px;">
                <input class="img_edit img_1" id="file-input-low" name="file_main_jpg" type="file" accept=".jpg, .jpeg, .png" placeholder="Добавьте фото" style="display: inline-block;"/>
                <img id="img_edit_1" class="mimi_img" name="' . $element['IMG_1'] . '" src="' . $element['IMG_1'] . '">
            </div>';
            if ($element['IMG_2'] != "") {
                $img_2 = '<div class="img_block" id="b2" style="display: inline-flex;align-items: center;height: 86px;">
                    <input class="img_edit img_2" id="file-input-low" name="file_main_jpg" type="file" accept=".jpg, .jpeg, .png" placeholder="Добавьте фото" style="display: inline-block;"/>
                    <img id="img_edit_2" class="mimi_img" name="' . $element['IMG_2'] . '" src="' . $element['IMG_2'] . '">
                </div>';
            }
            if ($element['IMG_3'] != "") {
                $img_3 = '<div class="img_block" id="b3" style="display: inline-flex;align-items: center;height: 86px;">
                    <input class="img_edit img_3" id="file-input-low" name="file_main_jpg" type="file" accept=".jpg, .jpeg, .png" placeholder="Добавьте фото" style="display: inline-block;"/>
                    <img id="img_edit_3" class="mimi_img" name="' . $element['IMG_3'] . '" src="' . $element['IMG_3'] . '">
                </div>';
            }
            if ($element['IMG_4'] != "") {
                $img_4 = '<div class="img_block" id="b4" style="display: inline-flex;align-items: center;height: 86px;">
                    <input class="img_edit img_4" id="file-input-low" name="file_main_jpg" type="file" accept=".jpg, .jpeg, .png" placeholder="Добавьте фото" style="display: inline-block;"/>
                    <img id="img_edit_4" class="mimi_img" name="' . $element['IMG_4'] . '" src="' . $element['IMG_4'] . '">
                </div>';
            }
            if ($element['IMG_5'] != "") {
                $img_5 = '<div class="img_block" id="b5" style="display: inline-flex;align-items: center;height: 86px;">
                    <input class="img_edit img_5" id="file-input-low" name="file_main_jpg" type="file" accept=".jpg, .jpeg, .png" placeholder="Добавьте фото" style="display: inline-block;"/>
                    <img id="img_edit_5" class="mimi_img" name="' . $element['IMG_5'] . '" src="' . $element['IMG_5'] . '">
                </div>';
            }
            if ($element['IMG_6'] != "") {
                $img_6 = '<div class="img_block" id="b6" style="display: inline-flex;align-items: center;height: 86px;">
                    <input class="img_edit img_6" id="file-input-low" name="file_main_jpg" type="file" accept=".jpg, .jpeg, .png" placeholder="Добавьте фото" style="display: inline-block;"/>
                    <img id="img_edit_6" class="mimi_img" name="' . $element['IMG_6'] . '" src="' . $element['IMG_6'] . '">
                </div>';
            }
            $html = '
            <div class="item_info">
            <input id="text-input" class="title_edit" name="prod_weight" type="text" placeholder="' . $element['TITLE'] . '"/>
            <input id="text-input" class="catalog_edit" name="prod_weight" type="text" placeholder="' . $element['CATALOG_ID'] . '"/>
            <div class="info_block" id="b1">
                <input id="text-input" class="info_edit info_1" name="prod_weight" type="text" placeholder="' . $element['INFO_1'] . '"/>
            </div>
            <div class="info_block" id="b2">
                <input id="text-input" class="info_edit info_2" name="prod_weight" type="text" placeholder="' . $element['INFO_2'] . '"/>
            </div>
            <div class="info_block" id="b3">
                <input id="text-input" class="info_edit info_3" name="prod_weight" type="text" placeholder="' . $element['INFO_3'] . '"/>
            </div>
            <textarea class="description_edit" id="text-area-input" placeholder="' . $element['DESCRIPTION'] . '"></textarea>
        </div>
        <div class="item_photo">
            ' . $img_1 . '
            ' . $img_2 . '
            ' . $img_3 . '
            ' . $img_4 . '
            ' . $img_5 . '
            ' . $img_6 . '
        </div>';
            array_push($response, $html);
        }
        foreach ($response as $element) {
            echo $element . "\n";
        }
    }
?>