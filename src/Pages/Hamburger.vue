<template>
    <div>
        <h1 class="TextNameTitle">Hamburgeria Login</h1>
        <div class="ImageMenùContainer">
            <div class="ImagineMenù"> </div>
        </div>
        <h1 class="TextNameTitleOur">I Nostri Panini</h1>
        <div class="DivPadre">
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
            <div class="display-3">{{ slides[i] }} Slide</div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    </v-app>
    </div>
    <FooterElement></FooterElement>  
    </div>
</template>
<script>
import FooterElement from '../components/Footer.vue'
export default {
   name: 'Hamburgeria',  
   components:{FooterElement},
   data () {
    return {
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4',
      ],
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
        icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
      slides: [
        'First',
        'Second',
        'Third',
        'Fourth',
        'Fifth',
      ],
    }
  },
}
</script>
<style lang="scss">
.TextNameTitle{
    font-size: 40px;
    color: white;
}
.TextNameTitleOur{
    font-size: 30px;
    color: white;
}
.ImageMenùContainer{
    display: flex;
    justify-content: center;
}
.ImagineMenù{
    width: 600px;
    height: 400px;
    background-image: url(https://image.freepik.com/vettori-gratuito/lavagna-menu-hamburger_62951-60.jpg);
    background-size: cover;
}
.DivPadre .v-application--wrap {
    min-height: 0 !important;
     
  }
  .DivPadre .v-application {
    min-height: 0 !important;
    height: 100%!important;
   
  }
  .v-image__image{
    z-index: 0 !important;
  }
  @media screen and (max-width: 992px) {
  .v-image__image{
    background-size: cover !important;
  }
}
</style>