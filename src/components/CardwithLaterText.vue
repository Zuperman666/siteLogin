<template>
    <Observer @on-change="onChange">
    <div class="container-fluid containerCard" id="test" :class="isVisible ? 'fade-in' : ''">
        <div v-if="direction === 'left' " class="row textBox">
            <div class="textLeft">
                <div class="textBoxTitle">{{title}}</div>
                <div class="textBoxDescription">
                    {{text}}
                </div>
            </div>
            <div class="col-md-6 col-sm-12"></div>
            <div class="col-md-6 col-sm-12 imgBox ">
                <img v-bind:src="require(`../assets/${img}`)" class="imgCss" alt="">
            </div>
            <div class="textUnder">
                <div class="textBoxTitle">{{title}}</div>
                <div class="textBoxDescription">
                    {{text}}
                </div>
            </div>
        </div>
        <div v-if="direction ==='right'" class="row textBox">
            <div class="col-md-6 col-sm-12 imgBox">
                <img v-bind:src="require(`../assets/${img}`)" class="imgCss" alt="">
            </div>
            <div class="textUnder">
                <div class="textBoxTitle">{{title}}</div>
                <div class="textBoxDescription">
                    {{text}}
                </div>
            </div>
            <div class="textRight">
                <div class="textBoxTitle">{{title}}</div>
                <div class="textBoxDescription">
                    {{text}}
                </div>
            </div>

        </div>
    </div>
    </Observer>
</template>
<script>
    import Observer from 'vue-intersection-observer';
    export default {
        name: 'CardwithLaterText',
        props: ["title", "text", "img", "direction"],
        data: function () {
            return {
                isVisible: false,
            };
        },
        created() {
            window.addEventListener('scroll', this.onScroll);
        },
        destroyed() {
            window.removeEventListener('scroll', this.onScroll);
        },
        components: {
            Observer
        },
        methods: {
            onChange(entry) {
                    this.isVisible = entry.isIntersecting;
            }
        }
    }

</script>
<style lang="scss" scoped>
    @keyframes fadeIn {
        0% {opacity:0;}
        100% {opacity:1;}
    }

    @-moz-keyframes fadeIn {
        0% {opacity:0;}
        100% {opacity:1;}
    }

    @-webkit-keyframes fadeIn {
        0% {opacity:0;}
        100% {opacity:1;}
    }

    @-o-keyframes fadeIn {
        0% {opacity:0;}
        100% {opacity:1;}
    }

    @-ms-keyframes fadeIn {
        0% {opacity:0;}
        100% {opacity:1;}
    }
    .containerCard {
        background-color: #bebebe;
        padding: 50px;
    }
    .fade-in {
        animation: fadeIn  3s;
        -webkit-animation: fadeIn  3s;
    }

    .imgBox {
        text-align: right;
    }

    .imgCss {
        width: 100%;
    }

    .textBox {
        position: relative;
    }
    .textUnder {
        display: none;
    }

    .textLeft {
        position: absolute;
        padding: 30px;
        background: grey;
        z-index: 9;
        top: 40%;
        min-width: 500px;
        left: 30%;
    }

    .textRight {
        position: absolute;
        padding: 30px;
        background: grey;
        z-index: 9;
        top: 40%;
        min-width: 500px;
        left: 40%;
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



    @media screen and (max-width: 992px) {
        .textLeft {
         display: none;
        }
        .textUnder{
            display: inline-block;
            width: 100%;
            heigth:100%;
            background: grey;
            padding: 20px;

        }

        .textRight {
            display: none;
        }
    }
</style>