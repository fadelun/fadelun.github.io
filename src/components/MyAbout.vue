<template>
  <article id="about">
    <h2>{{ store.lang != "AR" ? "About me" : "عني" }}</h2>
    <p class="description">
      <!-- menampilan deskripsi pada about -->
      {{ showAbout(store.about, store.lang) }}
    </p>

    <p class="skill">{{ showAboutSkill(store.about, store.lang) }}</p>
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

    <!-- tahap pengembangan
     <a href="#" class="button btn">See more</a>
  --></article>
</template>
<script>
import { useUserStore } from "@/stores";
export default {
  name: "MyAbout",

  data() {
    return {
      store: useUserStore(),
    };
  },
  methods: {
    showAbout(about, lang) {
      return lang == "ID"
        ? about.ID.desc
        : lang == "EN"
        ? about.EN.desc
        : lang == "AR"
        ? about.AR.desc
        : about.EN.desc;
    },
    showAboutSkill(about, lang) {
      return lang == "ID"
        ? about.ID.skill
        : lang == "EN"
        ? about.EN.skill
        : lang == "AR"
        ? about.AR.skill
        : about.EN.skill;
    },
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
