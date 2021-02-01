<template>
    <div>
        <div
                class="HeaderContainer"
                :class="[
        isOpen ? 'active' : '',
        startAnimation ? 'activeAnimation' : '',
        closeAnimation ? 'closeAnimation' : '',
      ]"
        >
            <div class="listContainer" :class="isOpen ? 'active' : ''">
                <div
                        class="Hamburgeria"
                        :class="currentPath === '/Hamburgeria' ? 'active' : ''"
                        v-on:click="greet('/Hamburgeria')"
                >
                    <h2> Hamburgeria</h2>
                </div>
                <div
                        class="Fumetteria"
                        :class="currentPath === '/Fumetteria' ? 'active' : ''"
                        v-on:click="greet('/Fumetteria')"
                >
                    <h2>Fumetteria</h2>
                </div>
                <div
                        class="Team"
                        :class="currentPath === '/Team' ? 'active' : ''"
                        v-on:click="isActiveTeam = !isActiveTeam"
                >
                    <h2>Team</h2>
                </div>
                <div v-if="isActiveTeam" class="subHeaderTeam">
                    <div
                            class="Digimon"
                            :class="currentPath === '/Team/Digimon' ? 'active' : ''"
                            v-on:click="greet('/Team/Digimon')"
                    >
                        <h2>Digimon</h2>
                    </div>
                    <div
                            class="Fifa"
                            :class="currentPath === '/Team/Fifa' ? 'active' : ''"
                            v-on:click="greet('/Team/Fifa')"
                    >
                        <h2>Fifa</h2>
                    </div>
                    <div
                            class="AssettoCorsa"
                            :class="currentPath === '/Team/AssettoCorsa' ? 'active' : ''"
                            v-on:click="greet('/Team/AssettoCorsa')"
                    >
                        <h2>Assetto Corsa</h2>
                    </div>
                    <div
                            class="DragonBall"
                            :class="currentPath === '/Team/DragonBall' ? 'active' : ''"
                            v-on:click="greet('/Team/DragonBall')"
                    >
                        <h2>Dragon Ball</h2>
                    </div>
                </div>
                <div
                        class="Cocktails"
                        :class="currentPath === '/Cocktails' ? 'active' : ''"
                        v-on:click="greet('/Cocktails')"
                >
                    Cocktails
                </div>
                <div
                        class="Contatti"
                        :class="currentPath === '/Contattaci' ? 'active' : ''"
                        v-on:click="greet('/Contattaci')"
                >
                    <h2>Contattaci</h2>
                </div>
                <div
                        class="Eventi"
                        :class="currentPath === '/Eventi' ? 'active' : ''"
                        v-on:click="greet('/Eventi')"
                >
                    <h2>Eventi</h2>
                </div>
            </div>
            <div class="hamburgerMenù">
                <div
                        class="IconHamburgerMenù"
                        :class="[iconActive ? 'activeIcon' : '']"
                        v-on:click="openModal()"
                        id="burger"
                >
                    <div class="bun top"></div>
                    <div class="filling"></div>
                    <div class="bun bottom"></div>
                </div>
            </div>
            <div class="iconLogo" :class="[iconLogo ? 'activeIcon' : '']">
                <div class="logo"></div>
            </div>
            <div class="MainHeader" :class="isScrolled ? 'scrolled' : ''">
                <span class="IconHome" v-on:click="greet('/')"></span>
                <div class="navHeader">

                    <div
                            class="Hamburgeria"
                            :class="currentPath === '/Hamburgeria' ? 'active' : ''"
                            v-on:click="greet('/Hamburgeria')"
                    >
                        <h2>Hamburgeria</h2>
                    </div>
                    <div
                            class="Cocktails"
                            :class="currentPath === '/Cocktails' ? 'active' : ''"
                            v-on:click="greet('/Cocktails')"
                    >
                        <h2>Cocktails</h2>
                    </div>
                    <div
                            class="Fumetteria"
                            :class="currentPath === '/Fumetteria' ? 'active' : ''"
                            v-on:click="greet('/Fumetteria')"
                    >
                        <h2>Fumetteria</h2>
                    </div>
                    <div
                            class="Team"
                            :class="currentPath === '/Team' ? 'active' : ''"
                            v-on:mouseover="activeSubMenu = true" v-on:mouseleave="activeSubMenu = false"
                    >
                        <h2>Team</h2>
                        <div
                                :class="!activeSubMenu ? 'display-none' : 'display-block'"
                                v-on:mouseleave="activeSubMenu = false"
                        >
                            <div class="relative">
                                <div class="box">
                                    <div
                                            v-on:click="greet('/Team/AssettoCorsa')"
                                            :class="
                      hasColorAssettoCorsa
                        ? 'coloredAssettoCorsa'
                        : 'colorlessAssettoCorsa'
                    "
                                            v-on:mouseover="hasColorAssettoCorsa = true"
                                            v-on:mouseleave="hasColorAssettoCorsa = false"
                                    ></div>
                                    <div
                                            v-on:click="greet('/Team/DragonBall')"
                                            :class="
                      hasColorDragonBall
                        ? 'coloredDragonBall'
                        : 'colorlessDragonBall'
                    "
                                            v-on:mouseover="hasColorDragonBall = true"
                                            v-on:mouseleave="hasColorDragonBall = false"
                                    ></div>
                                    <div
                                            v-on:click="greet('/Team/Digimon')"
                                            :class="
                      hasColorDigimon ? 'coloredDigimon' : 'colorlessDigimon'
                    "
                                            v-on:mouseover="hasColorDigimon = true"
                                            v-on:mouseleave="hasColorDigimon = false"
                                    ></div>
                                    <div
                                            v-on:click="greet('/Team/Fifa')"
                                            :class="hasColorFifa ?'coloredFifa'  : 'colorlessFifa'"
                                            v-on:mouseover="hasColorFifa = true"
                                            v-on:mouseleave="hasColorFifa = false"
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                            class="SalaLan"
                            :class="currentPath === '/SalaLan' ? 'active' : ''"
                            v-on:click="greet('/SalaLan')"
                    >
                        <h2>Sala Lan</h2>
                    </div>
                    <div
                            class="Eventi"
                            :class="currentPath === '/Eventi' ? 'active' : ''"
                            v-on:click="greet('/Eventi')"
                    >
                        <h2>Eventi</h2>
                    </div>
                    <button v-on:click="greet('/PrenotaPC')" class="bottoneTestoMainHeader">
                        <h2>Prenota Pc</h2>
                    </button>
                    <div class="led" onclick="window.open(
  'https://www.twitch.tv/log_in_gaming',
  '_blank'
);">
                        <img src="../assets/gif live.gif"/>
                    </div>
                </div>
            </div>
        </div>
        <div
                class="scrollTop"
                v-on:click="scrollTop"
                :class="isScrolled ? 'active' : ''"
        ></div>
    </div>
