class LocalStorageUtil {
    constructor() {
        this.keyId = 'products_id';
        this.keyCount = 'products_count';
        this.keyPrice = 'products_price';
        this.keyWeight = 'products_weight';
        this.keyPriceSum = 'products_price_sum';
        this.keyWeightSum = 'products_weight_sum';
        this.keyCatalogId = 'products_catalog_id';
        this.keyTitle = 'products_title';
    }

    getProductsId() {
        const productsLocalStorage = localStorage.getItem(this.keyId);
        if (productsLocalStorage !== null) {
            return JSON.parse(productsLocalStorage);
        }
        return [];
    }

    getProductsCount() {
        const productsLocalStorage = localStorage.getItem(this.keyCount);
        if (productsLocalStorage !== null) {
            return JSON.parse(productsLocalStorage);
        }
        return [];
    }

    getProductsPrice() {
        const productsLocalStorage = localStorage.getItem(this.keyPrice);
        if (productsLocalStorage !== null) {
            return JSON.parse(productsLocalStorage);
        }
        return [];
    }

    getProductsWeight() {
        const productsLocalStorage = localStorage.getItem(this.keyWeight);
        if (productsLocalStorage !== null) {
            return JSON.parse(productsLocalStorage);
        }
        return [];
    }

    getProductsPriceSum() {
        const productsLocalStorage = localStorage.getItem(this.keyPriceSum);
        if (productsLocalStorage !== null) {
            return JSON.parse(productsLocalStorage);
        }
        return [];
    }

    // //

    getAllProductsPriceSum() {
        let productsPriceSum = this.getProductsPriceSum();
        let final_sum = 0;
        productsPriceSum.forEach(element => {
            final_sum += element;
        });
        return final_sum;
    }

    getAllProductsWeightSum() {
        let productsWeightSum = this.getProductsWeightSum();
        let final_sum = 0;
        productsWeightSum.forEach(element => {
            final_sum += element;
        });
        return final_sum;
    }

    // //

    getProductsWeightSum() {
        const productsLocalStorage = localStorage.getItem(this.keyWeightSum);
        if (productsLocalStorage !== null) {
            return JSON.parse(productsLocalStorage);
        }
        return [];
    }

    getProductsCatalogId() {
        const productsLocalStorage = localStorage.getItem(this.keyCatalogId);
        if (productsLocalStorage !== null) {
            return JSON.parse(productsLocalStorage);
        }
        return [];
    }

    getProductsTitle() {
        const productsLocalStorage = localStorage.getItem(this.keyTitle);
        if (productsLocalStorage !== null) {
            return JSON.parse(productsLocalStorage);
        }
        return [];
    }

    removeProducts(id) {
        let productsId = this.getProductsId();
        let productsCount = this.getProductsCount();
        let productsPrice = this.getProductsPrice();
        let productsWeight = this.getProductsWeight();
        let productsPriceSum = this.getProductsPriceSum();
        let productsWeightSum = this.getProductsWeightSum();
        let productsCatalogId = this.getProductsCatalogId();
        let productsTitle = this.getProductsTitle();
        let counter_k = 0;

        productsId.forEach(element => {
            if (element != id) {
                counter_k += 1;
            } else {
                productsId.splice(counter_k, 1);
                productsCount.splice(counter_k, 1);
                productsPrice.splice(counter_k, 1);
                productsWeight.splice(counter_k, 1);
                productsPriceSum.splice(counter_k, 1);
                productsWeightSum.splice(counter_k, 1);
                productsCatalogId.splice(counter_k, 1);
                productsTitle.splice(counter_k, 1);

                localStorage.setItem(this.keyId, JSON.stringify(productsId));
                localStorage.setItem(this.keyCount, JSON.stringify(productsCount));
                localStorage.setItem(this.keyPrice, JSON.stringify(productsPrice));
                localStorage.setItem(this.keyWeight, JSON.stringify(productsWeight));
                localStorage.setItem(this.keyPriceSum, JSON.stringify(productsPriceSum));
                localStorage.setItem(this.keyWeightSum, JSON.stringify(productsWeightSum));
                localStorage.setItem(this.keyCatalogId, JSON.stringify(productsCatalogId));
                localStorage.setItem(this.keyTitle, JSON.stringify(productsTitle));
                header.render(header.get_time(), this.getAllProductsPriceSum(), this.getAllProductsWeightSum());
            }
        });
    }

