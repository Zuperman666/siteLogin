<template>
  <flipbook class="flipbook" :pages="[null, url[0],url[1],url[2],url[3]]"></flipbook>
</template>
<script>
import Flipbook from "flipbook-vue";
export default {
  components: { Flipbook },
  data: function () {
    return {
      url:[
          "https://images.everyeye.it/img-articoli/it-capitolo-2-recensione-dell-ultra-hd-blu-ray-4k-dolby-vision-v6-46698.jpg",
          "https://www.sony.it/image/bc6d25fa6371c2899ce704a2bed7614c?fmt=png-alpha&wid=720",
          "https://www.lg.com/it/images/TV/features/TV-UHD-65-55-49-43-UM73-02-4K-Resolution-Desktop.jpg",
          "https://i.pinimg.com/originals/2b/2b/11/2b2b1110569856cc7b4962abf6695e9c.jpg"
      ]
    };
  },
};
</script>
<style>
.flipbook {
  width: 90vw;
  height: 90vh;
}
</style>