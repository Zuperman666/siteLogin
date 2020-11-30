<template>
  <div>
    <div
      class="HeaderContainer"
      :class="[isOpen ? 'active': '' ,startAnimation ? 'activeAnimation':'',closeAnimation ? 'closeAnimation':'']"
    >
      <div class="listContainer" :class="isOpen ? 'active': '' ">
        <div
          class="Hamburgeria"
          :class="currentPath === '/Hamburgeria' ? 'active':''"
          v-on:click="greet('/Hamburgeria')"
        >Hamburgeria</div>
        <div
          class="Fumetteria"
          :class="currentPath === '/Fumetteria' ? 'active':''"
          v-on:click="greet('/Fumetteria')"
        >Fumetteria</div>
        <div
          class="Cocktails"
          :class="currentPath === '/Cocktails' ? 'active':''"
          v-on:click="greet('/Cocktails')"
        >Cocktails</div>
        <div
          class="Contatti"
          :class="currentPath === '/Contattaci' ? 'active':''"
          v-on:click="greet('/Contattaci')"
        >Contattaci</div>
        <div
          class="Eventi"
          :class="currentPath === '/Eventi' ? 'active':''"
          v-on:click="greet('/Eventi')"
        >Eventi</div>
      </div>
      <div class="hamburgerMenù">
        <div
          class="IconHamburgerMenù"
          :class="[iconActive ? 'activeIcon':'' ]"
          v-on:click="openModal()"
          id="burger"
        >
          <div class="bun top"></div>
          <div class="filling"></div>
          <div class="bun bottom"></div>
        </div>
      </div>
      <div class="iconLogo" :class="[iconLogo ? 'activeIcon':'' ]">
        <div class="logo"></div>
      </div>
      <div class="MainHeader" :class="isScrolled ? 'scrolled': '' ">
        <span class="IconHome" v-on:click="greet('/')"></span>
        <div
          class="Hamburgeria"
          :class="currentPath === '/Hamburgeria' ? 'active':''"
          v-on:click="greet('/Hamburgeria')"
        >Hamburgeria</div>
        <div class="Team"
             :class="currentPath === '/Team' ? 'active':''"
             v-on:mouseover="activeSubMenu = true"
        >Team
          <div :class="!activeSubMenu ? 'display-none': 'display-block' " v-on:mouseleave="activeSubMenu = false">
            <div class="relative">
              <div class="box">
                <div v-on:click="greet('/Team/AssettoCorsa')" :class="hasColorAssettoCorsa ? 'colorlessAssettoCorsa' : 'coloredAssettoCorsa'" v-on:mouseover="hasColorAssettoCorsa = true" v-on:mouseleave="hasColorAssettoCorsa = false"></div>
                <div v-on:click="greet('/Team/DragonBall')" :class="hasColorDragonBall ? 'colorlessDragonBall' : 'coloredDragonBall'" v-on:mouseover="hasColorDragonBall = true" v-on:mouseleave="hasColorDragonBall = false"></div>
                <div v-on:click="greet('/Team/Digimon')" :class="hasColorDigimon ? 'colorlessDigimon' : 'coloredDigimon'" v-on:mouseover="hasColorDigimon = true" v-on:mouseleave="hasColorDigimon = false"></div>
                <div v-on:click="greet('/Team/Fifa')" :class="hasColorFifa ? 'colorlessFifa' : 'coloredFifa'" v-on:mouseover="hasColorFifa = true" v-on:mouseleave="hasColorFifa = false"></div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="Fumetteria"
          :class="currentPath === '/Fumetteria' ? 'active':''"
          v-on:click="greet('/Fumetteria')"
        >Fumetteria</div>
        <div
          class="Cocktails"
          :class="currentPath === '/Cocktails' ? 'active':''"
          v-on:click="greet('/Cocktails')"
        >Cocktails</div>
        <div
          class="SalaLan"
          :class="currentPath === '/SalaLan' ? 'active':''"
          v-on:click="greet('/SalaLan')"
        >SalaLan</div>
        <div
          class="Contatti"
          :class="currentPath === '/Contattaci' ? 'active':''"
          v-on:click="greet('/Contattaci')"
        >Contattaci</div>
        <div
          class="Eventi"
          :class="currentPath === '/Eventi' ? 'active':''"
          v-on:click="greet('/Eventi')"
        >Eventi</div>
      </div>
    </div>
    <div class="scrollTop" v-on:click="scrollTop" :class="isScrolled ? 'active':''"></div>
  </div>
