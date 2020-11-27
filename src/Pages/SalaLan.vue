<template>
<div>
<HeaderContainer/>
<NewCardDesign TextTitle="SalaLan" TextSubTitle="Questa è una fottuta sala lan" backgroundColor="yellow" imageUrl="https://i7.pngguru.com/preview/940/556/897/check-mark-symbol-clip-art-svg.jpg"/>
   <LetsPlayCards />
   <FooterElement/>
</div>
</template>
<script>
import LetsPlayCards from '../components/LetsPlayCard.vue'
import FooterElement from '../components/Footer.vue'
import NewCardDesign from '../components/NewCardDesign.vue'
export default {
   name: 'SalaLan',  
   components:{LetsPlayCards,FooterElement,NewCardDesign},
}
</script>
<style lang="scss">

</style>