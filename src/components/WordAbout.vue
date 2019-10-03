<template>
    <div class="container-fluid">
        <div class="row text-center justify-content-center welcome">
            <div class="col-12 mt-4">
                <h1 class="display-5" style="text-transform: uppercase">Le mot du directeur</h1>
            </div>
            <div class="col-6 mb-4">
                <hr class="blue">
            </div>
            <div class="col-lg-9 col-md-9 col-sm-12">
                <p id="firstChapter" class="lead">
                    <i class="fas fa-quote-left fa-lg mr-2"></i>
                    Ayant évolué en Algérie, les fondateurs d’e-mtiyaz y ont tous suivi
                    une partie de leur scolarité. Lorsqu’ils ont eu à faire le choix de l’excellence,
                    ils ont dû, comme bon nombre d’Algériens, emprunter un parcours du combattant fait d’obstacles,
                    de doutes et de sacrifices.
                </p>
                <p id="secondChapter" class="lead">
                    De cette réalité découle un constat effarant : face à la concurrence internationale,
                    l’Algérie peine à faire partie de la cour des grands. Plus significatif encore,
                    les Algériens sont peu représentés dans les plus prestigieuses institutions académiques
                    et scientifiques mondiales, loin derrière nos voisins tunisiens et marocains, pour ne citer qu’eux.
                    Pourtant, notre pays dispose d’un formidable potentiel humain et intellectuel et les
                    exemples d’Algériens ayant brillé dès lors qu’ils disposent d’un cadre adéquat sont nombreux. Quelle est donc l’explication à ce triste constat ?
                </p>
                <p  id="thirdChapter" class="lead">Pour nous, au sein d’e-mtiyaz, nous sommes convaincus que
                    l’insuffisance, sinon l’absence de dispositifs et de structures d’accompagnement
                    et de préparation en amont ici en Algérie explique grandement cette situation.
                    Si l’on ajoute à cela l’autocensure et le manque de moyens, il en résulte le constat que nous dressons aujourd’hui.
                    C’est en prenant conscience de cette réalité et pour apporter une solution
                    adaptée à ce besoin que nous avons fondé e-mtiyaz et nous nous sommes donnés pour
                    mission de tout mettre en œuvre pour contribuer à faire de l’Algérie une terre de talents
                    et d’excellence sur les plans éducatif et académique.
                    <i class="fas fa-quote-right fa-lg ml-2"></i>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
  import $ from 'jquery';
  import ScrollReveal from 'scrollreveal';

  $(document).ready(function() {
    window.sr = ScrollReveal({ reset: false });
    sr.reveal('#firstChapter', {
      duration: 1000,
      origin: 'right',
      distance: '50px'
    });
    sr.reveal('#secondChapter', {
      duration: 1000,
      origin: 'left',
      distance: '50px'
    });
    sr.reveal('#thirdChapter', {
      duration: 1000,
      origin: 'right',
      distance: '50px'
    });
  });
  export default {
    name: 'WordAbout'
  }
</script>

<style lang="scss" scoped>
    @import '../variables.scss';
    .display-5 {
        font-weight: 400;
        color: $dark-blue-color;
    }
    .welcome {
        width: 100%;
        margin: 0 auto;
        padding: 1.5rem;
    }
    .lead {
        font-size: 1.2rem;
        font-weight: 300;
    }
    svg {
        color: $medium-blue-color;
    }
</style>
