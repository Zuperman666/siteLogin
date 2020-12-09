<template>
    <div class="container-fluid containerCard" id="test" :class="isVisible ? 'fadeIn' : ''">
        <div v-if="direction === 'left' " class="row">
            <div class=" col-sm-12  col-md-6 textBox borderRight">
                <div class="textBoxTitle">{{title}}</div>
                <div class="textBoxDescription">
                    {{text}}
                </div>
            </div>
            <div class="col-md-6 col-sm-12 imgBox ">
                <img v-bind:src="require(`../assets/${img}`)" class="imgCss" alt="">
            </div>
        </div>
        <div v-if="direction ==='right'" class="row">
            <div class="col-md-6 col-sm-12 imgBox borderLeft">
                <img v-bind:src="require(`../assets/${img}`)" class="imgCss" alt="">
            </div>
            <div class=" col-sm-12  col-md-6 textBox ">
                <div class="textBoxTitle">{{title}}</div>
                <div class="textBoxDescription">
                    {{text}}
                </div>
            </div>

        </div>
    </div>

</template>
<script>
    /**/
    export default {
        name: 'LetsPlayCards',
        props: ["title", "text", "img", "direction"],
        data: function () {
            return {
               isVisible:false,
            };
        },
        created () {
            window.addEventListener('scroll', this.onScroll);
        },
        destroyed () {
            window.removeEventListener('scroll', this.onScroll);
        },
        methods: {
            onScroll() {
                    let bounding = document.getElementById('test').getBoundingClientRect();
                    return (
                        this.isVisible = (
                        bounding.top >= 0 &&
                        bounding.left >= 0 &&
                        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                        bounding.right <= (window.innerWidth || document.documentElement.clientWidth))
                    );
            },
        }
    }

</script>
<style lang="scss">
    .containerCard {
        background-color: #bebebe;
        padding: 25px;
    }

    .imgBox {
        text-align: right;
    }

    .imgCss {
        width: 100%;
    }

    .textBox {
        text-align: center;
    }
    .fade-in {
        animation: fadeIn ease 1s;
        -webkit-animation: fadeIn ease 1s;
        -moz-animation: fadeIn ease 1s;
        -o-animation: fadeIn ease 1s;
        -ms-animation: fadeIn ease 1s;
    }
    .textBoxTitle {
        font-size: 40px;
        font-weight: 700;
    }

    .textBoxDescription {
        font-size: 21px;
    }

    .borderRight {
        border-right: 1px solid black;
    }

    .borderLeft {
        border-right: 1px solid black;
    }
    @keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

    /* Firefox < 16 */
    @-moz-keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

    /* Safari, Chrome and Opera > 12.1 */
    @-webkit-keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

    /* Internet Explorer */
    @-ms-keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }
</style>