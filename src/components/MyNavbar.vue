<template>
  <div class="navbar">
    <div class="main-logo">
      <a href="#">
        <img
          class="img-logo"
          src="../assets/resource/LOGO.svg"
          alt="FADLL - logo"
        />
      </a>
    </div>
    <div class="button-bars" @click="navActive = !navActive">
      <!-- why v-show it doesnt work? -->
      <img
        v-show="!navActive"
        :src="require('../assets/resource/menu.png')"
        alt="menu-button"
      />
      <img
        v-show="navActive"
        :src="require('../assets/resource/x.png')"
        alt="close-button"
      />
    </div>
    <nav class="navbar-header" :class="{ 'nav-active': navActive }">
      <ul>
        <li>
          <a @click="navActive = false" href="#"
            >{{ store.lang != "AR" ? "Home" : "الرئيسية" }}
          </a>
        </li>
        <li>
          <a @click="navActive = false" href="#about">{{
            store.lang != "AR" ? "About" : "عني"
          }}</a>
        </li>
        <li>
          <a @click="navActive = false" href="#my-project">{{
            store.lang != "AR" ? "Project" : "المشاريع"
          }}</a>
        </li>
        <li>
          <a @click="navActive = false" href="#contact">{{
            store.lang != "AR" ? "Contact" : "الاتصال"
          }}</a>
        </li>
      </ul>
      <!-- why v-show it doesnt work? -->
      <div v-show="navActive" class="navbar-accounts">
        <a href="#"
          ><svg
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27.1719 62.0938C27.1719 62.4062 26.8125 62.6562 26.3594 62.6562C25.8438 62.7031 25.4844 62.4531 25.4844 62.0938C25.4844 61.7812 25.8438 61.5312 26.2969 61.5312C26.7656 61.4844 27.1719 61.7344 27.1719 62.0938ZM22.3125 61.3906C22.2031 61.7031 22.5156 62.0625 22.9844 62.1562C23.3906 62.3125 23.8594 62.1562 23.9531 61.8438C24.0469 61.5312 23.75 61.1719 23.2812 61.0312C22.875 60.9219 22.4219 61.0781 22.3125 61.3906ZM29.2188 61.125C28.7656 61.2344 28.4531 61.5312 28.5 61.8906C28.5469 62.2031 28.9531 62.4062 29.4219 62.2969C29.875 62.1875 30.1875 61.8906 30.1406 61.5781C30.0937 61.2812 29.6719 61.0781 29.2188 61.125ZM39.5 1.25C17.8281 1.25 1.25 17.7031 1.25 39.375C1.25 56.7031 12.1562 71.5312 27.7344 76.75C29.7344 77.1094 30.4375 75.875 30.4375 74.8594C30.4375 73.8906 30.3906 68.5469 30.3906 65.2656C30.3906 65.2656 19.4531 67.6094 17.1562 60.6094C17.1562 60.6094 15.375 56.0625 12.8125 54.8906C12.8125 54.8906 9.23438 52.4375 13.0625 52.4844C13.0625 52.4844 16.9531 52.7969 19.0938 56.5156C22.5156 62.5469 28.25 60.8125 30.4844 59.7812C30.8438 57.2812 31.8594 55.5469 32.9844 54.5156C24.25 53.5469 15.4375 52.2812 15.4375 37.25C15.4375 32.9531 16.625 30.7969 19.125 28.0469C18.7188 27.0312 17.3906 22.8438 19.5312 17.4375C22.7969 16.4219 30.3125 21.6562 30.3125 21.6562C33.4375 20.7813 36.7969 20.3281 40.125 20.3281C43.4531 20.3281 46.8125 20.7813 49.9375 21.6562C49.9375 21.6562 57.4531 16.4062 60.7188 17.4375C62.8594 22.8594 61.5312 27.0312 61.125 28.0469C63.625 30.8125 65.1562 32.9688 65.1562 37.25C65.1562 52.3281 55.9531 53.5312 47.2188 54.5156C48.6562 55.75 49.875 58.0938 49.875 61.7656C49.875 67.0312 49.8281 73.5469 49.8281 74.8281C49.8281 75.8438 50.5469 77.0781 52.5312 76.7188C68.1562 71.5312 78.75 56.7031 78.75 39.375C78.75 17.7031 61.1719 1.25 39.5 1.25ZM16.4375 55.1406C16.2344 55.2969 16.2812 55.6562 16.5469 55.9531C16.7969 56.2031 17.1562 56.3125 17.3594 56.1094C17.5625 55.9531 17.5156 55.5938 17.25 55.2969C17 55.0469 16.6406 54.9375 16.4375 55.1406ZM14.75 53.875C14.6406 54.0781 14.7969 54.3281 15.1094 54.4844C15.3594 54.6406 15.6719 54.5938 15.7812 54.375C15.8906 54.1719 15.7344 53.9219 15.4219 53.7656C15.1094 53.6719 14.8594 53.7188 14.75 53.875ZM19.8125 59.4375C19.5625 59.6406 19.6562 60.1094 20.0156 60.4062C20.375 60.7656 20.8281 60.8125 21.0312 60.5625C21.2344 60.3594 21.1406 59.8906 20.8281 59.5938C20.4844 59.2344 20.0156 59.1875 19.8125 59.4375ZM18.0312 57.1406C17.7812 57.2969 17.7812 57.7031 18.0312 58.0625C18.2812 58.4219 18.7031 58.5781 18.9062 58.4219C19.1562 58.2188 19.1562 57.8125 18.9062 57.4531C18.6875 57.0938 18.2812 56.9375 18.0312 57.1406Z"
              fill="black"
            />
          </svg>
        </a>

        <a href="#">
          <svg
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M40.0156 22.0312C30.0781 22.0312 22.0625 30.0469 22.0625 39.9844C22.0625 49.9219 30.0781 57.9375 40.0156 57.9375C49.9531 57.9375 57.9688 49.9219 57.9688 39.9844C57.9688 30.0469 49.9531 22.0312 40.0156 22.0312ZM40.0156 51.6562C33.5938 51.6562 28.3437 46.4219 28.3437 39.9844C28.3437 33.5469 33.5781 28.3125 40.0156 28.3125C46.4531 28.3125 51.6875 33.5469 51.6875 39.9844C51.6875 46.4219 46.4375 51.6562 40.0156 51.6562ZM62.8906 21.2969C62.8906 23.625 61.0156 25.4844 58.7031 25.4844C56.375 25.4844 54.5156 23.6094 54.5156 21.2969C54.5156 18.9844 56.3906 17.1094 58.7031 17.1094C61.0156 17.1094 62.8906 18.9844 62.8906 21.2969ZM74.7812 25.5469C74.5156 19.9375 73.2344 14.9688 69.125 10.875C65.0312 6.78125 60.0625 5.5 54.4531 5.21875C48.6719 4.89062 31.3438 4.89062 25.5625 5.21875C19.9688 5.48438 15 6.76562 10.8906 10.8594C6.78125 14.9531 5.51562 19.9219 5.23437 25.5312C4.90625 31.3125 4.90625 48.6406 5.23437 54.4219C5.5 60.0312 6.78125 65 10.8906 69.0938C15 73.1875 19.9531 74.4688 25.5625 74.75C31.3438 75.0781 48.6719 75.0781 54.4531 74.75C60.0625 74.4844 65.0312 73.2031 69.125 69.0938C73.2188 65 74.5 60.0312 74.7812 54.4219C75.1094 48.6406 75.1094 31.3281 74.7812 25.5469ZM67.3125 60.625C66.0938 63.6875 63.7344 66.0469 60.6563 67.2812C56.0469 69.1094 45.1094 68.6875 40.0156 68.6875C34.9219 68.6875 23.9688 69.0938 19.375 67.2812C16.3125 66.0625 13.9531 63.7031 12.7188 60.625C10.8906 56.0156 11.3125 45.0781 11.3125 39.9844C11.3125 34.8906 10.9063 23.9375 12.7188 19.3438C13.9375 16.2812 16.2969 13.9219 19.375 12.6875C23.9844 10.8594 34.9219 11.2812 40.0156 11.2812C45.1094 11.2812 56.0625 10.875 60.6563 12.6875C63.7188 13.9062 66.0781 16.2656 67.3125 19.3438C69.1406 23.9531 68.7188 34.8906 68.7188 39.9844C68.7188 45.0781 69.1406 56.0312 67.3125 60.625Z"
              fill="black"
            />
          </svg>
        </a>

        <a href="#">
          <svg
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1_60)">
              <path
                d="M78.482 24.9536L41.9195 0.578616C40.6716 -0.189352 39.3397 -0.196384 38.0803 0.578616L1.51781 24.9536C0.580312 25.5785 0 26.6947 0 27.8106V52.1855C0 53.3016 0.580313 54.4177 1.51797 55.0427L38.0805 79.4211C39.3284 80.1891 40.6603 80.1961 41.9197 79.4211L78.4822 55.0427C79.4197 54.4178 80.0002 53.3016 80.0002 52.1855V27.8106C80 26.6947 79.4197 25.5785 78.482 24.9536ZM43.4375 9.86409L70.3572 27.8106L58.3483 35.8464L43.4375 25.891V9.86409ZM36.5625 9.86409V25.891L21.6517 35.8464L9.64281 27.8106L36.5625 9.86409ZM6.875 34.2392L15.4911 39.9981L6.875 45.7571V34.2392ZM36.5625 70.1322L9.64281 52.1856L21.6517 44.1499L36.5625 54.1053V70.1322ZM40 48.1231L27.857 39.9981L40 31.8731L52.143 39.9981L40 48.1231ZM43.4375 70.1322V54.1053L58.3483 44.1499L70.3572 52.1856L43.4375 70.1322ZM73.125 45.7571L64.5089 39.9981L73.125 34.2392V45.7571Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_60">
                <rect width="80" height="80" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </a>
      </div>
    </nav>
    <div class="select">
      <select id="languages" v-model="store.lang">
        <option value="ID">ID</option>
        <option value="EN">EN</option>
        <option value="AR">AR</option>
      </select>
    </div>
  </div>
