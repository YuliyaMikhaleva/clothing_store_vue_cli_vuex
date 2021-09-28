<template>
    <div class="catalog_cart" >
        <img class="catalog_cart_img" :src="product.img" width="250" height="270" alt="photo" />
        <h3 class="catalog_cart_title">{{ product.title }}</h3>
        <span class="catalog_cart_price"><span>{{ product.price }}</span>рублей</span>
        <button
                class="catalog_cart_button"
                @click="addToCart"
        >
            Добавить в корзину
        </button>
    </div>
</template>

<script>
    export default {
        name: "Product",
        props:['product'],
        methods:{
            addToCart(){
                this.$store.commit('addToCart', this.product);
                console.log(this.$store.state.cartItems)
            }
        }
    }
</script>

<style>

</style>