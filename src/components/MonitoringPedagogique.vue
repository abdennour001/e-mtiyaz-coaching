<template>
    <div class="container-fluid">
        <div class="row text-center">
            <div class="col-12">
                <h1 class="display-4" style="text-transform: uppercase;">Notre suivi pédagogique</h1>
            </div>
            <div class="col-6 offset-3">
                <hr class="dark">
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
            <div class="row suivi-bg">
                <div class="col-lg-4">
                  <div class="row text-left">
                    <div class="col-12">
                        <div class="shrink">
                            <h5>Entretien de diagnostic pédagogique</h5>
                            <p>Avant toute inscription pour un service e-mtiyaz, un entretien de diagnostic avec notre Conseiller Pédagogique est établi afin de cibler les besoins et les attentes de l’élève/l’étudiant et de sa famille. </p>
                        </div>
                    </div>
                  </div>
                </div>
                <!--                    -->
                <div class="col-lg-4">
                    <div class="row text-center">
                        <div class="col-12">
                            <div class="shrink">
                                <h5>Suivi régulier</h5>
                                <p>Dans le cadre de nos offres d’accompagnement scolaire, un point téléphonique est systématiquement tenu après la première séance  afin de confirmer ensemble l’adéquation de nos Intervenants
                                    Pédagogiques avec les besoins de l’élève. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <!--                    -->
                <div class="col-lg-4">
                    <div class="row text-right">
                        <div class="col-12">
                            <div class="shrink">
                                <h5>Bilan final de progression</h5>
                                <p>Régulièrement, un bilan pédagogique de suivi et d’évaluation est remis à l’élève ainsi qu’à sa famille afin de faire le point sur sa progression. Ce bilan permet d'apprécier les acquis de l'élève et de réévaluer ses besoins pédagogiques</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'monitoringPedagogique'
  }
</script>

<style lang="scss" scoped>
    @import "../variables.scss";
    .canvas {
    }
    .suivi-bg {
        background: url("../assets/background/bg.png") no-repeat;
        background-size: 100%;
    }
    .squeeze {
        width: 90%;
    }
    .shrink {
        font-size: 1.1rem;
        font-weight: 300;
        width: 80%;
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
</style>
