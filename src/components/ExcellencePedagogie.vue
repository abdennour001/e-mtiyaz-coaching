<template>
    <div class="container-fluid">
        <div class="row text-center">
            <div class="col-12">
                <h1 class="display-4" style="text-transform: uppercase;">Notre pédagogie d'excellence</h1>
            </div>
            <div class="col-6 offset-3">
                <hr class="dark">
            </div>
            <!--            -->
            <div class="col-lg-4">
                <div class="row justify-content-center">
                    <div class="crop-div">
                        <h3>Standards internationaux</h3>
                    </div>
                </div>
            </div>
            <div class="col-lg-8">
                <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <!--            -->
            <div class="col-12">
                <br>
            </div>
            <!--            -->
            <div class="col-lg-4">
                <div class="row justify-content-center">
                    <div class="crop-div">
                        <h3>Meilleures établissements</h3>
                    </div>
                </div>
            </div>
            <div class="col-lg-8">
                <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <!--            -->
            <div class="col-12">
                <br>
            </div>
            <!--            -->
            <div class="col-lg-4">
                <div class="row justify-content-center">
                    <div class="crop-div">
                        <h3>Meilleures formations</h3>
                    </div>
                </div>
            </div>
            <div class="col-lg-8">
                <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'ExcellencePedagogie'
  }
</script>

<style lang="scss" scoped>
    @import '../variables.scss';
    .crop-div {
        width: 250px;
        height: 250px;
        background: radial-gradient($light-blue-color, $dark-blue-color);
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        color: $font-color-light;
    }
    .crop-div:before {
        content: '';
        position: absolute;
        bottom: 0; right: 0;
        border-bottom: 60px solid white;
        border-left: 60px solid $dark-blue-color;
        width: 0;
    }
</style>
