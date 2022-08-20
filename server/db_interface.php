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

        $catalog = mysqli_fetch_all($result, MYSQLI_ASSOC);

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

?>