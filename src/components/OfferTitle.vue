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

    /** media queries **/
    @media screen and (min-width: 992px) { /* medium screen */

    }
    @media screen and (max-width: 992px) { /* medium screen */

    }
    @media screen and (max-width: 768px) { /* tablet screen */
        .lead {
            font-size: 1.2rem;
        }
        .content {
            width: 95%;
        }
    }
    @media (max-width: 576px) { /* mobile screen */
        .lead {
            font-size: 1.1rem;
        }
        .content {
            width: 100%;
        }
    }
</style>
