import axios from 'axios';
const URL = 'http://localhost:3000/products';


export default {
    GET_PRODUCTS_FROM_API({commit}) {
        return axios(URL, {
            method: "GET"
        })
            .then((products) => {
                commit('SET_PRODUCTS_TO_STATE', products.data);
                return products
            })
            .catch((onerror) => {
                console.log(onerror);
                return onerror
            })
    }
}
