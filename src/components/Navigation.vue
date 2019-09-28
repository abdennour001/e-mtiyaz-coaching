<template>
    <nav class="navbar navbar-expand-md navbar-light sticky-top navbar-default">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <div class="d-flex align-items-center">
                    <img id="logo-image" class="logo-image w-75" src="../assets/logo/e-mtiyaz-logo-v3-coaching-white.png">
                </div>
            </a>
            <button class="navbar-toggler toggler-example" type="button" data-toggle="collapse" data-target="#navBarResponsive">
                <span class="dark-blue-text"><i class="fas fa-bars fa-1x"></i></span>
            </button>
            <div class="collapse navbar-collapse" id="navBarResponsive">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <a class="nav-link scrollTo" href="" data-scroll="#section_home">Accueil</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownAbout" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            À-propos <i class="fas fa-angle-down ml-2"></i>
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownAbout">
                            <li><a class="dropdown-item scrollTo active" href="#" data-scroll="#section_mot">Le mot de directeur</a></li>
                            <li><a class="dropdown-item scrollTo" href="#" data-scroll="#section_quelque_mot">e-mtiyaz en quelques mots</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownServices" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Services <i class="fa fa-angle-down ml-2"></i>
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownServices">
                            <li><a class="dropdown-item scrollTo" href="#" data-scroll="#section_chart">Notre charte de qualité</a></li>
                            <li><a class="dropdown-item scrollTo" href="#" data-scroll="#section_engagement">Nos engagements au service</a></li>
                            <li class="dropdown-submenu">
                                <a href="#" id="dropdownSubMenu"  role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="dropdown-item dropdown-toggle">
                                    Notre offre de service <i class="fas fa-angle-down ml-2"></i>
                                </a>
                                <ul aria-labelledby="dropdownSubMenu" class="dropdown-menu">
                                    <li><a class="dropdown-item scrollTo" href="#" data-scroll="#section_offre">Parcours Classique</a></li>
                                    <li><a class="dropdown-item scrollTo" href="#" data-scroll="#section_offre">Parcours Elite</a></li>
                                    <li><a class="dropdown-item scrollTo" href="#" data-scroll="#section_offre">Parcours Declic</a></li>
                                </ul>
                            </li>
                            <li><a class="dropdown-item scrollTo" href="#" data-scroll="#section_centre">Notre Centre d'excellence</a></li>
                            <li><a class="dropdown-item scrollTo" href="#" data-scroll="#section_pedagogie">Notre pédagogie d'excellence</a></li>
                            <li><a class="dropdown-item scrollTo" href="#" data-scroll="#section_suivi">Notre suivi pédagogique</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link scrollTo" href="#" data-scroll="#section_contact">Contact</a>
                    </li>
                    <li class="nav-item nav-link">
                        <a class="button scrollTo" href="" data-scroll="#section_rendez_vous">Rendez-vous</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>

  import $ from 'jquery'

  // to use : await sleep(ms)
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  $(document).ready(function() {
    if ($(window).scrollTop()) {
      $('.navbar-default').addClass('white-nav');
      $('#logo-image').attr('src', require('../assets/logo/e-mtiyaz-logo-v3-coaching.png'));
    } else {
      $('.navbar-default').removeClass('white-nav');
      $('#logo-image').attr('src', require('../assets/logo/e-mtiyaz-logo-v3-coaching-white.png'));
    }

    $(window).scroll(async function () {
      if ($(window).scrollTop()) {
        $('.navbar-default').addClass('white-nav');
        $('#logo-image').attr('src', require('../assets/logo/e-mtiyaz-logo-v3-coaching.png'));
      } else {
        $('.navbar-default').removeClass('white-nav');
        $('#logo-image').attr('src', require('../assets/logo/e-mtiyaz-logo-v3-coaching-white.png'));
      }
    });

    $("ul.dropdown-menu [data-toggle='dropdown']").on("click", function(event) {
      event.preventDefault();
      event.stopPropagation();

      $(this).siblings().toggleClass("show");


      if (!$(this).next().hasClass('show')) {
        $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
      }
      $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
        $('.dropdown-submenu .show').removeClass("show");
      });
    });


  })

  export default {
    name: 'Navigation',
    data() {
      return {
        logoImageSrc: require('../assets/logo/e-mtiyaz-logo-hor-without-sentence-white.png')
      }
    },
    methods: {
      getLogoImageSrc() {
        return require(this.logoImageSrc);
      }
    }
  }
</script>

<style lang="scss" scoped>
    @import "../variables.scss";

    /* change the brand and text color */
    .navbar-default .navbar-brand,
    .navbar-default .navbar-text {
        color: $medium-blue-color;
    }

    /* change the color of active or hovered links */
    .navbar-default .nav-item.active .nav-link,
    .navbar-default .nav-item:hover .nav-link {

    }

    .navbar-default{
        transition:500ms ease;
        background:transparent;
    }
    .navbar-default.scrolled{
        background:$font-color-light;
    }

    .navbar {
        padding: .2rem;
    }
    .dropdown-item {
        margin-top: .5rem;
        text-transform: uppercase;
    }
    .white-nav {
        background-color: rgb(255, 255, 255);
        padding: 10px 25px;
        box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
    }

    .active > a > svg {
        color: $dark-blue-color;
    }

    .active > a {
        -webkit-text-fill-color: $dark-blue-color;
    }

    .dropdown-item {
        color: $font-color-dark;
    }

    .dropdown-item.active {
        background-color: transparent;
        color: $dark-blue-color;
    }
    .dropdown-item .active > a {
        color: $dark-blue-color;
    }
    .dropdown-item:hover {

    }
    .dropdown-item:active {
        background-color: transparent;
        color: $dark-blue-color;
    }

    .navbar-nav li {
        padding-right: 20px;
    }

    .nav-link {
        font-size: 1.0em;
        font-weight: 400;
    }

    .logo-image {
        max-width: 220px;
        margin-right: 10px;
    }

    .logo-name {
        font-size: 1.3em;
        font-weight: 700;
        color: $medium-blue-color;
    }

    // Dropdown menu style
    .dropdown-toggle::after {
        display: none;
    }
    .dropdown-menu {
        margin-top: 2rem;
        padding: 1rem;
        transition: 0.5s ease;
    }

    // Dropdown icon
    .fa-1x {
        font-size: 2rem;
    }
    .navbar-toggler.toggler-example {
        cursor: pointer;
        border: none;
    }
    .dark-blue-text {
        color: $font-color-light;
    }

    // Dropdown submenu style
    .dropdown-submenu {
        position: relative;
    }

    .dropdown-submenu>.dropdown-menu {
        top: -80%;
        left: -90%;
    }

    .button {
        text-decoration: none;
        border-radius: 200px;
        padding: 10px;
        border: 1px solid $dark-blue-color;
        color: $dark-blue-color;
        transition: 0.5s ease;
    }
    .button:hover {
        background: $medium-blue-color;
        color: $font-color-light;
    }
</style>
