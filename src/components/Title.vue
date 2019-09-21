<template>
    <div id="title" class="container-fluid">
        <div class="row">
           <div class="col-lg-12 col-md-12 col-sm-12">
               <div class="col-12">
                   <img src="../assets/logo/e-mtiyaz-white.png" style="width: 30%;"/>
               </div>
               <div class="col-12">
                   <h1>COACHING</h1>
               </div>
               <div class="col-12">
                   <h3>Service éducatifs d'excellence</h3>
               </div>
               <div class="col-12 margin-2">
                   <a class="button" href="#">Rendez-vous</a>
               </div>
               <div class="col-12 margin-2">
                   <p class="lead">Si vous êtes intéressé à étudier en dehors de l'Algérie, vous pouvez postuler auprès des grandes universités
                       avec <strong>dirasat-international</strong>.</p>
                   <a class="postulate margin-3" href="#"><i class="fas fa-arrow-alt-circle-right postulate-icon"></i> Postuler à l'étranger</a>
               </div>
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
        margin-top: 80px;
    }
    h1 {
        font-size: 3.5em;
        font-weight: 600;
        text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    }
    h1.e-mtiyaz {
        font-weight: 300;
    }
    h3 {
        font-weight: 500;
        letter-spacing: 1px;
        color: $lighter-green-color;
        text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    }
    .button {
        display: inline-block;
        text-decoration: none;
        border-radius: 200px;
        font-size: 1.1em;
        font-weight: 600;
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
    .postulate {
        text-decoration: none;
        color: $lighter-green-color;
        font-size: 1.4em;
        font-weight: 500;
        transition: 0.5s ease;
    }
    .postulate:hover {
        opacity: 0.8;
    }
    .postulate-icon {
        margin-right: 10px;
        transition: 0.5s ease;
    }
    .postulate:hover .postulate-icon {
        transform: translateX(7px);
    }
</style>
