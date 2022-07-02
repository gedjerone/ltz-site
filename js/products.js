const CATEGORIES = [
    "Каталоги",
    "Стекла",
    "Кабина",
    "Узлы_и_агрегаты",
    "ПД",
    "Прочее",
    "Сальники_прокладки",
    "Ремкомплекты",
    "Т-40_ЛТЗ_Запасные_части",
    "Д-144_двигатель_в_сборе",
    "Электрооборудование",
    "Комплекты_прокладок_Д-144",
    "Д-144_Запасные_части"
]
class Products {

    constructor() {
        this.htmlCatalog_Catalogs = '';
        this.htmlCatalog_Glass = '';
        this.htmlCatalog_Cab = '';
        this.htmlCatalog_Agreg = '';
        this.htmlCatalog_PD = '';
        this.htmlCatalog_Other = '';
        this.htmlCatalog_Sal = '';
        this.htmlCatalog_Kits = '';
        this.htmlCatalog_T40LTZ_Parts = '';
        this.htmlCatalog_D144_Engine = '';
        this.htmlCatalog_Electr = '';
        this.htmlCatalog_D144_Prok = '';
        this.htmlCatalog_D144_Parts = '';
    }

    render() {
        const html = `
            <table class="cart_content tb-1">
                <thead>
                    <tr>
                        <th scope="col">Вес</th>
                        <th scope="col">№ по каталогу</th>
                        <th scope="col">Наименование</th>
                        <th scope="col">Цена с НДС, руб</th>
                        <th scope="col"> </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="category" id="Каталоги_collection">
                        <td colspan="5" scope="row">
                            <input type="checkbox" class="hider" id="Каталоги_check" autocomplete="off" checked="true">
                            <img class="hider_up" src="img/icons8-chevron-up-48.png">Каталоги
                        </td>
                    </tr>
                    ${this.htmlCatalog_Catalogs}
                    <tr class="category" id="Стекла_collection">
                        <td colspan="5" scope="row">
                            <input type="checkbox" class="hider" id="Стекла_check" autocomplete="off" checked="true">
                            <img class="hider_up" src="img/icons8-chevron-up-48.png">Стекла
                        </td>
                    </tr>
                    ${this.htmlCatalog_Glass}
                    <tr class="category" id="Кабина_collection">
                        <td colspan="5" scope="row">
                            <input type="checkbox" class="hider" id="Кабина_check" autocomplete="off" checked="true">
                            <img class="hider_up" src="img/icons8-chevron-up-48.png">Кабина
                        </td>
                    </tr>
                    ${this.htmlCatalog_Cab}
                    <tr class="category" id="Узлы_и_агрегаты_collection">
                        <td colspan="5" scope="row">
                            <input type="checkbox" class="hider" id="Узлы_и_агрегаты_check" autocomplete="off" checked="true">
                            <img class="hider_up" src="img/icons8-chevron-up-48.png">Узлы и агрегаты
                        </td>
                    </tr>
                    ${this.htmlCatalog_Agreg}
                    <tr class="category" id="ПД_collection">
                        <td colspan="5" scope="row">
                            <input type="checkbox" class="hider" id="ПД_check" autocomplete="off" checked="true">
                            <img class="hider_up" src="img/icons8-chevron-up-48.png">ПД
                        </td>
                    </tr>
                    ${this.htmlCatalog_PD}
                    <tr class="category" id="Прочее_collection">
                        <td colspan="5" scope="row">
                            <input type="checkbox" class="hider" id="Прочее_check" autocomplete="off" checked="true">
                            <img class="hider_up" src="img/icons8-chevron-up-48.png">Прочее
                        </td>
                    </tr>
                    ${this.htmlCatalog_Other}
                    <tr class="category" id="Сальники_прокладки_collection">
                        <td colspan="5" scope="row">
                            <input type="checkbox" class="hider" id="Сальники_прокладки_check" autocomplete="off" checked="true">
                            <img class="hider_up" src="img/icons8-chevron-up-48.png">Сальники/прокладки
                        </td>
                    </tr>
                    ${this.htmlCatalog_Sal}
                    <tr class="category" id="Ремкомплекты_collection">
                        <td colspan="5" scope="row">
                            <input type="checkbox" class="hider" id="Ремкомплекты_check" autocomplete="off" checked="true">
                            <img class="hider_up" src="img/icons8-chevron-up-48.png">Ремкомплекты
                        </td>
                    </tr>
                    ${this.htmlCatalog_Kits}
                    <tr class="category" id="Т-40_ЛТЗ_Запасные_части_collection">
                        <td colspan="5" scope="row">
                            <input type="checkbox" class="hider" id="Т-40_ЛТЗ_Запасные_части_check" autocomplete="off" checked="true">
                            <img class="hider_up" src="img/icons8-chevron-up-48.png">Т-40,ЛТЗ Запасные части
                        </td>
                    </tr>
                    ${this.htmlCatalog_T40LTZ_Parts}
                    <tr class="category" id="Д-144_двигатель_в_сборе_collection">
                        <td colspan="5" scope="row">
                            <input type="checkbox" class="hider" id="Д-144_двигатель_в_сборе_check" autocomplete="off" checked="true">
                            <img class="hider_up" src="img/icons8-chevron-up-48.png">Д-144 двигатель в сборе
                        </td>
                    </tr>
                    ${this.htmlCatalog_D144_Engine}
                    <tr class="category" id="Электрооборудование_collection">
                        <td colspan="5" scope="row">
                            <input type="checkbox" class="hider" id="Электрооборудование_check" autocomplete="off" checked="true">
                            <img class="hider_up" src="img/icons8-chevron-up-48.png">Электрооборудование
                        </td>
                    </tr>
                    ${this.htmlCatalog_Electr}
                    <tr class="category" id="Комплекты_прокладок_Д-144_collection">
                        <td colspan="5" scope="row">
                            <input type="checkbox" class="hider" id="Комплекты_прокладок_Д-144_check" autocomplete="off" checked="true">
                            <img class="hider_up" src="img/icons8-chevron-up-48.png">Комплекты прокладок Д-144
                        </td>
                    </tr>
                    ${this.htmlCatalog_D144_Prok}
                    <tr class="category" id="Д-144_Запасные_части_collection">
                        <td colspan="5" scope="row">
                            <input type="checkbox" class="hider" id="Д-144_Запасные_части_check" autocomplete="off" checked="true">
                            <img class="hider_up" src="img/icons8-chevron-up-48.png">Д-144 Запасные части
                        </td>
                    </tr>
                    ${this.htmlCatalog_D144_Parts}
                </tbody>
            </table>
            `;

        document.getElementById('catalog').innerHTML = html;
    }

