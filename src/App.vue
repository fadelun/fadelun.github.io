<template>
  <!-- portfolio vue x scss -->

  <MyHeader :widthWindow="width" />
  <main>
    <MyAbout :education="education" :languages="languages" />
    <MyProject :showcase="showcase" />
  </main>
  <footer></footer>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import MyAbout from "./components/MyAbout.vue";
import MyProject from "./components/MyProject.vue";

export default {
  name: "App",
  components: {
    MyHeader,
    MyAbout,
    MyProject,
  },
  data() {
    return {
      width: window.innerWidth,
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

  // created() {
  //   fetch("https://api.github.com/users/fadelun/repos")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       this.repos = data;
  //     });

  // console.log(this.repos);
  // },
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
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
