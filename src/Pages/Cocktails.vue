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
   <CardwithLaterText text="ciao mamma" title="Pickel Rick" img="pickle.jpg" direction="right"/>
   <CardwithLaterText text="ciao mamma" title="Dr. Manatthan" img="drman.jpg" direction="left"/>
   <CardwithLaterText text="ciao mamma" title="Hulk Spacca" img="hulk.jpg" direction="right"/>
   <CardwithLaterText text="ciao mamma" title="Kurama" img="kurama.jpg" direction="left"/>
   <scrollableVideo />
   <FooterElement/>
   </div>
</template>
<script>
import FooterElement from '../components/Footer.vue'
import CardwithLaterText from "../components/CardwithLaterText";
import scrollableVideo from "../components/ScrollableVideo";
export default {
   name: 'Cocktails',  
   components:{CardwithLaterText, FooterElement,scrollableVideo},
   mounted: function () {
      window.scrollTo({top: 0, behavior: "smooth"});
   }
}
</script>
<style lang="scss">

</style>