    render_Catalogs() {
        Catalogs.forEach(({ id, category, weight, catalog_id, title, price }) => {
            this.htmlCatalog_Catalogs += `
            <tr class="Каталоги" id="Каталоги">
                <td scope="row" data-label="Вес">${weight}</td>
                <td data-label="№ по каталогу">${catalog_id}</td>
                <td data-label="Наименование">${title}</td>
                <td data-label="Цена с НДС, руб">${price}</td>
                <td data-label=" ">
                    <div class="counter">
                        <div class="text-field__group">
                            <div class="hidden_id">${id}</div>
                            <input class="text-field__input" type="add" id="add" name="add" placeholder="Количество">
                            <button class="text-field__btn" type="button">Добавить в корзину</button>
                            <button class="text-field__btn_2_hide" type="button">Удалить из корзины</button>
                        </div>
                    </div>
                </td>  
            </tr>              
            `;
        });
    }

    render_Glass() {
        Glass.forEach(({ id, category, weight, catalog_id, title, price }) => {
            this.htmlCatalog_Glass += `
            <tr class="Стекла" id="Стекла">
                <td scope="row" data-label="Вес">${weight}</td>
                <td data-label="№ по каталогу">${catalog_id}</td>
                <td data-label="Наименование">${title}</td>
                <td data-label="Цена с НДС, руб">${price}</td>
                <td data-label=" ">
                    <div class="counter">
                        <div class="text-field__group">
                            <div class="hidden_id">${id}</div>
                            <input class="text-field__input" type="add" id="add" name="add" placeholder="Количество">
                            <button class="text-field__btn" type="button">Добавить в корзину</button>
                            <button class="text-field__btn_2_hide" type="button">Удалить из корзины</button>
                        </div>
                    </div>
                </td>  
            </tr>              
            `;
        });
    }

