<template>
  <article id="my-project">
    <h2>My Project</h2>
    <ul v-show="showcase" class="showcase-menu">
      <li v-for="project in showcase" :key="project" class="project">
        <div class="image-contain">
          <a :href="project.source.demo">
            <img
              :src="project.image"
              :alt="project.name"
              class="project-image"
            />
          </a>
          <a class="repo" :href="project.source.repo">
            <svg
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              data-v-0362831a=""
              style="transform: translateX(0rem); opacity: 0.4"
            >
              <path
                d="M27.1719 62.0938C27.1719 62.4062 26.8125 62.6562 26.3594 62.6562C25.8438 62.7031 25.4844 62.4531 25.4844 62.0938C25.4844 61.7812 25.8438 61.5312 26.2969 61.5312C26.7656 61.4844 27.1719 61.7344 27.1719 62.0938ZM22.3125 61.3906C22.2031 61.7031 22.5156 62.0625 22.9844 62.1562C23.3906 62.3125 23.8594 62.1562 23.9531 61.8438C24.0469 61.5312 23.75 61.1719 23.2812 61.0312C22.875 60.9219 22.4219 61.0781 22.3125 61.3906ZM29.2188 61.125C28.7656 61.2344 28.4531 61.5312 28.5 61.8906C28.5469 62.2031 28.9531 62.4062 29.4219 62.2969C29.875 62.1875 30.1875 61.8906 30.1406 61.5781C30.0937 61.2812 29.6719 61.0781 29.2188 61.125ZM39.5 1.25C17.8281 1.25 1.25 17.7031 1.25 39.375C1.25 56.7031 12.1562 71.5312 27.7344 76.75C29.7344 77.1094 30.4375 75.875 30.4375 74.8594C30.4375 73.8906 30.3906 68.5469 30.3906 65.2656C30.3906 65.2656 19.4531 67.6094 17.1562 60.6094C17.1562 60.6094 15.375 56.0625 12.8125 54.8906C12.8125 54.8906 9.23438 52.4375 13.0625 52.4844C13.0625 52.4844 16.9531 52.7969 19.0938 56.5156C22.5156 62.5469 28.25 60.8125 30.4844 59.7812C30.8438 57.2812 31.8594 55.5469 32.9844 54.5156C24.25 53.5469 15.4375 52.2812 15.4375 37.25C15.4375 32.9531 16.625 30.7969 19.125 28.0469C18.7188 27.0312 17.3906 22.8438 19.5312 17.4375C22.7969 16.4219 30.3125 21.6562 30.3125 21.6562C33.4375 20.7813 36.7969 20.3281 40.125 20.3281C43.4531 20.3281 46.8125 20.7813 49.9375 21.6562C49.9375 21.6562 57.4531 16.4062 60.7188 17.4375C62.8594 22.8594 61.5312 27.0312 61.125 28.0469C63.625 30.8125 65.1562 32.9688 65.1562 37.25C65.1562 52.3281 55.9531 53.5312 47.2188 54.5156C48.6562 55.75 49.875 58.0938 49.875 61.7656C49.875 67.0312 49.8281 73.5469 49.8281 74.8281C49.8281 75.8438 50.5469 77.0781 52.5312 76.7188C68.1562 71.5312 78.75 56.7031 78.75 39.375C78.75 17.7031 61.1719 1.25 39.5 1.25ZM16.4375 55.1406C16.2344 55.2969 16.2812 55.6562 16.5469 55.9531C16.7969 56.2031 17.1562 56.3125 17.3594 56.1094C17.5625 55.9531 17.5156 55.5938 17.25 55.2969C17 55.0469 16.6406 54.9375 16.4375 55.1406ZM14.75 53.875C14.6406 54.0781 14.7969 54.3281 15.1094 54.4844C15.3594 54.6406 15.6719 54.5938 15.7812 54.375C15.8906 54.1719 15.7344 53.9219 15.4219 53.7656C15.1094 53.6719 14.8594 53.7188 14.75 53.875ZM19.8125 59.4375C19.5625 59.6406 19.6562 60.1094 20.0156 60.4062C20.375 60.7656 20.8281 60.8125 21.0312 60.5625C21.2344 60.3594 21.1406 59.8906 20.8281 59.5938C20.4844 59.2344 20.0156 59.1875 19.8125 59.4375ZM18.0312 57.1406C17.7812 57.2969 17.7812 57.7031 18.0312 58.0625C18.2812 58.4219 18.7031 58.5781 18.9062 58.4219C19.1562 58.2188 19.1562 57.8125 18.9062 57.4531C18.6875 57.0938 18.2812 56.9375 18.0312 57.1406Z"
                fill="black"
                data-v-0362831a=""
              ></path>
            </svg>
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
        position: relative;
        a.repo {
          display: none;
        }
        &:hover > a.repo {
          display: block;
          position: absolute;
          width: 2rem;
          z-index: 2;
          top: 8px;
          left: 8px;

          & > svg {
            opacity: 0.8 !important;
          }
        }

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
