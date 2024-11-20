const {useVuelidate} = Vuelidate;
const {required, email} = VuelidateValidators;


//const {QrcodeCanvas, QrcodeSvg }=QrcodeVue;

vueapp.component('BodyComponent', {
    setup() {
        return {
            v$: useVuelidate()
        }
    },
    components: {
        QrcodeCanvas: QrcodeVue.QrcodeCanvas,
        QrcodeSvg: QrcodeVue.QrcodeSvg,
      },
          
    template: `BOdy
    <qrcode-canvas :value="'google.com'" level="H"></qrcode-canvas>
    <qrcode-svg :value="'google.com'" level="H"></qrcode-svg>
   
    `
  });