<template>
  <div>
    <div class="ImageUnderHeaderHamburger">
      <HeaderContainer />
      <div class="centerTextMain">
        <h1>Entra nel mondo di Login dove tutto può succedere!!</h1>
        <p>Sottotesto a caso</p>
        <button v-on:click="greet('/Contattaci')" class="bottoneTestoMain">
          Prenota Ora
        </button>
      </div>
    </div>
    <div class="d-md-inline-flex w-100">
      <div class="col-12 col-md-6">
        <iframe
          poster="https://images-na.ssl-images-amazon.com/images/I/81eNGmjkfsL._AC_SL1500_.jpg"
          width="100%"
          height="100%"
          controls
        >
          <source src="../assets/video/alessio.mp4" type="video/mp4" />
        </iframe>
      </div>
      <div class="col-12 col-md-6">
        <img class="imgThree" src=../assets/drman.jpg>
      </div>
    </div>
    <div class="d-md-inline-flex w-100">
      <div class="col-12 col-md-6">
        <img class="imgThree" src=../assets/spritz.jpg>
      </div>
      <div class="col-12 col-md-6">
        <img class="imgThree" src=../assets/logincarosello.jpg>
      </div>
    </div>
    <div class="separatorElement"></div>
    <div class="Ristoro2">
      <div class="textRistoro">
        <h1> IL NOSTRO RISTORO</h1>
        <p>Bla,BlaBla ,Bla,Bla,Bla,Bla,Bla,Bla,Bla,Bla,Bla</p>
      </div>
      <div class="slider">
        <input
          v-for="(item, index) in items"
          :key="item.name"
          type="radio"
          name="testimonial"
          :id="'t-' + (index + 1)"
          :checked="index === (~~(items.length/2))"
        />
        <div class="testimonials">
          <label
            v-for="(item, index) in items"
            :key="item.name"
            class="item"
            :for="'t-' + (index + 1)"
            :style="'background-image: url(' + item.src + ');'"
          >
            <div class="textFoodOverCarousel">{{ item.name }}</div>
          </label>
        </div>
      </div>
    </div>
    <modal v-if="showModal" />
    <FooterElement></FooterElement>
  </div>
</template>
<script>
import FooterElement from "../components/Footer.vue";
import modal from "../components/modal.vue";
import { router } from "../main.js";
import FotoCibo2 from "../assets/polpsugocarosello.jpg";
import FotoCibo3 from "../assets/aperitivopiatto.jpg";
import FotoCibo4 from "../assets/patatecheddarebacon.jpg";
import FotoCibo5 from "../assets/mayorcarosello.jpg";
import FotoCibo6 from "../assets/goombacarosello.jpg";
import FotoCibo7 from "../assets/onioncarosello.jpg";
import FotoCibo10 from "../assets/logincarosello.jpg";
import FotoCibo11 from "../assets/eastercarosello.jpg";
import FotoCibo12 from "../assets/polpcaciocarosello.jpg";
import FotoCibo13 from "../assets/patatecacio.jpg";

/* NOTA: SE SI AGGIUNGE UN ITEM IN ITEMS, 
BISOGNA AUMENTARE LA VARIABILE SASS $carousel-dimension */
export default {
  name: "Hamburgeria",
  components: { FooterElement, modal },
  metaInfo: {
    title: 'Hamburger LoginGaming',
    meta: [
      { charset: 'utf-8' },
      { name: 'description', content: 'Pagina Hamburgeria LoginGaming' },
      { name:'keywords',content:'Hamburgeria LoginGaming'}
    ]
  },
  data() {
    return {
      showModal: false,
      i: 0,
      items: [
        {
          src: FotoCibo2,
          name: "Polpette Al Sugo",
        },
        {
          src: FotoCibo3,
          name: "Piatto Aperitivo",
        },
        {
          src: FotoCibo4,
          name: "Patate Cheddar e Bacon",
        },
        {
          src: FotoCibo5,
          name: "Mayor Mc Cheese",
        },
        {
          src: FotoCibo6,
          name: "Goomba",
        },
        {
          src: FotoCibo7,
          name: "Onion Knight",
        },
        {
          src: FotoCibo10,
          name: "Login Special",
        },
        {
          src: FotoCibo11,
          name: "Easter Egg",
        },
        {
          src: FotoCibo12,
          name: "Polpette Cacio e Pepe",
        },
        {
          src: FotoCibo13,
          name: "Patate Cacio e Pepe",
        },
      ],
    };
  },
  mounted: function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  },
  methods: {
    modal: function () {
      this.showModal = true;
    },
    greet: function () {
      router.push("/Contattaci");
    },
    leftArrow: function () {
      if (this.i === 0) return (this.i = 11);
      return this.i--;
    },
    rightArrow: function () {
      if (this.i === 11) return (this.i = 0);
      return this.i++;
    },
  },
};
</script>
<style lang="scss">
$carousel-dimension: 12;

.TextNameTitle {
  font-size: 40px;
  color: white;
}

.TextNameTitleOur {
  font-size: 30px;
  color: white;
}

