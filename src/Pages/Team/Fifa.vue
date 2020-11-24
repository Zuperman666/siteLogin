<template>
    <div>
        <HeaderContainer/>
        <TeamStructure v-bind:array-players="listPlayer" image-games-link="" />
        <FooterElement/>
    </div>
</template>
<script>
    import FooterElement from '../../components/Footer.vue'
    import TeamStructure from "../../components/TeamStructure";
    import {arrayListPlayerFifa} from "../../Utility/ConfigConstant";
    export default {
        name: 'Fifa',
        data () {
            return {
               listPlayer:arrayListPlayerFifa,
            };
        },
        components:{TeamStructure, FooterElement},
    }
</script>
<style lang="scss">

</style>