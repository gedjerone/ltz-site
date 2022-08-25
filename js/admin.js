const file = document.querySelector('.main-img');
const file_content = document.querySelector('#file-input');
const products_submit = document.querySelector('.products_submit');
var product_select = document.querySelector('.products_select');
var prod_weight = document.querySelector('.prod_weight');
var prod_catnum = document.querySelector('.prod_catnum');
var prod_name = document.querySelector('.name');
var prod_price = document.querySelector('.price');
var product_select_edit = document.querySelector('#edit_prod');
var table = document.querySelector('.t_bd');

file.addEventListener('click', () => {
    file_content.click();
});

function validate_products(prod_weight, prod_catnum, prod_name, prod_price) {

    if (product_select.value == "Выберите категорию из списка") {
        alert("Чтобы продолжить необходимо выбрать категорию из списка");
        return false;
    }

    if (!prod_catnum.value.match(/[А-Я]/g) && !prod_catnum.value.match(/[а-я]/g) && !prod_catnum.value.match(/[A-Z]/g) && !prod_catnum.value.match(/[a-z]/g) && !prod_catnum.value.match(/[0-9]/g)) {
        prod_catnum.value = "—";
    }

    if (prod_weight.value >= 0 && !prod_weight.value.match(/-/g) && prod_weight.value.match(/[0-9]/g)) {
        if (prod_name.value.match(/[А-Я]/g) || prod_name.value.match(/[а-я]/g) || prod_name.value.match(/[A-Z]/g) || prod_name.value.match(/[a-z]/g)) {
            if (prod_price.value > 0 && !prod_price.value.match(/-/g) && prod_price.value.match(/[0-9]/g)) {
                return true;
            } else {
                alert("Цена не может быть равна нулю");
                prod_price.value = '';
                return false;
            }
        } else {
            alert("Название товара не может быть пустым");
            prod_name.value = '';
            return false;
        }
    } else {
        alert("Вес не может быть меньше нуля");
        prod_weight.value = '';
        return false;
    }
}

function small_validator(prod_weight, prod_catnum, prod_name, prod_price) {
    if (!prod_catnum.value.match(/[А-Я]/g) && !prod_catnum.value.match(/[а-я]/g) && !prod_catnum.value.match(/[A-Z]/g) && !prod_catnum.value.match(/[a-z]/g) && !prod_catnum.value.match(/[0-9]/g)) {
        prod_catnum.value = prod_catnum.placeholder;
    }
    if (prod_weight.value < 0 || prod_weight.value.match(/-/g) || !prod_weight.value.match(/[0-9]/g)) {
        prod_weight.value = prod_weight.placeholder;
    }
    if (!prod_catnum.value.match(/[А-Я]/g) && !prod_name.value.match(/[а-я]/g) && !prod_catnum.value.match(/[A-Z]/g) && !prod_name.value.match(/[a-z]/g)) {
        prod_name.value = prod_name.placeholder;
    }
    if (prod_price.value <= 0 || prod_price.value.match(/-/g) || !prod_price.value.match(/[0-9]/g)) {
        prod_price.value = prod_price.placeholder;
    }
}

products_submit.addEventListener('click', () => {
    if (validate_products(prod_weight, prod_catnum, prod_name, prod_price) == true) {
        $.ajax({
            url: 'products.php',
            type: 'POST',
            data: { 'req_type': "add", 'category': product_select.value, 'prod_weight': prod_weight.value, 'prod_catnum': prod_catnum.value, 'name': prod_name.value, 'price': prod_price.value },
            success: () => {
                alert("Товар успешнго добавлен в Прайс-листы!");
                prod_weight.value = '';
                prod_catnum.value = '';
                prod_name.value = '';
                prod_price.value = '';
            }
        });
    }
});

