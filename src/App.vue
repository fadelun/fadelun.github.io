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
    };
  },
  created() {
    fetch("https://api.github.com/users/fadelun/repos")
      .then((response) => response.json())
      .then((data) => {
        this.repos = data;
      });

    console.log(this.repos);
  },
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
