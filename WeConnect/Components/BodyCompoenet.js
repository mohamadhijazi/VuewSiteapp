const {useVuelidate} = Vuelidate;
const {required, email} = VuelidateValidators;
//const {createApp, ref} = Vue;

//const {createVuetify} = Vuetify;

//const vuetify = createVuetify();
// Register the `hello` component
vueapp.component('BodyComponent', {
    setup() {
        return {
            v$: useVuelidate()
        }
    },
    computed: {
        formatDateIdeDate() {
            return new Date(this.ideaDate).toDateString();
        }
    },
    methods: {
        addInternalFaq() {
            this.internalFaq.push({
                id: this.internalFaq.length,
                value: ""
            });
        },
        addExternalFaq() {
            this.externalFaq.push({
                id: this.externalFaq.length,
                value: ""
            });
        },
        removeInternal(index) {
            this.internalFaq.splice(index, 1)
        },
        removeExternal(index) {
            this.externalFaq.splice(index, 1)
        },
    },
    data() {
        return {
            hideMain: false,
            title: 'Introducing Amazon Echo Show 15: A smart display that blends into your home',
            team: 'IT PORTFOLIO TEAM',
            ideaDate: '2023-12-15',
            introparagraph: `The new Echo Show 15 lets you enjoy hands-free Alexa, video calls, entertainment, and more on a 15.6-inch display that doubles as a digital photo frame
Seattle, WA - December 9, 2023 - Today, Amazon announced the Echo Show 15, a new smart display that can be mounted on a wall or placed on a stand, and offers a stunning 15.6-inch HD screen that can show your photos, videos, calendars, reminders, and more. The Echo Show 15 is the most versatile Echo device yet, allowing you to enjoy hands-free Alexa, make video calls with friends and family, watch your favorite shows and movies, listen to music, control your smart home devices, and much more.

The Echo Show 15 is designed to blend into your home, with a sleek and minimalist design that can match any décor. You can choose from four colors: charcoal, glacier white, oak, or walnut. You can also customize the display with different clock faces, widgets, and wallpapers, or use your own photos as the background. The Echo Show 15 can automatically adjust the brightness and color temperature of the screen to match the ambient light in your room, so it always looks natural and comfortable.`,
            problemSolution: 'The Echo Show 15 is more than just a smart display - it’s a smart companion that can help you stay connected, organized, and entertained. With Alexa, you can ask questions, set timers and alarms, check the weather and traffic, get news and sports updates, and more. You can also use Alexa to control your compatible smart home devices, such as lights, cameras, thermostats, and locks, with just your voice. You can even create routines to automate your daily tasks, such as turning on the lights and playing music when you wake up, or locking the doors and turning off the TV when you go to bed.',
            leadername: 'MAXIME',
            leaderQuoteheader: 'Introduction for everyone!',
            leaderQuoteShort: '“A leader is one who sees more than others see, who sees farther than others see, and who sees before others see.”',
            leaderQuote: '“A leader is one who sees more than others see, who sees farther than others see, and who sees before others see.” — Leroy Eimes',
            customer: 'A tribute of sorts to an era of cool superhero movies, this is a Marvel-themed magazine! Recommended, because it took 45 hours, so you know some serious dedication has been poured into this.',
            HowTostart: 'Explore a style guide and various page layouts for a pet adoption site in the  <em>Style Guide</em> collection. Inspired by the <em>Atomic Design</em> principle, this 8-pen collection includes a 404 page concept, an admin dashboard and what a Twitter user calls a "media card zen garden". Each pen comes with five (yes, five) color themes, including the  precious dark mode.',
            howProductWork: 'Everybody loves pasta. It is impossible to not love them, so here are 15 recipes, served with GSAP. Note the easter egg — the menu icon changes according to the pasta that you choose.',
            toggles: 'Eight playful toggles to toggle on and off for your amusement. Is it possible to use these on your site and still adhere to assessibility rules? No. But there a really cute dog one you <em>have  </em>to see.',
            upcomingHeader: 'Upcoming next verion to be released in the same track as future ideas/ benefit realization',
            upcomingbody: 'Upcoming next veriosn to be released in the same track as future ideas Upcoming next veriosn to be released in the same track as future ideas Upcoming next veriosn to be released in the same track as future ideas Upcoming next veriosn to be released in the same track as future ideas Upcoming next veriosn to be released in the same track as future ideas Upcoming next veriosn to be released in the same track as future ideas Upcoming next veriosn to be released in the same track as future ideas Upcoming next veriosn to be released in the same track as future ideas',
            internalFaq: [{
                id: 1,
                value: "Another valiant effort to reverse engineer a web app. However, the UI is repurposed to showc"
            }, {
                id: 2,
                value: "Another valiant effort to reverse engineer a web app. However, the UI is repurposed to showc"
            }, {
                id: 3,
                value: "Another valiant effort to reverse engineer a web app. However, the UI is repurposed to showc"
            }, {
                id: 4,
                value: "Another valiant effort to reverse engineer a web app. However, the UI is repurposed to showc"
            }],
            externalFaq: [{
                id: 1,
                value: "Another valiant effort to reverse engineer a web app. However, the UI is repurposed to showc"
            }, {
                id: 3,
                value: "Another valiant effort to reverse engineer a web app. However, the UI is repurposed to showc"
            }],
        }
    },
    validations() {
        return {
            title: {
                required
            },
            // Matches this.firstName
            lastName: {
                required
            },
            // Matches this.lastName

        }
    },
    template: `<!DOCTYPE html>
    <html lang="ar">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>iNext Team Information</title>
    <style>
      body { font-family: 'Arial', sans-serif; background-color: #f4f4f4; color: #333; }
      .container { width: 80%; margin: auto; overflow: hidden; }
      header { background: #50b3a2; color: white; padding: 20px; text-align: center; }
      ul { list-style: none; padding: 0; }
      li { padding: 5px; background: white; margin-bottom: 5px; }
      .member { background-color: #ddd; }
      .leader { background-color: #bada55; }
    </style>
    </head>
    <body>
      <header>
        <h1>مرحبا Mohammad</h1>
        <p>معلومات الفريق</p>
      </header>
      <div class="container">
        <ul>
          <li>رقم الفريق: 190</li>
          <li>اسم الفريق: iNext</li>
          <li>عدد الأعضاء: 2</li>
          <li class="member">أعضاء الفريق:</li>
          <li class="leader">ممدوح النملة - ذكر</li>
          <li class="member">Mohammad Hijazi - ذكر</li>
        </ul>
      </div>
    </body>
    </html>
    
    `
  });