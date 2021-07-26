import { createStore } from 'vuex';

export default createStore ({
    state: {
        products: [],
        product: {}
    },

    getters : {
        products: state => state.products,
        product: state => state.product
    },

    mutations: {
        setProducts(state, payload) {
            state.products = payload;
        },

        setProduct(state, payload) {
            state.product = payload;
        }
    },

    actions: {
        getAllProducts({ commit }) {
            let products = [
                {id: "1", name: "Nike shoes", price: 50, category: "fashion", description: "This is a Nike Shoe"},
                {id: "2", name: "Play station 2", price: 40, category: "games", description: "Play stations 4 for your entertainment"},
                {id: "3", name: "iphone 7", price: 48, category: "phones", description: "Sleek iphone 7. With a lot of cool features"},
                {id: "4", name: "Samsung galaxy s7", price: 64, category: "phones", description: "Samsung phone. Not to be outdone by the iphone"},
                {id: "5", name: "Hamburger", price: 58, category: "Food", description: "Delicious hamburger for your pleasure"},
                {id: "6", name: "Sofa", price: 38, category: "household", description: "Comfortable sofa for your comfort"},
                {id: "7", name: "Electric Iron", price: 35, category: "household", description: "Straighten your clothes"},
            ];
            commit('setProducts', products);
        },

        getProductDetails({commit, dispatch, state }, payload) {
            dispatch('getAllProducts');
            state.products.forEach(item => {
                if(item.id == payload) {
                    commit('setProduct', item);
                }
            });
        }
    }   
})
