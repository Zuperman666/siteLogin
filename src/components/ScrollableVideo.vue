<template>
    <Observer @on-change="onChange">
        <div id="scatola" class="scatola">
            <video id="myVideo" class="myVideo">
                <source src="../assets/video/alessio.mp4" type="video/mp4"/>
            </video>
        </div>
    </Observer>
</template>
<script>
    import Observer from "vue-intersection-observer";
    export default {
        name: "ScrollableVideo",
        data: function () {
            return {
                frameNumber: 0, // start video at frame 0
                // lower numbers = faster playback
                playbackConst: 1000,
                // get page height from video duration

                // select video element
                vid: document.getElementById('myVideo'),
                isVisible: false,
            };
        },
        mounted() {
            let vid = document.getElementById('myVideo');
            let setHeight = document.getElementById("scatola");
            vid.addEventListener('loadedmetadata', function () {
                setHeight.style.height = Math.floor(vid.duration) * this.playbackConst + "px";
            });
            window.requestAnimationFrame(this.scrollPlay);

        },
        components: {
            Observer
        },
        methods: {
            scrollPlay() {
                let vid = document.getElementById('myVideo');
                let setHeight = document.getElementById("scatola");
                if(vid && vid.duration) {
                    const distanceFromTop = window.scrollY + setHeight.getBoundingClientRect().top;
                    const rawPercentScrolled = (window.scrollY - distanceFromTop) / (setHeight.scrollHeight - window.innerHeight);
                    const percentScrolled = Math.min(Math.max(rawPercentScrolled, 0), 1);
                    vid.currentTime = vid.duration * Math.abs(percentScrolled -1) ;
                }
                requestAnimationFrame(this.scrollPlay);

                   /* let frameNumber = window.pageYOffset / this.playbackConst;
                    vid.currentTime = frameNumber;
                    window.requestAnimationFrame(this.scrollPlay);*/
            },
            onChange(entry) {
                this.isVisible = entry.isIntersecting;
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