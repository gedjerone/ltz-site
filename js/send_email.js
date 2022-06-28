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

function emailTest(input) {
    var regularExpression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regularExpression.test(input);
}

async function sendEmail(userEmail) {
    let response = await fetch('server/sendmail.php', {
        method: 'POST',
        body: userEmail
    });
    if (response.ok) {
        let result = await response.json();
        alert(result.message);
    } else {
        console.log(response);
        console.log(response.body);
        alert("Ошибка");
    }
}

function sender(userEmail) {
    $.ajax({
        type: "POST",
        url: "server/sendmail.php",
        cache: false,
        data: { 'userEmail': userEmail },
        dataType: "html",
        success: function(data) {
            if (!data) {
                alert("Ошибка!");
            } else {
                alert("Всё ок!");
            }
        },
        error: function(error) {
            alert('error; ' + eval(error));
        }
    });
}

function send_validate() {
    var userEmail = document.querySelector('.user_email').value;
    if (!emailTest(userEmail)) {
        alert("Введите email правильно!");
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