function input_sql(category) {
    $.ajax({
        url: 'products_admin_render.php',
        type: 'POST',
        data: { 'category': category },
        dataType: 'html',
        async: false,
        success: function(response) {
            $('#Каталоги_collection').after($(response));
            var field_gr = document.querySelectorAll('.text-field__group');
            field_gr.forEach(element => {
                element.addEventListener("click", function(event) {
                    if (event.target.closest('.edit')) {
                        console.log("Edit button ID: " + event.target.id);
                        update_sql(element, category, event.target.id);
                    }
                    if (event.target.closest('.delete')) {
                        console.log("Delete button ID: " + event.target.id);
                        delete_sql(element, category, event.target.id);
                    }
                });
            });
        }
    });
}

function update_sql(element, category, id) {
    let element_prod_weight = element.parentNode.parentNode.parentNode.querySelector(".prod_weight");
    let element_prod_catnum = element.parentNode.parentNode.parentNode.querySelector(".prod_catnum");
    let element_name = element.parentNode.parentNode.parentNode.querySelector(".name");
    let element_price = element.parentNode.parentNode.parentNode.querySelector(".price");
    small_validator(element_prod_weight, element_prod_catnum, element_name, element_price);
    $.ajax({
        url: 'products.php',
        type: 'POST',
        async: false,
        data: { 'req_type': "edit", 'id': id, 'category': category, 'prod_weight': element_prod_weight.value, 'prod_catnum': element_prod_catnum.value, 'name': element_name.value, 'price': element_price.value },
        success: () => {
            alert("Товар успешнго изменён!");
        }
    });
    table.childNodes.forEach((element) => {
        if (element.id != "Каталоги_collection") {
            element.remove();
        }
    });
    input_sql(category);
}

function delete_sql(element, category, id) {
    $.ajax({
        url: 'products.php',
        type: 'POST',
        async: false,
        data: { 'req_type': "delete", 'id': id },
        success: () => {
            alert("Товар успешнго удалён!");
        }
    });
    table.childNodes.forEach((element) => {
        if (element.id != "Каталоги_collection") {
            element.remove();
        }
    });
    input_sql(category);
}

product_select_edit.addEventListener('change', () => {
    if (product_select_edit.value == "Выберите категорию из списка") {
        alert("Чтобы продолжить необходимо выбрать категорию из списка");
    } else {

        table.childNodes.forEach((element) => {
            if (element.id != "Каталоги_collection") {
                element.remove();
            }
        })

        var category = '';
        if (product_select_edit.value == 1) {
            category = 'Каталоги';
        } else if (product_select_edit.value == 2) {
            category = 'Стекла';
        } else if (product_select_edit.value == 3) {
            category = 'Кабина';
        } else if (product_select_edit.value == 4) {
            category = 'Узлы_и_агрегаты';
        } else if (product_select_edit.value == 5) {
            category = 'ПД';
        } else if (product_select_edit.value == 6) {
            category = 'Прочее';
        } else if (product_select_edit.value == 7) {
            category = 'Сальники_прокладки';
        } else if (product_select_edit.value == 8) {
            category = 'Ремкомплекты';
        } else if (product_select_edit.value == 9) {
            category = 'Т-40_ЛТЗ_Запасные_части';
        } else if (product_select_edit.value == 10) {
            category = 'Д-144_двигатель_в_сборе';
        } else if (product_select_edit.value == 11) {
            category = 'Электрооборудование';
        } else if (product_select_edit.value == 12) {
            category = 'Комплекты_прокладок_Д-144';
        } else if (product_select_edit.value == 13) {
            category = 'Д-144_Запасные_части';
        }
    }

    input_sql(category);

});

var item_rubric = document.querySelector('.rubric');
var item_title = document.querySelector('.title_input');
var item_catalog = document.querySelector('.catalog_input');
var item_info_1 = document.querySelector('.info_1');
var item_info_2 = document.querySelector('.info_2');
var item_info_3 = document.querySelector('.info_3');
var item_description = document.querySelector('.description_input');
var item_img_1 = document.querySelector('.img_1');
var item_img_2 = document.querySelector('.img_2');
var item_img_3 = document.querySelector('.img_3');
var item_img_4 = document.querySelector('.img_4');
var item_img_5 = document.querySelector('.img_5');
var item_img_6 = document.querySelector('.img_6');

