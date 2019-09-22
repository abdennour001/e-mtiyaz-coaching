<template>
    <div class="container-fluid">
       <div class="row text-center">
           <div class="col-12">
               <h1 class="display-4" style="text-transform: uppercase;">Notre offre de services</h1>
           </div>
           <div class="col-6 offset-3">
               <hr class="dark">
           </div>
          <div class="col-lg-4">
              <div class="card card-orange">
                  <div class="background">
                      <span>01</span>
                  </div>
                  <div class="title">
                      <h2>Parcours Classique</h2>
                  </div>
                  <div class="content">
                      <div class = "vertical"></div>
                      <ul>
                          <li>Accompagnement scolaire</li>
                          <li>Langues</li>
                          <li>Orientation</li>
                          <li>Classes preparatoires aux examens et concours (CPEC)</li>
                          <li>Stages</li>
                      </ul>
                  </div>
                  <div class="footer">
                      <a class="read-more" href="#"><i class="fas fa-arrow-alt-circle-right read-more-icon"></i> Read More</a>
                  </div>
              </div>
          </div>
           <!--        -->
           <div class="col-lg-4">
               <div class="card card-purple">
                   <div class="background">
                       <span>02</span>
                   </div>
                   <div class="title">
                       <h2>Parcours élite</h2>
                   </div>
                   <div class="content">
                       <div class = "vertical"></div>
                       <ul>
                           <li>Accompagnement</li>
                           <li>Orientation</li>
                           <li>stages</li>
                       </ul>
                   </div>
                   <div class="footer">
                       <a class="read-more" href="#"><i class="fas fa-arrow-alt-circle-right read-more-icon"></i> Read More</a>
                   </div>
               </div>
           </div>
           <!--        -->
           <div class="col-lg-4">
               <div class="card card-green">
                   <div class="background">
                       <span>03</span>
                   </div>
                   <div class="title">
                       <h2>Parcours Déclic</h2>
                   </div>
                   <div class="content">
                       <div class = "vertical"></div>
                       <ul>
                           <li>Accompagnement scolaire</li>
                           <li>Orientation</li>
                           <li>Stages</li>
                       </ul>
                   </div>
                   <div class="footer">
                       <a class="read-more" href="#"><i class="fas fa-arrow-alt-circle-right read-more-icon"></i> Read More</a>
                   </div>
               </div>
           </div>
       </div>
    </div>
</template>

<script>
  export default {
    name: 'Offers'
  }
</script>

<style lang="scss" scoped>
    @import '../variables.scss';
    .card {
        width: 360px;
        height: 480px;
        padding: 1rem;
        color: $font-color-light;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .card-orange {
        background: radial-gradient($light-orange-color, $dark-orange-color);
        border: 1px solid $light-orange-color;
    }
    .card-purple {
        background: radial-gradient($light-purple-color, $dark-purple-color);
        border: 1px solid $light-purple-color;
    }
    .card-green {
        background: radial-gradient($light-green-color, $dark-green-color);
        border: 1px solid $light-green-color;
    }
    .background {
        position: absolute;
        top: 5%;
        right: 4%;
        font-weight: 600;
        font-size: 15rem;
    }
    .content {
        position: relative;
        margin-top: 2.5rem;
        z-index: 1000;
    }
    .footer {
        position: relative;
        z-index: 1000;
    }
    .background span {
        padding: 0;
        margin: 0;
        opacity: 0.2;
        pointer-events: none;
        transition: 0.5s;
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
    .vertical {
        border-left: 1px solid;
        border-left-color: $font-color-light;
        height: 150px;
        position:absolute;
        left: 0;
    }
</style>
