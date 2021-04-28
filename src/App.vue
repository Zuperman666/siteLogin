<template>
<div id="app">
    <Cookie></Cookie>
  <router-view>
  </router-view>
   </div>
</template>
  
<script>
import Cookie from "./components/Cookie";
export default {
  name: 'App',
    components: {Cookie},
}
</script>

<style >
@font-face {
  font-family: "Design";
  src: local("Design"),
   url(./fonts/Design/coolveticarg.ttf);
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
@import'~bootstrap/dist/css/bootstrap.css'
</style>
