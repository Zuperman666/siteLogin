<template>
    <div>
        <HeaderContainer/>
        <TeamStructure v-bind:array-players="listPlayer" v-bind:image-games-link="imgSrc" />
        <FooterElement/>
    </div>
</template>
<script>
    import FooterElement from '../../components/Footer.vue';
    import TeamStructure from "../../components/TeamStructure";
    import {arrayListPlayerFifa} from "../../Utility/ConfigConstant";
    import alien from "../../assets/alien.png"
    export default {
        name: 'Fifa',
        data () {
            return {
                imgSrc:alien,
               listPlayer:arrayListPlayerFifa,
            };
        },
        components:{TeamStructure, FooterElement},
    }
</script>
<style lang="scss">

</style>