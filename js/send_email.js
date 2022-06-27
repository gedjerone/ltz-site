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

//SMTP

/* SmtpJS.com - v3.0.0 */
var Email = {
    send: function(a) {
        return new Promise(function(n, e) {
            a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send";
            var t = JSON.stringify(a);
            Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function(e) { n(e) })
        })
    },
    ajaxPost: function(e, n, t) {
        var a = Email.createCORSRequest("POST", e);
        a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function() {
            var e = a.responseText;
            null != t && t(e)
        }, a.send(n)
    },
    ajax: function(e, n) {
        var t = Email.createCORSRequest("GET", e);
        t.onload = function() {
            var e = t.responseText;
            null != n && n(e)
        }, t.send()
    },
    createCORSRequest: function(e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t }
};

//SMTP

var modal = document.querySelectorAll('.modal');

function emailTest(input) {
    var regularExpression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regularExpression.test(input.value);
}

function sendEmail() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "order@mail.ru",
        Password: "78B0EADDBB702211C298C64C40636D239D45",
        To: "order@mail.ru",
        From: 'order@elasticemail.com',
        Subject: "Заказ запасных частей",
        Body: "Email: " + document.querySelector('.user_email').value
    }).then(
        message => alert("Отправленно успешно!")
    );
}

function send_validate() {
    let userEmail = document.querySelector('.user_email');
    if (!emailTest(userEmail)) {
        alert("Введите email правильно!");
    } else {
        sendEmail();
    }
}

modal.forEach(element => {
    element.addEventListener("click", function(event) {
        if (event.target.closest('.btn')) {
            send_validate();
        }
    });
});