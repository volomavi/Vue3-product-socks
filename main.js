const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: 'Socks',
            brand: 'Vue',
            selectedVariant: 0,
            details: ['50% Cotton', '30% Wool', '20% Polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0},
            ],
            sizes: ['Small', 'Medium', 'Large'],
            onSale: true

        }
    },

    methods: {
        addToCart() {
            this.cart +=1;
        },

        removeFromCart(){
            this.cart --;
        },

        updateVariant(index) {
            this.selectedVariant = index;
        }
    },

    computed: {
        title() { 
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock()  {
            return this.variants[this.selectedVariant].quantity
        },
        saleMessage() {
            if (this.onSale) {
                return this.brand + ' ' + this.product + ' is on sale'
            }
        },
        
    }
})