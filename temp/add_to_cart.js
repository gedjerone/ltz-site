function validator(element, localStorageUtil) {
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
            element.querySelector('.text-field__btn').className = 'text-field__btn_hide';
            element.querySelector('.text-field__btn_2_hide').className = 'text-field__btn_2';
            localStorageUtil.putProducts(element.querySelector('.hidden_id').innerText, element.querySelector('.text-field__input').value);
        }
    } else if (isNaN(element.querySelector('.text-field__input').value) == true) {
        element.querySelector('.text-field__input').className = 'text-field__input invalid_field';
        element.querySelector('.text-field__btn').className = 'text-field__btn invalid_btn';
    }
}

function remove(element, localStorageUtil) {
    element.querySelector('.text-field__input').className = 'text-field__input';
    element.querySelector('.text-field__btn_hide').className = 'text-field__btn';
    element.querySelector('.text-field__btn_2').className = 'text-field__btn_2_hide';
    element.querySelector('.text-field__input').value = '';
    localStorageUtil.removeProducts(element.querySelector('.hidden_id').innerText);
}


field_gr.forEach(element => {
    element.addEventListener("click", function(event) {
        if (event.target.closest('.text-field__btn')) {
            validator(element, localStorageUtil);
        }
        if (event.target.closest('.text-field__btn_2')) {
            remove(element, localStorageUtil);
        }
    });
});