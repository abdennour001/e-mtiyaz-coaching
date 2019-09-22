<template>
    <div class="container-fluid pb-5">
        <div class="row text-center">
            <div class="col-12">
                <h1 class="display-4" style="text-transform: uppercase;">Notre Charte de qualité</h1>
            </div>
            <div class="col-6 offset-3">
                <hr class="dark">
            </div>
            <div class="col-12">
                <div class="row text-left">
                    <div class="col-3">
                        <div class="row justify-content-center">
                            <div class="number-card">
                                <div class="card-content">
                                    <span>01</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-9">
                        <p class="lead">Notre pédagogie d’excellence est inspirée des <strong>standards internationaux les plus reconnus</strong>, pour le plus grand bénéfice de vos enfants.</p>
                    </div>
                </div>
            </div>

            <div class="col-12">
                <br>
            </div>

            <div class="col-12">
                <div class="row text-left">
                    <div class="col-3">
                        <div class="row justify-content-center">
                            <div class="number-card">
                                <div class="card-content">
                                    <span>02</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-9">
                        <p class="lead">Nos Intervenants Pédagogiques, nos Conseillers d’Orientation et nos Coachs sont triés sur le volet et notre équipe managériale est issue des meilleures formations en France et à l’international.</p>
                    </div>
                </div>
            </div>

            <div class="col-12">
                <br>
            </div>

            <div class="col-12">
                <div class="row text-left">
                    <div class="col-3">
                        <div class="row justify-content-center">
                            <div class="number-card">
                                <div class="card-content">
                                    <span>03</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-9">
                        <p class="lead">Nos Intervenants Pédagogiques reçoivent une formation de qualité labellisée e-mtiyaz, garante de leurs compétences pédagogiques.</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
  export default {
    name: 'QualityCharter'
  }
</script>

<style lang="scss" scoped>
    @import '../variables.scss';
    .number-card {
        width: 90px;
        height: 120px;
        background: url("../assets/background/charter-bg.png") no-repeat center;
        background-size: cover;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        color: $font-color-light;
    }
    .card-content {
        position: absolute;
        top: 9%;
        left: 25%;
    }

    .card-content span {
        font-size: 2.5rem;
    }
</style>
