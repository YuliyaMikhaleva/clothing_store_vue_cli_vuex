<template>
  <div id="app">
    <Header/>
    <router-view />
    <Footer/>
    <Copyright/>
  </div>
</template>
<script>
  import Header from "./components/Header";
  import Footer from "./components/Footer";
  import Copyright from "./components/Copyright";
  export default {
    components: {
      Copyright,
      Footer,
      Header
    },
    data(){
      return{

      }
    },
    mounted() {
      this.$store.dispatch('loadCatalog')
    }
  }
</script>
<style lang="scss">
</style>