<template>
    <div class="container-fluid content">
        <div class="row">
            <div class="col-12 mb-3">
                <div class="row align-items-lg-center">
                    <div class="col-3">
                        <div class="circle icon-4"></div>
                    </div>
                    <div class="col-9">
                        <div class="d-flex flex-column">
                            <div class="row">
                                <div class="col-12">
                                    <div class="row text-left">
                                        <h4 class="display-5">L'Accompagnement scolaire et méthodologique</h4>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="row text-left">
                                        <p id="p-1" class="lead">
                                            Parce que la confiance en soi, l’écoute et la motivation sont
                                            les facteurs clés de la réussite scolaire de l’enfant, e-mtiyaz a mis au point
                                            une gamme de services allant de l’aide aux devoirs au soutien scolaire en passant par des modules de préparation
                                            aux examens pour permettre aux élèves de progresser dans un cadre de rigueur, d’échange et d’excellence.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 mb-3">
                <div class="row align-items-lg-center">
                    <div class="col-3">
                        <div class="circle icon-5"></div>
                    </div>
                    <div class="col-9">
                        <div class="d-flex flex-column">
                            <div class="row">
                                <div class="col-12">
                                    <div class="row text-left">
                                        <h4 class="display-5">L'orientation académique et professionnelle</h4>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="row text-left">
                                        <p id="p-2" class="lead">
                                            Grâce à notre expérience à l’international et à la qualité de nos Conseillers d’Orientation,
                                            e-mtiyaz aide ses élèves à faire avancer, guider et concrétiser leur réflexion sur leur avenir,
                                            que ce soit pour la poursuite d’études,
                                            le choix d’une spécialisation ou la préparation d’une carrière ou d’un métier bien précis !
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <div class="row align-items-lg-center">
                    <div class="col-3">
                        <div class="circle-last icon-6"></div>
                    </div>
                    <div class="col-9">
                        <div class="d-flex flex-column">
                            <div class="row">
                                <div class="col-12">
                                    <div class="row text-left">
                                        <h4 class="display-5">Le coaching personnel, scolaire et académique</h4>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="row text-left">
                                        <p id="p-3" class="lead">
                                            Avec e-mtiyaz, la préparation d’un objectif académique ou professionnel devient une
                                            science exacte ! Examens, concours ou poursuite d’études à l’étranger sont autant de défis qui
                                            nécessitent une préparation personnalisée et transversale : orientation, méthodologie, stratégies de révision,
                                            sorties thématiques ou entraînements en conditions d’examens sont autant de services que l’offre coaching d’e-mtiyaz propose aux
                                            élèves afin de maximiser leurs chances de réussir leurs examens au-delà même de leurs attentes !
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import $ from 'jquery';
  import ScrollReveal from 'scrollreveal';

  export default {
    name: 'OfferBody',
    mounted () {
      $(document).ready(function() {
      window.sr = ScrollReveal({ reset: false });
      sr.reveal('#p-1', {
        duration: 2000,
        origin: 'top',
        distance: '50px'
      })
      sr.reveal('#p-2', {
        duration: 2000,
        origin: 'top',
        distance: '50px'
      })
      sr.reveal('#p-3', {
        duration: 2000,
        origin: 'top',
        distance: '50px'
      })
    });
    }
  }
</script>

<style lang="scss" scoped>
    @import '../variables.scss';

    .display-5 {
        color: $dark-blue-color;
        font-weight: 400;
    }

    .content {
        width: 80%;
        margin: 0 auto;
    }
    .circle:after {
        content: '';
        position: absolute;
        top: 0%;
        left: 50%;
        z-index: -1;
        height: 300px;
        border-left: 3px solid $dark-blue-color;
    }
    .circle {
        margin: 0 auto;
        width: 120px;
        height: 120px;
        border: 3px solid $dark-blue-color;
        border-radius: 200px;
        background-color: #49bee6
    }
    .circle-last {
        margin: 0 auto;
        width: 120px;
        height: 120px;
        border: 3px solid $dark-blue-color;
        border-radius: 200px;
        background-color: #49bee6
    }
    .icon-4 {
        position: relative;
        background: url("../assets/icons/icon-4.png") no-repeat center;
        background-size: cover;
    }
    icon-4:after {
        content: '';
        position: absolute;
        top: 0%;
        left: 0%;
        height: 50px;
        border: 2px solid #000;
    }
    .icon-5 {
        background: url("../assets/icons/icon-5.png") no-repeat center;
        background-size: cover;
    }
    .icon-6 {
        background: url("../assets/icons/icon-6.png") no-repeat center;
        background-size: cover;
    }
    .lead {
        font-size: 1.1rem;
    }
    h4 {
        text-transform: uppercase;
        color: $dark-blue-color;
    }
</style>
