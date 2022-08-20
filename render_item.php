<?php
    require_once 'server/db.php';
    require_once 'server/db_interface.php';

    $id = $_GET['id'];

    $item = get_items_by_id(get_sql_connetion(), $id);

    $title = '<p><b>' . $item[0]['TITLE'] . '</b></p>';
    $catalog_id = '';
    if ($item[0]['CATALOG_ID'] != NULL) {
        $catalog_id = '<p>' . $item[0]['CATALOG_ID'] . '</p>';
    }
    $info_1 = '';
    if ($item[0]['INFO_1'] != NULL) {
        $catalog_id = '<p>' . $item[0]['INFO_1'] . '</p>';
    }
    $info_2 = '';
    if ($item[0]['INFO_2'] != NULL) {
        $catalog_id = '<p>' . $item[0]['INFO_2'] . '</p>';
    }
    $info_3 = '';
    if ($item[0]['INFO_3'] != NULL) {
        $catalog_id = '<p>' . $item[0]['INFO_3'] . '</p>';
    }
    $description = '';
    if ($item[0]['DESCRIPTION'] != NULL) {
        $description = '<p id="description">' . $item[0]['DESCRIPTION'] . '</p>';
    }
    $arrows = '';
    $img_1 = '"' . $item[0]['IMG_1'] . '"';
    $gallery = '<div class="gallery1">
        <img class="photo" src=' . $img_1  . '>
    </div>';
    $img_2 = '';
    if ($item[0]['IMG_2'] != NULL) {
        $img_2 = '"' . $item[0]['IMG_2'] . '"';
        $gallery = '<div class="gallery2">
            <img class="photo" src=' . $img_1  . '>
            <img class="photo" src=' . $img_2  . '>
        </div>';
        $arrows = '<img class="left_arrow" src="/img/icons8-left-arrow-50.png">
        <img class="right_arrow" src="/img/icons8-right-arrow-50.png">';
    }
    $img_3 = '';
    if ($item[0]['IMG_3'] != NULL) {
        $img_3 = '"' . $item[0]['IMG_3'] . '"';
        $gallery = '<div class="gallery3">
            <img class="photo" src=' . $img_1  . '>
            <img class="photo" src=' . $img_2  . '>
            <img class="photo" src=' . $img_3  . '>
        </div>';
        $arrows = '<img class="left_arrow" src="/img/icons8-left-arrow-50.png">
        <img class="right_arrow" src="/img/icons8-right-arrow-50.png">';
    }
    $img_4 = '';
    if ($item[0]['IMG_4'] != NULL) {
        $img_4 = '"' . $item[0]['IMG_4'] . '"';
        $gallery = '<div class="gallery4">
            <img class="photo" src=' . $img_1  . '>
            <img class="photo" src=' . $img_2  . '>
            <img class="photo" src=' . $img_3  . '>
            <img class="photo" src=' . $img_4  . '>
        </div>';
        $arrows = '<img class="left_arrow" src="/img/icons8-left-arrow-50.png">
        <img class="right_arrow" src="/img/icons8-right-arrow-50.png">';
    }
    $img_5 = '';
    if ($item[0]['IMG_5'] != NULL) {
        $img_5 = '"' . $item[0]['IMG_5'] . '"';
        $gallery = '<div class="gallery5">
            <img class="photo" src=' . $img_1  . '>
            <img class="photo" src=' . $img_2  . '>
            <img class="photo" src=' . $img_3  . '>
            <img class="photo" src=' . $img_4  . '>
            <img class="photo" src=' . $img_5  . '>
        </div>';
        $arrows = '<img class="left_arrow" src="/img/icons8-left-arrow-50.png">
        <img class="right_arrow" src="/img/icons8-right-arrow-50.png">';
    }
    $img_6 = '';
    if ($item[0]['IMG_6'] != NULL) {
        $img_6 = '"' . $item[0]['IMG_6'] . '"';
        $gallery = '<div class="gallery6">
            <img class="photo" src=' . $img_1  . '>
            <img class="photo" src=' . $img_2  . '>
            <img class="photo" src=' . $img_3  . '>
            <img class="photo" src=' . $img_4  . '>
            <img class="photo" src=' . $img_5  . '>
            <img class="photo" src=' . $img_6  . '>
        </div>';
        $arrows = '<img class="left_arrow" src="/img/icons8-left-arrow-50.png">
        <img class="right_arrow" src="/img/icons8-right-arrow-50.png">';
    }

    $html = '<div class="title_vertical">
        ' . $title . '
        ' . $catalog_id . '
        ' . $info_1 . '
        ' . $info_2 . '
        ' . $info_3 . '
        <p>
            Информация о ценах на вкладке <a id="redirect" href="/products"><b>ПРАЙС&#8209ЛИСТЫ</b></a> или в файлах:
            <div class="ie_core">
                <span class="ie_1">
                    <a href="/files/1655652223911803.pdf">
                        <img src="/img/pdf.png">
                        <b>Запчасти Т-40, ЛТЗ</b>
                    </a>
                </span>
                <span class="ie_2">
                    <a href="/files/avtoritet-en.pdf">
                        <img src="/img/pdf.png">
                        <b>Parts Т-40, ЛТЗ</b>
                    </a>
                </span>
            </div>
            <div class="ie_core">
                <span class="ie_1">
                    <a href="/files/parts-avtoritet.xls">
                        <img src="/img/xls.png">
                        <b>Запчасти Т-40, ЛТЗ</b>
                    </a>
                </span>
                <span class="ie_2">
                    <a href="/files/avtoritet-en.xls">
                        <img src="/img/xls.png">
                        <b>Parts Т-40, ЛТЗ</b>
                    </a>
                </span>
            </div>
        </p>
        ' . $description . '
        </div>
        <div class="img">
            <a class="linker" href=' . $img_1 . '>
                <img class="main" src=' . $img_1 . '>
            </a>
            ' . $arrows . '
            <div class="magnifier">
                <img src="/img/zoom.gif">
            </div>
        </div>
        <div class="divider"></div>
        ' . $gallery . '
        <div class="divider"></div>
        <div class="title">
            ' . $title . '
            ' . $catalog_id . '
            ' . $info_1 . '
            ' . $info_2 . '
            ' . $info_3 . '
            <p>
                Информация о ценах на вкладке <a id="redirect" href="/products"><b>ПРАЙС&#8209ЛИСТЫ</b></a> или в файлах:
                <div class="ie_core">
                    <span class="ie_1">
                        <a href="/files/1655652223911803.pdf">
                            <img src="/img/pdf.png">
                            <b>Запчасти Т-40, ЛТЗ</b>
                        </a>
                    </span>
                    <span class="ie_2">
                        <a href="/files/avtoritet-en.pdf">
                            <img src="/img/pdf.png">
                            <b>Parts Т-40, ЛТЗ</b>
                        </a>
                    </span>
                    <span class="ie_1">
                        <a href="/files/parts-avtoritet.xls">
                            <img src="/img/xls.png">
                            <b>Запчасти Т-40, ЛТЗ</b>
                        </a>
                    </span>
                    <span class="ie_2">
                        <a href="/files/avtoritet-en.xls">
                            <img src="/img/xls.png">
                            <b>Parts Т-40, ЛТЗ</b>
                        </a>
                    </span>
                </div>
            </p>
            ' . $description . '
        </div>';
    
    echo $html;
?>