<template>
    <div id="section_rendez_vous" class="container-fluid jumbotron" >
        <div class="row text-center squeeze-75">
            <div class="col-12">
                <p class="lead">Besoin d'être soutenu ou accompagné dans votre projet d'études ou celui de votre enfant ?</p>
            </div>
        </div>
        <form class="squeeze-50">
            <div class="form-row">
                <div class="form-group col-md-6">
                    <input v-model="nom" type="text" class="form-control" id="nom" placeholder="Nom">
                </div>
                <div class="form-group col-md-6 text-left mb-4">
                    <input v-model="email" type="email" class="form-control" id="email" placeholder="Email">
                </div>
                <div class="form-group col-md-6 text-left">
                    <input v-model="prenom" type="text" class="form-control" id="prenom" placeholder="Prenom">
                </div>
                <div class="form-group col-md-6 text-left mb-4">
                    <input v-model="tel" type="tel" class="form-control" id="telephone" placeholder="Téléphone">
                </div>
                <div class="form-group col-md-6 text-left">
                    <input v-model="niveau" type="text" class="form-control" id="niveau" placeholder="Niveau d'étude actuel">
                </div>
                <div class="form-group col-md-6 text-left mb-4">
                    <input v-model="etablissement" type="text" class="form-control" id="etablissement" placeholder="Établissement actuel">
                </div>
            </div>
            <button type="submit" class="button w-100">Envoyer</button>
        </form>
    </div>
</template>

<script>
  export default {
    name: 'RendezVous',
    data() {
      return {
        nom: '',
        prenom: '',
        email:'',
        tel:'',
        niveau: '',
        etablissement: ''
      }
    }
  }
</script>

<style lang="scss" scoped>
    @import '../variables.scss';
    .jumbotron {
        /*background: url("../assets/background/rendez-vous-bg-tran.png") no-repeat center;*/
        /*background-size: cover;*/
    }
    .lead {
        font-size: 2rem;
        font-weight: 400;
    }
    .button {
        text-decoration: none;
        border-radius: 200px;
        padding: 10px;
        border: 1px solid $dark-blue-color;
        color: $dark-blue-color;
        background-color: transparent;
        transition: 0.5s ease;
    }
    .button:hover {
        background: $medium-blue-color;
        color: $font-color-light;
    }
    input {
        border-radius: 200px;
    }
    .form-control {
        font-size: 1.1rem;
    }
</style>
