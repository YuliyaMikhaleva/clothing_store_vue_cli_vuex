<template>
    <div>
        <Basket/>
        <Header_block/>
        <Products />

    </div>
</template>

<script>
    import Header_block from "../components/Header_block";
    import Products from "../components/Products";
    import Basket from "../components/Basket";
    export default {
        name: "Cart",
        components: {Basket, Products, Header_block}
    }
</script>

<style>
</style>