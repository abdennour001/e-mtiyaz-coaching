<template>
    <div class="container-fluid" style="padding: 5rem">
        <div class="row text-center align-items-center">
            <div class="col-12">
                <h1 class="display-5" style="text-transform: uppercase;">Nos engagements au service de l'excellence</h1>
            </div>
            <div class="col-12 mb-4">
                <hr class="blue" style="width: 30%;">
            </div>
<!--            -->
            <div class="col-lg-6">
                <h1 class="display-4 text-left">Le niveau de formation de nos intervenants pédagogiques</h1>
                <p class="lead mt-4 text-left">- Tous les Intervenants Pédagogiques e-mtiyaz sont soit titulaires d’un diplôme de niveau licence minimum (Bac+3), soit étudiants dans les meilleures Grandes Ecoles (d’ingénieurs, de commerce, etc.) en Algérie ou à l’international, soit professeurs en exercice ou ayant exercé.</p>
                <p class="lead mt-4 text-left">- Les originaux des diplômes des intervenants sont systématiquement vérifiés. e-mtiyaz forme ses Intervenants : ceux-ci suivent une formation initiale qui leur permet d’obtenir le label de qualité e-mtiyaz et doivent régulièrement valider des modules de formation continue pour assurer l’excellence dans la durée.</p>
            </div>
            <div class="col-lg-6 mb-5">
                <img src="../assets/img/img-services-1.png" class="w-100 img-border i" alt="">
            </div>
<!--            -->
            <div class="col-lg-6 mb-5">
                <img src="../assets/img/img-services-2.png" class="w-75 img-border i" alt="">
            </div>
            <div class="col-lg-6">
                <h1 class="display-4 text-left">La qualité du processus de recrutement de nos intervenants pédagogiques</h1>
                <p class="lead mt-4 text-left">- Tests de connaissance : tous nos Intervenants sont soumis à des tests de  niveau dans la ou les matières dans lesquelles ils souhaitent donner des cours.
                    Mise en situation : chaque candidat est évalué par un membre de notre équipe managériale au cours d’une véritable mise en situation où l’Intervenant doit faire preuve de ses qualités pédagogiques.</p>
                <p class="lead mt-4 text-left">- Entretien individuel : chaque candidat est évalué lors d’un entretien individuel pour jauger ses compétences et s’assurer de sa capacité à motiver les élèves.
                    e-mtiyaz exige de chaque Intervenant un casier judiciaire vierge avant d’être autorisé à dispenser des cours.
                </p>
            </div>
<!--            -->
            <div class="col-lg-6">
                <h1 class="display-4 text-left">e-mtiyaz s'engage à vous satisfaire</h1>
                <p class="lead mt-4 text-left">- Dès votre premier contact, notre Conseiller Pédagogique prend le temps nécessaire pour comprendre vos besoins, faire un diagnostic du niveau de l’élève et fixer avec vous des objectifs précis.</p>
                <p class="lead mt-4 text-left">- Il vous transmet régulièrement, par téléphone et par écrit, des bilans pédagogiques évaluant la progression de votre enfant pour faire le point sur la poursuite des objectifs établis. </p>
                <p class="lead mt-4 text-left">- Il offre à votre enfant une palette de contenus pédagogiques (cours, fiches de révision) pour lui permettre d’optimiser son travail.</p>
            </div>
            <div class="col-lg-6">
                <img src="../assets/img/img-services-3.png" class="w-100 img-border i" alt="">
            </div>
        </div>
    </div>
</template>

<script>
  import $ from 'jquery';
  import ScrollReveal from 'scrollreveal';

  export default {
    name: 'ExcellenceService',
    mounted () {
      $(document).ready(function() {
        window.sr = ScrollReveal({ reset: false });
        sr.reveal('.display-4', {
          duration: 1000,
          origin: 'top',
          distance: '50px'
        })
        sr.reveal('.lead', {
          duration: 1000,
          origin: 'right',
          distance: '50px'
        })
        sr.reveal('.i', {
          duration: 1000,
          origin: 'bottom',
          distance: '100px'
        })
      });
    }
  }
</script>

<style lang="scss" scoped>
    @import '../variables.scss';

    .display-5 {
        color: $dark-blue-color;
        font-weight: 400;
    }
    .display-4 {
        font-size: 1.5em;
        color: $dark-blue-color;
        text-transform: uppercase;
    }
    .lead {
        font-size: 1.1rem;
    }
</style>
