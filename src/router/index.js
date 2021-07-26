import { createWebHistory, createRouter } from 'vue-router';
import Home from '@/views/Home.vue';
import ProductsList from '@/views/ProductsList.vue';
import ProductView from '@/views/ProductView.vue';
import Cart from '@/views/Cart.vue';
const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},

	{
		path: '/products',
		name: 'ProductsList',
		component: ProductsList,
	},

	{
		path: '/products/:id',
		name: 'ProductView',
		component: ProductView,
	},

	{
		path: '/cart',
		name: 'Cart',
		component: Cart,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior: function (to) {
		if (to.hash) {
			return {
				el: to.hash
			}
		} else {
			return { bottom: 0 }
		}
	},
	
});

export default router;
