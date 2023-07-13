<template>
  <article id="my-project">
    <h2>{{ store.lang != "AR" ? "My Project" : "المشاريع" }}</h2>

    <ul v-show="store.showcase" class="showcase-menu">
      <li v-for="project in store.showcase" :key="project" class="project">
        <div class="image-contain">
          <a :href="project.source.demo">
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

          <div class="project-meta-stack">
            <p v-for="tag in project.tag" :key="tag">&lt; {{ tag }} /></p>
          </div>
          <div class="project-buttons">
            <a class="repo-button btn" :href="project.source.repo">
              {{ store.lang != "AR" ? "Source" : "مصدر" }}
            </a>

            <a class="demo-button btn" :href="project.source.demo">
              {{ store.lang != "AR" ? "Demo" : "تجربي" }}
            </a>
          </div>
          <div class="desc">
            <p>
              {{ showDesc(project.desc, store.lang) }}
            </p>
          </div>
        </div>
      </li>
    </ul>
  </article>
</template>
<script>
import anime from "animejs";
import { useUserStore } from "@/stores";

export default {
  name: "MyProject",
  props: ["scrollValue"],
  data() {
    return {
      store: useUserStore(),
    };
  },
  methods: {
    showDesc(desc, lang) {
      if (typeof desc == "object") {
        if (lang == "ID") {
          return desc.ID;
        } else if (lang == "EN") {
          return desc.EN;
        } else if (lang == "AR") {
          return desc.AR;
        }
      }

      return desc;
    },
  },

  mounted() {
    const allTarget = document.querySelectorAll(".showcase-menu .project");

    [...allTarget].forEach((target) => {
      const animation = anime({
        targets: target,
        perspective: [2500, 0],
        rotateY: [100, 0],
        opacity: [0, 1],
        duration: 1000,
        autoplay: false,
        easing: "linear",
        delay: 100,
      });

      const playAnimation = () => {
        const targetPosition =
          target.getBoundingClientRect().top + window.pageYOffset;
        const windowPosition = this.scrollValue + window.innerHeight - 50;

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
        position: relative;

        img.project-image {
          width: 100%;
          transition: transform 0.5s;
          &:hover {
            transform: scale(1.1);
          }
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
          font-size: 1rem;
        }
        .project-meta-stack {
          display: flex;
          flex-wrap: wrap;
          margin-bottom: 1rem;
          p {
            display: inline;
            color: $primary;
            font-weight: 500;
            font-size: 1.2rem;
            margin: 0 4px 0;
          }
        }
        .project-buttons {
          display: flex;
          column-gap: 6px;

          .btn {
            display: inline-block;
            padding: 4px 8px;

            color: $white;
            border: 1px solid $primary;
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