    render_Cab() {
        Cab.forEach(({ id, category, weight, catalog_id, title, price }) => {
            this.htmlCatalog_Cab += `
            <tr class="Кабина" id="Кабина">
                <td scope="row" data-label="Вес">${weight}</td>
                <td data-label="№ по каталогу">${catalog_id}</td>
                <td data-label="Наименование">${title}</td>
                <td data-label="Цена с НДС, руб">${price}</td>
                <td data-label=" ">
                    <div class="counter">
                        <div class="text-field__group">
                            <div class="hidden_id">${id}</div>
                            <input class="text-field__input" type="add" id="add" name="add" placeholder="Количество">
                            <button class="text-field__btn" type="button">Добавить в корзину</button>
                            <button class="text-field__btn_2_hide" type="button">Удалить из корзины</button>
                        </div>
                    </div>
                </td>  
            </tr>              
            `;
        });
    }

    render_Agreg() {
        Agreg.forEach(({ id, category, weight, catalog_id, title, price }) => {
            this.htmlCatalog_Agreg += `
            <tr class="Узлы_и_агрегаты" id="Узлы_и_агрегаты">
                <td scope="row" data-label="Вес">${weight}</td>
                <td data-label="№ по каталогу">${catalog_id}</td>
                <td data-label="Наименование">${title}</td>
                <td data-label="Цена с НДС, руб">${price}</td>
                <td data-label=" ">
                    <div class="counter">
                        <div class="text-field__group">
                            <div class="hidden_id">${id}</div>
                            <input class="text-field__input" type="add" id="add" name="add" placeholder="Количество">
                            <button class="text-field__btn" type="button">Добавить в корзину</button>
                            <button class="text-field__btn_2_hide" type="button">Удалить из корзины</button>
                        </div>
                    </div>
                </td>  
            </tr>              
            `;
        });
    }

    render_PD() {
        PD.forEach(({ id, category, weight, catalog_id, title, price }) => {
            this.htmlCatalog_PD += `
            <tr class="ПД" id="ПД">
                <td scope="row" data-label="Вес">${weight}</td>
                <td data-label="№ по каталогу">${catalog_id}</td>
                <td data-label="Наименование">${title}</td>
                <td data-label="Цена с НДС, руб">${price}</td>
                <td data-label=" ">
                    <div class="counter">
                        <div class="text-field__group">
                            <div class="hidden_id">${id}</div>
                            <input class="text-field__input" type="add" id="add" name="add" placeholder="Количество">
                            <button class="text-field__btn" type="button">Добавить в корзину</button>
                            <button class="text-field__btn_2_hide" type="button">Удалить из корзины</button>
                        </div>
                    </div>
                </td>  
            </tr>              
            `;
        });
    }

    render_Other() {
        Other.forEach(({ id, category, weight, catalog_id, title, price }) => {
            this.htmlCatalog_Other += `
            <tr class="Прочее" id="Прочее">
                <td scope="row" data-label="Вес">${weight}</td>
                <td data-label="№ по каталогу">${catalog_id}</td>
                <td data-label="Наименование">${title}</td>
                <td data-label="Цена с НДС, руб">${price}</td>
                <td data-label=" ">
                    <div class="counter">
                        <div class="text-field__group">
                            <div class="hidden_id">${id}</div>
                            <input class="text-field__input" type="add" id="add" name="add" placeholder="Количество">
                            <button class="text-field__btn" type="button">Добавить в корзину</button>
                            <button class="text-field__btn_2_hide" type="button">Удалить из корзины</button>
                        </div>
                    </div>
                </td>  
            </tr>              
            `;
        });
    }

    render_Sal() {
        Sal.forEach(({ id, category, weight, catalog_id, title, price }) => {
            this.htmlCatalog_Sal += `
            <tr class="Сальники_прокладки" id="Сальники_прокладки">
                <td scope="row" data-label="Вес">${weight}</td>
                <td data-label="№ по каталогу">${catalog_id}</td>
                <td data-label="Наименование">${title}</td>
                <td data-label="Цена с НДС, руб">${price}</td>
                <td data-label=" ">
                    <div class="counter">
                        <div class="text-field__group">
                            <div class="hidden_id">${id}</div>
                            <input class="text-field__input" type="add" id="add" name="add" placeholder="Количество">
                            <button class="text-field__btn" type="button">Добавить в корзину</button>
                            <button class="text-field__btn_2_hide" type="button">Удалить из корзины</button>
                        </div>
                    </div>
                </td>  
            </tr>              
            `;
        });
    }