function dump_item() {
    if (item_title.value == "") {
        alert("Введите название");
    } else {
        if (item_img_1.files.length == 0) {
            alert("Необходимо добавить хотя бы одну фотографию");
        } else {
            if (item_description.value != "") {
                var searchRegExp = /\n/g;
                var replaceWith = '<br>';
                item_description.value = item_description.value.replace(searchRegExp, replaceWith);
            }
            var img_1 = "";
            var img_2 = "";
            var img_3 = "";
            var img_4 = "";
            var img_5 = "";
            var img_6 = "";
            if (item_img_2.files.length != 0) {
                if (item_img_3.files.length != 0) {
                    if (item_img_4.files.length != 0) {
                        if (item_img_5.files.length != 0) {
                            if (item_img_6.files.length != 0) {
                                //AJAX JQUERRY IMG (6)
                                var myFormData = new FormData();
                                myFormData.append('pictureFile[]', item_img_1.files[0]);
                                myFormData.append('pictureFile[]', item_img_2.files[0]);
                                myFormData.append('pictureFile[]', item_img_3.files[0]);
                                myFormData.append('pictureFile[]', item_img_4.files[0]);
                                myFormData.append('pictureFile[]', item_img_5.files[0]);
                                myFormData.append('pictureFile[]', item_img_6.files[0]);
                                $.ajax({
                                    url: 'upload.php',
                                    type: 'POST',
                                    processData: false,
                                    contentType: false,
                                    dataType: 'json',
                                    data: myFormData
                                });
                                img_1 = item_img_1.files[0].name;
                                img_2 = item_img_2.files[0].name;
                                img_3 = item_img_3.files[0].name;
                                img_4 = item_img_4.files[0].name;
                                img_5 = item_img_5.files[0].name;
                                img_6 = item_img_6.files[0].name;
                            } else {
                                //AJAX JQUERRY IMG (5)
                                var myFormData = new FormData();
                                myFormData.append('pictureFile[]', item_img_1.files[0]);
                                myFormData.append('pictureFile[]', item_img_2.files[0]);
                                myFormData.append('pictureFile[]', item_img_3.files[0]);
                                myFormData.append('pictureFile[]', item_img_4.files[0]);
                                myFormData.append('pictureFile[]', item_img_5.files[0]);
                                $.ajax({
                                    url: 'upload.php',
                                    type: 'POST',
                                    processData: false,
                                    contentType: false,
                                    dataType: 'json',
                                    data: myFormData
                                });
                                img_1 = item_img_1.files[0].name;
                                img_2 = item_img_2.files[0].name;
                                img_3 = item_img_3.files[0].name;
                                img_4 = item_img_4.files[0].name;
                                img_5 = item_img_5.files[0].name;
                            }
                        } else {
                            //AJAX JQUERRY IMG (4)
                            var myFormData = new FormData();
                            myFormData.append('pictureFile[]', item_img_1.files[0]);
                            myFormData.append('pictureFile[]', item_img_2.files[0]);
                            myFormData.append('pictureFile[]', item_img_3.files[0]);
                            myFormData.append('pictureFile[]', item_img_4.files[0]);
                            $.ajax({
                                url: 'upload.php',
                                type: 'POST',
                                processData: false,
                                contentType: false,
                                dataType: 'json',
                                data: myFormData
                            });
                            img_1 = item_img_1.files[0].name;
                            img_2 = item_img_2.files[0].name;
                            img_3 = item_img_3.files[0].name;
                            img_4 = item_img_4.files[0].name;
                        }
                    } else {
                        //AJAX JQUERRY IMG (3)
                        var myFormData = new FormData();
                        myFormData.append('pictureFile[]', item_img_1.files[0]);
                        myFormData.append('pictureFile[]', item_img_2.files[0]);
                        myFormData.append('pictureFile[]', item_img_3.files[0]);
                        $.ajax({
                            url: 'upload.php',
                            type: 'POST',
                            processData: false,
                            contentType: false,
                            dataType: 'json',
                            data: myFormData
                        });
                        img_1 = item_img_1.files[0].name;
                        img_2 = item_img_2.files[0].name;
                        img_3 = item_img_3.files[0].name;
                    }
                } else {
                    //AJAX JQUERRY IMG (2)
                    var myFormData = new FormData();
                    myFormData.append('pictureFile[]', item_img_1.files[0]);
                    myFormData.append('pictureFile[]', item_img_2.files[0]);
                    $.ajax({
                        url: 'upload.php',
                        type: 'POST',
                        processData: false,
                        contentType: false,
                        dataType: 'json',
                        data: myFormData
                    });
                    img_1 = item_img_1.files[0].name;
                    img_2 = item_img_2.files[0].name;
                }
            } else {
                //AJAX JQUERRY IMG (1)
                var myFormData = new FormData();
                myFormData.append('pictureFile[]', item_img_1.files[0]);
                $.ajax({
                    url: 'upload.php',
                    type: 'POST',
                    processData: false,
                    contentType: false,
                    dataType: 'json',
                    data: myFormData
                });
                img_1 = item_img_1.files[0].name;
            }
            //AJAX JQUERRY SQL
            $.ajax({
                url: 'upload_item.php',
                type: 'POST',
                data: {
                    'req_type': "add",
                    'title': item_title.value,
                    'option': item_rubric.value,
                    'catalog_id': item_catalog.value,
                    'info_1': item_info_1.value,
                    'info_2': item_info_2.value,
                    'info_3': item_info_3.value,
                    'description': item_description.value,
                    'img_1': img_1,
                    'img_2': img_2,
                    'img_3': img_3,
                    'img_4': img_4,
                    'img_5': img_5,
                    'img_6': img_6
                },
                success: () => {
                    alert("Товар успешнго добавлен в Продукция!");
                    item_title.value = "";
                    item_rubric.value = "";
                    item_catalog.value = "";
                    item_info_1.value = "";
                    item_info_2.value = "";
                    item_info_3.value = "";
                    item_description.value = "";
                }
            });
        }
    }
}

