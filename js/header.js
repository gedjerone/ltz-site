class Header {
    get_time() {
        var now = new Date();
        var options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            timeZone: 'Europe/Moscow'
        };
        var formatter = new Intl.DateTimeFormat('ru-RU', options);
        let lipDate = formatter.format(now);
        var is_ios = /(iPhone|iPod|iPad).*AppleWebKit.*Safari/i.test(navigator.userAgent);

        if (is_ios == true) {
            var lipdata = lipDate;
            var time_1 = '';
            var time_2 = '';
            for (var i = 0; i < lipdata.length; i++) {
                if (lipdata[i] == '.') {
                    for (var j = 0; j < i - 1; j++) {
                        time_1 += lipdata[j];
                    }
                }
                if (lipdata[i] == 'в' && lipdata[i - 2] == '.') {
                    for (var k = i + 1; k < lipdata.length; k++) {
                        time_2 += lipdata[k];
                    }
                }
            }
        } else {
            var lipdata = lipDate.toString();
            var [time_1, time_2] = lipdata.split('г., ');
        }
        const html_time = `
            <br>
                ${time_1}<b>${time_2}</b>
            </br>
        `
        return html_time;
    }

    render(html_time, price, weight) {

        const html = `
        <div class="navbar">
            <div class="top_header">
                <div class="logo">
                    <a href="http://cp61228.tmweb.ru/index.html">
                        <img src="/img/lBX9lG3tLp4.jpg" alt="">
                    </a>
                </div>
                <div class="lip_date">
                    <p>&mdash;&mdash;&mdash;СЕЙЧАС В ЛИПЕЦКЕ&mdash;&mdash;&mdash;</p>
                    <font class="date_time">
                        ${html_time}
                    </font>
                </div>
                <div class="contacts">
                    <p><a href="tel:+74742354210">(4742) 35-42-10</a></p>
                    <p><a href="tel:+74742361447">(4742) 36-14-47</a></p>
                    <p><a href="mailto:avtoritet48@mail.ru?subject=Заказ запчастей">avtoritet48@mail.ru</a></p>
                </div>
            </div>
            <ul class="menu">
                <li><a href="http://cp61228.tmweb.ru/index.html" id="index">ГЛАВНАЯ</a></li>
                <li><a href="http://cp61228.tmweb.ru/products_photo.html" id="products_photo">ПРОДУКЦИЯ</a></li>
                <li><a href="http://cp61228.tmweb.ru/products.html" id="products">ПРАЙС-ЛИСТЫ</a></li>
                <li><a href="http://cp61228.tmweb.ru/shipping.html" id="shipping">ДОСТАВКА</a></li>
                <li><a href="http://cp61228.tmweb.ru/contacts.html" id="contacts">КОНТАКТЫ</a></li>
                <li>
                    <p><a href="tel:+74742354210">(4742) 35-42-10</a></p>
                    <p><a href="tel:+74742361447">(4742) 36-14-47</a></p>
                </li>
                <li>
                    <p><a href="mailto:avtoritet48@mail.ru?subject=Заказ запчастей">avtoritet48@mail.ru</a></p>
                </li>
                <li class="cart_li">
                    <a href="http://cp61228.tmweb.ru/cart.html" id="cart">
                        <img src="/img/shopping-cart-small.png" alt="">
                        <div class="cart_stats">
                                <p>${price.toLocaleString()} ₽</p>
                                <p>${weight.toFixed(3)} кг</p>
                        </div>
                    </a>
                </li>
            </ul>
            <ul class="menu_nav">
                <ul class="menu_1">
                    <li id="menu_1-1"><a href="http://cp61228.tmweb.ru/index.html" id="index">ГЛАВНАЯ</a></li>
                    <li id="menu_1-2"><a href="http://cp61228.tmweb.ru/contacts.html" id="contacts">КОНТАКТЫ</a></li>
                    <li id="menu_1-3"><a href="http://cp61228.tmweb.ru/shipping.html" id="shipping">ДОСТАВКА</a></li>
                </ul>
                <ul class="menu_2">
                    <li id="menu_2-1"><a href="http://cp61228.tmweb.ru/products_photo.html" id="products">ПРОДУКЦИЯ</a></li>
                    <li id="menu_2-2"><a href="http://cp61228.tmweb.ru/products.html" id="shipping">ПРАЙС-ЛИСТЫ</a></li>
                </ul>
                <ul class="menu_3">
                    <li class="cart_li">
                        <a href="http://cp61228.tmweb.ru/cart.html" id="cart">
                            <img src="/img/shopping-cart-small.png" alt="">
                            <div class="cart_stats">
                                <p>${price.toLocaleString()} ₽</p>
                                <p>${weight.toFixed(3)} кг</p>
                            </div>
                        </a>
                    </li>
                </ul>
            </ul>
        </div>
        `
        document.querySelector("body > header").innerHTML = html;

        let ref_arr = ['index', 'cart', 'contacts', 'products', 'shipping'];
        let html_str = window.location.href.toString()
        for (let i = 0; i < html_str.length; i++) {
            if (html_str[i] == 'i' && html_str[i + 1] == 'n' && html_str[i + 2] == 'd' && html_str[i + 3] == 'e' && html_str[i + 4] == 'x' && html_str[i + 5] == '.') {
                document.getElementById('index').classList.add('big_active');
            }
            if (html_str[i] == 'c' && html_str[i + 1] == 'a' && html_str[i + 2] == 'r' && html_str[i + 3] == 't' && html_str[i + 4] == '.') {
                document.getElementById('cart').classList.add('big_active');
            }
            if (html_str[i] == 'c' && html_str[i + 1] == 'o' && html_str[i + 2] == 'n' && html_str[i + 3] == 't' && html_str[i + 4] == 'a' && html_str[i + 5] == 'c' && html_str[i + 6] == 't' && html_str[i + 7] == 's' && html_str[i + 8] == '.') {
                document.getElementById('contacts').classList.add('big_active');
            }
            if (html_str[i] == 'p' && html_str[i + 1] == 'r' && html_str[i + 2] == 'o' && html_str[i + 3] == 'd' && html_str[i + 4] == 'u' && html_str[i + 5] == 'c' && html_str[i + 6] == 't' && html_str[i + 7] == 's' && html_str[i + 8] == '.') {
                document.getElementById('products').classList.add('big_active');
            }
            if (html_str[i] == 'p' && html_str[i + 1] == 'r' && html_str[i + 2] == 'o' && html_str[i + 3] == 'd' && html_str[i + 4] == 'u' && html_str[i + 5] == 'c' && html_str[i + 6] == 't' && html_str[i + 7] == 's' && html_str[i + 8] == '_' && html_str[i + 9] == 'p' && html_str[i + 10] == 'h') {
                document.getElementById('products_photo').classList.add('big_active');
            }
            if (html_str[i] == 's' && html_str[i + 1] == 'h' && html_str[i + 2] == 'i' && html_str[i + 3] == 'p' && html_str[i + 4] == 'p' && html_str[i + 5] == 'i' && html_str[i + 6] == 'n' && html_str[i + 7] == 'g' && html_str[i + 8] == '.') {
                document.getElementById('shipping').classList.add('big_active');
            }
        }
    }
}

const header = new Header();
const now = header.get_time();
header.render(now, 0, 0);
localStorageUtil.reload();