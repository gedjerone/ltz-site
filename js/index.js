var img_1 = document.querySelector('.ltz1_1_img');
var img_2 = document.querySelector('.ltz1_2_img');

img_1.addEventListener('click', function(event) {
    if (event.target.closest('.ltz1_1_img')) {
        console.log('e');
        window.location.replace("products_html/item-6.html");
    }
});

/*img_2.addEventListener('click', function(event) {
    if (event.target.closest('.ltz1_2_img')) {
        window.location.replace("http://stackoverflow.com");
    }
});*/