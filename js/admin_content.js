class Admin {
    render() {
        const html = `<div class="h1_name">
                <h1>Админ панель</h1>
            </div>
            <h3>Главная</h3>
            <div class="main-img">
                <input id="file-input" type="file" name="file" style="display:none;">
            </div>
            <h3>Продукция</h3>
            <div class="products-w-photo">
                <!--что-то там-->
            </div>
            <h3>Прайс-листы</h3>
            <div class="products">
                <!--что-то там-->
            </div>`
        document.querySelector('.content').innerHTML = html;
        let script = document.createElement("script");
        script.src = 'js/admin.js';
        document.querySelector('.content').appendChild(script);
    }
}

var admin_content = new Admin();

const login = document.querySelector('.login-btn');
const login_input = document.querySelector('.input-login');
const password_input = document.querySelector('.input-password');

var auth;

function b64EncodeUnicode(login, password) {
    str = login + password;
    // First we use encodeURIComponent to get percent-encoded UTF-8,
    // then we convert the percent encodings into raw bytes which
    // can be fed into btoa.
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
        function toSolidBytes(match, p1) {
            return String.fromCharCode('0x' + p1);
        }));
}

function b64DecodeUnicode(str) {
    // Going backwards: from bytestream, to percent-encoding, to original string.
    return decodeURIComponent(atob(str).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
}

function baseValidation() {
    if ((login_input.value != '' && password_input.value != '') == true) {
        auth = b64EncodeUnicode(login_input.value.trim(), password_input.value.trim())
        return true;
    } else {
        return false;
    }
}

login.addEventListener('click', () => {
    if (baseValidation() == true) {
        $.ajax({
            type: "POST",
            url: "server/admin.php",
            cache: false,
            data: { 'auth': auth },
            dataType: 'json',
            success: function(response) {
                if (response.token_xfs == '0') {
                    alert('Данные неверны, попробуйте заново')
                    password_input.value = '';
                } else if (response.token_xfs == '1') {
                    document.querySelector('.content').innerHTML = response.html;
                    let script = document.createElement("script");
                    script.src = response.admin_src;
                    document.querySelector('.content').appendChild(script);
                    //admin_content.render();
                }
            },
            beforeSend: function() {},
            error: function(error) {}
        });
    } else {
        alert("Введите логин и пароль для доступа!")
    }
});