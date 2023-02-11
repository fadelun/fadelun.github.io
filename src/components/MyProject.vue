<template>
  <article id="my-project">
    <h2>My Project</h2>
    <ul v-show="showcase" class="showcase-menu">
      <li v-for="project in showcase" :key="project" class="project">
        <div class="image-contain">
          <a :href="project.source">
            <img
              :src="project.image"
              :alt="project.name"
              class="project-image"
            />
          </a>
        </div>
        <div class="project-description">
          <h4 class="project-name">
            <a :href="project.source">
              {{ project.name }}
            </a>
          </h4>
          <p class="text">
            {{ project.desc }}
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
import anime from "animejs";

export default {
  name: "MyProject",
  props: ["showcase", "scrollValue"],

  mounted() {
    const allTarget = document.querySelectorAll(".showcase-menu .project");

    [...allTarget].forEach((target) => {
      const animation = anime({
        targets: target,
        translateY: [300, 0],
        opacity: [0, 1],
        duration: 740,
        autoplay: false,
        easing: "easeInOutCubic",

        delay: 100,
      });

      const playAnimation = () => {
        const targetPosition =
          target.getBoundingClientRect().top + window.pageYOffset;
        const windowPosition = this.scrollValue + window.innerHeight - 50;
        // console.log("posisi target: " + targetPosition);
        // console.log(this.scrollValue);

        if (windowPosition > targetPosition) {
          animation.play();
          window.removeEventListener("scroll", playAnimation);
        }
      };
      window.addEventListener("scroll", playAnimation);
    });
  },
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
        flex-direction: column;
        padding: 2.4rem 20px;
        overflow: auto;

        &::-webkit-scrollbar {
          opacity: 0;
        }

        a {
          color: inherit;
          text-decoration: none;
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
@media (min-width: 768px) {
  #my-project {
    .showcase-menu {
      gap: 2.4rem;
      .project {
        width: 30%;
        max-height: 320px;

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
            font-size: 1rem;
          }
          .project-meta-stack p {
            font-size: 0.8rem;
          }
        }
      }
    }
  }
}
</style>
