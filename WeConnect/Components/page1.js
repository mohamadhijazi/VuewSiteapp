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
      imgUrl:"../Innovation_files/images/image.jpg"
    });
    this.users.push({
      Id: 1,
      Name: "MohammadHijazi",
      gender: "M",
      inTeam: true,
      desc: "TEchnology innovation Designer makers",
      imgUrl:"../Innovation_files/images/image.jpg"
    });
    this.users.push({
      Id: 1,
      Name: "MohammadHijazi",
      gender: "M",
      inTeam: true,
      desc: "TEchnology innovation Designer makers",
      imgUrl:"../Innovation_files/images/image.jpg"
    });
    this.users.push({
      Id: 1,
      Name: "MohammadHijazi",
      gender: "M",
      inTeam: true,
      desc: "TEchnology innovation Designer makers",
      imgUrl:"../Innovation_files/images/image.jpg"
    });
     this.users.push({
      Id: 1,
      Name: "MohammadHijazi",
      gender: "M",
      inTeam: true,
      desc: "TEchnology innovation Designer makers",
      imgUrl:"../Innovation_files/images/image.jpg"
    });
     this.users.push({
      Id: 1,
      Name: "MohammadHijazi",
      gender: "M",
      inTeam: true,
      desc: "TEchnology innovation Designer makers",
      imgUrl:"../Innovation_files/images/image.jpg"
    });
     this.users.push({
      Id: 1,
      Name: "MohammadHijazi",
      gender: "M",
      inTeam: true,
      desc: "TEchnology innovation Designer makers",
      imgUrl:"../Innovation_files/images/image.jpg"
    });
     this.users.push({
      Id: 1,
      Name: "MohammadHijazi",
      gender: "M",
      inTeam: true,
      desc: "TEchnology innovation Designer makers",
      imgUrl:"../Innovation_files/images/image.jpg"
    });
     this.users.push({
      Id: 1,
      Name: "MohammadHijazi",
      gender: "M",
      inTeam: true,
      desc: "TEchnology innovation Designer makers",
      imgUrl:"../Innovation_files/images/image.jpg"
    });
     this.users.push({
      Id: 1,
      Name: "MohammadHijazi",
      gender: "M",
      inTeam: true,
      desc: "TEchnology innovation Designer makers",
      imgUrl:"../Innovation_files/images/image.jpg"
    });
     this.users.push({
      Id: 1,
      Name: "MohammadHijazi",
      gender: "M",
      inTeam: true,
      desc: "TEchnology innovation Designer makers",
      imgUrl:"../Innovation_files/images/image.jpg",
      email:"mailto:piotr@mailtrap.io",
      teams:"https://teams.microsoft.com/l/chat/0/0?users=m_hijazi@outlook.com"
    });
  },
  template: `
<div class="row" class="usesList">

    <div class="col-md-3" v-for="user in users" :key="user.Id">
        <div class="userItem">
            <div class="userpic"><img :src="user.imgUrl" /></div>
            <div class="username">{{user.Name}}</div>
            <div class="useractionLinks">
                <ul>
                    <li class="teamsLink"><a target="_blank" :href="user.teams">Teams</a></li>
                    <li class="emailLink"><a target="_blank" :href="user.email">Email</a></li>
                    <li class="sendLinkInvitation">Send Invitation</li>
                    </ul>
            </div>
            <div class="userdetails"><span class="gender">{{user.gender}}</span>
                <span
                    class="inteam">{{user.inTeam}}</span></div>
            <div class="userBio">{{user.desc}}</div>
        </div>
    </div>
</div>
`,
});
