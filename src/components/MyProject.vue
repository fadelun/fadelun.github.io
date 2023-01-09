<template>
  <article id="my-project">
    <h2>My Project</h2>
    <ul v-show="showcase" class="showcase-menu">
      <li v-for="project in showcase" :key="project" class="project">
        <img :src="project.image" :alt="project.name" class="project-image" />
        <div class="project-description">
          <h4 class="text">{{ project.name }}</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            impedit fuga minima distinctio voluptas. Dolorum omnis ex iure
            sapiente natus quam consequatur laudantium expedita repellendus.
          </p>
          <div class="project-meta-stack">
            <p v-for="tag in project.tag" :key="tag">{{ tag }}</p>
          </div>
        </div>
      </li>
    </ul>
    <!-- <ul class="showcase-menu">
            <li class="project">
                <img src="" alt="">
                <div class="desc">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, veritatis.</p>
                    <div class="project-meta-stack">
                        <p></p>
                        
                    </div>
                </div>
            </li>
            <li><img src="" alt=""></li>
            <li><img src="" alt=""></li>
            <li><img src="" alt=""></li>
        </ul> -->
  </article>
</template>
<script>
export default {
  name: "MyProject",
  props: ["showcase"],
};
</script>
<style lang="scss" scoped>
@import "@/assets/variable.scss";

#my-project {
  background: #43fd43;
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
  .showcase-menu {
    display: flex;
    flex-wrap: wrap;
    // flex-direction: column;

    .project {
      width: 100%;
      overflow: hidden;
      // height: 8rem;

      background-color: blue;

      .project-image {
        width: 100%;
      }
    }
  }
}
</style>
