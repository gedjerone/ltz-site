class Header {

    get_time_z() {
        const request = new XMLHttpRequest();
        const url = "server/lip_time.php?time=now"
        request.open('GET', url, true);
        request.responseType = "string";
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        request.addEventListener("readystatechange", () => {

            if (request.readyState === 4 && request.status === 200) {
                console.log(request.response);
                this.render(request.response);
            }
        });
        request.send();
    }

    get_time() {
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
        let lipDateArr = lipDate.split('г., ');
        lipDateArr.toString();
        let time_1 = lipDateArr[0];
        let time_2 = lipDateArr[1];
        time_1.toString();
        time_2.toString();
        /*const html_time = `
        <br>
         ${time_1}<b>${time_2}</b>
        </br>
        `*/
        const html_time = `
        <br>
        23 июня 2022 <b>21:00</b>
        </br>
        `

        console.log(html_time)
        return html_time;
    }

    render(html_time) {
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
        console.log()
        document.querySelector("body > header").innerHTML = html;
    }
}

const header = new Header();
const now = header.get_time();
header.render(now);