<template>
    <div id="title" class="container-fluid">
        <div class="row">
           <div class="col-lg-6 col-md-6 col-sm-12 offset-3">
               <div class="col-12 mt-3">
                   <img src="../assets/logo/e-mtiyaz-logo-v3-coaching-white.png" style="width: 70%;"/>
               </div>
               <div class="col-12 margin-3">
                   <p class="lead-1">Que vous souhaitez suivre vos études en Algérie ou à l’international, e-mtiyaz vous accompagne dans vos objectifs de réussite.</p>
               </div>
               <div class="col-12 mb-4">
                   <hr class="light">
               </div>
               <div class="col-12">
                   <p class="lead-2">
                       Demandez un rendez-vous et recevez un diagnostic pédagogique.
                   </p>
               </div>
               <div class="col-12 margin-2">
                   <a class="button scrollTo" href="#" data-scroll="#section_rendez_vous">Demander un rendez-vous</a>
               </div>
           </div>
            <div class="col-lg-6">
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'Title'
  }
</script>

<style lang="scss" scoped>
    @import '../variables.scss';
    #title {
        color: $font-color-light;
        margin-top: 140px;
    }
    h1 {
        font-size: 3em;
        font-weight: 600;
        color: $font-color-light;
    }
    h1.e-mtiyaz {
        font-weight: 300;
    }
    h3 {
        font-weight: 500;
        letter-spacing: 1px;
        color: $font-color-light;
        text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    }
    .lead-1 {
        font-size: 1.2rem;
        font-weight: 400;
    }
    .lead-2 {
        font-size: 1.1rem;
        font-weight: 400;
    }
    .button {
        display: inline-block;
        text-decoration: none;
        border-radius: 200px;
        font-size: 1.1em;
        font-weight: 400;
        padding: 10px;
        color: $font-color-light;
        border: 1px solid $font-color-light;
        transition: 0.5s ease;
    }
    .button:hover {
        background: $font-color-light;
        color: $dark-blue-color;
    }
    .margin-1 {
        margin-top: 10px;
    }
    .margin-2 {
        margin-top: 20px;
    }
    .margin-3 {
        margin-top: 30px;
    }
    .read-more {
        text-decoration: none;
        color: $font-color-light;
        font-size: 1.2em;
        font-weight: 400;
        transition: 0.5s ease;
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
</style>
