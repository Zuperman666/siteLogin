<template>
  <div>
    <div class="HeaderContainer" :class="isOpen ? 'active': '' ">
      <span class="CloseButton" v-on:click="closeModal">CHIUDI</span>
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
        <span
          class="IconHamburgerMenù"
          :class="isOpen ? 'active': '' "
          v-on:click="openModal()"
        >HOME</span>
      </div>
      <div class="MainHeader">
        <span class="IconHome" v-on:click="greet('/')">HOME</span>
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
    </div>
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
    };
  },
  methods: {
    greet: function (value) {
      router.push(value);
    },
    openModal: function () {
      this.isOpen = true;
    },
    closeModal: function () {
      this.isOpen = false;
    },
  },
};
</script>
<style lang="scss" scoped>
.HeaderContainer {
  width: 100%;
  height: 50px;
  background-color: transparent;
}
.hamburgerMenù {
  display: none;
}
.MainHeader {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  color: white;
}

.MainHeader span {
  position: absolute;
  left: 20px;
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
}

.MainHeader .active {
  color: blue;
  pointer-events: none;
  cursor:not-allowed;
}

.IconHamburgerMenù.active {
  display: none;
}
.listContainer div {
  margin-top: 30px;
}
.listContainer .active {
  color: blue;
  pointer-events: none;
  cursor: not-allowed;
}

.HeaderContainer.active {
  background-color: black;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  height: 100vh;
  opacity: 0.8;
  .CloseButton {
    color: white;
    position: absolute;
    right: 20px;
    top: 16px;
    display: block;
  }
}
.CloseButton {
  display: none;
}
@media only screen and (max-width: 600px) {
  .hamburgerMenù {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 5%;
    height: 100%;
  }
  .MainHeader {
    display: none;
  }
}
</style>