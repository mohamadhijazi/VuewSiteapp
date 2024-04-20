
// const {useVuelidate} = Vuelidate;
// const {required, email} = VuelidateValidators;
 const {createApp, ref} = Vue;

 const {createVuetify} = Vuetify;

 const vuetify = createVuetify();
//Vue.use(BootstrapVue);
 vueapp =createApp({
    // setup() {
    //   const title = ref('Introducing Amazon Echo Show 15: A smart display that blends into your home')
    //   return {
    //     title
    //   }
    // },
    // setup() {
    //     return {
    //         v$: useVuelidate()
    //     }
    // },
    template: `
    <v-layout ref="app" class="rounded rounded-md">
    <HeaderComponenet></HeaderComponenet>
    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
    <BodyComponent></BodyComponent>
    </v-main>
    <v-footer
    name="footer"
    app
  >
   
    <FooterCompenent></FooterCompenent>
    </v-footer>
    </v-layout>
    `
});
//vueapp.use(vuetify).mount('#app')