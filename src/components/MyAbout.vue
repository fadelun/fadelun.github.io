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
      <li>Vue</li>
      <li>Git</li>
      <li>Visual Studio Code</li>
    </ul>

    <a href="#" class="button btn">See more</a>
  </article>
</template>
<script>
export default {
  name: "MyAbout",

  data() {
    return {
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
    font-size: 1rem;
    font-weight: 300;
  }

  .skill {
    margin-top: 2rem;
    font-weight: 600;
  }

  .skill-list {
    box-sizing: border-box;
    font-size: 1rem;
    margin: 1.2rem 0;
    width: 100%;
    height: 400px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;

    li {
      margin-bottom: 40px;
    }
  }

  .btn {
    display: inline-block;
    padding: 1rem 2rem;
    font-size: 1.6rem;
    color: $white;
    border: 3px solid $primary;
    position: relative;
    background-color: transparent;
    text-decoration: none;
    overflow: hidden;
    z-index: 1;
    font-family: inherit;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: $primary;
      -webkit-transform: translateX(-100%);
      -ms-transform: translateX(-100%);
      transform: translateX(-100%);
      -webkit-transition: all 0.3s;
      transition: all 0.3s;
      z-index: -1;
    }

    &:hover::before {
      -webkit-transform: translateX(0);
      -ms-transform: translateX(0);
      transform: translateX(0);
    }
  }
  @media (min-width: 768px) {
    .description {
      font-size: 1.6rem;
    }

    .skill-list {
      font-size: 1.2rem;
    }
  }
}
</style>
