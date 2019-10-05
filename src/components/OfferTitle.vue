<template>
    <div class="container-fluid content my-4">
        <div class="row text-center">
            <div class="col-12">
                <p id="p-1" class="lead">L'offre d'e-mtiyaz répond à trois besions essentiels des parcours <strong>scolaires</strong>, <strong>académiques</strong> et <strong>professionnels</strong> :</p>
            </div>
        </div>
    </div>
</template>

<script>
  import $ from 'jquery';
  import ScrollReveal from 'scrollreveal';

  export default {
    name: 'OfferTitle',
    mounted () {
      $(document).ready(function() {
        window.sr = ScrollReveal({ reset: false });
        sr.reveal('#p-1', {
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
