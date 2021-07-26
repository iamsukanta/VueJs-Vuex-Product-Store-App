<template>
    <div class="home-section">
        <Header/>
        <CartProducts/>
    </div>
</template>

<script>
    import Header from '../components/layouts/Header.vue'
    import CartProducts from '../components/product/CartProducts.vue'
    export default {
        components: {
            Header,
            CartProducts
        }
    }
</script>