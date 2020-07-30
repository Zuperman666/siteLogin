<template>
<div>
   <OneUnderAnother/>
   <FooterElement/>
   </div>
</template>
<script>
import FooterElement from '../components/Footer.vue'
import OneUnderAnother from '../components/OneUnderAnother.vue'
export default {
   name: 'Cocktails',  
   components:{FooterElement,OneUnderAnother},
}
</script>
<style lang="scss">

</style>