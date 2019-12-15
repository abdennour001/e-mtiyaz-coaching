<template>
    <footer class="mt-4">
        <div class="container-fluid">
            <div class="row text-center">
                <div class="col-md-6">
                    <div class="d-flex justify-content-center align-items-center mt-2">
                        <img class="logo-image" src="../assets/logo/e-mtiyaz-logo-v3-coaching-white.png">
                    </div>
                    <hr class="light">
                    <p>05 40 40 51 15</p>
                    <p>023 37 10 61</p>
                    <p>excellence@e-mtiyaz.com</p>
                    <p>Dar Diaf - 98 Lot Benhaddadi Said</p>
                    <p>Chéraga - Alger</p>
                </div>
                <div class="col-md-6">
                    <hr class="light">
                    <h5>Horaires d'ouverture</h5>
                    <hr class="light">
                    <p>Du Mardi au Samedi de 9h30 à 21h30.</p>
                    <p>Réception sur rendez-vous uniquement.</p>
                    <hr class="light mb-5" style="width: 50%;">
                    <a class="button scrollTo" href="" data-scroll="#section_rendez_vous">Demander un rendez-vous.</a>
                </div>
                <div class="col-12">
                    <hr class="light">
                    <p>&reg; coaching.e-mtiyaz.com | Tous droits réservés</p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
  export default {
    name: 'Footer'
  }
</script>

<style lang="scss" scoped>
    @import '../variables.scss';
    footer {
        background-color: $font-color-dark;
        color: whitesmoke;
        padding-top: 1rem;
        padding-bottom: .7rem;
    }

    .logo-image {
        max-width: 203px;
        margin-right: 10px;
    }
    .display-4 {
        font-size: 1rem;
    }
    .button {
        text-decoration: none;
        border-radius: 200px;
        padding: 10px;
        border: 1px solid $font-color-light;
        color: $font-color-light;
        transition: 0.5s ease;
    }
    .button:hover {
        background: $font-color-light;
        color: $font-color-dark;
    }
</style>
