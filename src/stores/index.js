import { defineStore } from 'pinia';
import { ref } from "vue"


// the first argument is a unique id of the store across your application
export const useUserStore = defineStore('user', () => {
    const name = ref("Muhammad Fadll");
    const lang = ref("ID");
    const about = ref({
        "ID": {
            "desc": "Saya adalah seorang mahasiswa prodi Hukum keluarga islam dari Sekolah Tinggi Dirasat Islamiyah Imam Syafi'i Jember (STDIIS) . Saya memiliki ketertarikan di dunia teknologi, terutama di bidang web design dan progamming",
            "skill": "Berikut beberapa teknologi yang sudah pernah saya gunakan"
        },
        "EN": {
            "desc": "I am a college student at the Imam Syafi'i Islamic College Jember from the Faculty of Islamic Family Law. Besides studying Islam, I have an interest in the world of technology, such as web design and programming.",
            "skill": "Here are a few technologies I’ve been working with"
        },
        "AR": {
            "desc": "أنا طالب من قسم الأحوال الشخصية من كلية الإمام الشافعي للدراسات الإسلامية جمبر. و لدي اهتمام بعالم التكنولوجيا، مثل تصميم المواقع والبرمجة ",
            "skill": "هنا بعض التقنيات التي كنت أعمل عليها"
        }
    })
    const showcase = ref([
        {
            name: "Mahramku",
            image: require("@/assets/resource/projects/mahramku.png"),
            source: {
                demo: "https://mahramku.com/",
                repo: "",
            },

            tag: ["Wordpress", "Bootstrap"],
            desc: {
                "ID": "Mahramku adalah sebuah website pencarian untuk mengetahui siapa saja mahram dari kerabat seseorang yang mana ketentuan mahram tersebut sudah dijelaskan di dalam syareat. sehingga dengan website ini dapat memudahkan kaum muslimin untuk mengetahui mahram dan bukan mahram dari kebarat mereka. ",
                "EN": "Mahramku is a search website to find out who is the mahram of someone's relatives where the terms of the mahram have been explained in the Syareat. so that this website can make it easier for Muslims to find out their mahram and non-mahram relatives.",
                "AR": "محرمكو هو موقع بحث لمعرفة من هو محرم أقارب شخص ما حيث تم شرح شروط المحرم في الشريعة. حتى يسهل هذا الموقع على المسلمين معرفة أقاربهم المحرم وغير المحرم."
            }
        },
        {
            name: "Tweet generator",
            image: require("@/assets/resource/projects/tweet-generator.png"),
            source: {
                demo: "https://twitter-status-generator.vercel.app",
                repo: "https://github.com/fadelun/tweet-generator",
            },

            tag: ["Vue", "Tailwind"],
            desc: {
                "ID": "Membuat tweet cukup dengan gambar",
                "EN": "Creating tweets with just an image",
                "AR": "إنشاء تغريدة يكفي بصورة"
            }
        },
        {
            name: "QR code generator",
            image: require("@/assets/resource/projects/QR-code-generator.png"),
            source: {
                demo: "https://qr-code-generate-navy.vercel.app/",
                repo: "https://github.com/fadelun/QR-code-generator",
            },

            tag: ["Vue", "Tailwind"],
            desc: {
                "ID": "Masukan link dan buatlah qr code versimu",
                "EN": "input the link and create your own qr code",
                "AR": "أدخل الرابط وأنشئ رمز الاستجابة السريعة الخاص بك"
            }
        },
        {
            name: "Time tracking dashboard",
            image: require("@/assets/resource/projects/time-tracking-dashboard.png"),
            source: {
                demo: "https://fadelun.github.io/time-tracking-dashboard",
                repo: "https://github.com/fadelun/time-tracking-dashboard",
            },


            tag: ["React js", "Tailwind"],
            desc: {
                "ID": "Time tracking dashboard salah satu project yang cocok untuk melatih penerapan grid",
                "EN": "Time tracking dashboard is one of the projects suitable for practicing grid",
                "AR": "Time tracking dashboard من أحد المشاريع المناسب لممارسة grid "
            }


        },
        {
            name: "Rest countries API",
            image: require("@/assets/resource/projects/rest-countries-api.jpg"),
            source: {
                demo: "https://rest-countries-api-fadelun.vercel.app/",
                repo: "https://github.com/fadelun/rest-countries-api",
            },


            tag: ["React js", "Tailwind", "Rest API"],
            desc: {
                "ID": "Rest countries adalah proyek yang dibuat dengan API yang juga memiliki fitur mengubah tema. Anda dapat melihat daftar semua negara dan menemukan negara tertentu melalui pencarian atau dengan memfilter wilayah. Dengan menavigasi ke halaman masing-masing negara, Anda dapat melihat detail lebih lanjut tentang negara seperti nama asli dan bahkan negara perbatasan.",
                "EN": "Rest Countries is a project created with an API that also has a feature to change themes. You can view a list of all countries and find a specific country by searching or filtering regions. By navigating to the page of each country, you can see further details about the country, such as its native name and even its bordering countries.",
                "AR": "Rest Countries مشروع تم إنشاؤه باستخدام واجهة برمجة التطبيقات (API) تتضمن أيضًا ميزة تغيير الثيمات. يمكنك عرض قائمة بجميع الدول والعثور على دولة محددة من خلال البحث أو تصفية المناطق. من خلال التنقل إلى صفحة كل دولة ، يمكنك رؤية تفاصيل إضافية حول الدولة ، مثل اسمها الأصلي وحتى الدول المجاورة له"
            },

        },
        {
            name: "Pricing component with toggle",
            image: require("@/assets/resource/projects/pricing-component-with-toggle.png"),
            source: {
                demo: "https://fadelun.github.io/Pricing-component-with-toggle",
                repo: "https://github.com/fadelun/Pricing-component-with-toggle",
            },
            tag: ["HTML5 ", "Tailwind"],
            desc: {
                "ID": "Pricing component adalah sala satu challange yang diberikan oleh Frontend Mentor untuk menguji kemampuan bagaiamana cara membuat web agar terlihat interactive",
                "EN": "The Pricing component is one of the challenges provided by Frontend Mentor to test the ability to create a web page that appears interactive.",
                "AR": "هو أحد التحديات التي يقدمها Frontend Mentor لاختبار القدرة على إنشاء صفحة ويب تبدو تفاعلية."
            }

        },
        {
            name: "Tekken 7",
            image: require("@/assets/resource/projects/tekken-7.png"),
            source: {
                demo: "https://fadelun.github.io/tekken-7/",
                repo: "https://github.com/fadelun/tekken-7",
            },
            tag: ["Bootstrap", "Vanilla JS"],
            desc: {
                "ID": "Menampilkan nama, info dan gambar karakter tekken dengan menggunakan perulangan, dan sedikit tambahan animasi. ",
                "EN": "Displaying the names, info, and images of Tekken characters using loops, along with some additional animation.",
                "AR": "عرض أسماء ومعلومات وصور شخصيات تيكن باستخدام حلقات التكرار، مع إضافة بعض الرسوم المتحركة البسيطة."
            }

        },
        {
            name: "Bikees",
            image: require("@/assets/resource/projects/bikees.png"),
            source: {
                demo: "https://bikees-psi.vercel.app/",
                repo: "https://github.com/fadelun/bikees",
            },
            tag: ["React js", "Tailwind", "Carousel"],
            desc: {
                "ID": "Mencoba membuat Pagination yang menampilkan Informasi tentang sepeda, sparepart dan harga.",
                "EN": "Trying to create a pagination that displays information about bicycles, spare parts, and prices.",
                "AR": "محاولة إنشاء تقسيم الصفحات الذي يعرض معلومات عن الدراجات، قطع الغيار، والأسعار"
            }

        },
        {
            name: "TodoApp",
            image: require("@/assets/resource/projects/apptodo.png"),
            source: {
                demo: "https://fadelun.github.io/appTodo/",
                repo: "https://github.com/fadelun/appTodo",
            },
            tag: ["Tailwind", "Vanilla JS"],
            desc: {
                "ID": "todo list sederhana yang merupakan challange dari Frontend Mentor",
                "EN": "A simple todo list that is a challenge from Frontend Mentor",
                "AR": "قائمة مهام بسيطة تمثل تحديًا من Frontend Mentor."
            }


        },
        // {
        //     name: "EA-Need for speed",
        //     image: require("@/assets/resource/projects/ea-need-for-speed.png"),
        //     source: {
        //         demo: "https://ea-nfs-clone.vercel.app/",
        //         repo: "https://github.com/fadelun/EA-NFS-clone",
        //     },
        //     tag: ["Vue", "Tailwind", "Landing page"],
        //     desc: "project ini merupakan redesign dari website resminya dengan menerapkan ketentuan UI dan UX",
        // },
        {
            name: "Calculator",
            image: require("@/assets/resource/projects/calculator.png"),
            source: {
                demo: "https://fadelun.github.io/calculator/",
                repo: "https://github.com/fadelun/calculator",
            },
            tag: ["HTML5", "CSS3", "Vanilla JS"],
            desc: {
                "ID": "Kalkulator sederhana",
                "EN": "A simple Calculator",
                "AR": "آلة حاسبة بسيطة"
            }

        },

        {
            name: "Math for kids",
            image: require("@/assets/resource/projects/math-for-kids.png"),
            source: {
                demo: "https://fadelun.github.io/Math/",
                repo: "https://github.com/fadelun/Math",
            },
            tag: ["HTML5", "CSS3", "Vanilla JS"],
            desc: {
                "ID": "game matematika sederhana, menampilkan pertanyaan secara acak",
                "EN": "A simple math game, with random questions",
                "AR": " لعبة رياضيات بسيطة، تعرض أسئلة عشوائية"
            }

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