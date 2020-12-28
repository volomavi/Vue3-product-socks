const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: 'Socks',
            image: './assets/images/socks_green.jpg',
            inStock: true,
            details: ['50% Cotton', '30% Wool', '20% Polyester'],
            variants: [
                { id: 2234, color: 'green'},
                { id: 2235, color: 'blue'},
            ],
            sizes: ['Small', 'Medium', 'Large']
        }
    },

    methods: {
        addToCart() {
            this.cart +=1;
        }
    }
})