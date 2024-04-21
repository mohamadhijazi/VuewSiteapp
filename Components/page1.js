const { useVuelidate } = Vuelidate;
const { required, email } = VuelidateValidators;
//const {createApp, ref} = Vue;

//const {createVuetify} = Vuetify;

//const vuetify = createVuetify();
// Register the `hello` component
vueapp.component("BodyComponent", {
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  computed: {
    formatDateIdeDate() {
      return new Date(this.ideaDate).toDateString();
    },
  },
  methods: {
    addInternalFaq() {
      this.internalFaq.push({
        id: this.internalFaq.length,
        value: "",
      });
    },
    addExternalFaq() {
      this.externalFaq.push({
        id: this.externalFaq.length,
        value: "",
      });
    },
    removeInternal(index) {
      this.internalFaq.splice(index, 1);
    },
    removeExternal(index) {
      this.externalFaq.splice(index, 1);
    },
  },
  data() {
    return {
      users: [],
      hideMain: false,
      title:
        "Introducing Amazon Echo Show 15: A smart display that blends into your home",
    };
  },
  validations() {
    return {
      title: {
        required,
      },
    };
  },
  mounted: function () {
    this.users.push({
      Id: 1,
      Name: "MohammadHijazi",
      gender: "M",
      inTeam: true,
      desc: "TEchnology innovation Designer makers",
    });
    this.users.push({
      Id: 1,
      Name: "MohammadHijazi",
      gender: "M",
      inTeam: true,
      desc: "TEchnology innovation Designer makers",
    });
    this.users.push({
      Id: 1,
      Name: "MohammadHijazi",
      gender: "M",
      inTeam: true,
      desc: "TEchnology innovation Designer makers",
    });
    this.users.push({
      Id: 1,
      Name: "MohammadHijazi",
      gender: "M",
      inTeam: true,
      desc: "TEchnology innovation Designer makers",
    });
  },
  template: `
    
    <div class="row" class="usesList">

        <div class="col-md-4"  v-for="user in users" :key="user.Id">
            <div class="userItem" >
         <div class="userpic"></div>
                <div class="username">{{user.Name}}</div>
                <div class="userdetails"><span class="gender">{{user.gender}}</span><span class="inteam">{{user.inTeam}}</span></div>
                <div class="userBio">{{user.desc}}</div>
            </div>
        </div>
    </div>
    `,
});
