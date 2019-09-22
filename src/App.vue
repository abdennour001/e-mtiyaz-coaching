<template>
  <div id="app">
      <!-- Navigation Section -->
      <Navigation></Navigation>
      <div class="header">
          <div class="header-content">
              <!-- Title Section -->
              <Title></Title>
          </div>
      </div>
      <!-- Le met du directeur -->
      <WordAbout></WordAbout>
      <!-- e-mtiyaz en quelques mots -->
      <JumbotronAbout></JumbotronAbout>
      <FixedBgOffer></FixedBgOffer>
      <!-- Notre charte de qualité -->
      <QualityCharter></QualityCharter>
      <!-- Nos engagement au service de l'excellence -->
      <ExcellenceService></ExcellenceService>
  </div>
</template>

<script>
  import Navigation from './components/Navigation'
  import Title from './components/Title'
  import WordAbout from './components/WordAbout'
  import JumbotronAbout from './components/JumbotronAbout'
  import FixedBgOffer from './components/FixedBgOffer'
  import QualityCharter from './components/QualityCharter'
  import ExcellenceService from './components/ExcellenceService'
  export default {
    data() {

    },
    mounted() {

    },
    components: {
      ExcellenceService,
      QualityCharter,
      FixedBgOffer,
      JumbotronAbout,
      WordAbout,
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
        margin-top: -75px;
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
        width: 101%;
        height: 50px;
        background-image: url(./assets/background/main-bg-wavemdpi.svg);
        background-size: cover;
    }
    hr.light {
        background-color: $font-color-light;
        opacity: 0.3;
    }
    hr.dark {
        background-color: $font-color-dark;
        opacity: 0.3;
    }
</style>
