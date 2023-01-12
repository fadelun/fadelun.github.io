<template>
  <article id="my-project">
    <h2>My Project</h2>
    <ul v-show="showcase" class="showcase-menu">
      <li v-for="project in showcase" :key="project" class="project">
        <div class="image-contain">
          <img :src="project.image" :alt="project.name" class="project-image" />
        </div>
        <div class="project-description">
          <h4 class="project-name">{{ project.name }}</h4>
          <p class="text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            impedit fuga minima distinctio voluptas. Dolorum omnis ex iure
            sapiente natus quam consequatur laudantium expedita repellendus.
          </p>
          <div class="project-meta-stack">
            <p v-for="tag in project.tag" :key="tag">&lt; {{ tag }} /></p>
          </div>
        </div>
      </li>
    </ul>
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
  .showcase-menu {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 4rem;
    margin-top: 2rem;

    .project {
      width: 100%;

      background-color: $dark-gray;

      .image-contain {
        min-width: 100%;
        min-height: 300px;
        max-height: 60%;
        overflow: hidden;
      }

      .project-description {
        color: $white;
        padding: 2.4rem 20px;
        max-height: 400px;
        overflow: auto;

        &::-webkit-scrollbar {
          opacity: 0;
        }

        .project-name {
          margin-bottom: 1rem;
        }

        .text {
          margin-bottom: 2rem;
          font-size: 1.4rem;
        }

        .project-meta-stack p {
          display: inline;
          color: $primary;
          font-weight: 500;
          font-size: 1.2rem;
          margin: 0 4px 0;
        }
      }

      .project-image {
        width: 100%;
        &:hover {
          transform: scale(1.1);
          transition: transform 0.5s;
        }
      }
    }
  }
}
@media (min-width: 1024px) {
  #my-project {
    .showcase-menu {
      .project {
        width: 30%;

        .image-contain {
          min-height: 250px;
        }

        .project-description {
          padding: 1rem 20px;
          max-height: 260px;

          .text {
            margin-bottom: 2rem;
            font-size: 1.2rem;
          }
        }
      }
    }
  }
}
</style>
