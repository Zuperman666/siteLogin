<template>
<div>
<div id="app">
  <router-view></router-view>
   </div>
   </div>
</template>
  
<script>
export default {
  name: 'App',
}
</script>

<style >
@font-face {
  font-family: "Design";
  src: local("Design"),
   url(./fonts/Design/Typo_Hoop_Regular_Demo.otf);
}
#app {
  font-family: Design,Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
body{
  height: 100%;
  margin: 0;
  background: black;
}
</style>
