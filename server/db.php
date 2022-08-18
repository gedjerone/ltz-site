<?php

    function get_sql_connetion() {

        $hostname = "localhost";
        $username = "co19125_gedjer";
        $password = "R15jRMbd";
        $database = "co19125_gedjer";

        $link = mysqli_connect($hostname, $username, $password, $database);

        if(mysqli_connect_errno()) {
            echo "Номер ошибки: " . mysqli_connect_errno() . " | Ошибка: " . mysqli_connect_error();
            exit;
        } else {
            //echo "Всё ок, подключился к базе!";
            return $link;
        }
    }

?>