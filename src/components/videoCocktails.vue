<template>
    <Observer @on-change="onChange">
        <div id="scatola" class="scatola">
            <video id="myVideo" class="myVideo">
                <source src="../assets/Player/CocktailsVideo.mp4" type="video/mp4"/>
            </video>
        </div>
    </Observer>
</template>
<script>
    import Observer from "vue-intersection-observer";
    export default {
        name: "VideoCocktails",
        components: {
            Observer
        },
        methods: {
            onChange(entry) {
                this.isVisible = entry.isIntersecting;
                if(entry.isIntersecting && document.getElementById('myVideo'))
                    document.getElementById('myVideo').play();
            }
        }
    };
</script>
<style scoped>
    .scatola {
        display: block;
        position: relative;
    }

    .myVideo {
        width: 100%;
    }

</style>