<template>
    <div class="container-fluid">
       <div class="row text-center justify-content-center">
           <div class="col-12">
               <h1 class="display-5" style="text-transform: uppercase;">Notre offre de services</h1>
           </div>
           <div class="col-12 mb-4">
               <hr class="blue" style="width: 20%;">
           </div>
<!--           -->
          <div class="container-fluid jumbotron">
              <div class="row text-center">
                  <div class="col-lg-4 col-md-4 col-sm-12 orange">
                      <router-link class="router orange" to="/parcours/parcours-classique">
                          <div class="col-10 offset-2 title-parcours">
                              <div class="row text-left">
                                  <div class="col-4">
                                      <h4>Parcours</h4>
                                  </div>
                              </div>
                          </div>
                          <div class="col-10 offset-2 title-parcours">
                              <div class="row text-left">
                                  <div class="col-4">
                                      <h1>Classique</h1>
                                  </div>
                              </div>
                          </div>
                      </router-link>
                      <div class="col-10 offset-2 offers">
                          <div class="row text-left">
                              <div class="col-12">
                                  <ul class="ul-orange">
                                      <li>Accompagnement scolaire</li>
                                      <li>Langues</li>
                                      <li>Orientation</li>
                                      <li>Classes preparatoires aux examens et concours (CPEC)</li>
                                      <li>Stages</li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                      <div class="col-10 offset-2">
                          <div class="row text-left">
                              <div class="col-12">
                                  <router-link class="read-more orange-btn" to="/parcours/parcours-classique"><i class="fas fa-arrow-alt-circle-right read-more-icon"></i>Lire la suite</router-link>
                              </div>
                          </div>
                      </div>
                  </div>
                  <!--           -->
                  <div class="col-lg-4 col-md-4 col-sm-12 purple">
                      <router-link class="router purple" to="/parcours/parcours-elite">
                          <div class="col-10 offset-2 title-parcours">
                              <div class="row text-left">
                                  <div class="col-4">
                                      <h4>Parcours</h4>
                                  </div>
                              </div>
                          </div>
                          <div class="col-10 offset-2 title-parcours">
                              <div class="row text-left">
                                  <div class="col-4">
                                      <h1>élite</h1>
                                  </div>
                              </div>
                          </div>
                      </router-link>
                      <div class="col-10 offset-2 offers">
                          <div class="row text-left">
                              <div class="col-12">
                                  <ul class="ul-purple">
                                      <li>Accompagnement scolaire</li>
                                      <li>Orientation</li>
                                      <li>Stages</li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                      <div class="col-10 offset-2">
                          <div class="row text-left">
                              <div class="col-12">
                                  <router-link class="read-more purple-btn" to="/parcours/parcours-elite"><i class="fas fa-arrow-alt-circle-right read-more-icon"></i>Lire la suite</router-link>
                              </div>
                          </div>
                      </div>
                  </div>
                  <!--           -->
                  <div class="col-lg-4 col-md-4 col-sm-12 green">
                      <router-link class="router green" to="/parcours/parcours-declic">
                          <div class="col-10 offset-2 title-parcours">
                              <div class="row text-left">
                                  <div class="col-4">
                                      <h4>Parcours</h4>
                                  </div>
                              </div>
                          </div>
                          <div class="col-10 offset-2 title-parcours">
                              <div class="row text-left">
                                  <div class="col-4">
                                      <h1>Déclic</h1>
                                  </div>
                              </div>
                          </div>
                      </router-link>
                      <div class="col-10 offset-2 offers">
                          <div class="row text-left">
                              <div class="col-12">
                                  <ul class="ul-green">
                                      <li>Accompagnement scolaire</li>
                                      <li>Orientation</li>
                                      <li>Stages</li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                      <div class="col-10 offset-2">
                          <div class="row text-left">
                              <div class="col-12">
                                  <router-link class="read-more green-btn" to="/parcours/parcours-declic"><i class="fas fa-arrow-alt-circle-right read-more-icon"></i>Lire la suite</router-link>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
       </div>
    </div>
