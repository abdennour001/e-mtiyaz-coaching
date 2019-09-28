<template>
    <div class="container-fluid my-5">
        <div class="row text-center jumbotron">
            <div class="col-12 mb-4">
                <img src="../assets/logo/e-mtiyaz-logo-v3-coaching.png" class="w-25" alt="">
            </div>
            <div class="col-12 mb-4">
                <p class="lead">
                    e-mtiyaz est <strong>membre de l’incubateur d’HEC Paris</strong> en France
                    et <strong>est soutenue par l’Union Européenne</strong> via son programme DIAMED
                    qui accompagne les porteurs de projets euro-méditerranéens.
                </p>
            </div>
        </div>
        <div class="row text-center squeeze-75 mb-4">
            <div class="col-lg-3">
                <img src="../assets/img/union-européenne.png" class="w-75" alt="">
            </div>
            <div class="col-lg-3">
                <img src="../assets/img/inc.png" class="w-75" alt="">
            </div>
            <div class="col-lg-3">
                <img src="../assets/img/heo.png" class="w-75" alt="">
            </div>
            <div class="col-lg-3">
                <img src="../assets/img/diamed.png" class="w-75" alt="">
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'Partners'
  }
</script>

<style lang="scss" scoped>
    @import '../variables.scss';
    .jumbotron {
        background-color: $light-blue-color-transparent;
        padding: 2rem;
    }
    strong {
        font-weight: 500;
    }
</style>
