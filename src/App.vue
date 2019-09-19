<template>
  <div id="app">

  </div>
</template>

<script>
  export default {
    data() {

    },
    mounted() {

    },
    components: {

    }
  }
</script>

<style lang="scss">

  @import './variables.scss';

  #app {
    font-family: $font-family-sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: $font-color;
  }
  #nav {
    padding: 30px;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
