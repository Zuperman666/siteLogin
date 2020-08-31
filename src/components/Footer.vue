<template>
  <div>
    <div class="separatorBlack"></div>
    <div class="footer">
      <div class="iconSocial">
        <div class="iconImage1"></div>
        <div class="iconImage2"></div>
        <div class="iconImage3"></div>
        <div class="iconImage4"></div>
      </div>
      <div>
        <link
          href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css"
          rel="stylesheet"
          type="text/css"
        />
        <div id="mc_embed_signup">
          <form
            action="https://gmail.us17.list-manage.com/subscribe/post?u=1c7e6a125be69ba51d73ca6ba&amp;id=c0e1859cf2"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            class="validate"
            target="_blank"
            novalidate
          >
            <div id="mc_embed_signup_scroll">
              <label for="mce-EMAIL">Subscribe for HOT news</label>
              <input
                type="email"
                value
                name="EMAIL"
                class="email"
                id="mce-EMAIL"
                placeholder="email address"
                required
              />
              <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
              <div style="position: absolute; left: -5000px;" aria-hidden="true">
                <input
                  type="text"
                  name="b_1c7e6a125be69ba51d73ca6ba_c0e1859cf2"
                  tabindex="-1"
                  value
                />
              </div>
              <div class="clear">
                <input
                  type="submit"
                  value="Subscribe"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  class="button"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="separatorBlack"></div>
    <div class="underFooter">
      <div class="copyright">© 2019 - 2020, Login Gaming srl, All rights reserved</div>
      <div class="linkTermAndCond">
        <a class="link" v-on:click="greet('/Privacy')">Privacy</a>
        <a class="link" v-on:click="greet('/Imprint')">Imprint</a>
        <a class="link" v-on:click="greet('/Terms')">Terms</a>
        <a class="link" v-on:click="greet('/Cookies')">Cookies</a>
      </div>
    </div>
  </div>
</template>
<script>
import { router } from "../main.js";
import LogoAlien from "../assets/alien.png";
import LogoDeter from "../assets/Logo-Deterpul-1colore.png";
export default {
  name: "FooterElement",
  data: () => ({
    i: 0,
    j: 1,
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
    partners: [
      {
        src: LogoAlien,
        url: "https://www.google.it/",
      },
      {
        src: LogoDeter,
        url: "www.google.it",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        url: "www.google.it",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        url: "www.google.it",
      },
    ],
  }),
  methods: {
    greet: function (value) {
      router.push(value);
    },
    clickMethodLogo: function (value) {
      window.open("https://" + value, "blank");
    },
    moveIcon: function () {
      console.log(this.i ,this.j, this.partners[this.i],this.partners[this.j])
      if (this.i === 3) {
         this.i = 0;  
      }else {
        this.i++
      }
      if (this.j === 3) {
        this.j = 0;
      }else {
        this.j++
      }
    },
  },
  mounted: function () {
    window.setInterval(() => {
      this.moveIcon();
    }, 4000);
  },
};
</script>
<style>
.footer {
  height: 200px;
  width: 100%;
  background-color: #dadada;
}
.partner {
  position: absolute;
  left: 100px;
}
.underFooter {
  height: 50px;
  width: 100%;
  background-color: #dadada;
  position: relative;
}
.copyright {
  font-size: 10px;
  position: absolute;
  left: 100px;
  top: 21px;
}
.linkTermAndCond {
  font-size: 12px;
  position: absolute;
  right: 100px;
  top: 20px;
}
.separatorBlack {
  height: 1px;
  background-color: black;
  width: 100%;
}
.link {
  margin-left: 30px;
}
.link:nth-child(1) {
  margin-left: 0;
}
.link:hover {
  cursor: pointer;
  text-decoration: underline;
}
.iconSocial {
  display: flex;
  height: 100px;
  justify-content: center;
  align-items: center;
}
.iconImage1 {
  width: 50px;
  height: 50px;
  background-image: url("https://image.shutterstock.com/image-vector/phone-volume-vector-icon-on-260nw-1135845185.jpg");
  background-size: contain;
  background-repeat: no-repeat;
}
.iconImage2 {
  width: 50px;
  height: 50px;
  margin-left: 50px;
  background-image: url("https://image.shutterstock.com/image-vector/phone-volume-vector-icon-on-260nw-1135845185.jpg");
  background-size: contain;
  background-repeat: no-repeat;
}
.partnetLogo {
  height: 100px;
  width: 100px;
  cursor: pointer;
  margin-top:10px;
  background-size: contain !important;
  background-repeat: no-repeat !important;
}
.partnetLogo:hover {
  opacity: 0.9;
}
.iconImage3 {
  width: 50px;
  height: 50px;
  margin-left: 50px;
  background-image: url("https://image.shutterstock.com/image-vector/phone-volume-vector-icon-on-260nw-1135845185.jpg");
  background-size: contain;
  background-repeat: no-repeat;
}
.iconImage4 {
  width: 50px;
  height: 50px;
  margin-left: 50px;
  background-image: url("https://image.shutterstock.com/image-vector/phone-volume-vector-icon-on-260nw-1135845185.jpg");
  background-size: contain;
  background-repeat: no-repeat;
}
@media only screen and (max-width: 800px) {
  .copyright {
    font-size: 10px;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    top: 10px;
  }
  .linkTermAndCond {
    left: 0;
    right: 0;
    margin: auto;
    position: absolute;
    top: 25px;
  }
}
</style>