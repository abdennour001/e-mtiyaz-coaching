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
      <!-- Notre offre de services -->
      <Offers></Offers>
      <!-- Notre centre d'excellence -->
      <ExcellenceCenter></ExcellenceCenter>
      <!-- Notre pédagogie d'excellence -->
      <ExcellencePedagogie></ExcellencePedagogie>
      <!-- Notre suivi pédagogique -->
      <MonitoringPedagogique></MonitoringPedagogique>
      <!-- Nos outils e-learning -->
      <Testimony></Testimony>
      <!-- Partners -->
      <Partners></Partners>
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
  import Offers from './components/Offers'
  import ExcellenceCenter from './components/ExcellenceCenter'
  import ExcellencePedagogie from './components/ExcellencePedagogie'
  import MonitoringPedagogique from './components/MonitoringPedagogique'
  import Testimony from './components/Testimony'
  import Partners from './components/Partners'
  export default {
    data() {

    },
    mounted() {

    },
    components: {
      Partners,
      Testimony,
      MonitoringPedagogique,
      ExcellencePedagogie,
      ExcellenceCenter,
      Offers,
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
        height: 1px;
        opacity: 1;
    }
    hr.blue {
        background-color: $medium-blue-color;
        height: 1px;
        opacity: 1;
        width: 50%;
    }

    /*title style*/


    /*image border style*/
    .img-border {
        border: 30px solid whitesmoke;
        -webkit-box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.2);
        -moz-box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.2);
        box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
    }

    /*squeeze*/
    .squeeze-75 {
        width: 75%;
        margin: 0 auto;
        padding-top: 2rem;
    }
    .squeeze-50 {
        width: 50%;
        margin: 0 auto;
        padding-top: 2rem;
    }

    /*color orange*/
    .orange-light {
        color: $light-orange-color;
    }
    .orange-dark {
        color: $dark-orange-color;
    }

    .img-border {
        border: 30px solid whitesmoke;
        -webkit-box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.2);
        -moz-box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.2);
        box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
    }
</style>
