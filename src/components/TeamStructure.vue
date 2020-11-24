<template>
    <div>
        <div class="GameImages" :style="[BgImage]" >
            <div  v-for="(ArrayPlayer, i) in ArrayPlayers"
                  :key="i"
                  :src="ArrayPlayer.src">
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'TeamStructure',
        props: ["ImageGamesLink", "ArrayPlayers"],
        computed: {
            BgImage() {
                return {
                    backgroundImage: `url(${this.ImageGamesLink})`,
                };
            },
        }
    }
</script>
<style lang="scss" scoped>
.GameImages{
    width: 100%;
    height: 300px;
}
</style>