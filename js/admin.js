const file = document.querySelector('.main-img');

file.addEventListener('click', () => {
    document.querySelector('#file-input').click();
});

function changePhoto() {
    $.ajax({
        type: "POST",
        url: "server/admin.php",
        cache: false,
        data: { 'userEmail': userEmail, 'cart': cart_contains.get_cart() },
        dataType: "html",
        success: function(data) {
            if (!data) {
                alert("");
            } else {
                alert("");
            }
        },
        beforeSend: function() {

        },
        error: function(error) {

        }
    });
}