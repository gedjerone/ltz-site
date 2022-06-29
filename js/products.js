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
    render() {
        let htmlCatalog_Catalogs = '';
        let htmlCatalog_Glass = '';
        let htmlCatalog_Cab = '';
        let htmlCatalog_Agreg = '';
        let htmlCatalog_PD = '';
        let htmlCatalog_Other = '';
        let htmlCatalog_Sal = '';
        let htmlCatalog_Kits = '';
        let htmlCatalog_T40LTZ_Parts = '';
        let htmlCatalog_D144_Engine = '';
        let htmlCatalog_Electr = '';
        let htmlCatalog_D144_Prok = '';
        let htmlCatalog_D144_Parts = '';

        CATALOG.forEach(({ id, category, weight, catalog_id, title, price }) => {

            if (category == CATEGORIES[0]) {
                htmlCatalog_Catalogs += `
                <tr class="Каталоги" id="Каталоги">
                    <td scope="row" data-label="Вес">${weight.toFixed(3)}</td>
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
            } else if (category == CATEGORIES[1]) {
                htmlCatalog_Glass += `
                <tr class="Стекла" id="Стекла">
                    <td scope="row" data-label="Вес">${weight.toFixed(3)}</td>
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
            } else if (category == CATEGORIES[2]) {
                htmlCatalog_Cab += `
                <tr class="Кабина" id="Кабина">
                    <td scope="row" data-label="Вес">${weight.toFixed(3)}</td>
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
            } else if (category == CATEGORIES[3]) {
                htmlCatalog_Agreg += `
                <tr class="Узлы_и_агрегаты" id="Узлы_и_агрегаты">
                    <td scope="row" data-label="Вес">${weight.toFixed(3)}</td>
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
            } else if (category == CATEGORIES[4]) {
                htmlCatalog_PD += `
                <tr class="ПД" id="ПД">
                    <td scope="row" data-label="Вес">${weight.toFixed(3)}</td>
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
            } else if (category == CATEGORIES[5]) {
                htmlCatalog_Other += `
                <tr class="Прочее" id="Прочее">
                    <td scope="row" data-label="Вес">${weight.toFixed(3)}</td>
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
            } else if (category == CATEGORIES[6]) {
                htmlCatalog_Sal += `
                <tr class="Сальники_прокладки" id="Сальники_прокладки">
                    <td scope="row" data-label="Вес">${weight.toFixed(3)}</td>
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
            } else if (category == CATEGORIES[7]) {
                htmlCatalog_Kits += `
                <tr class="Ремкомплекты" id="Ремкомплекты">
                    <td scope="row" data-label="Вес">${weight.toFixed(3)}</td>
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
            } else if (category == CATEGORIES[8]) {
                htmlCatalog_T40LTZ_Parts += `
                <tr class="Т-40_ЛТЗ_Запасные_части" id="Т-40_ЛТЗ_Запасные_части">
                    <td scope="row" data-label="Вес">${weight.toFixed(3)}</td>
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
            } else if (category == CATEGORIES[9]) {
                htmlCatalog_D144_Engine += `
                <tr class="Д-144_двигатель_в_сборе" id="Д-144_двигатель_в_сборе">
                    <td scope="row" data-label="Вес">${weight.toFixed(3)}</td>
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
            } else if (category == CATEGORIES[10]) {
                htmlCatalog_Electr += `
                <tr class="Электрооборудование" id="Электрооборудование">
                    <td scope="row" data-label="Вес">${weight.toFixed(3)}</td>
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
            } else if (category == CATEGORIES[11]) {
                htmlCatalog_D144_Prok += `
                <tr class="Комплекты_прокладок_Д-144" id="Комплекты_прокладок_Д-144">
                    <td scope="row" data-label="Вес">${weight.toFixed(3)}</td>
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
            } else if (category == CATEGORIES[12]) {
                htmlCatalog_D144_Parts += `
                <tr class="Д-144_Запасные_части" id="Д-144_Запасные_части">
                    <td scope="row" data-label="Вес">${weight.toFixed(3)}</td>
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
            }

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
                    <tr class="category">
                        <td colspan="5" scope="row">
                            <input type="checkbox" class="hider" id="Каталоги_check" autocomplete="off" checked>
                            <img class="hider_up" src="img/icons8-chevron-up-48.png">Каталоги
                        </td>
                    </tr>
                    ${htmlCatalog_Catalogs}
                    <tr class="category">
                        <td colspan="5" scope="row">
                            <input type="checkbox" class="hider" id="Стекла_check" autocomplete="off" checked>
                            <img class="hider_up" src="img/icons8-chevron-up-48.png">Стекла
                        </td>
                    </tr>
                    ${htmlCatalog_Glass}
                    <tr class="category">
                        <td colspan="5" scope="row">
                            <input type="checkbox" class="hider" id="Кабина_check" autocomplete="off" checked>
                            <img class="hider_up" src="img/icons8-chevron-up-48.png">Кабина
                        </td>
                    </tr>
                    ${htmlCatalog_Cab}
                    <tr class="category">
                        <td colspan="5" scope="row">
                            <input type="checkbox" class="hider" id="Узлы_и_агрегаты_check" autocomplete="off" checked>
                            <img class="hider_up" src="img/icons8-chevron-up-48.png">Узлы и агрегаты
                        </td>
                    </tr>
                    ${htmlCatalog_Agreg}
                    <tr class="category">
                        <td colspan="5" scope="row">
                            <input type="checkbox" class="hider" id="ПД_check" autocomplete="off" checked>
                            <img class="hider_up" src="img/icons8-chevron-up-48.png">ПД
                        </td>
                    </tr>
                    ${htmlCatalog_PD}
                    <tr class="category">
                        <td colspan="5" scope="row">
                            <input type="checkbox" class="hider" id="Прочее_check" autocomplete="off" checked>
                            <img class="hider_up" src="img/icons8-chevron-up-48.png">Прочее
                        </td>
                    </tr>
                    ${htmlCatalog_Other}
                    <tr class="category">
                        <td colspan="5" scope="row">
                            <input type="checkbox" class="hider" id="Сальники_прокладки_check" autocomplete="off" checked>
                            <img class="hider_up" src="img/icons8-chevron-up-48.png">Сальники/прокладки
                        </td>
                    </tr>
                    ${htmlCatalog_Sal}
                    <tr class="category">
                        <td colspan="5" scope="row">
                            <input type="checkbox" class="hider" id="Ремкомплекты_check" autocomplete="off" checked>
                            <img class="hider_up" src="img/icons8-chevron-up-48.png">Ремкомплекты
                        </td>
                    </tr>
                    ${htmlCatalog_Kits}
                    <tr class="category">
                        <td colspan="5" scope="row">
                            <input type="checkbox" class="hider" id="Т-40_ЛТЗ_Запасные_части_check" autocomplete="off" checked>
                            <img class="hider_up" src="img/icons8-chevron-up-48.png">Т-40,ЛТЗ Запасные части
                        </td>
                    </tr>
                    ${htmlCatalog_T40LTZ_Parts}
                    <tr class="category">
                        <td colspan="5" scope="row">
                            <input type="checkbox" class="hider" id="Д-144_двигатель_в_сборе"_check autocomplete="off" checked>
                            <img class="hider_up" src="img/icons8-chevron-up-48.png">Д-144 двигатель в сборе
                        </td>
                    </tr>
                    ${htmlCatalog_D144_Engine}
                    <tr class="category">
                        <td colspan="5" scope="row">
                            <input type="checkbox" class="hider" id="Электрооборудование_check" autocomplete="off" checked>
                            <img class="hider_up" src="img/icons8-chevron-up-48.png">Электрооборудование
                        </td>
                    </tr>
                    ${htmlCatalog_Electr}
                    <tr class="category">
                        <td colspan="5" scope="row">
                            <input type="checkbox" class="hider" id="Комплекты_прокладок_Д-144_check" autocomplete="off" checked>
                            <img class="hider_up" src="img/icons8-chevron-up-48.png">Комплекты прокладок Д-144
                        </td>
                    </tr>
                    ${htmlCatalog_D144_Prok}
                    <tr class="category">
                        <td colspan="5" scope="row">
                            <input type="checkbox" class="hider" id="Д-144_Запасные_части_check" autocomplete="off" checked>
                            <img class="hider_up" src="img/icons8-chevron-up-48.png">Д-144 Запасные части
                        </td>
                    </tr>
                    ${htmlCatalog_D144_Parts}
                </tbody>
            </table>
            `;

            document.getElementById('catalog').innerHTML = html;
        });
    }
}