    getProductsAllContent() {
        let productsId = this.getProductsId();
        let productsCount = this.getProductsCount();
        let productsPrice = this.getProductsPrice();
        let productsWeight = this.getProductsWeight();
        let productsPriceSum = this.getProductsPriceSum();
        let productsWeightSum = this.getProductsWeightSum();
        let productsCatalogId = this.getProductsCatalogId();
        let productsTitle = this.getProductsTitle();

        let counter = 0;
        let arr = [];

        productsId.forEach(element => {
            arr.push([productsId[counter], productsCount[counter], productsPrice[counter], productsWeight[counter], productsPriceSum[counter], productsWeightSum[counter], productsCatalogId[counter], productsTitle[counter]]);
            counter += 1;
        });

        return arr;
    }

    chechExists(id_product) {
        let productsId = this.getProductsId();

        let counter = 0;
        let ext = 0;

        productsId.forEach(element => {
            if (productsId[counter] == id_product) {
                ext = 1;
            } else {
                counter += 1;
            }
        });

        if (ext == 1) {
            return true;
        } else {
            return false;
        }
    }

    putProducts(id_product, count, weight, catalog_id, title, price) {
        let productsId = this.getProductsId();
        let productsCount = this.getProductsCount();
        let productsPrice = this.getProductsPrice();
        let productsWeight = this.getProductsWeight();
        let productsPriceSum = this.getProductsPriceSum();
        let productsWeightSum = this.getProductsWeightSum();
        let productsCatalogId = this.getProductsCatalogId();
        let productsTitle = this.getProductsTitle();

        let counter = 0;

        if (this.chechExists(id_product) == true) {
            productsId.forEach(element => {
                if (productsId[counter] == id_product) {
                    productsCount[counter] = Number(productsCount[counter]) + Number(count);
                    productsPriceSum[counter] += count * productsPrice[counter];
                    productsWeightSum[counter] += count * productsWeight[counter];
                }
                counter += 1;
            });
        } else {

            productsId.push(id_product);
            productsCount.push(count);
            productsPrice.push(parseFloat(price, 10));
            productsWeight.push(parseFloat(weight, 10));
            productsPriceSum.push(count * parseFloat(price, 10));
            productsWeightSum.push(count * parseFloat(weight, 10));
            productsCatalogId.push(catalog_id);
            productsTitle.push(title);

            // $.ajax({
            //     url: 'cart.php',
            //     type: 'POST',
            //     data: { 'id': id_product },
            //     dataType: 'json',
            //     async: false,
            //     success: function(response) {
            //         productsId.push(response.id);
            //         productsCount.push(count);
            //         productsPrice.push(response.price);
            //         productsWeight.push(response.weight);
            //         productsPriceSum.push(count * response.price);
            //         productsWeightSum.push(count * response.weight);
            //         productsCatalogId.push(response.catalog_id);
            //         productsTitle.push(response.title);
            //     }
            // });

            // CATALOG.forEach(({ id, weight, catalog_id, title, price }) => {
            //     if (id_product == id) {
            //         productsId.push(id);
            //         productsCount.push(count);
            //         productsPrice.push(price);
            //         productsWeight.push(weight);
            //         productsPriceSum.push(count * price);
            //         productsWeightSum.push(count * weight);
            //         productsCatalogId.push(catalog_id);
            //         productsTitle.push(title);
            //     }
            // });
        }

        localStorage.setItem(this.keyId, JSON.stringify(productsId));
        localStorage.setItem(this.keyCount, JSON.stringify(productsCount));
        localStorage.setItem(this.keyPrice, JSON.stringify(productsPrice));
        localStorage.setItem(this.keyWeight, JSON.stringify(productsWeight));
        localStorage.setItem(this.keyPriceSum, JSON.stringify(productsPriceSum));
        localStorage.setItem(this.keyWeightSum, JSON.stringify(productsWeightSum));
        localStorage.setItem(this.keyCatalogId, JSON.stringify(productsCatalogId));
        localStorage.setItem(this.keyTitle, JSON.stringify(productsTitle));
        header.render(header.get_time(), this.getAllProductsPriceSum(), this.getAllProductsWeightSum());
    }

    reload() {
        header.render(header.get_time(), this.getAllProductsPriceSum(), this.getAllProductsWeightSum());
    }

}

const localStorageUtil = new LocalStorageUtil();