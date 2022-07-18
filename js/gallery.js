var photos = document.querySelectorAll('.photo');
var main = document.querySelector('.main');
var content = document.querySelector('.content');
var body = document.querySelector('body');
var cross =
    `<svg class="cross" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"/>
    </svg>`;

function changePhoto(element) {
    main.src = element.src;
}

function magnify(element) {
    let magnifier = element;
    magnifier.className = 'magnified';
    document.querySelector('.magnifier_block').appendChild(element);
    document.querySelector('.magnifier_block').innerHTML += cross;
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