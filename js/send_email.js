! function(e) {
    "function" != typeof e.matches && (e.matches = e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || function(e) {
        for (var t = this, o = (t.document || t.ownerDocument).querySelectorAll(e), n = 0; o[n] && o[n] !== t;) ++n;
        return Boolean(o[n])
    }), "function" != typeof e.closest && (e.closest = function(e) {
        for (var t = this; t && 1 === t.nodeType;) {
            if (t.matches(e)) return t;
            t = t.parentNode
        }
        return null
    })
}(window.Element.prototype);
document.addEventListener('DOMContentLoaded', function() {
    /* Записываем в переменные массив элементов-кнопок и подложку.
       Подложке зададим id, чтобы не влиять на другие элементы с классом overlay*/
    var modalButtons = document.querySelectorAll('.js-open-modal'),
        closeButtons = document.querySelectorAll('.js-modal-close');
    /* Перебираем массив кнопок */
    modalButtons.forEach(function(item) {
        /* Назначаем каждой кнопке обработчик клика */
        item.addEventListener('click', function(e) {
            /* Предотвращаем стандартное действие элемента. Так как кнопку разные
               люди могут сделать по-разному. Кто-то сделает ссылку, кто-то кнопку.
               Нужно подстраховаться. */
            e.preventDefault();
            /* При каждом клике на кнопку мы будем забирать содержимое атрибута data-modal
               и будем искать модальное окно с таким же атрибутом. */
            var modalId = this.getAttribute('data-modal'),
                modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');
            /* После того как нашли нужное модальное окно, добавим классы
               подложке и окну чтобы показать их. */
            modalElem.classList.add('active');
            document.body.style.overflow = 'hidden';
        }); // end click
    }); // end foreach
    closeButtons.forEach(function(item) {
        item.addEventListener('click', function(e) {
            var parentModal = this.closest('.modal');

            document.body.style.overflow = 'scroll';
            parentModal.classList.remove('active');
        });
    }); // end foreach
    document.body.addEventListener('keyup', function(e) {
        var key = e.keyCode;
        if (key == 27) {
            document.body.style.overflow = 'scroll';
            document.querySelector('.modal.active').classList.remove('active');
        };
    }, false);
}); // end ready

var modal = document.querySelectorAll('.modal');

var field_gr = document.querySelectorAll('.text-field__group');

function remove(element, localStorageUtil) {
    localStorageUtil.removeProducts(element.querySelector('.hidden_id').innerText);
}

function emailTest(input) {
    var regularExpression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regularExpression.test(input);
}

var cart_contains = new Cart();
var cart_price = localStorageUtil.getAllProductsPriceSum().toLocaleString() + ' ₽';
var cart_weight = localStorageUtil.getAllProductsWeightSum().toFixed(3) + ' кг';

function sender(userEmail) {
    $.ajax({
        type: "POST",
        url: "server/sendmail.php",
        cache: false,
        data: { 'userEmail': userEmail, 'cart': cart_contains.get_cart(), 'cart_price': cart_price, 'cart_weight': cart_weight },
        dataType: "html",
        success: function(data) {
            if (!data) {
                alert("Ошибка!");
            } else {
                alert("Заказ отправлен на почту!");
            }
        },
        beforeSend: function() {
            field_gr.forEach(element => {
                remove(element, localStorageUtil);
            });
            cart.render();
        },
        error: function(error) {
            alert('error; ' + eval(error));
        }
    });
}

function send_validate() {
    var userEmail = document.querySelector('.user_email').value.trim();
    if (cart.cart_validate() == false) {
        alert('Невозможно отправить заказ. Корзина пуста!');
    } else if (!emailTest(userEmail)) {
        alert("Данные введены неверно!");
    } else {
        sender(userEmail);
    }
}

modal.forEach(element => {
    element.addEventListener("click", function(event) {
        if (event.target.closest('.btn')) {
            send_validate();
        }
    });
});