<template>
    <div class="container-fluid">
        <div class="row text-center welcome">
            <div class="col-12">
                <h1 class="display-4" style="text-transform: uppercase">Le mot du directeur</h1>
            </div>
            <div class="col-6 offset-3">
                <hr class="dark">
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
                <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
                <img src="../assets/logo/e-mtiyaz-logo-hd.png" alt="" style="width: 70%">
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'WordAbout'
  }
</script>

<style lang="scss" scoped>
    @import '../variables.scss';
    .welcome {
        width: 75%;
        margin: 0 auto;
        padding-top: 2rem;
    }
</style>
