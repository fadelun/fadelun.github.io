<template>
  <article id="about">
    <h2>About me</h2>
    <p class="description">
      I am a college student at the Imam Syafi'i Islamic College Jember from the
      Faculty of Islamic Family Law. Besides studying Islam, I have an interest
      in the world of technology, such as web design and programming.
    </p>

    <p class="skill">Here are a few technologies I’ve been working with:</p>
    <ul class="skill-list">
      <li>HTML</li>
      <li>CSS</li>
      <li>Javascript</li>
      <li>Tailwindcss</li>
      <li>Bootstrap</li>
      <li>SCSS</li>
      <li>Figma</li>
      <li>React</li>
      <li>Vue 3 (currently learn)</li>
      <li>Git</li>
      <li>Visual Studio Code</li>
    </ul>

    <h3 class="education">Education</h3>
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
    </ul>
  </article>
</template>
<script>
export default {
  name: "MyAbout",
  props: ["education", "languages"],
};
</script>

<style lang="scss">
@import "@/assets/variable.scss";

#about {
  margin-bottom: 10rem;
  h2,
  h3 {
    color: $primary;
  }
  h2 {
    font-size: 4rem;
  }
  h3 {
    font-size: 2rem;
  }

  p,
  li {
    color: $white;
  }
  .description {
    font-size: 1.6rem;
    font-weight: 300;
  }

  .skill {
    margin-top: 2rem;
    font-weight: 600;
  }

  .skill-list {
    box-sizing: border-box;
    font-size: 1.2rem;
    margin: 1.4rem 0 4rem;
    width: 100%;
    height: 400px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;

    li {
      margin-bottom: 40px;
    }
  }
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
}
</style>
