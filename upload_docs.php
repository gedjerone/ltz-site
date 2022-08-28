<?php
foreach ($_FILES["doc_file"]["error"] as $key => $error) {
    echo $_FILES["doc_file"]["tmp_name"][$key];
    if ($error == UPLOAD_ERR_OK) {
        $tmp_name = $_FILES["doc_file"]["tmp_name"][$key];
        $name = basename($_FILES["doc_file"]["name"][$key]);
        $dir = "files/" . $_POST["name_file"];
        move_uploaded_file($tmp_name, $dir);
        echo $dir;
    }
}
?>