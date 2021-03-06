app.component('product-display',  {
    props: {
        premium: {
            type: Boolean,
            required: true,
        },
    },
    template:
    /*html*/
    `<div class="product-display">
    <div class="product-container">

      <div class="product-image">
        <img 
          :class="{'out-of-stock-img': !inStock}"
          :src="image" 
          >
      </div>

      <div class="product-info">
        <h1>{{title}}</h1>

        <p v-if="onSale">{{saleMessage}}</p>

        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>


        <p>Shipping: {{shipping}} </p>

        <product-details :details="details"></product-details>


        <div 
          v-for="(variant, index) in variants"
          :key="variant.id"
          @mouseover="updateVariant(index)"
          class="color-circle"
          :style="{ backgroundColor: variant.color}">

        </div>

        <ul>
          <li v-for="size in sizes">{{size}}</li>
        </ul>
        <!-- <div v-for="variant in variants" :key="variant.id" @mouseover="updateImage(variant.image)">{{variant.color}}</div> -->
        <button 
          class="button"
          :class="{disabledButton: !inStock}"
          :disabled="!inStock" 
          @click="addToCart">
          Add to Cart
        </button>

        <button
          class="button"
          :class="{disabledButton: !inStock}"
          :disabled="!inStock" 
          @click="removeFromCart">
          Remove Item
        </button>    
        <!-- <div class="button" </div> -->
        
      </div>
    </div>
    <review-list v-if="reviews.length" :reviews="reviews"></review-list>
    <review-form @review-submitted="addReview"></review-form>

  </div>`,

  data() {
    return {
        product: 'Socks',
        brand: 'Vue',
        selectedVariant: 0,
        details: ['50% Cotton', '30% Wool', '20% Polyester'],
        variants: [
            { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
            { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0},
        ],
        sizes: ['Small', 'Medium', 'Large'],
        onSale: true,
        reviews: [],

    }
},

methods: {
    addToCart() {
        this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
    },

    removeFromCart(){
        this.$emit('remove-from-cart', this.variants[this.selectedVariant].id)
    },

    updateVariant(index) {
        this.selectedVariant = index;
    },

    addReview(review) {
        this.reviews.push(review)
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
    shipping() {
        if (this.premium){
            return 'Free'
        }
        return 2.99
    }
    
}
})