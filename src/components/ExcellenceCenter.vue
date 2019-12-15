<template>
    <div class="container-fluid">
        <div class="row text-center justify-content-center align-items-center content">
            <div class="col-12">
                <h1 class="display-5" style="text-transform: uppercase;">Notre centre d'excellence</h1>
            </div>
            <div class="col-12 mb-4">
                <hr class="blue" style="width: 20%;">
            </div>
<!--            -->
            <div class="col-lg-6 col-md-12 col-sm-12 mb-lg-5 mb-md-5">
                <h1 class="display-4 text-lg-left text-md-center text-md-center">Un centre d'excellence</h1>
                <h1 class="text-lg-left text-md-center text-md-center display-4"><strong>Accessible et moderne</strong></h1>
                <p class="lead text-lg-left text-md-center text-md-center mt-4">
                    Pour délivrer son offre éducative dans les meilleures conditions, e-mtiyaz s'est doté d'un centre d'excellence. À Alger, au coeur du quartier de Dar Diaf à Cheraga, les élèves sont accueillis au sein d'une structure moderne pour favoriser au maximum leur stimulation et leur donner toutes les chances d'étudier dans des conditions optimales.
                </p>
                <p class="lead text-lg-left text-md-center text-md-center">
                    Dans des salles de classe à effectifs réduits, équipées des dernières technologies éducatives, les élèves se retrouvent dans un environnement idéal pour se consacrer à leurs études.
                    Plus qu'un centre d'études, e-mtiyaz met à la disposition de ses élèves une salle de coworking dédiée à l'étude en autonomie, un espace cafétéria ainsi qu'une salle de lecture où ils peuvent consulter des revues sur leur orientation académique.
                </p>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 text-lg-right text-md-center text-md-center">
                <img src="../assets/img/centre-1.png" class="img-border i m-3" style="width: 70%" alt="">
            </div>
<!--            -->
            <div class="col-12">
                <div class="row">
                    <div class="col-lg-6 order-lg-2 col-md-12 col-sm-12 mt-md-3 mt-sm-5">
                        <h1 class="display-4 text-lg-right text-md-center text-md-center">Un bureau de liaison à paris</h1>
                        <h1 class="text-lg-right text-md-center text-md-center display-4">
                            <strong>pour vous accompagner partout dans le monde</strong></h1>
                        <p class="lead text-lg-right text-md-center text-md-center mt-4">En plus du centre d’excellence basé à Alger, e-mtiyaz dispose d’un bureau de liaison à Paris. Celui-ci est en charge de la recherche et de l’innovation et a pour mission de nouer des partenariats avec les institutions académiques les plus prestigieuses dans le monde afin de garantir la qualité pédagogique des services e-mtiyaz. Enfin, le bureau de liaison sert de structure d’accueil et d’accompagnement afin d’assurer le suivi de nos étudiants qui quittent l’Algérie et entreprennent des parcours d’études à l’international.</p>
                    </div>
                    <div class="col-lg-6 order-lg-1 col-md-12 col-sm-12 text-lg-left text-md-center text-md-center">
                        <img src="../assets/img/center-2.png" class="img-border i m-3" style="width: 75%" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'ExcellenceCenter'
  }
</script>

<style lang="scss" scoped>

    @import '../variables.scss';

    .content {
        padding: 5rem;
    }

    .display-5 {
        color: $dark-blue-color;
        font-weight: 400;
    }

    .display-4 {
        font-size: 1.7em;
        color: $dark-blue-color;
        text-transform: uppercase;
    }
    .lead {
        font-size: 1.2rem;
    }
    strong {
        font-weight: 600;
    }

    /** media queries **/
    @media screen and (min-width: 992px) { /* large screen */

    }
    @media screen and (max-width: 992px) { /* large screen */
        .display-5 {
            font-size: 2rem;
        }
        .display-4 {
            font-size: 1.5em;
        }
        .content {
            padding: 3rem;
        }
    }
    @media screen and (max-width: 768px) { /* medium screen */
        .display-5 {
            font-size: 1.8rem;
        }
        .content {
            padding: 2.5rem;
        }
        .lead {
            font-size: 1rem;
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
    }
</style>
