var field_gr = document.querySelectorAll('.text-field__group');

function remove(element, localStorageUtil) {
    localStorageUtil.removeProducts(element.querySelector('.hidden_id').innerText);
}

field_gr.forEach(element => {
    element.addEventListener("click", function(event) {
        if (event.target.closest('.cart_remove__btn')) {
            remove(element, localStorageUtil);
            cart.render();
        }
    });
});