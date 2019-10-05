<template>
    <div>
        <div class="header-p">
            <div class="header-content-p">
                <div class="row text-center justify-content-center align-items-center">
                    <div class="col-12">
                        <h1 id="t-d-1" class="display-4" style="text-transform: uppercase">PARCOURS DECLIC</h1>
                    </div>
                    <div class="col-12">
                        <p id="t-d-2" class="lead-header">ACCOMPAGNEMENT SCOLAIRE -
                            ORIENTATION - STAGES</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid jumbotron">
            <div class="row text-center justify-content-center align-items-center">
                <div class="col-12">
                    <p class="lead">
                        Un élève en difficulté ou en décrochage a besoin d'un accompagnement adéquat.
                        C'est pour cela qu'e-mtiyaz a développé <strong>un parcours déclic adapté.</strong>
                    </p>
                </div>
            </div>
        </div>
        <div class="container-fluid mb-5">
            <div class="row text-center">
                <!--                -->
                <div class="col-12 jumbotron-green" style="height: 200px;margin: 0;width: 100%;">
                    <h2 class="h2-j" style="font-weight: 300">PARCOURS Declic</h2>
                    <h1 class="h1-j" style="text-transform: uppercase">ACCOMPAGNEMENT SCOLAIRE</h1>
                </div>
                <!--                -->
                <div class="col-lg-6 col-md-12 col-sm-12 py-md-5 py-sm-5 p-5">
                    <div class="row text-center">
                        <div class="col-12 text-left">
                            <h2 class="display-5">Coaching personnalisé</h2>
                        </div>
                        <div class="col-12 text-left mb-2">
                            <p class="lead">
                                Parce que le besoin d'un élève n'est jamais le même que celui de son camarade, le coaching personnalisé permet au coach de répondre plus efficacement aux besoins de l'élève et revenir sur des lacunes ou prendre le temps de répondre à des besoins personnels spécifiques.
                            </p>
                        </div>
                        <div class="col-12">
                            <ul>
                                <li>Format : <b>Collectif</b></li>
                                <li>Public concerné : <b>Terminale et étudiant</b></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!--                -->
                <div class="col-lg-6 col-md-12 col-sm-12 py-md-5 py-sm-5 p-5">
                    <div class="row text-center">
                        <div class="col-12 text-left">
                            <h2 class="display-5">Application en autonomie supervisée - AAS</h2>
                        </div>
                        <div class="col-12 text-left mb-2">
                            <p class="lead">
                                Pour ne pas fragiliser l'autonomie de l'élève et l'inciter à l'assistanat, e-mtiyaz lui propose de travailler ses échéances scolaires et revenir sur
                                ses difficultés dans le cadre de séances d'application en autonomie supervisée.
                            </p>
                        </div>
                        <div class="col-12">
                            <ul>
                                <li>Format : <b>Individuel</b></li>
                                <li>Public concerné : <b>Tous niveaux</b></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!--                -->
                <!--                -->
                <div class="col-12 jumbotron-green" style="height: 200px;margin: 0;width: 100%;">
                    <h2 class="h2-j" style="font-weight: 300">PARCOURS Declic</h2>
                    <h1 class="h1-j" style="text-transform: uppercase">Orientation</h1>
                </div>
                <!--                -->
                <div class="col-lg-6 col-md-12 col-sm-12 py-md-5 py-sm-5 p-5">
                    <div class="row text-center">
                        <div class="col-12 text-left">
                            <h2 class="display-5">Coaching parental</h2>
                        </div>
                        <div class="col-12 text-left mb-2">
                            <p class="lead">
                                L'environnement familial est le premier facteur de réussite de l'élève. Le coaching parental d'e-mtiyaz a pour objectif de livrer aux parents des outils pour piloter la réussite de leur enfant.
                            </p>
                        </div>
                        <div class="col-12">
                            <ul>
                                <li>Format : <b>Individuel</b></li>
                                <li>Public concerné : <b>Tous niveaux</b></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!--                -->
                <!--                -->
                <div class="col-12 jumbotron-green" style="height: 200px;margin: 0;width: 100%;">
                    <h2 class="h2-j" style="font-weight: 300">PARCOURS Declic</h2>
                    <h1 class="h1-j" style="text-transform: uppercase">Stages</h1>
                </div>
                <!--                -->
                <div class="col-lg-6 col-md-12 col-sm-12 py-md-5 py-sm-5 p-5">
                    <div class="row text-center">
                        <div class="col-12 text-left">
                            <h2 class="display-5">Objectif personnalisé</h2>
                        </div>
                        <div class="col-12 text-left mb-2">
                            <p class="lead">
                                Pour tout projet personnel ou des besoins scolaires spécifiques, e-mtiyaz propose à son élève ou étudiant un programme intensif personnalisé durant ses vacances scolaires.                            </p>
                        </div>
                        <div class="col-12">
                            <ul>
                                <li>Format : <b>Individuel</b></li>
                                <li>Public concerné : <b>3<sup>ème</sup>, 1<sup>ère</sup> et Terminale</b></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Return button -->
            <router-link class="returnBtn" to="/"><i class="fas fa-arrow-left mr-2"></i>Retour</router-link>
        </div>
    </div>
