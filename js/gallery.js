var photos = document.querySelectorAll('.photo');
var main = document.querySelector('.main');
var content = document.querySelector('.content');
var body = document.querySelector('body');

function changePhoto(element) {
    main.src = element.src;
}

function magnify(element) {
    document.querySelector('.linker').href = element.src;
}

photos.forEach(element => {
    element.addEventListener('click', function(event) {
        if (event.target.closest('.photo')) {
            changePhoto(element);
        }
    });
});

main.addEventListener('click', function(event) {
    if (event.target.closest('.main')) {
        magnify(main);
    }
});