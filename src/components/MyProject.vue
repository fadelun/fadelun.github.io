<template>
  <article>
    <h2>My Project</h2>
    <ul v-show="showcase" class="showcase-menu">
      <li v-for="project in showcase" :key="project">
        <!-- <img src={{ project.image }} alt={{ project.name }} /> -->
        <img src="project.image" alt="project.name" />
        <div class="project-description">
          <p class="text">{{ project.name }}</p>
          <div class="project-meta-stack">
            <p></p>
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
<style></style>
