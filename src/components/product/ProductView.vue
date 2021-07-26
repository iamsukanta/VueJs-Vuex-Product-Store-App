<template>
    <div class="container">
        <div class="row mt-5">
            <div class="col">
                <h4 class="text-center">Product Details</h4>
                <table class="table table-bordered mt-4">
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <td>{{ product.name }}</td>
                        </tr>
                        <tr>
                            <th>Price</th>
                            <td>{{ product.price }}</td>
                        </tr>
                        <tr>
                            <th>Category</th>
                            <td>{{ product.category }}</td>
                        </tr>
                        <tr>
                            <th>Description</th>
                            <td>{{ product.description }}</td>
                        </tr>
                    </tbody>
                </table>
                <router-link to="/products"><button class="btn btn-primary"> Back </button></router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        this.$store.dispatch('getProductDetails', this.$route.params.id);
    },
    computed: {
        product() {
            return this.$store.getters.product;
        }
    }
}
</script>