<template>
    <div class="home-section">
        <Header/>
        <ProductList/>
    </div>
</template>

<script>
    import Header from '../components/layouts/Header.vue'
    import ProductList from '../components/product'
    export default {
        components: {
            Header,
            ProductList
        }
    }
</script>