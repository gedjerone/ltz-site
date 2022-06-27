class Cart {
    render() {
        let html_cart = '';

        localStorageUtil.getProductsAllContent().forEach(element => {
            html_cart += `
                <tr>
                    <td scope="row" data-label="Вес/штука">${element[3].toFixed(3)}</td>
                    <td data-label="№ по каталогу">${element[6]}</td>
                    <td data-label="Наименование">${element[7]}</td>
                    <td data-label="Цена с НДС, руб/штука">${element[2].toLocaleString()}</td>
                    <td data-label="Количество">${element[1]}</td>
                    <td data-label="Вес/итого">${element[5].toFixed(3)}</td>
                    <td data-label="Цена с НДС, руб/итого">${element[4].toLocaleString()}</td>
                    <td data-label=" ">
                        <div class="counter">
                            <div class="text-field__group">
                                <div class="hidden_id">${element[0]}</div>
                                <button class="cart_remove__btn type="button">Удалить из корзины</button>
                            </div>
                        </div>
                    </td>  
                </tr>
            `
        });
        const cart_html = `
        <table class="cart_content tb-1">
            <thead>
                <tr>
                    <th scope="col">Вес/штука</th>
                    <th scope="col">№ по каталогу</th>
                    <th scope="col">Наименование</th>
                    <th scope="col">Цена с НДС, руб/штука</th>
                    <th scope="col">Количество</th>
                    <th scope="col">Вес/итого</th>
                    <th scope="col">Цена с НДС, руб/итого</th>
                    <th scope="col"> </th>
                </tr>
            </thead>
            <tbody>
                ${html_cart}
            </tbody>
        </table>
        <a href="#" class="js-open-modal btn" data-modal="1">Отправить заказ на email</a>
        `;
        document.getElementById('cart_content').innerHTML = cart_html;
        var newScript = document.createElement("script");
        newScript.src = "js/remove_from_cart.js";
        document.getElementById('cart_content').appendChild(newScript)
    }
}

const cart = new Cart();
cart.render();