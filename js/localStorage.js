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

    putProducts(id_product, count) {
        let productsId = this.getProductsId();
        let productsCount = this.getProductsCount();
        let productsPrice = this.getProductsPrice();
        let productsWeight = this.getProductsWeight();
        let productsPriceSum = this.getProductsPriceSum();
        let productsWeightSum = this.getProductsWeightSum();
        let productsCatalogId = this.getProductsCatalogId();
        let productsTitle = this.getProductsTitle();

        CATALOG.forEach(({ id, weight, catalog_id, title, price }) => {
            if (id_product == id) {
                productsId.push(id);
                console.log(id);
                productsCount.push(count);
                console.log(count);
                productsPrice.push(price);
                console.log(price);
                productsWeight.push(weight);
                console.log(weight);
                productsPriceSum.push(count * price);
                console.log(count * price);
                productsWeightSum.push(count * weight);
                console.log(count * weight);
                productsCatalogId.push(catalog_id);
                console.log(catalog_id);
                productsTitle.push(title);
                console.log(title);
            }
        });

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
}

const localStorageUtil = new LocalStorageUtil();