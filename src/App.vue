<template>
  <!-- portfolio vue x scss -->

  <MyHeader />
  <MyMain />

  <footer>
    <p>Built by Muhammad ©2023</p>
  </footer>
</template>

<script>
import MyHeader from "./view/MyHeader.vue";
import MyMain from "./view/MyMain.vue";

export default {
  name: "App",
  components: {
    MyHeader,
    MyMain,
  },
  data() {
    return {
      repos: "",
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

  footer {
    height: 80px;
    display: flex;
    justify-content: center;
    justify-items: center;
  }
}
</style>
