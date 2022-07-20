var photos = document.querySelectorAll('.photo');
var main = document.querySelector('.main');
var content = document.querySelector('.content');
var body = document.querySelector('body');
var left_arrow = document.querySelector('.left_arrow');
var right_arrow = document.querySelector('.right_arrow');

function changePhoto(element) {
    main.src = element.src;
}

function magnify(element) {
    document.querySelector('.linker').href = element.src;
}

function changePhotoMobile() {
    var arr = [];
    for (let k = 0; k < photos.length; k++) {
        arr[k] = photos[k].src;
    }
    for (let i = 0; i < photos.length; i++) {
        if (main.src == photos[i].src) {
            let temp = arr[i];
            arr.splice(i, 1);
            arr.push(temp);
        }
    }
    var arr_copy = Object.assign([], arr);
    for (let j = 0; j < photos.length; j++) {
        let temp = arr_copy[j];
        photos[j].src = temp;
    }
    main.src = photos[0].src;
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

left_arrow.addEventListener('click', function(event) {
    if (event.target.closest('.left_arrow')) {
        console.log("левая");
        changePhotoMobile();
    }
});

right_arrow.addEventListener('click', function(event) {
    if (event.target.closest('.right_arrow')) {
        console.log("правая");
        changePhotoMobile();
    }
});