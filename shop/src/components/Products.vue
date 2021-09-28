<template>
    <div class="catalog container">
        <Product v-bind:key="item.id" v-for="item of products" v-bind:product="item"/>
    </div>
</template>

<script>
    import Product from "./Product";
    export default {
        name: "Products",
        components:{Product},
        computed: {//вычисляемое свойство
            products(){
                return this.$store.getters.getCatalog
            }
        },
    }
</script>

<style>

</style>