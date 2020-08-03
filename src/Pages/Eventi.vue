<template>
  <div>
    <HeaderContainer />
    <Flipbook/>
    <FooterElement />
  </div>
</template>
<script>
import FooterElement from "../components/Footer.vue";
import Flipbook from '../components/Flipbook.vue'
export default {
  name: "Eventi",
  components: { FooterElement,Flipbook },
};
</script>
<style lang="scss">
</style>