const field_gr = document.querySelectorAll('.text-field__group');

function validator(element) {
    if (element.querySelector('.text-field__input').value == "") {
        element.querySelector('.text-field__input').className = 'text-field__input invalid_field';
        element.querySelector('.text-field__btn').className = 'text-field__btn invalid_btn';
    } else if (isNaN(element.querySelector('.text-field__input').value) == false) {
        if (Number.isInteger(Number(element.querySelector('.text-field__input').value)) == false) {
            element.querySelector('.text-field__input').className = 'text-field__input invalid_field';
            element.querySelector('.text-field__btn').className = 'text-field__btn invalid_btn';
        } else if (Number(element.querySelector('.text-field__input').value) < 1) {
            element.querySelector('.text-field__input').className = 'text-field__input invalid_field';
            element.querySelector('.text-field__btn').className = 'text-field__btn invalid_btn';
        } else {
            element.querySelector('.text-field__input').className = 'text-field__input valid_field';
            element.querySelector('.text-field__btn').className = 'text-field__btn valid_btn';
        }
    } else if (isNaN(element.querySelector('.text-field__input').value) == true) {
        element.querySelector('.text-field__input').className = 'text-field__input invalid_field';
        element.querySelector('.text-field__btn').className = 'text-field__btn invalid_btn';
    }
}

field_gr.forEach(element => {
    element.addEventListener("click", function(event) {
        if (event.target.closest('.text-field__btn')) {
            validator(element);
        }
    });
});