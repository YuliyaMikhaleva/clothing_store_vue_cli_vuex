<template>
    <div class="newProducts">
        <!--        Здесь будут добавлены товары в корзине-->
        <div class="basket_item">
            <span class="basket_part">{{ cartItem.title }}</span>
            <span class="basket_part"
            ><span class="product_number">{{ cartItem.count }}</span> шт.</span
            >
            <span class="basket_part"
            ><span class="product_price">{{ cartItem.price }}</span> руб.</span
            >
            <span class="basket_part"
            ><span class="summOfRow">{{ cartItem.finishprice }}</span>
                        руб.</span
            >
            <button class="basket_item_delete" @click="deleteFromBasket">
                Удалить товар
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BasketItem",
        props:['cartItem'],
        methods:{
            deleteFromBasket(){
                this.$store.commit('deleteFromCart', this.cartItem);
                console.log(this.$store.state.cartItems)
            }
        }
    }
</script>

<style>

</style>