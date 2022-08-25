<?php

    function get_catalog($link) {
        $sql = "SELECT * FROM `catalog`;";

        $result = mysqli_query($link, $sql);

        $catalog = mysqli_fetch_all($result, MYSQLI_ASSOC);

        return $catalog;
    }

    function get_catalog_by_category($link, $category) {
        $sql = "SELECT * FROM `catalog` WHERE CATEGORY = \"" . $category . "\";";

        $result = mysqli_query($link, $sql);

        //$catalog = mysqli_fetch_all($result, MYSQLI_ASSOC);
        $catalog = [];
        while ($row = mysqli_fetch_assoc($result)) {
            array_push($catalog, $row);
        }

        return $catalog;
    }

    function get_catalog_by_id($link, $id) {
        $sql = "SELECT * FROM `catalog` WHERE ID = \"" . $id . "\";";

        $result = mysqli_query($link, $sql);

        $catalog = mysqli_fetch_all($result, MYSQLI_ASSOC);

        return $catalog;
    }

    function insert_catalog($link, $category, $weight, $catalog_id, $title, $price) {
        $sql = "INSERT INTO `catalog` (CATEGORY, WEIGHT, CATALOG_ID, TITLE, PRICE) VALUES (\"".$category."\", ".$weight.", \"".$catalog_id."\", \"".$title."\", ".$price.");";
        
        mysqli_query($link, $sql);
    }

    function update_catalog($link, $id, $weight, $catalog_id, $title, $price) {
        $sql = "UPDATE `catalog` SET `WEIGHT` = " . $weight . ", `CATALOG_ID` = \"" . $catalog_id . "\", `TITLE` = \"" . $title . "\", `PRICE` = " . $price . " WHERE `catalog`.`ID` = " . $id . ";";

        mysqli_query($link, $sql);
    }

    function delete_catalog($link, $id) {
        $sql = "DELETE FROM `catalog` WHERE `catalog`.`ID` = " . $id . ";";
        
        mysqli_query($link, $sql);
    }

    function get_items($link) {
        $sql = "SELECT * FROM `items`;";

        $result = mysqli_query($link, $sql);

        $catalog = mysqli_fetch_all($result, MYSQLI_ASSOC);

        return $catalog;
    }   

    function get_items_by_id($link, $id) {
        $sql = "SELECT * FROM `items` WHERE ID = \"" . $id . "\";";

        $result = mysqli_query($link, $sql);

        $catalog = mysqli_fetch_all($result, MYSQLI_ASSOC);

        return $catalog;
    }   

    function get_items_only_title($link) {
        $sql = "SELECT `ID`, `TITLE` FROM `items`";

        $result = mysqli_query($link, $sql);

        $catalog = mysqli_fetch_all($result, MYSQLI_ASSOC);

        return $catalog;
    }   

    function insert_item($link, $title, $option, $catalog_id, $info_1, $info_2, $info_3, $description, $img_1, $img_2, $img_3, $img_4, $img_5, $img_6) {
        if ($option == "") {
            $option = 'NULL';
        } else {
            $option = '"' . $option . '"';
        }
        if ($catalog_id == "") {
            $catalog_id = 'NULL';
        } else {
            $catalog_id = '"' . $catalog_id . '"';
        }
        if ($info_1 == "") {
            $info_1 = 'NULL';
        } else {
            $info_1 = '"' . $info_1 . '"';
        }
        if ($info_2 == "") {
            $info_2 = 'NULL';
        } else {
            $info_2 = '"' . $info_2 . '"';
        }
        if ($info_3 == "") {
            $info_3 = 'NULL';
        } else {
            $info_3 = '"' . $info_3 . '"';
        }
        if ($description == "") {
            $description = 'NULL';
        } else {
            $description = '"' . $description . '"';
        }
        if ($img_2 == "") {
            $img_2 = 'NULL';
        } else {
            $img_2 = '"/items_img/' . $img_2 . '"';
        }
        if ($img_3 == "") {
            $img_3 = 'NULL';
        } else {
            $img_3 = '"/items_img/' . $img_3 . '"';
        }
        if ($img_4 == "") {
            $img_4 = 'NULL';
        } else {
            $img_4 = '"/items_img/' . $img_4 . '"';
        }
        if ($img_5 == "") {
            $img_5 = 'NULL';
        } else {
            $img_5 = '"/items_img/' . $img_5 . '"';
        }
        if ($img_6 == "") {
            $img_6 = 'NULL';
        } else {
            $img_6 = '"/items_img/' . $img_6 . '"';
        }

        $title = '"' . $title . '"';
        $img_1 = '"/items_img/' . $img_1 . '"';

        $sql = "INSERT INTO `items` (`TITLE`, `OPTION`, `CATALOG_ID`, `INFO_1`, `INFO_2`, `INFO_3`, `DESCRIPTION`, `IMG_1`, `IMG_2`, `IMG_3`, `IMG_4`, `IMG_5`, `IMG_6`) VALUES (" . $title . "," . $option . "," . $catalog_id . "," . $info_1 . "," . $info_2 . "," . $info_3 . "," . $description . "," . $img_1 . "," . $img_2 . "," . $img_3 . "," . $img_4 . "," . $img_5 . "," . $img_6 .");";

        echo $sql;

        mysqli_query($link, $sql);
    }

    function update_item($link, $id, $title, $catalog_id, $info_1, $info_2, $info_3, $description, $img_1, $img_2, $img_3, $img_4, $img_5, $img_6) {
        if ($catalog_id == "") {
            $catalog_id = 'NULL';
        } else {
            $catalog_id = '"' . $catalog_id . '"';
        }
        if ($info_1 == "") {
            $info_1 = 'NULL';
        } else {
            $info_1 = '"' . $info_1 . '"';
        }
        if ($info_2 == "") {
            $info_2 = 'NULL';
        } else {
            $info_2 = '"' . $info_2 . '"';
        }
        if ($info_3 == "") {
            $info_3 = 'NULL';
        } else {
            $info_3 = '"' . $info_3 . '"';
        }
        if ($description == "") {
            $description = 'NULL';
        } else {
            $description = '"' . $description . '"';
        }
        if ($img_2 == "") {
            $img_2 = 'NULL';
        } else {
            $img_2 = '"' . $img_2 . '"';
        }
        if ($img_3 == "") {
            $img_3 = 'NULL';
        } else {
            $img_3 = '"' . $img_3 . '"';
        }
        if ($img_4 == "") {
            $img_4 = 'NULL';
        } else {
            $img_4 = '"' . $img_4 . '"';
        }
        if ($img_5 == "") {
            $img_5 = 'NULL';
        } else {
            $img_5 = '"' . $img_5 . '"';
        }
        if ($img_6 == "") {
            $img_6 = 'NULL';
        } else {
            $img_6 = '"' . $img_6 . '"';
        }

        $title = '"' . $title . '"';
        $img_1 = '"' . $img_1 . '"';

        $sql = "UPDATE `items` SET `TITLE` = " . $title . ", `CATALOG_ID` = " . $catalog_id . ", `INFO_1` = " . $info_1 . ", `INFO_2` = " . $info_2 . ", `INFO_3` = " . $info_3 . ", `DESCRIPTION` = " . $description . ", `IMG_1` = " . $img_1 . ", `IMG_2` = " . $img_2 . ", `IMG_3` = " . $img_3 . ", `IMG_4` = " . $img_4 . ", `IMG_5` = " . $img_5 . ", `IMG_6` = " . $img_6 . " WHERE `items`.`ID` = " . $id . ";";

        mysqli_query($link, $sql);
    }

    function delete_item($link, $id) {
        $sql = "DELETE FROM `items` WHERE `items`.`ID` = " . $id . ";";
        
        mysqli_query($link, $sql);
    }

?>