class Header {

    render() {
        const html = `
    <div class="navbar">
            <div class="top_header">
                <div class="logo">
                    <a href="index.html">
                        <img src="img/logonew.png" alt="">
                    </a>
                </div>
                <div class="lip_date">
                    <p>&mdash;&mdash;&mdash;СЕЙЧАС В ЛИПЕЦКЕ&mdash;&mdash;&mdash;</p>
                    <font class="date_time">
                        <script>
                            var now = new Date()
                            var options = {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                                hour: 'numeric',
                                minute: 'numeric',
                                timeZone: "Europe/Moscow"
                            };
                            let formatter = new Intl.DateTimeFormat('ru-RU', options);
                            let lipDate = formatter.format(now);
                            lipDateArr = lipDate.split(' г., ');
                            document.write("<br>" + lipDateArr[0] + " <b>" + lipDateArr[1] + "</b></br>");
                        </script>
                    </font>
                </div>
                <div class="contacts">
                    <p><a href="tel:+74742354210">(4742) 35-42-10</a></p>
                    <p><a href="tel:+74742361447">(4742) 36-14-47</a></p>
                    <p><a href="mailto:avtoritet48@mail.ru?subject=Заказ запчастей">avtoritet48@mail.ru</a></p>
                </div>
            </div>
            <ul class="menu">
                <li><a href="index.html">ГЛАВНАЯ</a></li>
                <li><a href="products.html">ПРОДУКЦИЯ</a></li>
                <li><a href="shipping.html">ДОСТАВКА</a></li>
                <li><a href="contacts.html">КОНТАКТЫ</a></li>
                <li>
                    <p><a href="tel:+74742354210">(4742) 35-42-10</a></p>
                    <p><a href="tel:+74742361447">(4742) 36-14-47</a></p>
                </li>
                <li>
                    <p><a href="mailto:avtoritet48@mail.ru?subject=Заказ запчастей">avtoritet48@mail.ru</a></p>
                </li>
                <li class="cart_li">
                    <a href="cart.html">
                        <img src="img/shopping-cart-small.png" alt="">
                    </a>
                </li>
            </ul>
            <ul class="menu_nav">
                <ul class="menu_1">
                    <li><a href="index.html">ГЛАВНАЯ</a></li>
                    <li><a href="contacts.html">КОНТАКТЫ</a></li>
                </ul>
                <ul class="menu_2">
                    <li><a href="products.html">ПРОДУКЦИЯ</a></li>
                    <li><a href="shipping.html">ДОСТАВКА</a></li>
                </ul>
                <ul class="menu_3">
                    <li class="cart_li">
                        <a href="cart.html">
                            <img src="img/shopping-cart-small.png" alt="">
                        </a>
                    </li>
                </ul>
            </ul>
        </div>
    `

        document.querySelector("body > header").innerHTML = html;
    }
}

const header = new Header();
header.render();