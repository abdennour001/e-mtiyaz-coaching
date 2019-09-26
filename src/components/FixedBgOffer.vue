<template>
    <div class="content">
        <OfferTitle></OfferTitle>
<!--        <FixedBg></FixedBg>-->
        <OfferBody></OfferBody>
    </div>
</template>

<script>
  import FixedBg from './FixedBg'
  import OfferBody from './OfferBody'
  import OfferTitle from './OfferTitle'
  export default {
    name: 'FixedBgOffer',
    components: { OfferTitle, OfferBody, FixedBg }
  }
</script>

<style lang="scss" scoped>
    @import '../variables.scss';

</style>
