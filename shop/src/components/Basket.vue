<template>
    <div class="basket">
        <h3 class="basket_title">Ваша корзина</h3>
        <div class="basket_parametrs">
            <span class="basket_part">Название товара</span>
            <span class="basket_part">Количество</span>
            <span class="basket_part">Цена за шт.</span>
            <span class="basket_part">Итого</span>
            <span class="basket_part"></span>
        </div>
        <router-link to="/"><i class="far fa-times-circle closeBtn"></i></router-link>

        <!--          если корзина пустая-->
<!--        <p v-if="!cartItems.length">Корзина пока пуста...</p>-->
        <BasketItem v-bind:key="good.id"  v-for="good of basket" v-bind:cartItem="good"/>
        <div class="cart_summ">
            <span>Товаров в корзине на сумму:<span class="basket_summ"> {{totalSumm}} </span> рублей</span>
        </div>
    </div>
</template>

<script>
    import BasketItem from "./BasketItem";
    export default {
        name: "Basket",
        components:{BasketItem},
        data(){
            return {
                cartItems: [], //товары корзины
            };
        },
        computed:{
            basket(){
                return this.$store.getters.getCart
            },
            totalSumm(){
                return this.$store.getters.getCart.reduce((acc, good) => acc + good.finishprice, 0)
            }
        },
    }
</script>

<style>
.basket{
    position: sticky;
    width: 550px;
    left: 57%;
}
.closeBtn{
    position: absolute;
    top: 0;
    right: 0%;
    font-size: 18px;
    cursor: pointer;
}
.closeBtn:hover{
   color: white;
}
.closeBtn:active{
    color: black;
}

</style>