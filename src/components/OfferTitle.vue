<template>
    <div class="container-fluid content my-4">
        <div class="row text-center">
            <div class="col-12">
                <p class="lead">L'offre d'e-mtiyaz répond à trois besions essentiels des parcours <strong>scolaires</strong>, <strong>académiques</strong> et <strong>professionnels</strong> :</p>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'OfferTitle'
  }
</script>

<style lang="scss" scoped>
    @import '../variables.scss';
    .content {
        color: $font-color-dark;
        width: 75%;
    }
    .lead {
        font-size: 1.3rem;
    }
    strong {
        font-weight: 500;
    }
</style>
