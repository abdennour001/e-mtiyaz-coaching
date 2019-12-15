<template>
    <div class="container-fluid">
        <div class="row text-center">
            <div class="col-12">
                <h1 class="display-5" style="text-transform: uppercase;">Notre suivi pédagogique</h1>
            </div>
            <div class="col-12 mb-4">
                <hr class="blue" style="width: 20%;">
            </div>
        </div>

        <div class="row jumbotron align-items-center">
            <div class="col-12">
                <p class="lead">
                    Parce que les parents sont partie prenante de la réussite de leur enfant, nous nous engageons à leur offrir <strong> tous les outils leur permettant de suivre le travail et la progression de leur enfant, au quotidien.</strong>
                </p>
                <p class="lead">
                    Quelle que soit l’offre concernée, le suivi e-mtiyaz intervient à différentes étapes<strong> de notre relation de confiance :</strong>
                </p>
            </div>
        </div>

        <div class="container-fluid squeeze">
            <div class="row suivi-bg text-center">
                <div class="col-lg-4 col-md-4 col-sm-12">
                  <div class="row text-lg-left text-md-left text-sm-center">
                    <div class="col-12">
                        <div class="shrink left-sec">
                            <h5 class="t">Entretien de diagnostic pédagogique</h5>
                            <p class="lead l">Avant toute inscription pour un service e-mtiyaz, un entretien de diagnostic avec notre Conseiller Pédagogique est établi afin de cibler les besoins et les attentes de l’élève/l’étudiant et de sa famille. </p>
                        </div>
                    </div>
                  </div>
                </div>
                <!--                    -->
                <div class="col-lg-4 col-md-4 col-sm-12">
                    <div class="row text-center center-sec">
                        <div class="col-12">
                            <div class="shrink">
                                <h5 class="t">Suivi régulier</h5>
                                <p class="lead l">Dans le cadre de nos offres d’accompagnement scolaire, un point téléphonique est systématiquement tenu après la première séance  afin de confirmer ensemble l’adéquation de nos Intervenants
                                    Pédagogiques avec les besoins de l’élève. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <!--                    -->
                <div class="col-lg-4 col-md-4 col-sm-12">
                    <div class="row text-lg-right text-md-right text-sm-center right-sec">
                        <div class="col-12">
                            <div class="shrink mb-5">
                                <h5 class="t">Bilan final de progression</h5>
                                <p class="lead l">Régulièrement, un bilan pédagogique de suivi et d’évaluation est remis à l’élève ainsi qu’à sa famille afin de faire le point sur sa progression. Ce bilan permet d'apprécier les acquis de l'élève et de réévaluer ses besoins pédagogiques</p>
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
    name: 'monitoringPedagogique',
    mounted () {
      $(document).ready(function() {
        window.sr = ScrollReveal({ reset: false });
        sr.reveal('.t', {
          duration: 1000,
          origin: 'top',
          distance: '100px'
        });
        sr.reveal('.l', {
          duration: 1000,
          origin: 'bottom',
          delay: 500,
          distance: '50px'
        });
      });
    }
  }
</script>

<style lang="scss" scoped>
    @import "../variables.scss";
    h5 {
        color: $dark-blue-color;
        font-size: 1.3rem;
        font-weight: 500;
    }
    .display-5 {
        color: $dark-blue-color;
        font-weight: 400;
    }
    .canvas {
    }
    .suivi-bg {
        background: url("../assets/background/bg.png") no-repeat;
        background-size: 100%;
    }
    .lead {
        font-size: 1.1em;
    }
    .squeeze {
        width: 90%;
    }
    .shrink {
        font-size: 1.1rem;
        font-weight: 300;
        width: 80%;
    }
    .left-sec {
        margin-left: 6.6rem;
        margin-top: 5.5rem;
    }
    .center-sec {
        margin-top: 12rem;
        margin-left: 3rem;
    }
    .right-sec {
        margin-top: 5.5rem;
        margin-right: 2rem;
    }
    strong {
        font-weight: bold;
    }
    @media (max-height: 500px) {
        .suivi-bg {
            height: 150vh;
        }
    }
    @media (max-height: 800px) {
        .suivi-bg {
            height: 100vh;
        }
    }

    /** media queries **/
    @media screen and (min-width: 992px) { /* large screen */

    }
    @media screen and (min-width: 992px) and (max-width: 1360px) { /* large screen */

        .left-sec {
            margin-left: 6rem;
            margin-top: 5rem;
            .lead {
                font-size: 1.1rem;
                margin-top: 10px;
            }
        }
        .center-sec {
            margin-top: 10rem;
            margin-left: 2.5rem;
            .lead {
                font-size: 1.1rem;
                margin-top: 10px;
            }
        }
        .right-sec {
            margin-top: 5rem;
            margin-right: 1.5rem;
            .lead {
                font-size: 1.1rem;
                margin-top: 10px;
            }
        }
    }
    @media screen and (max-width: 992px) { /* large screen */
        .display-5 {
            font-size: 2rem;
        }
        .lead {
            font-size: 1.1rem;
        }
        h5 {
            font-size: 1.2rem;
            font-weight: 400;
        }
        .left-sec {
            margin-left: 4.5rem;
            margin-top: 3.2rem;
            .lead {
                font-size: .9rem;
                margin-top: 10px;
            }
        }
        .center-sec {
            margin-top: 8rem;
            margin-left: 1.5rem;
            .lead {
                font-size: .9rem;
                margin-top: 10px;
            }
        }
        .right-sec {
            margin-top: 3.5rem;
            margin-right: 1.3rem;
            .lead {
                font-size: .9rem;
                margin-top: 10px;
            }
        }
    }
    @media screen and (max-width: 768px) { /* medium screen */
        .display-5 {
            font-size: 1.8rem;
        }
        .lead {
            font-size: 1.1rem;
        }
        .content {
            padding: 2.5rem;
        }
        h5 {
            font-size: 1.3rem;
            font-weight: 500;
        }
        strong {
            font-weight: 500;
        }
        .left-sec {
            margin: 0;
            .lead {
                font-size: 1.1rem;
                margin-top: 10px;
            }
        }
        .center-sec {
            margin: 0;
            .lead {
                font-size: 1.1rem;
                margin-top: 10px;
            }
        }
        .right-sec {
            margin: 0;
            .lead {
                font-size: 1.1rem;
                margin-top: 10px;
            }
        }
        .suivi-bg {
            background-image: none;
        }
        .shrink {
            width: 100%;
        }
        .squeeze {
            width: 95%;
        }
    }
    @media (max-width: 576px) { /* mobile screen */
        .display-5 {
            font-size: 1.5rem;
        }
        .display-4 {
            font-size: 1.2em;
        }
        .lead {
            font-size: 1rem;
        }
        .squeeze {
            width: 100%;
        }
        .suivi-bg {
            height: 150vh;
        }
    }
</style>
