<template>
<div>
   <div class="ImageUnderHeaderHamburger">
      <HeaderContainer/>
      <div class="centerTextMain">
         <h1>
            Entra nel mondo di Login dove tutto può succedere!!
         </h1>
         <p>Sottotesto a caso</p>
         <button v-on:click="greet('/Contattaci')" class="bottoneTestoMain">
               Prenota Ora
         </button>
      </div>
   </div>
   <CardwithLaterText text="ciao mamma" title="Pickle Rick" img="pickle.jpg" direction="right" alt="Pickle Rick cocktail"/>
   <CardwithLaterText text="ciao mamma" title="Dr.Manatthan" img="drman.jpg" direction="left" alt="Dr.Manatthan cocktail"/>
   <CardwithLaterText text="ciao mamma" title="Hulk Spacca" img="hulk.jpg" direction="right" alt="Hulk Spacca cocktail"/>
   <CardwithLaterText text="ciao mamma" title="Kurama" img="kurama.jpg" direction="left" alt="Kurama cocktail"/>
   <VideoCocktails/>
   <FooterElement/>
   </div>
</template>
<script>
import FooterElement from '../components/Footer.vue'
import CardwithLaterText from "../components/CardwithLaterText";
import VideoCocktails from "../components/videoCocktails"
export default {
   name: 'Cocktails',  
   components:{CardwithLaterText, FooterElement,VideoCocktails},
   metaInfo: {
      title: 'Cooktails LoginGaming',
      meta: [
         { charset: 'utf-8' },
         { name: 'description', content: 'Pagina dedicata ai vari cocktails realizzati nel LoginGaming' },
         { name:'keywords',content:'Cocktails LoginGaming'}
      ]
   },
   mounted: function () {
      window.scrollTo({top: 0, behavior: "smooth"});
   }
}
</script>
<style lang="scss" scoped>
.ImageUnderHeaderHamburger {
   background-size: cover;
   height: 100%;
   width: 100%;
   min-height: 100vh;
}
</style>