const products = new Products();
products.render();

window.onload = () => {
    if (document.getElementById('Каталоги_check').checked == false) {
        document.querySelectorAll('.Каталоги').forEach((element) => {
            element.className = "disabled";
        });
    }
    if (document.getElementById('Стекла_check').checked == false) {
        document.querySelectorAll('.Стекла').forEach((element) => {
            element.className = "disabled";
        });
    }
    if (document.getElementById('Кабина_check').checked == false) {
        document.querySelectorAll('.Кабина').forEach((element) => {
            element.className = "disabled";
        });
    }
    if (document.getElementById('Узлы_и_агрегаты_check').checked == false) {
        document.querySelectorAll('.Узлы_и_агрегаты').forEach((element) => {
            element.className = "disabled";
        });
    }
    if (document.getElementById('ПД_check').checked == false) {
        document.querySelectorAll('.ПД').forEach((element) => {
            element.className = "disabled";
        });
    }
    if (document.getElementById('Прочее_check').checked == false) {
        document.querySelectorAll('.Прочее').forEach((element) => {
            element.className = "disabled";
        });
    }
    if (document.getElementById('Сальники_прокладки_check').checked == false) {
        document.querySelectorAll('.Сальники_прокладки').forEach((element) => {
            element.className = "disabled";
        });
    }
    if (document.getElementById('Ремкомплекты_check').checked == false) {
        document.querySelectorAll('.Ремкомплекты').forEach((element) => {
            element.className = "disabled";
        });
    }
    if (document.getElementById('Т-40_ЛТЗ_Запасные_части_check').checked == false) {
        document.querySelectorAll('.Т-40_ЛТЗ_Запасные_части').forEach((element) => {
            element.className = "disabled";
        });
    }
    if (document.getElementById('Д-144_двигатель_в_сборе_check').checked == false) {
        document.querySelectorAll('.Д-144_двигатель_в_сборе').forEach((element) => {
            element.className = "disabled";
        });
    }
    if (document.getElementById('Электрооборудование_check').checked == false) {
        document.querySelectorAll('.Электрооборудование').forEach((element) => {
            element.className = "disabled";
        });
    }
    if (document.getElementById('Комплекты_прокладок_Д-144_check').checked == false) {
        document.querySelectorAll('.Комплекты_прокладок_Д-144').forEach((element) => {
            element.className = "disabled";
        });
    }
    if (document.getElementById('Д-144_Запасные_части_check').checked == false) {
        document.querySelectorAll('.Д-144_Запасные_части').forEach((element) => {
            element.className = "disabled";
        });
    }
}
document.getElementById('Каталоги_check').onclick = () => {
    if (document.getElementById('Каталоги_check').checked == true) {
        document.querySelectorAll('#Каталоги').forEach((element) => {
            element.className = "Каталоги";
        });
    } else {
        document.querySelectorAll('.Каталоги').forEach((element) => {
            element.className = "disabled";
        });
    }
}
document.getElementById('Стекла_check').onclick = () => {
    if (document.getElementById('Стекла_check').checked == true) {
        document.querySelectorAll('#Стекла').forEach((element) => {
            element.className = "Стекла";
        });
    } else {
        document.querySelectorAll('.Стекла').forEach((element) => {
            element.className = "disabled";
        });
    }
}
document.getElementById('Кабина_check').onclick = () => {
    if (document.getElementById('Кабина_check').checked == true) {
        document.querySelectorAll('#Кабина').forEach((element) => {
            element.className = "Кабина";
        });
    } else {
        document.querySelectorAll('.Кабина').forEach((element) => {
            element.className = "disabled";
        });
    }
}
document.getElementById('Узлы_и_агрегаты_check').onclick = () => {
    if (document.getElementById('Узлы_и_агрегаты_check').checked == true) {
        document.querySelectorAll('#Узлы_и_агрегаты').forEach((element) => {
            element.className = "Узлы_и_агрегаты";
        });
    } else {
        document.querySelectorAll('.Узлы_и_агрегаты').forEach((element) => {
            element.className = "disabled";
        });
    }
}
document.getElementById('ПД_check').onclick = () => {
    if (document.getElementById('ПД_check').checked == true) {
        document.querySelectorAll('#ПД').forEach((element) => {
            element.className = "ПД";
        });
    } else {
        document.querySelectorAll('.ПД').forEach((element) => {
            element.className = "disabled";
        });
    }
}
document.getElementById('Прочее_check').onclick = () => {
    if (document.getElementById('Прочее_check').checked == true) {
        document.querySelectorAll('#Прочее').forEach((element) => {
            element.className = "Прочее";
        });
    } else {
        document.querySelectorAll('.Прочее').forEach((element) => {
            element.className = "disabled";
        });
    }
}
document.getElementById('Сальники_прокладки_check').onclick = () => {
    if (document.getElementById('Сальники_прокладки_check').checked == true) {
        document.querySelectorAll('#Сальники_прокладки').forEach((element) => {
            element.className = "Сальники_прокладки";
        });
    } else {
        document.querySelectorAll('.Сальники_прокладки').forEach((element) => {
            element.className = "disabled";
        });
    }
}
document.getElementById('Ремкомплекты_check').onclick = () => {
    if (document.getElementById('Ремкомплекты_check').checked == true) {
        document.querySelectorAll('#Ремкомплекты').forEach((element) => {
            element.className = "Ремкомплекты";
        });
    } else {
        document.querySelectorAll('.Ремкомплекты').forEach((element) => {
            element.className = "disabled";
        });
    }
}
document.getElementById('Т-40_ЛТЗ_Запасные_части_check').onclick = () => {
    if (document.getElementById('Т-40_ЛТЗ_Запасные_части_check').checked == true) {
        document.querySelectorAll('#Т-40_ЛТЗ_Запасные_части').forEach((element) => {
            element.className = "Т-40_ЛТЗ_Запасные_части";
        });
    } else {
        document.querySelectorAll('.Т-40_ЛТЗ_Запасные_части').forEach((element) => {
            element.className = "disabled";
        });
    }
}
document.getElementById('Д-144_двигатель_в_сборе_check').onclick = () => {
    if (document.getElementById('Д-144_двигатель_в_сборе_check').checked == true) {
        document.querySelectorAll('#Д-144_двигатель_в_сборе').forEach((element) => {
            element.className = "Д-144_двигатель_в_сборе";
        });
    } else {
        document.querySelectorAll('.Д-144_двигатель_в_сборе').forEach((element) => {
            element.className = "disabled";
        });
    }
}
document.getElementById('Электрооборудование_check').onclick = () => {
    if (document.getElementById('Электрооборудование_check').checked == true) {
        document.querySelectorAll('#Электрооборудование').forEach((element) => {
            element.className = "Электрооборудование";
        });
    } else {
        document.querySelectorAll('.Электрооборудование').forEach((element) => {
            element.className = "disabled";
        });
    }
}
document.getElementById('Комплекты_прокладок_Д-144_check').onclick = () => {
    if (document.getElementById('Комплекты_прокладок_Д-144_check').checked == true) {
        document.querySelectorAll('#Комплекты_прокладок_Д-144').forEach((element) => {
            element.className = "Комплекты_прокладок_Д-144";
        });
    } else {
        document.querySelectorAll('.Комплекты_прокладок_Д-144').forEach((element) => {
            element.className = "disabled";
        });
    }
}
document.getElementById('Д-144_Запасные_части_check').onclick = () => {
    if (document.getElementById('Д-144_Запасные_части_check').checked == true) {
        document.querySelectorAll('#Д-144_Запасные_части').forEach((element) => {
            element.className = "Д-144_Запасные_части";
        });
    } else {
        document.querySelectorAll('.Д-144_Запасные_части').forEach((element) => {
            element.className = "disabled";
        });
    }
}