<template>
    <div class="container-fluid content">
        <div class="row text-center mb-5">
            <div class="col-12">
                <h1 class="display-5" style="text-transform: uppercase;">Notre pédagogie d'excellence</h1>
            </div>
            <div class="col-12 mb-4">
                <hr class="blue" style="width: 20%;">
            </div>
            <!--            -->
            <div class="col-lg-3">
                <div class="row justify-content-center">
                    <div class="crop-div">
                        <h3 class="display-4">Standards internationaux</h3>
                    </div>
                </div>
            </div>
            <div class="col-lg-9">
                <p class="lead text-left">
                    La pédagogie e-mtiyaz est une pédagogie d’excellence, basée sur les standards des formations supérieures sélectives en France et  à l’international. 	D’abord, elle repose sur une approche du cours divisée entre assimilation des connaissances théoriques et application pratique de celles-ci. Ensuite, elle s’adosse aux dernières technologies de e-learning que nous implémentons et personnalisons spécialement pour nos élèves.	Enfin, elle est délivrée, sous l’encadrement de notre Conseiller Pédagogique, par des Intervenants Pédagogiques, des Conseillers d’Orientation ainsi que des Coachs expérimentés et formés en permanence aux exigences académiques du moment.                </p>            </div>
            <!--            -->
            <div class="col-12 my-4">
            </div>
            <!--            -->
            <div class="col-lg-3">
                <div class="row justify-content-center">
                    <div class="crop-div">
                        <h3 class="display-4">Meilleurs établissements</h3>
                    </div>
                </div>
            </div>
            <div class="col-lg-9">
                <p class="lead text-left">
                    Nos Intervenants Pédagogiques sont tous issus des meilleurs établissements d’enseignement supérieur en Algérie ou à l’étranger. Ils suivent une formation initiale délivrée par e-mtiyaz pour obtenir un label de qualité, gage de leur niveau de compétence.	De plus, ils sont régulièrement évalués à la fois par notre Conseiller Pédagogique mais surtout par nos élèves et leurs parents, pour répondre au mieux à leurs besoins. Enfin, ils sont astreints à une formation continue pour suivre en permanence l’évolution des programmes officiels, les parcours d’études et les procédures de sélection, pour maintenir tout au long de l’année un niveau d’excellence optimal.
                </p>
            </div>
            <!--            -->
            <div class="col-12 my-4">

            </div>
            <!--            -->
            <div class="col-lg-3">
                <div class="row justify-content-center">
                    <div class="crop-div">
                        <h3 class="display-4">Meilleures formations</h3>
                    </div>
                </div>
            </div>
            <div class="col-lg-9">
                <p class="lead text-left">
                    Nos Conseillers d’Orientation sont tous issus des meilleures formations à l’international et possèdent une solide connaissance du monde de l’enseignement supérieur en plus d’une riche expérience en soutien scolaire et coaching d’excellence. Ils connaissent les parcours d’excellence pour en être le produit et sont donc les plus à même de guider vos enfants, pour les aider à s’orienter et leur transmettre les clés de la réussite.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'ExcellencePedagogie'
  }
</script>

<style lang="scss" scoped>
    @import '../variables.scss';

    .content {
        padding: 60px;
    }

    .display-5 {
        color: $dark-blue-color;
        font-weight: 400;
    }
    .display-4 {
        font-size: 1.3rem;
        font-weight: 500;
        text-transform: uppercase;
    }
    .crop-div {
        width: 200px;
        height: 250px;
        background: $dark-blue-color;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        color: $font-color-light;
    }
    .crop-div:before {
        content: '';
        position: absolute;
        bottom: 0; right: 0;
        border-bottom: 60px solid white;
        border-left: 60px solid $dark-blue-color;
        width: 0;
    }
    .lead {
        font-size: 1.2rem;
    }
    /** media queries **/
    @media screen and (min-width: 992px) { /* large screen */

    }
    @media screen and (max-width: 992px) { /* large screen */
        .display-5 {
            font-size: 2rem;
        }
        .display-4 {
            font-size: 1.4rem;
        }
        .lead {
            font-size: 1.1rem;
        }
        .crop-div {
            width: 75%;
            height: 140px;
            background: $dark-blue-color;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            color: $font-color-light;
            margin-bottom: 20px;
        }
        .crop-div:before {
            content: '';
            position: absolute;
            bottom: 0; right: 0;
            border-bottom: 60px solid white;
            border-left: 60px solid $dark-blue-color;
            width: 0;
        }
    }
    @media screen and (max-width: 768px) { /* medium screen */
        .display-5 {
            font-size: 1.8rem;
        }
        .display-4 {
            font-size: 1.2rem;
        }
        .lead {
            font-size: 1.1rem;
        }
        .crop-div {
            width: 90%;
            height: 100px;
            background: $dark-blue-color;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            color: $font-color-light;
            margin-bottom: 20px;
        }
        .crop-div:before {
            content: '';
            position: absolute;
            bottom: 0; right: 0;
            border-bottom: 35px solid white;
            border-left: 35px solid $dark-blue-color;
            width: 0;
        }
        .content {
            padding: 30px;
        }
    }
    @media (max-width: 576px) { /* mobile screen */
        .display-5 {
            font-size: 1.5rem;
        }
        .display-4 {
            font-size: 1.2rem;
        }
        .lead {
            font-size: 1rem;
        }
    }
</style>
