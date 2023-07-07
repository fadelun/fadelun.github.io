import { defineStore } from 'pinia';
import { ref } from "vue"


// the first argument is a unique id of the store across your application
export const useUserStore = defineStore('user', () => {
    const name = ref("Muhammad Fadll");
    const lang = ref("ID")
    const about = ref({
        "ID": {
            "desc": "Saya adalah seorang mahasiswa prodi Hukum keluarga islam dari Sekolah Tinggi Dirasat Islamiyah Imam Syafi'i Jember (STDIIS) . Saya memiliki ketertarikan di dunia teknologi, terutama di bidang web design dan progamming",
            "skill": "Berikut beberapa teknologi yang sudah pernah saya gunakan:"
        },
        "EN": {
            "desc": "I am a college student at the Imam Syafi'i Islamic College Jember from the Faculty of Islamic Family Law. Besides studying Islam, I have an interest in the world of technology, such as web design and programming.",
            "skill": "Here are a few technologies I’ve been working with:"
        }
    })
    const showcase = ref([
        {
            name: "tweet-generator",
            image: require("@/assets/resource/projects/tweet-generator.png"),
            source: {
                demo: "https://twitter-status-generator.vercel.app",
                repo: "https://github.com/fadelun/tweet-generator",
            },

            tag: ["Vue", "Tailwind"],
            desc: "",
        },
        {
            name: "QR-code-generator",
            image: require("@/assets/resource/projects/QR-code-generator.png"),
            source: {
                demo: "https://qr-code-generate-navy.vercel.app/",
                repo: "https://github.com/fadelun/QR-code-generator",
            },

            tag: ["Vue", "Tailwind"],
            desc: "",
        },
        {
            name: "Time tracking dashboard",
            image: require("@/assets/resource/projects/time-tracking-dashboard.png"),
            source: {
                demo: "https://fadelun.github.io/time-tracking-dashboard",
                repo: "https://github.com/fadelun/time-tracking-dashboard",
            },

            tag: ["React js", "Tailwind"],
            desc: "Time tracking dashboard salah satu project yang cocok untuk melatih penerapan grid",
        },
        {
            name: "Rest countries API",
            image: require("@/assets/resource/projects/rest-countries-api.jpg"),
            source: {
                demo: "https://rest-countries-api-fadelun.vercel.app/",
                repo: "https://github.com/fadelun/rest-countries-api",
            },

            tag: ["React js", "Tailwind", "Rest API"],
            desc: "Rest countries adalah proyek yang dibuat dengan API yang juga memiliki fitur mengubah tema. Anda dapat melihat daftar semua negara dan menemukan negara tertentu melalui pencarian atau dengan memfilter wilayah. Dengan menavigasi ke halaman masing-masing negara, Anda dapat melihat detail lebih lanjut tentang negara seperti nama asli dan bahkan negara perbatasan.",
        },
        {
            name: "Pricing component with toggle",
            image: require("@/assets/resource/projects/pricing-component-with-toggle.png"),
            source: {
                demo: "https://fadelun.github.io/Pricing-component-with-toggle",
                repo: "https://github.com/fadelun/Pricing-component-with-toggle",
            },
            tag: ["HTML5 ", "Tailwind"],
            desc: "Pricing component adalah sala satu challange yang diberikan oleh Frontend Mentor untuk menguji kemampuan bagaiamana cara membuat web agar terlihat interactive",
        },
        {
            name: "Tekken 7",
            image: require("@/assets/resource/projects/tekken-7.png"),
            source: {
                demo: "https://fadelun.github.io/tekken-7/",
                repo: "https://github.com/fadelun/tekken-7",
            },
            tag: ["Bootstrap", "Vanilla JS"],
            desc: "project tiruan dari web resminya, yang menarik disini adalah menerapkan logic perulangan untuk menampilkan nama, info dan gambar karakter. Disertai dengan animasi ketika meng-hover salah satu dari karakter tersebut",
        },
        {
            name: "bikees",
            image: require("@/assets/resource/projects/bikees.png"),
            source: {
                demo: "https://bikees-psi.vercel.app/",
                repo: "https://github.com/fadelun/bikees",
            },
            tag: ["React js", "Tailwind", "Carousel"],
            desc: "informasi tentan sepeda, sparepart dan harga ",
        },
        {
            name: "todoApp",
            image: require("@/assets/resource/projects/apptodo.png"),
            source: {
                demo: "https://fadelun.github.io/appTodo/",
                repo: "https://github.com/fadelun/appTodo",
            },
            tag: ["Tailwind", "Vanilla JS"],
            desc: "todo list sederhana yang merupakan challange dari Frontend Mentor",
        },
        {
            name: "EA-Need for speed",
            image: require("@/assets/resource/projects/ea-need-for-speed.png"),
            source: {
                demo: "https://ea-nfs-clone.vercel.app/",
                repo: "https://github.com/fadelun/EA-NFS-clone",
            },
            tag: ["Vue", "Tailwind", "Landing page"],
            desc: "project ini merupakan redesign dari website resminya dengan menerapkan ketentuan UI dan UX",
        },

        {
            name: "Math for kids",
            image: require("@/assets/resource/projects/math-for-kids.png"),
            source: {
                demo: "https://fadelun.github.io/Math/",
                repo: "https://github.com/fadelun/Math",
            },
            tag: ["HTML5", "CSS3", "Vanilla JS"],
            desc: "game math sederhana yang dirancang untuk melatih kemampuan berhitung pada anak",
        },


    ])
    //  const education = ref ([
    //     {
    //       name: "freecodecamp",
    //       period: "2021",
    //       info: "JavaScript Algorithms and Data Structures",
    //     },
    //     {
    //       name: "Skilvul",
    //       period: "2021",
    //       info: "Javascript dasar",
    //     },
    //     {
    //       name: "Progate",
    //       period: "2021",
    //       info: "dasar-dasar Sass dan git",
    //     },
    //     {
    //       name: "BuildWith Angga",
    //       period: "2020",
    //       info: "Full stack web designer",
    //     },
    //   ])
    //   const languages= ref([
    //     {
    //       lang: "Indonesia",
    //       info: "Native languages",
    //     },
    //     {
    //       lang: "Indonesia",
    //       info: "intermediate",
    //     },
    //     {
    //       lang: "English",
    //       info: "Basic",
    //     },
    //   ])

    return {
        name,
        lang,
        about,
        showcase
    }



})