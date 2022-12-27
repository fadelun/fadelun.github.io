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

    <h3>Education</h3>
    <ul v-show="education">
      <li v-for="course in education" :key="course">
        <p class="course">{{ course.name }}</p>
        <p class="period">{{ course.period }}</p>
        <p class="info">{{ course.info }}</p>
      </li>
    </ul>

    <h3>Languages</h3>
    <ul v-show="languages">
      <li v-for="language in languages" :key="language">
        <p class="lang">{{ language.lang }}</p>
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

main {
  padding: 260px 4vw 0;

  #about {
    h2 {
      color: $primary;
      font-size: 4rem;
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
      font-size: 1.2rem;
      margin-top: 1.4rem;
      width: 100%;
      height: 400px;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;

      li {
        margin-bottom: 40px;
      }
    }
  }
}
</style>
