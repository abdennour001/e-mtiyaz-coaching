<template>
   <div>
       <!--  nano bar -->
       <div id="nanobar" class="upper-nanobar"></div>
       <!-- Navigation Section -->
       <Navigation></Navigation>
       <div id="section_home" class="header">
           <div class="header-content">
               <!-- Title Section -->
               <Title></Title>
           </div>
       </div>
       <!-- Le met du directeur -->
       <WordAbout id="section_mot"></WordAbout>
       <!-- e-mtiyaz en quelques mots -->
       <JumbotronAbout id="section_quelque_mot"></JumbotronAbout>
       <FixedBgOffer></FixedBgOffer>
       <!-- Notre charte de qualité -->
       <QualityCharter id="section_chart"></QualityCharter>
       <!-- Nos engagement au service de l'excellence -->
       <ExcellenceService id="section_engagement"></ExcellenceService>
       <!-- Notre offre de services -->
       <Offers id="section_offre"></Offers>
       <!-- Notre centre d'excellence -->
       <ExcellenceCenter id="section_centre"></ExcellenceCenter>
       <!-- Notre pédagogie d'excellence -->
       <ExcellencePedagogie id="section_pedagogie"></ExcellencePedagogie>
       <!-- Notre suivi pédagogique -->
       <MonitoringPedagogique id="section_suivi"></MonitoringPedagogique>
       <!-- Nos outils e-learning -->
       <Testimony></Testimony>
       <!-- Partners -->
       <Partners></Partners>
       <!-- Location google maps -->
       <Location id="section_contact"></Location>
       <!-- demander un rendez-vous -->
       <RendezVous></RendezVous>
       <!-- Section contact -->
       <Footer></Footer>

       <!-- Go up button-->
       <a id="topBtn" href=""><i class="fas fa-arrow-up"></i></a>
   </div>
</template>

<script>

  import $ from 'jquery';
  import ScrollReveal from 'scrollreveal';

  import Navigation from '../components/Navigation'
  import Title from '../components/Title'
  import WordAbout from '../components/WordAbout'
  import JumbotronAbout from '../components/JumbotronAbout'
  import FixedBgOffer from '../components/FixedBgOffer'
  import QualityCharter from '../components/QualityCharter'
  import ExcellenceService from '../components/ExcellenceService'
  import Offers from '../components/Offers'
  import ExcellenceCenter from '../components/ExcellenceCenter'
  import ExcellencePedagogie from '../components/ExcellencePedagogie'
  import MonitoringPedagogique from '../components/MonitoringPedagogique'
  import Testimony from '../components/Testimony'
  import Partners from '../components/Partners'
  import RendezVous from '../components/RendezVous'
  import Contact from '../components/Contact'
  import Footer from '../components/Footer'
  import Location from '../components/Location'

  export default {
    name: 'Home',
    components: {
      Location,
      Footer,
      Contact,
      RendezVous,
      Partners,
      Testimony,
      MonitoringPedagogique,
      ExcellencePedagogie,
      ExcellenceCenter,
      Offers,
      ExcellenceService,
      QualityCharter,
      FixedBgOffer,
      JumbotronAbout,
      WordAbout,
      Title,
      Navigation
    },
    mounted() {

      $(document).ready(() => {

        window.srTitle = ScrollReveal({ reset: true });
        window.sr = ScrollReveal({ reset: false });
        srTitle.reveal('#title', {
          duration: 1000,
          origin: 'top',
          distance: '50px'
        })
        sr.reveal('.display-5', {
          duration: 1000,
          origin: 'left',
          distance: '250px'
        })
        sr.reveal('.blue', {
          duration: 1000,
          origin: 'right',
          distance: '250px'
        });


        $(window).scroll(() => {
          if($(window).scrollTop() > 100) {
            $('#topBtn').fadeIn("slow");
          } else {
            $('#topBtn').fadeOut("slow");
          }
        });

        // Scroll up button
        $('#topBtn').click((e) => {
          e.preventDefault();
          $('html, body').animate({
            scrollTop : 0
          }, 800)
        });

        $(".scrollTo").on('click', function(e) {
          let getElem = $(this).data('scroll');
          e.preventDefault();
          if ($(getElem).length) {
            let getOffset = $(getElem).offset().top;
            let targetDistance = 70;
            $('html,body').animate({
              scrollTop : getOffset - targetDistance
            }, 500);
          }
          return false;
        });
      })
    }
  }
</script>

<style scoped>

</style>
