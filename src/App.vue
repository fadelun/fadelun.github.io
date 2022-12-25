<template>
  <!-- portfolio vue x scss -->

  <MyHeader :widthWindow="width" />
  <main>
    <article id="about">
      <h2>About me</h2>
      <p class="description">
        I am a college student at the Imam Syafi'i Islamic College Jember from
        the Faculty of Islamic Family Law. Besides studying Islam, I have an
        interest in the world of technology, such as web design and programming.
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
    </article>
  </main>
  <footer></footer>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";

export default {
  name: "App",
  components: {
    MyHeader,
  },
  data() {
    return {
      width: window.innerWidth,
    };
  },
  methods() {},
};
</script>

<style lang="scss">
// font family : Oswald and Open sans
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@200;400;500;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&display=swap");

$primary: #2f80ed;
$secondary: #1c1e23;
$white: #ededed;
$gray: #909090;

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
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;

  //=========== header site ======================
  header {
    font-family: Oswald, sans-serif;
    height: 100vh;
    padding-top: 40px;

    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 60px;
      color: $white;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 5%;
      // padding: 0 5.5rem; // size dekstop

      .main-logo {
        .img-logo {
          width: 96px;
        }
      }

      nav {
        flex-basis: 40%;

        ul {
          display: flex;
          justify-content: space-between;
          list-style: none;

          li {
            a {
              text-decoration: none;
              color: $white;
            }
          }
        }
      }
    }

    nav.link-accounts {
      position: fixed;
      bottom: 1rem;
      left: 20px;
      background-color: orange;

      li {
        width: 20px;

        svg {
          width: 100%;
        }
      }
    }

    #banner {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      .personal-intro {
        font-size: 80px;
        font-weight: bold;
        display: flex;
        flex-direction: column;
        color: $white;

        .greeting {
          line-height: 60px;
        }

        .main-name {
          line-height: 70px;
        }

        .greeting,
        .status {
          text-transform: uppercase;
          font-size: 0.4em;
        }

        .greeting {
          color: $gray;
        }

        .status {
          text-align: right;
          color: $primary;
          width: 30%;
          align-self: flex-end;
          line-height: 30px;
        }
      }
    }
  }
  //=========== main site ======================
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
}
</style>
