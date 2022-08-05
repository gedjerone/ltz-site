const file = document.querySelector('.main-img');
const file_content = document.querySelector('#file-input');

file.addEventListener('click', () => {
    document.querySelector('#file-input').click();
});

file_content.addEventListener('change', () => {
    var fd = new FormData();
    var files = $('#file-input')[0].files;
    if (files.length > 0) {
        fd.append('file', files[0]);
        changePhoto(fd);
    } else {
        alert('Иду нахуй');
    }
});

function changePhoto(main_img) {
    $.ajax({
        type: "POST",
        url: "server/main_photo.php",
        cache: false,
        data: { 'main_img': main_img },
        contentType: "false",
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