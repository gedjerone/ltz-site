class Cart {
    render() {
        localStorageUtil.forEach(element => {
            html_cart += `
                <tr>
                    <td scope="row" data-label="Вес/штука">${weight.toFixed(3)}</td>
                    <td data-label="№ по каталогу">${catalog_id}</td>
                    <td data-label="Наименование">${title}</td>
                    <td data-label="Цена с НДС, руб/штука">${price.toLocaleString()}</td>
                    <td data-label="Количество">${count}</td>
                    <td data-label="Вес/итого">${weight_sum.toFixed(3)}</td>
                    <td data-label="Цена с НДС, руб/итого">${price_sum.toLocaleString()}</td>
                    <td data-label=" ">
                        <div class="counter">
                            <div class="text-field__group">
                                <div class="hidden_id">${element}</div>
                                <button class="text-field__btn_2_hide" type="button">Удалить из корзины</button>
                            </div>
                        </div>
                    </td>  
                </tr>
            `
        });

        const html = `
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
        `;

        document.getElementById('cart_content').innerHTML = html;
    }
}

const cart  = new Cart();
cart.render();