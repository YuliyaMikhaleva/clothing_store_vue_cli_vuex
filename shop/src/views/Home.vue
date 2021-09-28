<template>
    <div>
        <Header_block/>
        <Products />
    </div>
</template>

<script>
    import Header_block from "../components/Header_block";
    import Products from "../components/Products";
    export default {
        name: "Home",
        components: {Products, Header_block}
    }
</script>
