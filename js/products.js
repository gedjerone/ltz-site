import data from "products.json"
class Products {

    render() {
        data.forEach((element) => {
            console.log(element);
        });
    }
}

const products = new Products();
products.render();