</template>
<script>
    import {router} from "../main.js";
    import axios from "axios";

    export default {
        name: "HeaderContainer",
        data: function () {
            return {
                isActiveTeam: false,
                currentPath: this.$route.path,
                isOpen: false,
                isScrolled: false,
                startAnimation: false,
                closeAnimation: false,
                iconActive: false,
                iconLogo: false,
                activeSubMenu: false,
                hasColorFifa: false,
                hasColorAssettoCorsa: false,
                hasColorDragonBall: false,
                hasColorDigimon: false,
            };
        },
        mounted: function () {
            this.twitch()
        },
        methods: {
            greet: function (value) {
                if (value === this.currentPath) {
                    this.scrollTop()
                } else {
                    router.push(value);
                }
            },
            twitch: async function () {
                const response = await axios.get("https://api.twitch.tv/helix/search/channels?query=log_in_gaming", {
                    headers: {
                        'client-id': 'n43a8qbk9j2sdbqi63svnx9al2zc6s',
                        'Authorization': 'Bearer 2gbdx6oar67tqtcmt49t3wpcgycthx'
                    }
                });
                console.log(response)
            },
            scrollTop: function () {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
            },
            openModal: function () {
                let v = this;
                if (this.isOpen) {
                    this.iconActive = false;
                    this.closeAnimation = true;
                    setTimeout(function () {
                        v.isOpen = false;
                        v.closeAnimation = false;
                        v.iconLogo = false;
                    }, 1000);
                } else {
                    this.iconLogo = true;
                    this.iconActive = true;
                    this.startAnimation = true;
                    setTimeout(function () {
                        v.isOpen = true;
                        v.startAnimation = false;
                    }, 700);
                }
            },
            handleScroll: function () {
                this.isScrolled = window.scrollY > 122;
            },
        },
        created: function () {
            window.addEventListener("scroll", this.handleScroll);
        },
        destroyed: function () {
            window.removeEventListener("scroll", this.handleScroll);
        },
    };
