<template>
  <div class="navbar">
    <div class="main-logo">
      <img
        class="img-logo"
        src="../assets/resource/LOGO.svg"
        alt="FADLL - logo"
      />
    </div>
    <nav @click="movePage">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#my-project">Project</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  name: "MyNavbar",
  methods: {
    movePage() {
      window.scrollY;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/variable.scss";
header {
  .navbar {
    position: fixed;
    top: 0;
    width: 100vw;
    height: 60px;
    color: $white;
    background-image: linear-gradient($secondary 70%, #ffffff00);
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
            position: relative;

            &::before {
              content: "";
              position: absolute;
              background-color: $primary;
              height: 2px;
              left: 0;
              bottom: 0;
              right: 0;
              transform: scaleX(0);
              transform-origin: right bottom;
              transition: transform 0.3s ease;
            }

            &:hover {
              color: $primary;

              &::before {
                transform: scaleX(1);
                transform-origin: left bottom;
              }
            }
          }
        }
      }
    }
  }
}
</style>
