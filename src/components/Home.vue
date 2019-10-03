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
    }
  }
</script>

<style scoped>

</style>