var item_add_btn = document.querySelector('.items_submit');
item_add_btn.addEventListener('click', () => {
    dump_item();
});

function render_items_title() {
    $.ajax({
        url: 'item_admin_render.php',
        type: 'POST',
        data: { 'req_type': 'title' },
        dataType: 'html',
        async: false,
        success: function(response) {
            $('.after_option').after($(response));
        }
    });
}

function render_item_edit(id) {
    $.ajax({
        url: 'item_admin_render.php',
        type: 'POST',
        data: { 'req_type': 'render', 'id': id },
        dataType: 'html',
        async: false,
        success: function(response) {
            $('.item_editor').html($(response));
            document.querySelectorAll('#text-area-input').forEach(element => {
                element.value = "";
            });
            var item_description_edit = document.querySelector('.description_edit');
            if (item_description_edit.placeholder != "") {
                var searchRegExp = /<br>/g;
                var replaceWith = '\n';
                item_description_edit.placeholder = item_description_edit.placeholder.replace(searchRegExp, replaceWith);
            }
        }
    });
}

document.addEventListener("DOMContentLoaded", render_items_title());

document.querySelector('.rubric2').addEventListener('change', () => {
    render_item_edit(document.querySelector('.rubric2').value);
});

document.querySelectorAll('#text-area-input').forEach(element => {
    element.value = "";
});

var add_one = document.querySelectorAll('.add_one');

