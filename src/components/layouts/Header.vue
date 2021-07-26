<template>
    <div class="header-section bg-primary">
        <div class="container-fluid">
            <div class="row ">
                <div class="col">
                    <ul>
                        <li><router-link to="/">Home</router-link></li>
                        <li><router-link to="/products">Products</router-link></li>
                        <li><router-link to="/cart">Cart</router-link></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .header-section {
        ul {
            margin: 0px;
            list-style-type: none;
            li {
                color: white;
                display: inline-block;
                padding: 20px 15px;
                text-align: center;

                a {
                    color: white;
                    text-decoration: none;
                }
            }
        }
    }
</style>