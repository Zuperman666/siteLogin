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
        metaInfo: {
            title: 'Fifa LoginGaming Team',
            meta: [
                { charset: 'utf-8' },
                { name: 'description', content: 'Pagina dedicata al team di Fifa del Login Gaming' },
                { name:'keywords',content:'Fifa LoginGaming Team'}
            ]
        },
        data () {
            return {
                imgSrc:alien,
               listPlayer:arrayListPlayerFifa,
            };
        },
        mounted: function () {
            window.scrollTo({top: 0, behavior: "smooth"});
        },
        components:{TeamStructure, FooterElement},
    }
</script>
<style lang="scss">

</style>