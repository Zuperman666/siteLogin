<template>
<div>
   <div class="ImageUnderHeaderHamburger">
      <HeaderContainer/>
      <div class="centerTextMain">
         Entra nel mondo di Login dove tutto può succedere!!
         <p>Sottotesto a caso</p>
         <button v-on:click="greet('/Contattaci')" class="bottoneTestoMain">
            Prenota Ora
         </button>
      </div>
   </div>
   <CardwithLaterText text="ciao mamma" title="TITOLO BELLO" img="MNT00026.png" direction="right"/>
   <CardwithLaterText text="ciao mamma" title="TITOLO BELLO" img="MNT00026.png" direction="left"/>
   <CardwithLaterText text="ciao mamma" title="TITOLO BELLO" img="MNT00026.png" direction="right"/>
   <FooterElement/>
   </div>
</template>
<script>
import FooterElement from '../components/Footer.vue'
import CardwithLaterText from "../components/CardwithLaterText";
export default {
   name: 'Cocktails',  
   components:{CardwithLaterText, FooterElement},
   mounted: function () {
      window.scrollTo({top: 0, behavior: "smooth"});
   }
}
</script>
<style lang="scss">

</style>