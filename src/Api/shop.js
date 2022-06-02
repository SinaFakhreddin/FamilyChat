import _product from './Product.json'

export default {
    getProductsFromApi: (cb) =>setTimeout(() =>cb(_product) , 2000)
}