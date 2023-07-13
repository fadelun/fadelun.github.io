<template>
  <main>
    <MyAbout />
    <MyProject :scrollValue="scrollValue" />
    <MyContact :scrollValue="scrollValue" />
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
  props: ["scrollValue"],
  created() {
    document.title = "Muhammad Fadll| Personal Portfolio";
  },
};
</script>
<style lang="scss">
main {
  width: 86vw;
  margin: 180px auto 0;
  @media (min-width: 1024px) {
    width: 1100px;
  }
}
</style>
