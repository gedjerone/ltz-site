<?php
foreach ($_FILES["pictureFile"]["error"] as $key => $error) {
    echo $_FILES["pictureFile"]["tmp_name"][$key];
    if ($error == UPLOAD_ERR_OK) {
        $tmp_name = $_FILES["pictureFile"]["tmp_name"][$key];
        $name = basename($_FILES["pictureFile"]["name"][$key]);
        move_uploaded_file($tmp_name, "items_img/$name");
        echo "items_img/$name";
    }
}
?>