add_one.forEach(element => {
    element.addEventListener('click', () => {
        if (element.parentNode.children[0].classList[1] == "info_1") {
            document.querySelector('.info_2').style.display = "inline-block";
            document.querySelector('.info_2').parentNode.children[1].style.display = "inline-block";
            element.style.display = "none";
        }
        if (element.parentNode.children[0].classList[1] == "info_2") {
            document.querySelector('.info_3').style.display = "inline-block";
            element.style.display = "none";
        }
        if (element.parentNode.children[0].classList[1] == "img_1") {
            document.querySelector('.img_2').style.display = "inline-block";
            document.querySelector('.img_2').parentNode.children[1].style.display = "inline-block";
            element.style.display = "none";
        }
        if (element.parentNode.children[0].classList[1] == "img_2") {
            document.querySelector('.img_3').style.display = "inline-block";
            document.querySelector('.img_3').parentNode.children[1].style.display = "inline-block";
            element.style.display = "none";
        }
        if (element.parentNode.children[0].classList[1] == "img_3") {
            document.querySelector('.img_4').style.display = "inline-block";
            document.querySelector('.img_4').parentNode.children[1].style.display = "inline-block";
            element.style.display = "none";
        }
        if (element.parentNode.children[0].classList[1] == "img_4") {
            document.querySelector('.img_5').style.display = "inline-block";
            document.querySelector('.img_5').parentNode.children[1].style.display = "inline-block";
            element.style.display = "none";
        }
        if (element.parentNode.children[0].classList[1] == "img_5") {
            document.querySelector('.img_6').style.display = "inline-block";
            element.style.display = "none";
        }
    });
});