    render_Kits() {
        Kits.forEach(({ id, category, weight, catalog_id, title, price }) => {
            this.htmlCatalog_Kits += `
            <tr class="Ремкомплекты" id="Ремкомплекты">
                <td scope="row" data-label="Вес">${weight}</td>
                <td data-label="№ по каталогу">${catalog_id}</td>
                <td data-label="Наименование">${title}</td>
                <td data-label="Цена с НДС, руб">${price}</td>
                <td data-label=" ">
                    <div class="counter">
                        <div class="text-field__group">
                            <div class="hidden_id">${id}</div>
                            <input class="text-field__input" type="add" id="add" name="add" placeholder="Количество">
                            <button class="text-field__btn" type="button">Добавить в корзину</button>
                            <button class="text-field__btn_2_hide" type="button">Удалить из корзины</button>
                        </div>
                    </div>
                </td>  
            </tr>              
            `;
        });
    }

    render_T40LTZ_Parts() {
        T40LTZ_Parts.forEach(({ id, category, weight, catalog_id, title, price }) => {
            this.htmlCatalog_T40LTZ_Parts += `
            <tr class="Т-40_ЛТЗ_Запасные_части" id="Т-40_ЛТЗ_Запасные_части">
                <td scope="row" data-label="Вес">${weight}</td>
                <td data-label="№ по каталогу">${catalog_id}</td>
                <td data-label="Наименование">${title}</td>
                <td data-label="Цена с НДС, руб">${price}</td>
                <td data-label=" ">
                    <div class="counter">
                        <div class="text-field__group">
                            <div class="hidden_id">${id}</div>
                            <input class="text-field__input" type="add" id="add" name="add" placeholder="Количество">
                            <button class="text-field__btn" type="button">Добавить в корзину</button>
                            <button class="text-field__btn_2_hide" type="button">Удалить из корзины</button>
                        </div>
                    </div>
                </td>  
            </tr>              
            `;
        });
    }

    render_D144_Engine() {
        D144_Engine.forEach(({ id, category, weight, catalog_id, title, price }) => {
            this.htmlCatalog_D144_Engine += `
            <tr class="Д-144_двигатель_в_сборе" id="Д-144_двигатель_в_сборе">
                <td scope="row" data-label="Вес">${weight}</td>
                <td data-label="№ по каталогу">${catalog_id}</td>
                <td data-label="Наименование">${title}</td>
                <td data-label="Цена с НДС, руб">${price}</td>
                <td data-label=" ">
                    <div class="counter">
                        <div class="text-field__group">
                            <div class="hidden_id">${id}</div>
                            <input class="text-field__input" type="add" id="add" name="add" placeholder="Количество">
                            <button class="text-field__btn" type="button">Добавить в корзину</button>
                            <button class="text-field__btn_2_hide" type="button">Удалить из корзины</button>
                        </div>
                    </div>
                </td>  
            </tr>              
            `;
        });
    }

    render_Electr() {
        Electr.forEach(({ id, category, weight, catalog_id, title, price }) => {
            this.htmlCatalog_Electr += `
            <tr class="Электрооборудование" id="Электрооборудование">
                <td scope="row" data-label="Вес">${weight}</td>
                <td data-label="№ по каталогу">${catalog_id}</td>
                <td data-label="Наименование">${title}</td>
                <td data-label="Цена с НДС, руб">${price}</td>
                <td data-label=" ">
                    <div class="counter">
                        <div class="text-field__group">
                            <div class="hidden_id">${id}</div>
                            <input class="text-field__input" type="add" id="add" name="add" placeholder="Количество">
                            <button class="text-field__btn" type="button">Добавить в корзину</button>
                            <button class="text-field__btn_2_hide" type="button">Удалить из корзины</button>
                        </div>
                    </div>
                </td>  
            </tr>              
            `;
        });
    }

    render_D144_Prok() {
        D144_Prok.forEach(({ id, category, weight, catalog_id, title, price }) => {
            this.htmlCatalog_D144_Prok += `
            <tr class="Комплекты_прокладок_Д-144" id="Комплекты_прокладок_Д-144">
                <td scope="row" data-label="Вес">${weight}</td>
                <td data-label="№ по каталогу">${catalog_id}</td>
                <td data-label="Наименование">${title}</td>
                <td data-label="Цена с НДС, руб">${price}</td>
                <td data-label=" ">
                    <div class="counter">
                        <div class="text-field__group">
                            <div class="hidden_id">${id}</div>
                            <input class="text-field__input" type="add" id="add" name="add" placeholder="Количество">
                            <button class="text-field__btn" type="button">Добавить в корзину</button>
                            <button class="text-field__btn_2_hide" type="button">Удалить из корзины</button>
                        </div>
                    </div>
                </td>  
            </tr>              
            `;
        });
    }

