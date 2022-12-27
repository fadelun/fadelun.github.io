<template>
  <!-- portfolio vue x scss -->

  <MyHeader :widthWindow="width" />
  <main>
    <MyAbout :education="education" :languages="languages" />
  </main>
  <footer></footer>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import MyAbout from "./components/MyAbout.vue";

export default {
  name: "App",
  components: {
    MyHeader,
    MyAbout,
  },
  data() {
    return {
      width: window.innerWidth,
      education: [
        {
          name: "freecodecamp",
          period: "2021",
          info: "JavaScript Algorithms and Data Structures",
        },
        {
          name: "Skilvul",
          period: "2021",
          info: "Javascript dasar",
        },
        {
          name: "Progate",
          period: "2021",
          info: "dasar-dasar Sass dan git",
        },
        {
          name: "BuildWith Angga",
          period: "2020",
          info: "Full stack web designer",
        },
      ],
      languages: [
        {
          lang: "Indonesia",
          info: "Native languages",
        },
        {
          lang: "Indonesia",
          info: "intermediate",
        },
        {
          lang: "English",
          info: "Basic",
        },
      ],
    };
  },
  methods() {},
};
</script>

<style lang="scss">
// font family : Oswald and Open sans
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@200;400;500;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&display=swap");
@import "@/assets/variable.scss";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

li {
  list-style: none;
}

h1,
h2,
h3,
h4 {
  font-family: "Oswald", sans-serif;
}

#app {
  font-family: "Open Sans", sans-serif;
  background-color: $secondary;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;

  //=========== header site ======================
  header {
    font-family: Oswald, sans-serif;
    height: 100vh;
    padding-top: 40px;

    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 60px;
      color: $white;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 5%;
      // padding: 0 5.5rem; // size dekstop

      .main-logo {
        .img-logo {
          width: 96px;
        }
      }

      nav {
        flex-basis: 40%;

        ul {
          display: flex;
          justify-content: space-between;
          list-style: none;

          li {
            a {
              text-decoration: none;
              color: $white;
            }
          }
        }
      }
    }

    nav.link-accounts {
      position: fixed;
      bottom: 1rem;
      left: 20px;
      background-color: orange;

      li {
        width: 20px;

        svg {
          width: 100%;
        }
      }
    }

    #banner {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      .personal-intro {
        font-size: 80px;
        font-weight: bold;
        display: flex;
        flex-direction: column;
        color: $white;

        .greeting {
          line-height: 60px;
        }

        .main-name {
          line-height: 70px;
        }

        .greeting,
        .status {
          text-transform: uppercase;
          font-size: 0.4em;
        }

        .greeting {
          color: $gray;
        }

        .status {
          text-align: right;
          color: $primary;
          width: 30%;
          align-self: flex-end;
          line-height: 30px;
        }
      }
    }
  }
}
</style>
