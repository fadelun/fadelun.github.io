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
          image: require("@/assets/resource/time-tracking-dashboard.png"),
          source: "https://fadelun.github.io/time-tracking-dashboard",
          tag: ["React js", "Tailwind"],
        },
        {
          name: "Rest countries API",
          image: require("@/assets/resource/rest-countries-api.jpg"),
          source: "https://rest-countries-api-fadelun.vercel.app/",
          tag: ["React js", "Tailwind", "Rest API"],
        },
        {
          name: "Pricing component with toggle",
          image: require("@/assets/resource/pricing-component-with-toggle.png"),
          source: "https://fadelun.github.io/Pricing-component-with-toggle ",
          tag: ["HTML5 ", "Tailwind"],
        },
        {
          name: "Tekken 7",
          image: require("@/assets/resource/tekken-7.png"),
          source: "https://fadelun.github.io/tekken-7/",
          tag: ["Bootstrap", "javascript"],
        },
        {
          name: "bikees",
          image: require("@/assets/resource/bikees.png"),
          source: "https://bikees-psi.vercel.app/",
          tag: ["React js ", "Tailwind", "Carousel"],
        },
        {
          name: "todoApp",
          image: require("@/assets/resource/apptodo.png"),
          source: "https://fadelun.github.io/apptodo/",
          tag: ["Tailwind", "javascript"],
        },
        {
          name: "EA-Need for speed",
          image: require("@/assets/resource/ea-need-for-speed.png"),
          source: "https://ea-nfs-clone.vercel.app/",
          tag: ["Vue js ", "Tailwind", "Landing page"],
        },

        {
          name: "Math for kids",
          image: require("@/assets/resource/math-for-kids.png"),
          source: "https://fadelun.github.io/Math/",
          tag: ["HTML5", "CSS3", "Javascript"],
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
