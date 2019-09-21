<template>
  <div id="app">
      <div class="header">
          <div class="header-content">
              <!-- Navigation Section -->
              <Navigation></Navigation>
              <!-- Title Section -->
              <Title></Title>
          </div>
      </div>
  </div>
</template>

<script>
  import Navigation from './components/Navigation'
  import Title from './components/Title'
  export default {
    data() {

    },
    mounted() {

    },
    components: {
      Title,
      Navigation
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
        color: $font-color-dark;
    }

    .header {
        position: relative;
        background: url(./assets/background/main-bg-final-testmdpi.svg);
        background-size: cover;
        height: 100vh;
        overflow: hidden;
    }

    .header:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 50px;
        background-image: url(./assets/background/main-bg-wavemdpi.svg);
        background-size: cover;
    }


</style>