    render_D144_Parts() {
        D144_Parts.forEach(({ id, category, weight, catalog_id, title, price }) => {
            this.htmlCatalog_D144_Parts += `
            <tr class="Д-144_Запасные_части" id="Д-144_Запасные_части">
                <td scope="row" data-label="Вес">${weight}</td>
                <td data-label="№ по каталогу">${catalog_id}</td>
                <td data-label="Наименование">${title}</td>
                <td data-label="Цена с НДС, руб">${price}</td>
                <td data-label=" ">
                    <div class="counter">
                        <div class="text-field__group">
                            <div class="hidden_id">${id}</div>
                            <input class="text-field__input" type="add" id="add" name="add" placeholder="Количество">
                            <button class="text-field__btn" type="button">Добавить в корзину</button>
                            <button class="text-field__btn_2_hide" type="button">Удалить из корзины</button>
                        </div>
                    </div>
                </td>  
            </tr>              
            `;
        });
    }
}

const products = new Products();
products.render();

const tr_collection = document.querySelectorAll('.category');

const checkbox_collection = document.querySelectorAll('.hider');

function validator(element, localStorageUtil) {
    if (element.querySelector('.text-field__input').value == "") {
        element.querySelector('.text-field__input').className = 'text-field__input invalid_field';
        element.querySelector('.text-field__btn').className = 'text-field__btn invalid_btn';
    } else if (isNaN(element.querySelector('.text-field__input').value) == false) {
        if (Number.isInteger(Number(element.querySelector('.text-field__input').value)) == false) {
            element.querySelector('.text-field__input').className = 'text-field__input invalid_field';
            element.querySelector('.text-field__btn').className = 'text-field__btn invalid_btn';
        } else if (Number(element.querySelector('.text-field__input').value) < 1) {
            element.querySelector('.text-field__input').className = 'text-field__input invalid_field';
            element.querySelector('.text-field__btn').className = 'text-field__btn invalid_btn';
        } else {
            element.querySelector('.text-field__input').className = 'text-field__input valid_field';
            element.querySelector('.text-field__btn').className = 'text-field__btn_hide';
            element.querySelector('.text-field__btn_2_hide').className = 'text-field__btn_2';
            localStorageUtil.putProducts(element.querySelector('.hidden_id').innerText, element.querySelector('.text-field__input').value);
        }
    } else if (isNaN(element.querySelector('.text-field__input').value) == true) {
        element.querySelector('.text-field__input').className = 'text-field__input invalid_field';
        element.querySelector('.text-field__btn').className = 'text-field__btn invalid_btn';
    }
}

function remove(element, localStorageUtil) {
    element.querySelector('.text-field__input').className = 'text-field__input';
    element.querySelector('.text-field__btn_hide').className = 'text-field__btn';
    element.querySelector('.text-field__btn_2').className = 'text-field__btn_2_hide';
    element.querySelector('.text-field__input').value = '';
    localStorageUtil.removeProducts(element.querySelector('.hidden_id').innerText);
}

checkbox_collection.forEach(element => {
    element.addEventListener('change', function(event) {
        if (event.target.closest('#Каталоги_check')) {
            if (document.getElementById('Каталоги_check').checked == false) {
                if (products.htmlCatalog_Catalogs == '') {
                    products.render_Catalogs();
                    $('#Каталоги_collection').after($(products.htmlCatalog_Catalogs));
                    var field_gr_0 = document.querySelectorAll('.text-field__group');
                    field_gr_0.forEach(element => {
                        element.addEventListener("click", function(event) {
                            if (event.target.closest('.text-field__btn')) {
                                validator(element, localStorageUtil);
                            }
                            if (event.target.closest('.text-field__btn_2')) {
                                remove(element, localStorageUtil);
                            }
                        });
                    });
                }
                document.querySelectorAll('#Каталоги').forEach((f) => {
                    f.className = "Каталоги";
                });
            } else {
                document.querySelectorAll('#Каталоги').forEach((t) => {
                    t.className = "disabled";
                });
            }
        }
    });
})

