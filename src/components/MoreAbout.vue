<template lang="">
  <!-- <h3 class="education">Education</h3>
    <ul v-show="education" class="educations">
      <li v-for="course in education" :key="course">
        <h4 class="course">{{ course.name }}</h4>
        <p class="period">{{ course.period }}</p>
        <p class="info">{{ course.info }}</p>
      </li>
    </ul>

    <h3 class="languages">Languages</h3>
    <ul v-show="languages" class="languages">
      <li v-for="language in languages" :key="language">
        <h4 class="lang">{{ language.lang }}</h4>
        <p class="info">{{ language.info }}</p>
      </li>
    </ul> -->
</template>
<script>
export default {
  name: "MoreAbout",
  props: ["education", "languages"],
};
</script>
<style lang="scss">
ul.educations,
ul.languages {
  margin: 3rem 0 82px;
  li {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 50px;
    h4 {
      font-size: 1.4rem;
    }
  }
}
</style>
