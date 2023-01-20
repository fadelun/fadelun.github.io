<template>
  <!-- portfolio vue x scss -->

  <MyHeader />

  <main>
    <MyAbout :education="education" :languages="languages" />
    <MyProject :showcase="showcase" />
    <MyContact />
  </main>
  <footer>
    <p>Built by Muhammad ©2023</p>
  </footer>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import MyAbout from "./components/MyAbout.vue";
import MyProject from "./components/MyProject.vue";
import MyContact from "./components/MyContact.vue";

export default {
  name: "App",
  components: {
    MyHeader,
    MyAbout,
    MyProject,
    MyContact,
  },
  data() {
    return {
      repos: "",
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
      showcase: [
        {
          name: "Time tracking dashboard",
          image: require("@/assets/resource/screenshot-web.png"),
          source: "https://fadelun.github.io/time-tracking-dashboard",
          tag: ["React js", "Tailwind"],
        },
        {
          name: "Rest countries API",
          image: require("@/assets/resource/screenshot-web 2.jpg"),
          source: "https://rest-countries-api-fadelun.vercel.app/",
          tag: ["React js", "Tailwind", "Rest API"],
        },
        {
          name: " Pricing component with toggle",
          image: require("@/assets/resource/screenshot-web 3.png"),
          source: "https://fadelun.github.io/Pricing-component-with-toggle ",
          tag: ["HTML5 ", "Tailwind"],
        },
        {
          name: " bikees ",
          image: require("@/assets/resource/screenshot-web 6.png"),
          source: "https://bikees-psi.vercel.app/",
          tag: ["React js ", "Tailwind"],
        },
      ],
    };
  },
};
</script>

<style lang="scss">
// font family : Oswald and Open sans
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@200;400;500;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&display=swap");
@import "@/assets/variable.scss";

html {
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: $secondary;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #474950;
    border-radius: 10px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #34363b;
  }
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;

  & > a svg {
    width: 100%;
    filter: invert(94%) sepia(82%) saturate(0%) hue-rotate(207deg)
      brightness(103%) contrast(103%);
    // cara memberi warna pada svg dengan filter
    //https://codepen.io/sosuke/pen/Pjoqqp untuk meng-convert warna menjadi filter

    &:hover {
      filter: invert(43%) sepia(95%) saturate(2682%) hue-rotate(199deg)
        brightness(97%) contrast(91%);
    }
  }
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
  color: $white;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  main {
    width: 86vw;
    margin: 180px auto 0;
  }

  footer {
    height: 80px;
    display: flex;
    justify-content: center;
    justify-items: center;
  }
}
</style>
