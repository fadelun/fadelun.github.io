<template>
  <div class="navbar">
    <div class="main-logo">
      <img
        class="img-logo"
        src="../assets/resource/LOGO.svg"
        alt="FADLL - logo"
      />
    </div>
    <nav>
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Project</a></li>
        <li><a href="">Contact</a></li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  name: "MyNavbar",
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
          }
        }
      }
    }
  }
}
</style>