checkbox_collection.forEach(element => {
    element.addEventListener('change', function(event) {
        if (event.target.closest('#Стекла_check')) {
            if (document.getElementById('Стекла_check').checked == false) {
                if (products.htmlCatalog_Glass == '') {
                    products.render_Glass();
                    $('#Стекла_collection').after($(products.htmlCatalog_Glass));
                    var field_gr_1 = document.querySelectorAll('.text-field__group');
                    field_gr_1.forEach(element => {
                        element.addEventListener("click", function(event) {
                            if (event.target.closest('.text-field__btn')) {
                                validator(element, localStorageUtil);
                            }
                            if (event.target.closest('.text-field__btn_2')) {
                                remove(element, localStorageUtil);
                            }
                        });
                    });
                }
                document.querySelectorAll('#Стекла').forEach((f) => {
                    f.className = "Стекла";
                });
            } else {
                document.querySelectorAll('#Стекла').forEach((t) => {
                    t.className = "disabled";
                });
            }
        }
    });
})

checkbox_collection.forEach(element => {
    element.addEventListener('change', function(event) {
        if (event.target.closest('#Кабина_check')) {
            if (document.getElementById('Кабина_check').checked == false) {
                if (products.htmlCatalog_Cab == '') {
                    products.render_Cab();
                    $('#Кабина_collection').after($(products.htmlCatalog_Cab));
                    var field_gr_2 = document.querySelectorAll('.text-field__group');
                    field_gr_2.forEach(element => {
                        element.addEventListener("click", function(event) {
                            if (event.target.closest('.text-field__btn')) {
                                validator(element, localStorageUtil);
                            }
                            if (event.target.closest('.text-field__btn_2')) {
                                remove(element, localStorageUtil);
                            }
                        });
                    });
                }
                document.querySelectorAll('#Кабина').forEach((f) => {
                    f.className = "Кабина";
                });
            } else {
                document.querySelectorAll('#Кабина').forEach((t) => {
                    t.className = "disabled";
                });
            }
        }
    });
})

checkbox_collection.forEach(element => {
    element.addEventListener('change', function(event) {
        if (event.target.closest('#Узлы_и_агрегаты_check')) {
            if (document.getElementById('Узлы_и_агрегаты_check').checked == false) {
                if (products.htmlCatalog_Agreg == '') {
                    products.render_Agreg();
                    $('#Узлы_и_агрегаты_collection').after($(products.htmlCatalog_Agreg));
                    var field_gr_3 = document.querySelectorAll('.text-field__group');
                    field_gr_3.forEach(element => {
                        element.addEventListener("click", function(event) {
                            if (event.target.closest('.text-field__btn')) {
                                validator(element, localStorageUtil);
                            }
                            if (event.target.closest('.text-field__btn_2')) {
                                remove(element, localStorageUtil);
                            }
                        });
                    });
                }
                document.querySelectorAll('#Узлы_и_агрегаты').forEach((f) => {
                    f.className = "Узлы_и_агрегаты";
                });
            } else {
                document.querySelectorAll('#Узлы_и_агрегаты').forEach((t) => {
                    t.className = "disabled";
                });
            }
        }
    });
})

checkbox_collection.forEach(element => {
    element.addEventListener('change', function(event) {
        if (event.target.closest('#ПД_check')) {
            if (document.getElementById('ПД_check').checked == false) {
                if (products.htmlCatalog_PD == '') {
                    products.render_PD();
                    $('#ПД_collection').after($(products.htmlCatalog_PD));
                    var field_gr_4 = document.querySelectorAll('.text-field__group');
                    field_gr_4.forEach(element => {
                        element.addEventListener("click", function(event) {
                            if (event.target.closest('.text-field__btn')) {
                                validator(element, localStorageUtil);
                            }
                            if (event.target.closest('.text-field__btn_2')) {
                                remove(element, localStorageUtil);
                            }
                        });
                    });
                }
                document.querySelectorAll('#ПД').forEach((f) => {
                    f.className = "ПД";
                });
            } else {
                document.querySelectorAll('#ПД').forEach((t) => {
                    t.className = "disabled";
                });
            }
        }
    });
})

