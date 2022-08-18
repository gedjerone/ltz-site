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