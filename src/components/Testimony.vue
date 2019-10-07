<template>
    <div class="container-fluid mb-5">
        <div class="row text-center p-5">
            <div class="col-12">
                <h1 class="display-5" style="text-transform: uppercase;">Témoignages</h1>
            </div>
            <div class="col-12 mb-4">
                <hr class="blue" style="width: 20%;">
            </div>
            <div class="col-lg-4 col-md-12 col-sm-12">
                <div class="my-card">
                    <div class="my-card-body">
                        <p class="lead" style="margin-top: 1.7rem">
                            <i class="fas fa-quote-left fa-lg"></i>
                            Des nouvelles de nos enfants vous en aurez certainement car
                            vous avez été plus que des enseignants.
                            <i class="fas fa-quote-right fa-lg"></i>
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-12 col-sm-12">
                <div class="my-card">
                    <div class="my-card-body">
                        <p class="lead" style="font-size: 1.1rem;margin-top: 1.7rem">
                            <i class="fas fa-quote-left fa-lg"></i>
                            Vous m'avez été d'un important soutien durant cette année.
                            Merci à toute l'équipe de m'avoir déployé une grande aide. J'espère avoir l'occasion de vous revoir.
                            Je vous tiendrai au courant de mon orientation
                            ainsi que mon parcours durant ces prochaines années.
                            <i class="fas fa-quote-right fa-lg"></i>
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-12 col-sm-12">
                <div class="my-card">
                    <div class="my-card-body">
                        <p class="lead" style="margin-top: 1.7rem">
                            <i class="fas fa-quote-left fa-lg"></i>
                            Merci grâce à vous j'ai eu mon bac.
                            Peu de mots mais beaucoup de reconnaissance.
                            <i class="fas fa-quote-right fa-lg"></i>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'Testimony'
  }
</script>

<style lang="scss" scoped>
    @import '../variables.scss';
    .display-5 {
        color: $dark-blue-color;
        font-weight: 400;
    }
    .my-card {
        margin-bottom: 20px;
        background-color: #efefef;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
        transition: .2s ease-in;
    }

    .my-card:hover {
        transform: scale(1.05);
        box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.4);
    }

    .my-card-body {
        padding: 2rem;
        width: 100%;
    }
    .jumbotron {
        background: white;
    }
    svg {
        color: $light-orange-color;
        margin-inline: 10px;
    }
    /** media queries **/
    @media screen and (min-width: 992px) { /* large screen */

    }
    @media screen and (max-width: 992px) { /* large screen */
        .display-5 {
            font-size: 2rem;
        }
        .lead {
            font-size: 1.1rem;
        }
    }
    @media screen and (max-width: 768px) { /* medium screen */
        .display-5 {
            font-size: 1.8rem;
        }
        .lead {
            font-size: 1.1rem;
        }
    }
    @media (max-width: 576px) { /* mobile screen */
        .display-5 {
            font-size: 1.5rem;
        }
        .lead {
            font-size: 1rem;
        }
    }
</style>