.ImageMenùContainer {
  display: flex;
  justify-content: center;
}

.imgThree {
  width: 100%;
}

.ImagineMenù {
  width: 600px;
  height: 400px;
  background-image: url(https://image.freepik.com/vettori-gratuito/lavagna-menu-hamburger_62951-60.jpg);
  background-size: cover;
}
.textRistoro {
  color: white;
  font-size: 40px;
  padding: 10px;
  justify-content: center;

  p {
    font-size: 15px;
    color: gray;
  }
}
.DivPadre .v-application--wrap {
  min-height: 0 !important;
}

.DivPadre .v-application {
  min-height: 0 !important;
  height: 100% !important;
}

.ImageUnderHeaderHamburger {
  background-size: cover;
  height: 100%;
  width: 100%;
  min-height: 100vh;
}

.v-image__image {
  z-index: 0 !important;
}

.imageCarousell2 {
  width: 1000px;
  height: 666px;
  justify-content: center;
  margin-top: 124px;
  background-size: 100% 100%;
}

.textFoodContainer {
  width: 500px;

  p {
    margin-top: 10px;
    color: crimson;
  }
}

.carousell2 {
  width: 100%;
  height: 610px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.textFoodBanner {
  background-color: #3d3c3a;
  height: 400px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;

  .bottoneTestoMain {
    margin-top: 30px;
    color: white;
  }
}

.Ristoro2 {
  height: 720px;
  width: 100%;
}

.textFoodOverCarousel {
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  width: 100%;
  margin-top: 370px;
  font-size: 30px;
  left: 0;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
}

@media screen and (max-width: 992px) {
  .v-image__image {
    background-size: cover !important;
  }
}

@media screen and (max-width: 800px) {
  .textFoodContainer {
    width: 100%;
  }
}

.slider {
  width: 100%;
}
.testimonials {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 600px;
  perspective: 1000px;
  overflow: hidden;
}
.testimonials .item {
  top: 0;
  position: absolute;
  box-sizing: border-box;
  background-size: contain;
  padding: 30px;
  width: 600px;
  height: 500px;
  text-align: center;
  background-position: center center;
  transition: transform 0.4s;
  -webkit-transform-style: preserve-3d;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  user-select: none;
  cursor: pointer;
}
.testimonials .item p {
  color: #ddd;
}
.testimonials .item h2 {
  font-size: 14px;
}
.dots {
  display: flex;
  justify-content: center;
  align-items: center;
}
.dots label {
  display: block;
  height: 5px;
  width: 5px;
  border-radius: 50%;
  cursor: pointer;
  background-color: #413b52;
  margin: 7px;
  transition: transform 0.2s, color 0.2s;
}
@for $i from 1 through $carousel-dimension {
    #t-#{$i}:checked ~ .testimonials label {
        display: none;
   }
  #t-#{$i}:checked ~ .dots label[for="t-#{$i}"] {
    transform: scale(2);
    background-color: #fff;
    display:block;
  }
  #t-#{$i}:checked ~ .dots label[for="t-#{$i}"] {
    transform: scale(1.5);
    display:block;
  }
  #t-#{$i}:checked ~ .testimonials label[for="t-#{$i}"] {
    z-index: 4;
    display:block;
  }
  #t-#{$i}:checked ~ .testimonials label[for="t-#{$i + 1}"] {
    transform: translateX(300px) translateZ(-90px) rotateY(-15deg);
    z-index: 3;
    display:block;
  }
  #t-#{$i}:checked ~ .testimonials label[for="t-#{$i + 2}"] {
    transform: translateX(600px) translateZ(-180px) rotateY(-25deg);
    z-index: 2;
    display:block;
  }
  #t-#{$i}:checked ~ .testimonials label[for="t-#{$i + 3}"] {
    transform: translateX(900px) translateZ(-270px) rotateY(-35deg);
    z-index: 1;
    display:block;
  }
  #t-#{$i}:checked ~ .testimonials label[for="t-#{$i + 4}"] {
    transform: translateX(1200px) translateZ(-360px) rotateY(-45deg);
    display:block;
  }
  #t-#{$i}:checked ~ .dots label[for="t-#{$i - 1}"] {
    transform: scale(1.5);
    display:block;
  }

  #t-#{$i}:checked ~ .testimonials label[for="t-#{$i - 1}"] {
    transform: translateX(-300px) translateZ(-90px) rotateY(15deg);
    display:block;
  }
  #t-#{$i}:checked ~ .testimonials label[for="t-#{$i - 2}"] {
    transform: translateX(-600px) translateZ(-180px) rotateY(25deg);
    display:block;
  }
   #t-#{$i}:checked ~ .testimonials label[for="t-#{$i - 3}"] {
    transform: translateX(-900px) translateZ(-270px) rotateY(35deg);
    display:block;
  }
   #t-#{$i}:checked ~ .testimonials label[for="t-#{$i - 4}"] {
    transform: translateX(-1200px) translateZ(-360px) rotateY(45deg);
    display:block;
  }


}
</style>