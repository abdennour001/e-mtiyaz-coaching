<template>
    <div id="fixed">

    </div>
</template>

<script>
  export default {
    name: 'FixedBg'
  }
</script>

<style lang="scss" scoped>
    @import '../variables.scss';
    #fixed {
        background: url(../assets/background/coaching.jpg) no-repeat fixed center center;
        display: table;
        height: 40rem;
        position: relative;
        opacity: 0.8;
        width: 100%;
        background-size: cover;
    }

</style>
