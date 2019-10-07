<template>
  <div id="app">
      <transition name="fade" mode="out-in" appear>
          <router-view></router-view>
      </transition>
  </div>
</template>

<script>

    import $ from 'jquery'

  export default {
    data() {
      return {
        transitionName:''
      }
    },
    mounted() {
      let options = {
        classname: 'upper-nanobar',
        id: 'my-id',
        target: document.getElementById('nanobar')
      };
      let Nanobar = require('nanobar');
      let nanobar = new Nanobar( options );
      //move bar
      nanobar.go( 30 ); // size bar 30%
      nanobar.go( 76 ); // size bar 76%

      // size bar 100% and and finish
      nanobar.go(100);
    },
    watch: {
      $route(to, from) {
        if (from.fullPath.includes('parcours')) {
          $('html, body').animate({
            scrollTop : 5050
          }, 800)
        }
      }
    }
  }
</script>

<style lang="scss">
    @import './variables.scss';

    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.4s
    }

    .fade-enter, .fade-leave-active {
        opacity: 0
    }

    #app {
        font-family: $font-family-sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: $font-color-dark;
    }

    .header {
        position: relative;
        margin-top: -75px;
        background: url(./assets/background/main-bg-final-testmdpi.svg);
        background-size: cover;
        height: 100vh;
        overflow: hidden;
    }

    hr.light {
        background-color: $font-color-light;
        opacity: 0.3;
    }
    hr.dark {
        background-color: $font-color-dark;
        height: 1px;
        opacity: 1;
    }
    hr.blue {
        background-color: $medium-blue-color;
        height: 1px;
        opacity: 1;
        width: 50%;
    }

    /*title style*/


    /*image border style*/
    .img-border {
        border: 30px solid whitesmoke;
        -webkit-box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.2);
        -moz-box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.2);
        box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
    }

    /*squeeze*/
    .squeeze-75 {
        width: 75%;
        margin: 0 auto;
        padding-top: 2rem;
    }
    .squeeze-50 {
        width: 50%;
        margin: 0 auto;
        padding-top: 2rem;
    }

    /*color orange*/
    .orange-light {
        color: $light-orange-color;
    }
    .orange-dark {
        color: $dark-orange-color;
    }

    .img-border {
        border: 30px solid whitesmoke;
        -webkit-box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.2);
        -moz-box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.2);
        box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
    }

    #topBtn {
        text-decoration: none;
        position: fixed;
        padding-top: .5rem;
        bottom: 40px;
        right: 40px;
        font-size: 22px;
        width: 50px;
        height: 50px;
        border-radius: 100px;
        background: $font-color-light;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
        border: none;
        cursor: pointer;
        color: $dark-blue-color;
        transition: 0.5s ease;
        display: none;
    }
    #topBtn:hover {
        color: $font-color-light;
        background: $dark-blue-color;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
    }
    body {
        overflow-x: hidden;
    }
    .upper-nanobar {

    }
    .nanobar {
        width: 100%;
        height: 3px;
        z-index: 9999;
        top: 0;
    }
    .bar {
        width: 0;
        height: 100%;
        transition: height .3s;
        background: linear-gradient($dark-blue-color);
    }

    /** media queries **/
    @media screen and (min-width: 992px) { /* large screen */

    }
    @media screen and (max-width: 992px) { /* large screen */

    }
    @media screen and (max-width: 768px) { /* medium screen */
        .img-border {
            border: 20px solid whitesmoke;
            -webkit-box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.2);
            -moz-box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.2);
            box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
        }
        #topBtn {
            text-decoration: none;
            position: fixed;
            padding-top: .6rem;
            bottom: 40px;
            right: 40px;
            font-size: 18px;
            width: 46px;
            height: 46px;
            border-radius: 100px;
            background: $font-color-light;
            box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
            border: none;
            cursor: pointer;
            color: $dark-blue-color;
            transition: 0.5s ease;
            display: none;
        }
    }
    @media (max-width: 576px) { /* mobile screen */
        .img-border {
            border: 15px solid whitesmoke;
            -webkit-box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.2);
            -moz-box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.2);
            box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
        }
    }
</style>
