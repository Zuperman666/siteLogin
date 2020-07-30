<template>
   <div class="separator">
   </div> 
</template>
<script>
export default {
     name: 'Separator'
}
</script>
<style lang="scss" scoped>
.separator{
    width: 100%;
    height: 10px;
    background-color:red;
    box-shadow: 0 0 15px red;
    animation: effectLed 12s 3s 1 ;
    -moz-animation: effectLed 12s 3s 1;
    -webkit-animation: effectLed 12s 3s 1;
    -o-animation: effectLed 12s 3s 1;
    animation-iteration-count:infinite;
}
@keyframes effectLed {
    0% {  background-color:red;
    box-shadow: 0 0 15px red; }
    50% {  background-color:blue;
    box-shadow: 0 0 15px blue; }
    100% {  background-color:yellow;
    box-shadow: 0 0 15px yellow; }
}

@-moz-keyframes effectLed {
    0% {  background-color:red;
    box-shadow: 0 0 15px red; }
    50% {  background-color:blue;
    box-shadow: 0 0 15px blue; }
    100% {  background-color:yellow;
    box-shadow: 0 0 15px yellow; }
}

@-webkit-keyframes effectLed {
    0% {  background-color:red;
    box-shadow: 0 0 15px red; }
    50% {  background-color:blue;
    box-shadow: 0 0 15px blue; }
    100% {  background-color:yellow;
    box-shadow: 0 0 15px yellow; }
}

@-o-keyframes effectLed {
    0% {  background-color:red;
    box-shadow: 0 0 15px red; }
    50% {  background-color:blue;
    box-shadow: 0 0 15px blue; }
    100% {  background-color:yellow;
    box-shadow: 0 0 15px yellow; }
}
</style>