checkbox_collection.forEach(element => {
    element.addEventListener('change', function(event) {
        if (event.target.closest('#Прочее_check')) {
            if (document.getElementById('Прочее_check').checked == false) {
                if (products.htmlCatalog_Other == '') {
                    products.render_Other();
                    $('#Прочее_collection').after($(products.htmlCatalog_Other));
                    var field_gr_5 = document.querySelectorAll('.text-field__group');
                    field_gr_5.forEach(element => {
                        element.addEventListener("click", function(event) {
                            if (event.target.closest('.text-field__btn')) {
                                validator(element, localStorageUtil);
                            }
                            if (event.target.closest('.text-field__btn_2')) {
                                remove(element, localStorageUtil);
                            }
                        });
                    });
                }
                document.querySelectorAll('#Прочее').forEach((f) => {
                    f.className = "Прочее";
                });
            } else {
                document.querySelectorAll('#Прочее').forEach((t) => {
                    t.className = "disabled";
                });
            }
        }
    });
})

checkbox_collection.forEach(element => {
    element.addEventListener('change', function(event) {
        if (event.target.closest('#Сальники_прокладки_check')) {
            if (document.getElementById('Сальники_прокладки_check').checked == false) {
                if (products.htmlCatalog_Sal == '') {
                    products.render_Sal();
                    $('#Сальники_прокладки_collection').after($(products.htmlCatalog_Sal));
                    var field_gr_6 = document.querySelectorAll('.text-field__group');
                    field_gr_6.forEach(element => {
                        element.addEventListener("click", function(event) {
                            if (event.target.closest('.text-field__btn')) {
                                validator(element, localStorageUtil);
                            }
                            if (event.target.closest('.text-field__btn_2')) {
                                remove(element, localStorageUtil);
                            }
                        });
                    });
                }
                document.querySelectorAll('#Сальники_прокладки').forEach((f) => {
                    f.className = "Сальники_прокладки";
                });
            } else {
                document.querySelectorAll('#Сальники_прокладки').forEach((t) => {
                    t.className = "disabled";
                });
            }
        }
    });
})

checkbox_collection.forEach(element => {
    element.addEventListener('change', function(event) {
        if (event.target.closest('#Ремкомплекты_check')) {
            if (document.getElementById('Ремкомплекты_check').checked == false) {
                if (products.htmlCatalog_Kits == '') {
                    products.render_Kits();
                    $('#Ремкомплекты_collection').after($(products.htmlCatalog_Kits));
                    var field_gr_7 = document.querySelectorAll('.text-field__group');
                    field_gr_7.forEach(element => {
                        element.addEventListener("click", function(event) {
                            if (event.target.closest('.text-field__btn')) {
                                validator(element, localStorageUtil);
                            }
                            if (event.target.closest('.text-field__btn_2')) {
                                remove(element, localStorageUtil);
                            }
                        });
                    });
                }
                document.querySelectorAll('#Ремкомплекты').forEach((f) => {
                    f.className = "Ремкомплекты";
                });
            } else {
                document.querySelectorAll('#Ремкомплекты').forEach((t) => {
                    t.className = "disabled";
                });
            }
        }
    });
})

checkbox_collection.forEach(element => {
    element.addEventListener('change', function(event) {
        if (event.target.closest('#Т-40_ЛТЗ_Запасные_части_check')) {
            if (document.getElementById('Т-40_ЛТЗ_Запасные_части_check').checked == false) {
                if (products.htmlCatalog_T40LTZ_Parts == '') {
                    products.render_T40LTZ_Parts();
                    $('#Т-40_ЛТЗ_Запасные_части_collection').after($(products.htmlCatalog_T40LTZ_Parts));
                    var field_gr_8 = document.querySelectorAll('.text-field__group');
                    field_gr_8.forEach(element => {
                        element.addEventListener("click", function(event) {
                            if (event.target.closest('.text-field__btn')) {
                                validator(element, localStorageUtil);
                            }
                            if (event.target.closest('.text-field__btn_2')) {
                                remove(element, localStorageUtil);
                            }
                        });
                    });
                }
                document.querySelectorAll('#Т-40_ЛТЗ_Запасные_части').forEach((f) => {
                    f.className = "Т-40_ЛТЗ_Запасные_части";
                });
            } else {
                document.querySelectorAll('#Т-40_ЛТЗ_Запасные_части').forEach((t) => {
                    t.className = "disabled";
                });
            }
        }
    });
})

