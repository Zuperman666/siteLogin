<template>
<div>
   <HeaderContainer/>
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