<?php
    require_once 'server/db.php';
    require_once 'server/db_interface.php';

    if($_POST['type'] == 'all') {

        $items = get_items(get_sql_connetion());

        $response = array();

        foreach ($items as $element) {
            $html = '<div class="item" id="' . $element["OPTION"] . '">
                <a href="item?id=' . $element["ID"] . '">
                    <img src="' . $element["IMG_1"] . '">
                </a>
                <p><b>' . $element["TITLE"] . '</b></p>
                <p>' . $element["CATALOG_ID"] . '</p>
            </div>';
            //echo $html;
            array_push($response, $html);
        }

        foreach ($response as $element) {
            echo $element . "\n";
        }
    }
?>