<template>
  <div class="CardContainer">
    <div class="InsideRoundedContainer" :style="[cardBgColor]">
      <h1>{{TextTitle}}</h1>
      <h2>{{TextSubTitle}}</h2>
    </div>
    <div class="ContainerImage">
      <div :style="[cardBgImage]"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "NewCardDesign",
  props: ["TextTitle", "TextSubTitle", "backgroundColor", "imageUrl"],
  computed: {
    cardBgImage() {
      return {
        backgroundImage: `url(${this.imageUrl})`,
      };
    },
    cardBgColor() {
      return {
        backgroundColor: this.backgroundColor,
        border: `2px solid ${this.backgroundColor}`,
      };
    },
  },
};
</script>
<style scoped>
.CardContainer {
  width: 300px;
  height: 400px;
  background: transparent;
  position: relative;
  color:blue;
}
.InsideRoundedContainer {
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  border-radius: 18px;
  flex-flow: column;
}
.ContainerImage {
  width: 300px;
  height: 200px;
  z-index: 2;
  position: absolute;
  bottom: 0;
}
.InsideRoundedContainer h1{
    margin-top: 30px;
    color:tomato;
}
.InsideRoundedContainer h2{
    margin-top: 20px;
}
.ContainerImage div {
  height: 100%;
  width: auto;
  background-size: cover;
}
</style>