function parseUrlQuery() {
    var data = {},
        pair = false,
        param = false;
    if (location.search) {
        pair = (location.search.substr(1)).split('&');
        for (var i = 0; i < pair.length; i++) {
            param = pair[i].split('=');
            data[param[0]] = param[1];
        }
    }
    return data;
}

class re_i {
    render() {
        var response_html = ``;
        $.ajax({
            url: 'render_item.php',
            type: 'GET',
            data: { 'id': parseUrlQuery().id },
            dataType: 'html',
            async: false,
            success: function(response) {
                response_html = response;
            }
        });
        document.querySelector('.content').innerHTML = response_html;
    }
}

var RE_i = new re_i();
RE_i.render();