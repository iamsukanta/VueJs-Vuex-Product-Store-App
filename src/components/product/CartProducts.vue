<template>
    <div class="container">
        <div class="row mt-5">
            <div class="col">
                <div class="card">
                    <div class="card-header">
                        Card Product List
                    </div>
                    <div class="card-body">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Category</th>
                                    <th scope="col">Description</th>
                                </tr>
                            </thead>
                            <tbody v-if="cartProducts.length">
                                <tr v-for="(product, index) in cartProducts" :key="index">
                                    <td>{{ product.name }}</td>
                                    <td>{{ product.price }}</td>
                                    <td>{{ product.category }}</td>
                                    <td>{{ product.description }}</td>
                                </tr>
                            </tbody>

                            <tbody v-else>
                                <tr>
                                    <td> No cart product found.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="card-footer">
                        <span class="badge bg-primary me-2" v-for="(category, index) in cartCategory" :key="index"> {{ category }}</span>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        this.getCartItems();
    },
    data() {
        return {
            cartProducts: [],
            cartCategory: []
        }
    },

    methods: {
        getCartItems() {
            let data = localStorage.getItem('cartProducts');
            if(data) {
                this.cartProducts =  JSON.parse(data);
                this.cartProducts.forEach(element => {
                    if(!this.cartCategory.includes(element.category)) {
                        this.cartCategory.push(element.category);
                    }
                });
            } else {
                this.cartProducts = [];
            }
        },
    }
}
</script>