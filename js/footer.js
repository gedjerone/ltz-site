class Footer {

    function render() {
        html = `
        
        `
        document.querySelector("body > footer").innerHTML = html;
    }

}

const footer = new Footer();
footer.render();