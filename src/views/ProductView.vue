<template>
    <div class="home-section">
        <Header/>
        <ProductView/>
    </div>
</template>

<script>
    import Header from '../components/layouts/Header.vue'
    import ProductView from '../components/product/ProductView'
    export default {
        components: {
            Header,
            ProductView
        }
    }
</script>