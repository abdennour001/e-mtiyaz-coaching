<template>
    <div class="row text-center" style="margin-top: 6rem;">
        <div class="col-12">
            <h1 class="display-5">Prenez le cap de <strong>l'excellence</strong></h1>
        </div>
        <div class="col-12 mb-4">
            <hr class="blue" style="width: 20%;">
        </div>
        <div class="col-12">
            <h2 class="display-6">Contactez-nous au:</h2>
            <p class="lead">05 40 40 51 15</p>
            <p class="lead">023 37 10 61</p>
            <h2 class="display-6">Par email:</h2>
            <p class="lead">excellence@e-mtiyaz.com</p>
            <p class="lead">Dar Diaf - 98 Lot Benhaddadi Said</p>
            <p class="lead">Chéraga - Alger</p>
        </div>
        <div class="col-12">
            <iframe class="py-4" src="https://www.google.com/maps/d/embed?mid=1rVEb_-u7GMsu1Vv1Kv3jJVJuNL0" width="100%" height="450" frameBorder="0"></iframe>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'Location'
  }
</script>

<style lang="scss" scoped>
    @import '../variables.scss';
    .display-5 {
        color: $dark-blue-color;
        font-weight: 300;
    }
    strong {
        font-weight: 500;
    }
    .lead {
        text-transform: uppercase;
        font-size: 1.2rem;
        font-weight: 500;
        color: $dark-orange-color;
    }
    .display-6 {
        font-size: 1.3rem;
        color: $font-color-dark;
        font-weight: 400;
    }
</style>
