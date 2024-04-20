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
           
        }
    },
    validations() {
        return {
            title: {
                required
            },
          

        }
    },
    template: `
    
    <h2 class="title--large main-title">{{ title }}
    
    </h2>
    <div class="col-md-12">
                    <div class="form-group" :class="{ error: v$.title.$errors.length }">
                        <label for="exampleInputEmail1">Title</label>
                        <input type="text" class="form-control" id="title" aria-describedby="title" v-model="v$.title.$model"/>
                        <div class="input-errors" v-for="error of v$.title.$errors" :key="error.$uid">
                            <div class="error-msg">{{ error.$message }}</div>
                        </div>
                    </div>
                </div>
   
    `
  });