<template>
<div>
<div class="containerCard">
  <card redirect='Hamburgeria' data-image="https://th.bing.com/th/id/OIP.vjk47l2c4iuJR0NRH8ZjTgAAAA?pid=Api&rs=1"  >
    <h1 slot="header">Hamburgeria</h1>
    <p slot="content">MANGIA BELLO DE NONNA</p>
  </card>
  <card redirect='/Cocktails' data-image="https://ksr-ugc.imgix.net/assets/012/248/850/e73e5e4b4ba0d0066a191423cd190475_original.png?w=1536&h=864&fit=fill&bg=000000&v=1463746322&auto=format&q=92&s=1d99d3869bbe7e71ad33fa2ba73ccf81">
    <h1 slot="header">Cocktails</h1>
    <p slot="content">Letteralmente cazzo code
    </p>
  </card>
  <card redirect='/Fumetteria' data-image="https://th.bing.com/th/id/OIP.WJajujc6ZajXLNo2MchD9wHaLK?pid=Api&rs=1">
    <h1 slot="header">Fumetteria</h1>
    <p slot="content">A ma quindi dragon ball?</p>
  </card>
  <card redirect='/SalaLan' data-image="https://cdn141.picsart.com/265414414012202.jpg">
    <h1 slot="header">Sala Lan</h1>
    <p slot="content">2k de pc per giocare a fornite MORTACCIVOSTRA!!</p>
  </card>
  <card redirect='/Eventi' data-image="https://i.ytimg.com/vi/3jZ9INUXVP0/maxresdefault.jpg">
    <h1 slot="header">Eventi</h1>
    <p slot="content">Ma fate altro oltre il fottuto Karaoke?</p>
  </card>
  <card redirect='/Contattaci' data-image="https://th.bing.com/th/id/OIP.BID2wtLq3BNt8tasLGcs3QHaHa?pid=Api&rs=1">
    <h1 slot="header">Contattaci</h1>
    <p slot="content">Se volete il numero di Flavio state attente.</p>
  </card>
  
</div>
<FooterElement></FooterElement> 
</div>

</template>

<script>
import FooterElement from '../components/Footer.vue'
export default {
  name: 'HelloWorld',
  components:{FooterElement},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
$hoverEasing: cubic-bezier(0.23, 1, 0.32, 1);
$returnEasing: cubic-bezier(0.445, 0.05, 0.55, 0.95);

.title {
  font-family: "Raleway";
  font-size: 24px;
  font-weight: 700;
  color: #5D4037;
  text-align: center;
}

p {
  line-height: 1.5em;
}

h1+p, p+p {
  margin-top: 10px;
}

.containerCard {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items:center;
  width: 100%;
}

.card-wrap {
  margin: 10px;
  transform: perspective(800px);
  transform-style: preserve-3d;
  cursor: pointer;
  box-sizing: content-box;
  // background-color: #fff;
  
  &:hover {
    .card-info {
      transform: translateY(0);
    }
    .card-info p {
      opacity: 1;
    }
    .card-info, .card-info p {
      transition: 0.6s $hoverEasing;
    }
    .card-info:after {
      transition: 5s $hoverEasing;
      opacity: 1;
      transform: translateY(0);
    }
    .card-bg {
      transition: 
        0.6s $hoverEasing,
        opacity 5s $hoverEasing;
      opacity: 0.8;
    }
    .card {
      transition:
        0.6s $hoverEasing,
        box-shadow 2s $hoverEasing;
      box-shadow:
        rgba(white, 0.2) 0 0 40px 5px,
        rgba(white, 1) 0 0 0 1px,
        rgba(black, 0.66) 0 30px 60px 0,
        inset #333 0 0 0 5px,
        inset white 0 0 0 6px;
    }
  }
}

.card {
  position: relative;
  flex: 0 0 240px;
  width: 240px;
  height: 320px;
  background-color: #333;
  overflow: hidden;
  border-radius: 10px;
  box-shadow:
    rgba(black, 0.66) 0 30px 60px 0,
    inset #333 0 0 0 5px,
    inset rgba(white, 0.5) 0 0 0 6px;
  transition: 1s $returnEasing;
}

.card-bg {
  opacity: 0.5;
  position: absolute;
  top: -20px; left: -20px;
  width: 100%;
  height: 100%;
  padding: 20px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transition:
    1s $returnEasing,
    opacity 5s 1s $returnEasing;
  pointer-events: none;
}

.card-info {
  padding: 20px;
  position: absolute;
  bottom: 0;
  color: #fff;
  transform: translateY(40%);
  transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  
  p {
    opacity: 0;
    text-shadow: rgba(black, 1) 0 2px 3px;
    transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  
  * {
    position: relative;
    z-index: 1;
  }
  
  &:after {
    content: '';
    position: absolute;
    top: 0; left: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to bottom, transparent 0%, rgba(#000, 0.6) 100%);
    background-blend-mode: overlay;
    opacity: 0;
    transform: translateY(100%);
    transition: 5s 1s $returnEasing;
  }
}

.card-info h1 {
  font-family: "Playfair Display";
  font-size: 36px;
  font-weight: 700;
  text-shadow: rgba(black, 0.5) 0 10px 10px;
}
</style>