</template>
<script>
import { router } from "../main.js";
export default {
  name: "HeaderContainer",
  data: function () {
    return {
      currentPath: this.$route.path,
      isOpen: false,
      isScrolled: false,
      startAnimation: false,
      closeAnimation: false,
      iconActive: false,
      iconLogo: false,
      activeSubMenu:false,
      hasColorFifa:false,
      hasColorAssettoCorsa:false,
      hasColorDragonBall:false,
      hasColorDigimon:false,
    };
  },

  methods: {
    greet: function (value) {
      router.push(value);
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
  .colorlessAssettoCorsa{
    width: 40%;
    height: 40%;
    background: white;
    margin-bottom: 5%;
  }

  .coloredAssettoCorsa{
    width: 40%;
    height: 40%;
    background: grey;
    margin-bottom: 5%;
  }

  .colorlessDragonBall{
    width: 40%;
    height: 40%;
    background: greenyellow;
    margin-bottom: 5%;
  }

  .coloredDragonBall{
    width: 40%;
    height: 40%;
    background: green;
    margin-bottom: 5%;
  }

  .colorlessDigimon{
    width: 40%;
    height: 40%;
    background: magenta;
  }

  .coloredDigimon{
    width: 40%;
    height: 40%;
    background: maroon;
  }

  .colorlessFifa{
    width: 40%;
    height: 40%;
    background: blue;
  }

  .coloredFifa{
    width: 40%;
    height: 40%;
    background: blueviolet;
  }

  .display-none {
    display: none;
  }
  .box {
    position: absolute;
    width: 400px;
    display: flex;
    justify-content: center;
    flex-flow: wrap;
    align-content: center;
    height: 400px;
    background: red;
  }
  .display-block {
    display: block;
  }
  .HeaderContainer {
  width: 100%;
  height: 127px;
  background-color: transparent;
  position: fixed;
  z-index: 999;
  max-width: 100vw;
}
.hamburgerMenù {
  display: none;
}
.IconHamburgerMenù {
  width: 90px;
  height: 60px;
  background-size: contain;
  top: 25px;
  cursor: pointer;
}
.MainHeader {
  font-size: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  color: white;
}

.MainHeader span {
  position: absolute;
  left: 75px;
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
.MainHeader div {
  margin-right: 5%;
  cursor: pointer;
}
.MainHeader.scrolled {
  background-color: rgba(60, 60, 60, 0.9);
}
.MainHeader .active {
  text-decoration: underline;
  pointer-events: none;
  cursor: not-allowed;
}
.IconHome {
  background-image: url("../assets/login_gaming_icon.png");
  width: 150px;
  height: 90px;
  background-size: contain;
  top: 25px;
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
  height: 100%;
  position: absolute;
  top: 20px;
  right: 20px;
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
    height: 100px;
  }
  50% {
    width: 80%;
    height: 100px;
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
    width: 120px;
    height: 90px;
    background-size: contain;
    cursor: not-allowed;
  }
  .HeaderContainer {
    height: 100px;
    background-color: rgba(27, 25, 25, 0.8);
  }
  .hamburgerMenù {
    display: flex;
    justify-content: flex-start;
    align-items: top;
    margin-left: 5%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 20px;
  }
  .HeaderContainer.activeAnimation {
    animation: appear 1s;
  }
  .HeaderContainer.closeAnimation {
    animation: appear 1s reverse;
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