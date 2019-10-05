<template>
    <div class="container-fluid">
        <div class="row jumbotron text-center justify-content-center">
            <div class="col-12 orange-dark">
                <h5 id="t-1">e-mtiyaz</h5>
            </div>
            <div class="col-12 orange-dark">
                <h4 id="t-2" style="text-transform: uppercase">Est une solution de</h4>
            </div>
            <div class="col-12 orange-dark">
                <h3 id="t-3" style="text-transform: uppercase"><strong>Services éducatifs d'excellence</strong></h3>
            </div>
            <div class="col-12">
                <p id='p-1' class="lead"><strong>Notre concept repose sur trois piliers garants de notre engagement :</strong></p>
            </div>
            <div class="col-3">
                <div class="circle mb-3 icon-1"></div>
                <p id="p-2" class="lead">Une pédagogie inspirée des meilleurs standards académiques à l’international</p>
            </div>
            <div class="col-1 align-self-center">
                <i class="fas fa-plus fa-lg"></i>
            </div>
            <div class="col-3">
                <div class="circle mb-3 icon-2">
                </div>
                <p id="p-3" class="lead">Un centre d’excellence équipé de conditions pédagogiques et technologiques optimales</p>
            </div>
            <div class="col-1 align-self-center">
                <i class="fas fa-plus fa-lg"></i>
            </div>
            <div class="col-3">
                <div class="circle mb-3 icon-3"></div>
                <p id="p-4" class="lead">Une équipe d’Intervenants Pédagogiques issus de formations prestigieuses et formés sous le label d’e-mtiyaz</p>
            </div>
        </div>
    </div>
</template>

<script>

  import $ from 'jquery';
  import ScrollReveal from 'scrollreveal';

  export default {
    name: 'JumbotronAbout',
    mounted () {
      $(document).ready(function() {
        window.sr = ScrollReveal({ reset: false });
        sr.reveal('#t-1', {
          duration: 1000,
          origin: 'left',
          distance: '50px'
        })
        sr.reveal('#t-2', {
          duration: 1000,
          origin: 'right',
          delay: 250,
          distance: '50px'
        })
        sr.reveal('#t-3', {
          duration: 1000,
          origin: 'left',
          delay: 500,
          distance: '50px'
        })
        sr.reveal('#p-1', {
          duration: 1000,
          origin: 'left',
          delay: 750,
          distance: '50px'
        })
        sr.reveal('#p-2', {
          duration: 1000,
          origin: 'left',
          delay: 750,
          distance: '50px'
        })
        sr.reveal('#p-3', {
          duration: 1000,
          origin: 'left',
          delay: 750,
          distance: '50px'
        })
        sr.reveal('#p-4', {
          duration: 1000,
          origin: 'left',
          delay: 750,
          distance: '50px'
        })

      });
    }
  }
</script>

<style lang="scss" scoped>
    @import '../variables.scss';
    .lead {
        font-size: 1.1rem;
    }
    .circle {
        margin: 0 auto;
        width: 100px;
        height: 100px;
        border: 2px solid $dark-blue-color;
        border-radius: 200px;
        background-color: #49bee6
    }
    .icon-1 {
        background: url("../assets/icons/icon-1.png") no-repeat center;
        background-size: cover;
    }
    .icon-2 {
        background: url("../assets/icons/icon-2.png") no-repeat center;
        background-size: cover;
    }
    .icon-3 {
        background: url("../assets/icons/icon-3.png") no-repeat center;
        background-size: cover;
    }
    svg {
        color: $dark-orange-color;
    }
    .jumbotron {
        background-color: $light-blue-color-transparent;
    }
</style>
