<template>
   <div class="container-fluid containerCard">
      <div class="row">
      <div class=" col-sm-12  col-md-6 textBox ">
         <div class="textBoxTitle">Specifiche PC, monitor</div>
         <div class="textBoxDescription">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
             quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</div>
         
      </div>
      <div class="col-md-6 col-sm-12 imgBox">
         <img v-bind:src="imgSrc" class="imgCss" alt="">
      </div>
   </div>         
      </div>
 
</template>
<script>
export default {
     name: 'LetsPlayCards',
   data () {
            return {
                imgSrc:Foto
            };
        },
}
import Foto from "../assets/MNT00280.png"
</script>
<style lang="scss">
   .containerCard{
      background-color: #bebebe;
      padding: 25px;
   }
   .imgBox{
      text-align: right;
   }
   .imgCss{
      width: 100%;
   }
   .textBox{
      text-align: left ;
   }
   .textBoxTitle{
      font-size: 40px;
      font-weight: 700;
   }
   .textBoxDescription{
      font-size: 21px;
   }
</style>