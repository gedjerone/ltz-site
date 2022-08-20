class P_Items {
    // constructor() {
    //     this.prod_photo_items = ''
    // }

    render() {
        var response_html = ``;
        $.ajax({
            url: 'products_photo.php',
            type: 'POST',
            data: { 'type': 'all' },
            dataType: 'html',
            async: false,
            success: function(response) {
                response_html = response;
            }
        });
        document.querySelector('.content').innerHTML = response_html;
        // this.prod_photo_items = response_html;
        //document.querySelector('.content').appendChild(this.prod_photo_items);
    }
}

var RE_ = new P_Items();
RE_.render();