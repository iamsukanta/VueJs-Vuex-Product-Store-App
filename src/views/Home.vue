<template>
    <div class="home-section">
        <Header/>
        <div class="container">
            <div class="row">
                <div class="col text-center p-5">
                    <h2>Welcome to my product App.</h2>
                    <router-link to="/products"><h4>Go to product list >></h4></router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from '../components/layouts/Header.vue'
    export default {
        components: {
            Header
        }
    }
</script>