</script>
<style lang="scss" scoped>
    .led {
        width: 100px;
        height: 100px;

        img {
            width: 120px;
            height: 100px;
        }
    }

    .colorlessAssettoCorsa {
        width: 40%;
        height: 40%;
        background: url("../assets/assettoCorsaTeamColorless.jpg");
        background-size: cover;
        margin-bottom: 5%;
    }

    .coloredAssettoCorsa {
        width: 40%;
        height: 40%;
        background: url("../assets/assettoCorsaTeamColor.jpg");
        margin-bottom: 5%;
        background-size: cover;
    }

    .colorlessDragonBall {
        width: 40%;
        height: 40%;
        background: url("../assets/dragonBallTeamColorless.jpg");
        margin-bottom: 5%;
        background-size: cover;
    }

    .coloredDragonBall {
        width: 40%;
        height: 40%;
        background: url("../assets/dragonBallTeamColor.jpg");
        margin-bottom: 5%;
        background-size: cover;
    }

    .colorlessDigimon {
        width: 40%;
        height: 40%;
        background: magenta;
    }

    .coloredDigimon {
        width: 40%;
        height: 40%;
        background: maroon;
    }

    .colorlessFifa {
        width: 40%;
        height: 40%;
        background-size: cover;
        background-image: url("../assets/fifaTeamColorless.jpg");
    }

    .coloredFifa {
        width: 40%;
        height: 40%;
        background-size: cover;
        background-image: url("../assets/fifaTeamColor.jpg");
    }

    .display-none {
        display: none;
    }

    .subHeaderTeam {
        margin-top: 10px;
        margin-left: 50px;

        :nth-child(1) {
            margin-top: 0 !important;
        }
    }
    .bottoneTestoMainHeader {
        background: transparent;
        border: 1px solid white;
        height: 50px;
        width: auto;
        padding: 0 10px;
        font-size: 20px;
        outline: none;

        &:hover {
            text-decoration: underline;
        }
    }
    .box {
        position: absolute;
        width: 400px;
        display: flex;
        justify-content: center;
        flex-flow: wrap;
        align-content: center;
        height: 400px;
        background: grey;
    }

    .display-block {
        display: block;
    }

    .HeaderContainer {
        width: 100%;
        height: 80px;
        background-color: rgba(60, 60, 60, 0.9);
        position: fixed;
        z-index: 999;
        max-width: 100vw;
    }

    .hamburgerMenù {
        display: none;
    }

    .IconHamburgerMenù {
        width: 60px;
        height: 40px;
        background-size: contain;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;

        &.activeIcon {
            top: 25px;
            height: 40px;
        }
    }

    .MainHeader {
        font-size: 18px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        height: 100%;
        color: white;
        padding: 0 30px;
        transition: width 4s ease-out 2s;

        h2 {
            font-size: 18px;
        }

        span {
            position: absolute;
            left: 30px;
        }

    }

    .listContainer.active {
        width: 60%;
        height: 100%;
        margin-left: 20%;
        display: flex;
        align-content: center;
        flex-direction: column;
        margin-top: 25px;
        color: white;
    }

    .listContainer {
        display: none;
    }

    .MainHeader .navHeader {
        display: flex;
        width: calc(100% - 120px);
        justify-content: center;
        line-height: 50px;

        div {
            margin-right: 3.5%;
            cursor: pointer;
            align-self: center
        }

        button {
            align-self: center
        }

        .bottoneTestoMain {
            width: auto;
            padding: 0 10px;
            font-size: inherit;
            white-space: nowrap;
        }
    }

    .MainHeader.scrolled {
        background-color: rgba(60, 60, 60, 0.9);
    }

    .MainHeader .active {
        text-decoration: underline;
    }

    .IconHome {
        background-image: url("../assets/login_gaming_icon.png");
        width: 102px;
        height: 60px;
        background-size: contain;
        top: 50%;
        transform: translatey(-50%);
        cursor: pointer;
    }

    .iconHome :hover {
        background-image: url("../assets/login_gaming_icon.png"); //da illuminare
    }

    .listContainer div {
        margin-top: 30px;
        cursor: pointer;
    }

    .listContainer :nth-child(1) {
        margin-top: 100px;
    }

    .listContainer .active {
        pointer-events: none;
        text-decoration: underline;
        cursor: not-allowed;
    }

    .iconLogo {
        display: flex;
        justify-content: flex-start;
        align-items: top;
        margin-right: 5%;
        height: 80%;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 0;
    }

    .iconLogo.activeIcon {
        display: none;
    }

    #burger {
        cursor: pointer;
        overflow: hidden;
        position: relative;

        %burgersection {
            display: block;
            position: absolute;
            left: 50%;
            transform: translate(-50%, -50%) rotate(0deg);
            height: 10%;
            width: 70%;
            transform-origin: 50% 50%;
            transition: top 0.4s ease 0.4s, transform 0.4s ease 0.4s;

            &:before,
            &:after {
                content: "";
                display: block;
                height: 40%;
                position: absolute;
                top: 50%;
                transform: translate(0%, -45%);
            }

            &:before {
                left: 0;
                width: 100%;
                border-radius: 10px 0px 0px 10px;
            }
        }

        .bun {
            @extend %burgersection;

            &.top {
                top: 25%;
                box-shadow: #f00 0px 0px 10px 1px;
                background: #f00;
            }

            &.bottom {
                top: 75%;
                box-shadow: blue 0px 0px 10px 1px;
                background: blue;
            }
        }

        .filling {
            @extend %burgersection;
            top: 50%;
            transform: translate(-50%, -50%) rotate(180deg);
            animation: green-ls-out 0.8s ease forwards;
            box-shadow: white 0px 0px 10px 1px;
            background: white;
        }

        &.activeIcon {
            .bun {
                border-radius: 3px;
                top: 50%;
                transition: top 0.4s ease, transform 0.4s ease;

                &.top {
                    transform: translate(-50%, -50%) rotate(-225deg);
                }

                &.bottom {
                    transform: translate(-50%, -50%) rotate(405deg);
                }
            }

            .filling {
                transform: translate(-50%, -50%) rotate(-90deg);
                animation: green-ls-in 0.8s ease forwards;
            }
        }
    }

    @keyframes green-ls-in {
        0% {
            transform: translate(-50%, -50%) rotate(180deg);
        }
        50% {
            transform: translate(-50%, -50%) rotate(-90deg);
        }
        100% {
            transform: translate(-50%, -50%) rotate(-90deg) translate(200%, 0%);
        }
    }

    @keyframes green-ls-out {
        0% {
            transform: translate(-50%, -200%) rotate(-90deg);
        }
        50% {
            transform: translate(-50%, -50%) rotate(-90deg);
        }

        100% {
            transform: translate(-50%, -50%) rotate(180deg);
        }
    }

    @keyframes appear {
        0% {
            width: 100%;
            height: 50px;
        }
        50% {
            width: 80%;
            height: 50px;
        }
        75% {
            width: 80%;
            height: 100%;
        }

        100% {
            width: 80%;
            height: 100%;
        }
    }

    .HeaderContainer.active {
        background-color: rgba(27, 25, 25, 1);
        position: fixed;
        top: 0;
        width: 80%;
        z-index: 100;
        height: 100vh;
        opacity: 0.8;
    }

    @media only screen and (max-width: 790px) {
        .scrollTop {
            height: 40px;
            width: 40px;
            background-image: url(https://cdn3.iconfinder.com/data/icons/arrows-85/24/Arrow-1-512.png);
            background-size: contain;
            position: fixed;
            bottom: 100px;
            right: 50px;
            z-index: 99999;
            cursor: pointer;
            display: none;

            &.active {
                display: block;
            }
        }
        .HeaderContainer {
            overflow: hidden;
        }
        .logo {
            background-image: url("../assets/login_gaming_icon.png");
            width: 70px;
            height: 40px;
            background-size: contain;
            cursor: not-allowed;
        }
        .HeaderContainer {
            background-color: rgba(27, 25, 25, 0.8);
            height: 50px;
        }
        .hamburgerMenù {
            display: flex;
            justify-content: flex-start;
            align-items: top;
            margin-left: 5%;
            height: 100%;
            position: absolute;
            top: 0;
        }
        .HeaderContainer.activeAnimation {
            animation: appear 1s;
        }
        .HeaderContainer.closeAnimation {
            animation: appear 1s reverse;

            .IconHamburgerMenù {
                top: 25px;
                height: 40px;
            }
        }

        .MainHeader {
            display: none;
        }
    }

    @media only screen and (max-width: 1200px) {
        .MainHeader {
            font-size: 15px;
        }
    }

    @media only screen and (max-width: 960px) {
        .MainHeader {
            font-size: 11px;
        }
    }
</style>