function edit_item() {
    var item_description_edit = document.querySelector('.description_edit');
    if (item_description_edit.placeholder != "") {
        var searchRegExp = /\n/g;
        var replaceWith = '<br>';
        item_description_edit.placeholder = item_description_edit.placeholder.replace(searchRegExp, replaceWith);
    }
    var edit_img_1 = document.querySelectorAll('.img_edit')[0];
    var edit_img_2 = document.querySelectorAll('.img_edit')[1];
    var edit_img_3 = document.querySelectorAll('.img_edit')[2];
    var edit_img_4 = document.querySelectorAll('.img_edit')[3];
    var edit_img_5 = document.querySelectorAll('.img_edit')[4];
    var edit_img_6 = document.querySelectorAll('.img_edit')[5];
    var img_1 = "";
    var img_2 = "";
    var img_3 = "";
    var img_4 = "";
    var img_5 = "";
    var img_6 = "";
    if (edit_img_1.files.length != 0) {
        var myFormData = new FormData();
        myFormData.append('pictureFile[]', edit_img_1.files[0]);
        $.ajax({
            url: 'upload.php',
            type: 'POST',
            processData: false,
            contentType: false,
            dataType: 'json',
            data: myFormData
        });
        img_1 = "/items_img/" + edit_img_1.files[0].name;
    }
    if (edit_img_2.files.length != 0) {
        var myFormData = new FormData();
        myFormData.append('pictureFile[]', edit_img_2.files[0]);
        $.ajax({
            url: 'upload.php',
            type: 'POST',
            processData: false,
            contentType: false,
            dataType: 'json',
            data: myFormData
        });
        img_2 = "/items_img/" + edit_img_2.files[0].name;
    }
    if (edit_img_3.files.length != 0) {
        var myFormData = new FormData();
        myFormData.append('pictureFile[]', edit_img_3.files[0]);
        $.ajax({
            url: 'upload.php',
            type: 'POST',
            processData: false,
            contentType: false,
            dataType: 'json',
            data: myFormData
        });
        img_3 = "/items_img/" + edit_img_3.files[0].name;
    }
    if (edit_img_4.files.length != 0) {
        var myFormData = new FormData();
        myFormData.append('pictureFile[]', edit_img_4.files[0]);
        $.ajax({
            url: 'upload.php',
            type: 'POST',
            processData: false,
            contentType: false,
            dataType: 'json',
            data: myFormData
        });
        img_4 = "/items_img/" + edit_img_4.files[0].name;
    }
    if (edit_img_5.files.length != 0) {
        var myFormData = new FormData();
        myFormData.append('pictureFile[]', edit_img_5.files[0]);
        $.ajax({
            url: 'upload.php',
            type: 'POST',
            processData: false,
            contentType: false,
            dataType: 'json',
            data: myFormData
        });
        img_5 = "/items_img/" + edit_img_5.files[0].name;
    }
    if (edit_img_6.files.length != 0) {
        var myFormData = new FormData();
        myFormData.append('pictureFile[]', edit_img_6.files[0]);
        $.ajax({
            url: 'upload.php',
            type: 'POST',
            processData: false,
            contentType: false,
            dataType: 'json',
            data: myFormData
        });
        img_6 = "/items_img/" + edit_img_6.files[0].name;
    }
    var title_edit = document.querySelector('.title_edit').value;
    var catalog_edit = document.querySelector('.catalog_edit').value;
    var info_edit_1 = document.querySelectorAll('.info_edit')[0].value;
    var info_edit_2 = document.querySelectorAll('.info_edit')[1].value;
    var info_edit_3 = document.querySelectorAll('.info_edit')[2].value;
    var description_edit = document.querySelector('.description_edit').value;
    if (document.querySelector('.title_edit').value == "") {
        title_edit = document.querySelector('.title_edit').placeholder;
    }
    if (document.querySelector('.catalog_edit').value == "") {
        catalog_edit = document.querySelector('.catalog_edit').placeholder;
    }
    if (document.querySelectorAll('.info_edit')[0].value == "") {
        info_edit_1 = document.querySelectorAll('.info_edit')[0].placeholder;
    }
    if (document.querySelectorAll('.info_edit')[1].value == "") {
        info_edit_2 = document.querySelectorAll('.info_edit')[1].placeholder;
    }
    if (document.querySelectorAll('.info_edit')[2].value == "") {
        info_edit_3 = document.querySelectorAll('.info_edit')[2].placeholder;
    }
    if (document.querySelector('.description_edit').value == "") {
        description_edit = document.querySelector('.description_edit').placeholder;
    }
    if (edit_img_1.files.length == 0) {
        img_1 = document.querySelector('#img_edit_1').name;
    }
    if (edit_img_2.files.length == 0) {
        img_2 = document.querySelector('#img_edit_2').name;
    }
    if (edit_img_3.files.length == 0) {
        img_3 = document.querySelector('#img_edit_3').name;
    }
    if (edit_img_4.files.length == 0) {
        img_4 = document.querySelector('#img_edit_4').name;
    }
    if (edit_img_5.files.length == 0) {
        img_5 = document.querySelector('#img_edit_5').name;
    }
    if (edit_img_6.files.length == 0) {
        img_6 = document.querySelector('#img_edit_6').name;
    }
    //console.log(document.querySelector('.rubric2').value, title_edit, catalog_edit, info_edit_1, info_edit_2, info_edit_3, description_edit, img_1, img_2, img_3, img_4, img_5, img_6);
    $.ajax({
        url: 'upload_item.php',
        type: 'POST',
        data: {
            'req_type': "edit",
            'id': document.querySelector('.rubric2').value,
            'title': title_edit,
            'catalog_id': catalog_edit,
            'info_1': info_edit_1,
            'info_2': info_edit_2,
            'info_3': info_edit_3,
            'description': description_edit,
            'img_1': img_1,
            'img_2': img_2,
            'img_3': img_3,
            'img_4': img_4,
            'img_5': img_5,
            'img_6': img_6
        },
        success: () => {
            alert("Товар успешнго изменён!");
        }
    });
}

function delete_item() {
    $.ajax({
        url: 'upload_item.php',
        type: 'POST',
        data: {
            'req_type': "delete",
            'id': document.querySelector('.rubric2').value,
        },
        success: () => {
            alert("Товар успешнго удалён!");
        }
    });
}

var item_edit_btn = document.querySelector('.items_edit');
item_edit_btn.addEventListener('click', () => {
    edit_item();
});
var item_delete_btn = document.querySelector('.items_delete');
item_delete_btn.addEventListener('click', () => {
    delete_item();
});