</template>
<script>
import anime from "animejs";
import { useUserStore } from "@/stores";

export default {
  name: "MyNavbar",
  mounted() {
    anime({
      targets: ".main-logo",
      translateY: ["1.4rem", 0],
      duration: 2000,
      opacity: [0, 1],
      easing: "easeOutExpo",
      delay: 3000,
    });
    anime({
      targets: ".navbar-header li",
      translateY: ["1.4rem", 0],
      duration: 2000,
      opacity: [0, 1],
      easing: "easeOutExpo",
      delay: anime.stagger(100, { start: 3000 }),
    });
  },
  data() {
    return {
      store: useUserStore(),
      navActive: false,
      selectLang: "",
    };
  },
  watch: {
    "store.lang"(newValue) {
      // jika store.lang berupa "AR" maka ubah font tersebut ke "Droid Arabic Naskh"
      const app = document.getElementById("app");
      const root = document.querySelector("html");
      if (newValue == "AR") {
        app.classList.add("AR-lang");
        root.setAttribute("dir", "rtl");
      } else {
        app.classList.remove("AR-lang");
        root.removeAttribute("dir");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/variable.scss";
header {
  .navbar {
    position: fixed;
    top: 0;
    width: 100vw;
    height: 85px;
    color: $white;
    background-image: linear-gradient($secondary 80%, #ffffff00);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5%;
    z-index: 999;

    .main-logo {
      flex-grow: 2;
      .img-logo {
        width: 96px;
      }
    }
    .button-bars {
      order: 1;
      display: block;
      // position: fixed;
      right: 1rem;
      width: 1.25rem;
      cursor: pointer;
      z-index: 99;

      & > img {
        width: 100%;
      }
    }

    nav.navbar-header {
      flex-basis: 40%;
      display: none;

      &.nav-active {
        display: flex !important;
        position: fixed;
        flex-direction: column;
        text-align: center;
        inset: 0;
        background: $secondary;

        ul {
          flex-direction: column;
          gap: 2rem;
          padding: 4rem 0;
        }

        .navbar-accounts {
          display: flex;
          gap: 1.4rem;
          justify-content: center;

          a {
            width: 2rem;
          }
        }
      }

      ul {
        display: flex;
        justify-content: space-between;
        list-style: none;

        li {
          a {
            text-decoration: none;
            color: $white;
            position: relative;

            &::before {
              content: "";
              position: absolute;
              background-color: $primary;
              height: 2px;
              left: 0;
              bottom: 0;
              right: 0;
              transform: scaleX(0);
              transform-origin: right bottom;
              transition: transform 0.3s ease;
            }

            &:hover {
              color: $primary;
              opacity: 1;

              &::before {
                transform: scaleX(1);
                transform-origin: left bottom;
              }
            }
          }
        }
      }
    }
    .select select {
      // remove arrow select
      -webkit-appearance: none;
      -moz-appearance: none;
      //

      padding: 0.4rem 0.8rem;
      font-size: inherit;
      font-family: inherit;
      border: transparent;
      color: $white;
      background-color: $secondary;

      &:focus {
        color: $primary;

        option {
          color: $white;
        }
      }

      option {
        background-color: $secondary;
      }
    }
  }

  @media (min-width: 768px) {
    .navbar {
      .main-logo {
        flex-grow: 0;
      }

      .button-bars {
        display: none;
      }
      nav.navbar-header {
        display: block;
      }
    }
  }
}
</style>