</template>

<script>
  import $ from 'jquery';
  import ScrollReveal from 'scrollreveal';

  export default {
    name: 'Offers',
    mounted() {
      $(document).ready(function() {
        window.sr = ScrollReveal({ reset: false });
        sr.reveal('.title-parcours', {
          duration: 1000,
          origin: 'right',
          distance: '100px'
        });
        sr.reveal('.offers', {
          duration: 1000,
          origin: 'top',
          delay: 500,
          distance: '50px'
        });
      });
    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>
    @import '../variables.scss';
    h1 {
        font-weight: bold;
        text-transform: uppercase;
    }
    h4 {
        text-transform: uppercase;
    }
    .display-5 {
        color: $dark-blue-color;
        font-weight: 400;
    }
    .router {
        text-decoration: none;
    }
    .read-more {
        text-decoration: none;
        font-size: 1.2em;
        font-weight: 400;
        display: inline-block;
        transition: 0.5s ease;
        transform: translateY(-50px);
        opacity: 0;
    }
    .jumbotron {
        padding: 2rem;
        background: url("../assets/background/bg-offers.jpg") no-repeat;
        background-size: cover;
    }
    .read-more:hover {
        opacity: 0.8;
    }
    .read-more-icon {
        margin-right: 10px;
        transition: 0.5s ease;
    }
    .read-more:hover .read-more-icon {
        transform: translateX(7px);
    }
    .orange {
        color: $dark-orange-color;
    }
    .orange:hover .orange-btn {
        transform: translateY(10px);
        opacity: 1;
    }
    .orange:hover .ul-orange{
        transform: translateY(10px);
        opacity: 1;
    }
    .purple {
        color: $dark-purple-color;
    }
    .purple:hover .purple-btn {
        transform: translateY(10px);
        opacity: 1;
    }
    .purple:hover .ul-purple{
        font-size: 2rem;
        transform: translateY(10px);
        opacity: 1;
    }
    .green {
        color: $dark-green-color;
    }
    .green:hover .green-btn {
        transform: translateY(10px);
        opacity: 1;
    }
    .green:hover .ul-green{
        font-size: 2rem;
        transform: translateY(10px);
        opacity: 1;
    }
    .orange-btn {
        color: $dark-orange-color;
    }
    .purple-btn {
        color: $dark-purple-color;
    }
    .green-btn {
        color: $dark-green-color;
    }

    ul {
        list-style-type: none;
        padding-left: 1rem;
        border-left: 1px solid #000;
        transition: 0.5s ease;
        font-weight: 400;
        opacity: 0.7;
    }

    .ul-orange {
        border-left-color: $dark-orange-color;
    }

    .ul-purple {
        border-left-color: $dark-purple-color;
    }

    .ul-green {
        border-left-color: $dark-green-color;
    }

    ul li {
        font-size: 1rem;
        margin-bottom: 10px;
        text-transform: uppercase;
    }

    /** media queries **/
    @media screen and (min-width: 992px) { /* large screen */

    }
    @media screen and (max-width: 992px) { /* large screen */
        .display-5 {
            font-size: 2rem;
        }
        h1 {
            font-size: 2rem;
        }
        h4 {
            font-size: 1.3rem;
        }
        ul li {
            font-size: .9rem;
            margin-bottom: 10px;
            text-transform: uppercase;
        }
    }
    @media screen and (max-width: 768px) { /* medium screen */
        .display-5 {
            font-size: 1.8rem;
        }
        .read-more {
            font-size: 1.1em;
            margin-bottom: 25px;
        }
    }
    @media (max-width: 576px) { /* mobile screen */
        h1 {
            font-size: 1.8rem;
        }
        h4 {
            font-size: 1.2rem;
        }
        ul li {
            font-size: .8rem;
            margin-bottom: 10px;
            text-transform: uppercase;
        }
        .read-more {
            font-size: 1em;
            margin-bottom: 25px;
        }
        .display-5 {
            font-size: 1.5rem;
        }
    }
</style>
