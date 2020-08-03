<template>
    <div>
      <HeaderContainer/>
       <p class="TextNameTitle"><a>Fumetteria Login</a></p>
    <div class="TextSubTitleDiv">
       <h1>lorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?</h1>
    </div>
    <separator/>
     <div>
         <p class="TextNameTitle"><a>Le ultime uscite !!!</a></p>
    </div>
      <v-app>
    <v-carousel
      cycle
      height="400"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
         :src="item.src"
      >
        <v-sheet
          height="100%"
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <div class="display-3"> Slide</div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    </v-app>
      <p class="TextNameTitle"><a>Il fumetto consigliato del mese</a></p>
      <youtube video-id="9AZA6fREkoA"></youtube>
   <FooterElement/>
   </div>
</template>
<script>
import FooterElement from '../components/Footer.vue'
export default {
   name: 'Fumetteria',  
   components:{FooterElement},
   data () {
    return {
      items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
    }
  }
}
</script>
<style lang="scss" scoped>
.TextSubTitleDiv{
   width: 500px;
   display: inline-block;
}
.TextSubTitleDiv h1 {
   font-size: 20px;
}
</style>