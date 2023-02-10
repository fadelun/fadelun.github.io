<template>
  <main>
    <MyAbout />
    <MyProject :showcase="showcase" :scrollValue="scrollValue" />
    <MyContact :scrollValue="scrollValue" />
  </main>
</template>
<script>
import MyAbout from "../components/MyAbout.vue";
import MyProject from "../components/MyProject.vue";
import MyContact from "../components/MyContact.vue";
export default {
  name: "MyMain",

  components: {
    MyAbout,
    MyProject,
    MyContact,
  },
  props: ["scrollValue"],

  data() {
    return {
      showcase: [
        {
          name: "Time tracking dashboard",
          image: require("@/assets/resource/time-tracking-dashboard.png"),
          source: "https://fadelun.github.io/time-tracking-dashboard",
          tag: ["React js", "Tailwind"],
          desc: "Time tracking dashboard salah satu project yang cocok untuk melatih penerapan grid",
        },
        {
          name: "Rest countries API",
          image: require("@/assets/resource/rest-countries-api.jpg"),
          source: "https://rest-countries-api-fadelun.vercel.app/",
          tag: ["React js", "Tailwind", "Rest API"],
          desc: "Rest countries adalah proyek yang dibuat dengan API yang juga memiliki fitur mengubah tema. Anda dapat melihat daftar semua negara dan menemukan negara tertentu melalui pencarian atau dengan memfilter wilayah. Dengan menavigasi ke halaman masing-masing negara, Anda dapat melihat detail lebih lanjut tentang negara seperti nama asli dan bahkan negara perbatasan.",
        },
        {
          name: "Pricing component with toggle",
          image: require("@/assets/resource/pricing-component-with-toggle.png"),
          source: "https://fadelun.github.io/Pricing-component-with-toggle ",
          tag: ["HTML5 ", "Tailwind"],
          desc: "Pricing component adalah sala satu challange yang diberikan oleh Frontend Mentor untuk menguji kemampuan bagaiamana cara membuat web agar terlihat interactive",
        },
        {
          name: "Tekken 7",
          image: require("@/assets/resource/tekken-7.png"),
          source: "https://fadelun.github.io/tekken-7/",
          tag: ["Bootstrap", "Vanilla JS"],
          desc: "project tiruan dari web resminya, yang menarik disini adalah menerapkan logic perulangan untuk menampilkan nama, info dan gambar karakter. Disertai dengan animasi ketika meng-hover salah satu dari karakter tersebut",
        },
        {
          name: "bikees",
          image: require("@/assets/resource/bikees.png"),
          source: "https://bikees-psi.vercel.app/",
          tag: ["React js ", "Tailwind", "Carousel"],
          desc: "informasi tentan sepeda, sparepart dan harga ",
        },
        {
          name: "todoApp",
          image: require("@/assets/resource/apptodo.png"),
          source: "https://fadelun.github.io/appTodo/",
          tag: ["Tailwind", "Vanilla JS"],
          desc: "todo list sederhana yang merupakan challange dari Frontend Mentor",
        },
        {
          name: "EA-Need for speed",
          image: require("@/assets/resource/ea-need-for-speed.png"),
          source: "https://ea-nfs-clone.vercel.app/",
          tag: ["Vue js ", "Tailwind", "Landing page"],
          desc: "project ini merupakan redesign dari website resminya dengan menerapkan ketentuan UI dan UX",
        },

        {
          name: "Math for kids",
          image: require("@/assets/resource/math-for-kids.png"),
          source: "https://fadelun.github.io/Math/",
          tag: ["HTML5", "CSS3", "Vanilla JS"],
          desc: "game math sederhana yang dirancang untuk melatih kemampuan berhitung pada anak",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
main {
  width: 86vw;
  margin: 180px auto 0;
  @media (min-width: 1024px) {
    width: 1100px;
  }
}
</style>
