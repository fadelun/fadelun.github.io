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
    justify-content: center;
    flex-wrap: wrap;
    gap: 3rem;
    margin-top: 2rem;

    .project {
      width: 100%;
      display: flex;
      flex-direction: column;

      background-color: $dark-gray;

      .image-contain {
        min-width: 100%;
        overflow: hidden;

        img.project-image {
          width: 100%;
        }
      }

      .project-description {
        color: $white;
        display: flex;
        flex-wrap: wrap;
        padding: 2.4rem 20px;
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
        .project-meta-stack {
          display: flex;
          flex-wrap: wrap;
          p {
            display: inline;
            color: $primary;
            font-weight: 500;
            font-size: 1.2rem;
            margin: 0 4px 0;
          }
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
      gap: 2.4rem;
      .project {
        width: 30%;
        max-height: 400px;

        .image-contain {
          min-height: 160px;

          img.project-image {
            width: 100%;
            height: auto;
          }
        }

        .project-description {
          padding: 1.2rem;
          .text {
            margin-bottom: 1.4rem;
            font-size: 0.8rem;
          }
          .project-meta-stack p {
            font-size: 1rem;
          }
        }
      }
    }
  }
}
</style>