</template>

<script>
  import $ from 'jquery';
  import ScrollReveal from 'scrollreveal';

  export default {
    name: 'ParcoursDeclic',
    mounted() {

      window.scrollTo(0, 0);

      $(document).ready(() => {
        $(window).scroll(() => {
          let btn = $('.returnBtn');
          if($(window).scrollTop() > 100) {
            btn.addClass('returnBtn-hidden')
            btn.html('<i class="fas fa-arrow-left mr-2"></i>')
          } else {
            btn.removeClass('returnBtn-hidden')
            btn.html('<i class="fas fa-arrow-left mr-2"></i>Retour');
          }
        });

        window.sr = new ScrollReveal({ reset:false });
        sr.reveal('#t-d-1', {
          duration: 1000,
          origin: 'top',
          distance: '100px'
        })
        sr.reveal('#t-d-2', {
          duration: 1000,
          origin: 'bottom',
          delay: 500,
          distance: '100px'
        })
        sr.reveal('.h2-j', {
          duration: 1000,
          origin: 'right',
          distance: '100px'
        })
        sr.reveal('.h1-j', {
          duration: 1000,
          origin: 'left',
          delay: 500,
          distance: '100px'
        })
        sr.reveal('.display-5', {
          duration: 1000,
          origin: 'top',
          distance: '100px'
        })
        sr.reveal('.lead', {
          duration: 1000,
          origin: 'left',
          delay: 500,
          distance: '100px'
        })
        sr.reveal('ul', {
          duration: 1000,
          origin: 'bottom',
          distance: '100px'
        })
      })
    }
  }
</script>

<style lang="scss" scoped>
    @import '../../variables.scss';
    .header-p {
        position: relative;
        background: linear-gradient(153deg, $light-green-color, $dark-green-color);
        height: 100vh;
        width: 100%;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
    }
    .header-content-p {

    }
    .display-4 {
        color: $font-color-light;
        font-weight: 500;
    }
    .lead-header {
        font-size: 1.5rem;
        padding-inline: 10rem;
        font-weight: 300;
        color: $font-color-light;
    }
    .display-5 {
        color: $dark-green-color;
        text-transform: uppercase;
    }
    ul {
        text-align: left;
        list-style-type: none;
        border-left: 5px solid $dark-green-color;
    }
    ul li {
        color: $dark-green-color;
        font-size: 1.1rem;
    }
    strong {
        font-weight: 500;
    }
    .returnBtn {
        text-decoration: none;
        position: fixed;
        padding: .6rem;
        top: 40px;
        left: 40px;
        font-size: 16px;
        color: $dark-green-color;
        background: $font-color-light;
        border-radius: 100px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
        border: none;
        cursor: pointer;
        transition: 0.5s ease;
    }
    .returnBtn:hover {
        color: $font-color-light;
        background: linear-gradient(153deg, $light-green-color, $dark-green-color);
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    }
    .returnBtn-hidden {
        text-decoration: none;
        position: fixed;
        padding-top: .4rem;
        padding-left: .6rem;
        top: 20px;
        left: 20px;
        width: 36px;
        height: 36px;
        font-size: 16px;
        color: $dark-green-color;
        background: $font-color-light;
        border-radius: 100px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
        border: none;
        cursor: pointer;
        transition: 0.5s ease;
    }
    .jumbotron-green {
        background: linear-gradient(153deg, $light-green-color , $dark-green-color 90%);
        color: $font-color-light;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
</style>