checkbox_collection.forEach(element => {
    element.addEventListener('change', function(event) {
        if (event.target.closest('#Д-144_двигатель_в_сборе_check')) {
            if (document.getElementById('Д-144_двигатель_в_сборе_check').checked == false) {
                if (products.htmlCatalog_D144_Engine == '') {
                    products.render_D144_Engine();
                    $('#Д-144_двигатель_в_сборе_collection').after($(products.htmlCatalog_D144_Engine));
                    var field_gr_9 = document.querySelectorAll('.text-field__group');
                    field_gr_9.forEach(element => {
                        element.addEventListener("click", function(event) {
                            if (event.target.closest('.text-field__btn')) {
                                validator(element, localStorageUtil);
                            }
                            if (event.target.closest('.text-field__btn_2')) {
                                remove(element, localStorageUtil);
                            }
                        });
                    });
                }
                document.querySelectorAll('#Д-144_двигатель_в_сборе').forEach((f) => {
                    f.className = "Д-144_двигатель_в_сборе";
                });
            } else {
                document.querySelectorAll('#Д-144_двигатель_в_сборе').forEach((t) => {
                    t.className = "disabled";
                });
            }
        }
    });
})

checkbox_collection.forEach(element => {
    element.addEventListener('change', function(event) {
        if (event.target.closest('#Электрооборудование_check')) {
            if (document.getElementById('Электрооборудование_check').checked == false) {
                if (products.htmlCatalog_Electr == '') {
                    products.render_Electr();
                    $('#Электрооборудование_collection').after($(products.htmlCatalog_Electr));
                    var field_gr_10 = document.querySelectorAll('.text-field__group');
                    field_gr_10.forEach(element => {
                        element.addEventListener("click", function(event) {
                            if (event.target.closest('.text-field__btn')) {
                                validator(element, localStorageUtil);
                            }
                            if (event.target.closest('.text-field__btn_2')) {
                                remove(element, localStorageUtil);
                            }
                        });
                    });
                }
                document.querySelectorAll('#Электрооборудование').forEach((f) => {
                    f.className = "Электрооборудование";
                });
            } else {
                document.querySelectorAll('#Электрооборудование').forEach((t) => {
                    t.className = "disabled";
                });
            }
        }
    });
})

checkbox_collection.forEach(element => {
    element.addEventListener('change', function(event) {
        if (event.target.closest('#Комплекты_прокладок_Д-144_check')) {
            if (document.getElementById('Комплекты_прокладок_Д-144_check').checked == false) {
                if (products.htmlCatalog_D144_Prok == '') {
                    products.render_D144_Prok();
                    $('#Комплекты_прокладок_Д-144_collection').after($(products.htmlCatalog_D144_Prok));
                    var field_gr_11 = document.querySelectorAll('.text-field__group');
                    field_gr_11.forEach(element => {
                        element.addEventListener("click", function(event) {
                            if (event.target.closest('.text-field__btn')) {
                                validator(element, localStorageUtil);
                            }
                            if (event.target.closest('.text-field__btn_2')) {
                                remove(element, localStorageUtil);
                            }
                        });
                    });
                }
                document.querySelectorAll('#Комплекты_прокладок_Д-144').forEach((f) => {
                    f.className = "Комплекты_прокладок_Д-144";
                });
            } else {
                document.querySelectorAll('#Комплекты_прокладок_Д-144').forEach((t) => {
                    t.className = "disabled";
                });
            }
        }
    });
})

checkbox_collection.forEach(element => {
    element.addEventListener('change', function(event) {
        if (event.target.closest('#Д-144_Запасные_части_check')) {
            if (document.getElementById('Д-144_Запасные_части_check').checked == false) {
                if (products.htmlCatalog_D144_Parts == '') {
                    products.render_D144_Parts();
                    $('#Д-144_Запасные_части_collection').after($(products.htmlCatalog_D144_Parts));
                    var field_gr_12 = document.querySelectorAll('.text-field__group');
                    field_gr_12.forEach(element => {
                        element.addEventListener("click", function(event) {
                            if (event.target.closest('.text-field__btn')) {
                                validator(element, localStorageUtil);
                            }
                            if (event.target.closest('.text-field__btn_2')) {
                                remove(element, localStorageUtil);
                            }
                        });
                    });
                }
                document.querySelectorAll('#Д-144_Запасные_части').forEach((f) => {
                    f.className = "Д-144_Запасные_части";
                });
            } else {
                document.querySelectorAll('#Д-144_Запасные_части').forEach((t) => {
                    t.className = "disabled";
                });
            }
        }
    });
})