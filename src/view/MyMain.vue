<template>
  <main>
    <MyAbout />
    <MyProject :showcase="showcase" />
    <MyContact />
  </main>
</template>
<script>
import MyAbout from "../components/MyAbout.vue";
import MyProject from "../components/MyProject.vue";
import MyContact from "../components/MyContact.vue";
export default {
  name: "MyMain",

  components: {
    MyAbout,
    MyProject,
    MyContact,
  },
  data() {
    return {
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
          tag: ["React js ", "Tailwind", "Carousel"],
        },
        {
          name: " EA-Need for speed ",
          image: require("@/assets/resource/screenshot-web 6.png"),
          source: "https://ea-nfs-clone.vercel.app/",
          tag: ["Vue js ", "Tailwind", "Landing page"],
        },
        {
          name: " todoApp ",
          image: require("@/assets/resource/screenshot-web 6.png"),
          source: "https://https://fadelun.github.io/appTodo/",
          tag: ["Vue js ", "Tailwind"],
        },
      ],
    };
  },
};
</script>
<style lang="scss">
main {
  width: 86vw;
  margin: 180px auto 0;
}
</style>
