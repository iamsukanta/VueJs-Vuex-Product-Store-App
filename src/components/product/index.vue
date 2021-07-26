<template>
    <div class="container">
        <div class="row mt-5">
            <div class="col">
                <h4 class="text-center">Product List</h4>
                <table class="table table-bordered mt-4">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(product, index) in products" :key="index">
                            <td>{{ product.name }}</td>
                            <td>{{ product.price }}</td>
                            <td>
                                <button class="btn btn-sm btn-success me-3" @click="viewProduct(product.id)">View</button>
                                <BaseButton :text="product.cartProduct? 'Remove From Cart': 'Add To Cart'" @click="product.cartProduct? removeCartProduct(product): addToCartProduct(product)"/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>

import BaseButton from '../layouts/BaseButton.vue'
export default {
    mounted() {
        this.$store.dispatch('getAllProducts');
    },
    components: {
        BaseButton
    },
    computed: {
        products () {
            let allProducts = this.$store.getters.products;
            let cartitems = this.getCartItems();
            let products = allProducts.map((item) => {
                item.cartProduct = false;
                cartitems.forEach(element => {
                    if(element.id == item.id) {
                        item.cartProduct = true;
                    }
                });
                return item;
            });
            return products;
        }
    },

    methods: {
        getCartItems() {
            let data = localStorage.getItem('cartProducts');
            if(data) {
                return JSON.parse(data);
            } else {
                return [];
            }
        },

        viewProduct(id) {
            this.$router.push({
                path:`/products/${id}`
            })
        },

        addToCartProduct(product){
            let cartItems = this.getCartItems();
            cartItems.push(product);
            localStorage.setItem('cartProducts', JSON.stringify(cartItems));
            this.$store.dispatch('getAllProducts');
        },

        removeCartProduct(product){
            let cartItems = this.getCartItems();
            cartItems = cartItems.filter((item) => item.id != product.id);
            localStorage.setItem('cartProducts', JSON.stringify(cartItems));
            this.$store.dispatch('getAllProducts');
        }
    }
}
</script>