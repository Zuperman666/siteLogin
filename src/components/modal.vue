<template>
  <div>
    <transition name="modal">
      <div class="modal-mask">
        <video autoplay id="myVideo">
          <source src="../assets/video/alessio.mp4" type="video/mp4" />
        </video>
      </div>
    </transition>
  </div>
</template>
<script>
import { router } from "../main.js";
export default {
  name: "modal",
  mounted: function () {
    document.getElementById("myVideo").addEventListener("ended", function () {
      router.push("/Contattaci");
    });
  },
  methods: {
    greet: function () {
      router.push("/Contattaci");
    },
  },
};
</script>
<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

@media only screen and (max-width: 800px) {
  .modal-mask {
    video {
      width: 100%;
      height: 100%;
    }
  }
}
</style>