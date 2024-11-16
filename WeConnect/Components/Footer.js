// Register the `hello` component
vueapp.component('FooterCompenent', {
    data: () => ({
      year: (new Date()).getFullYear()
    }),
    template: `
      <div>        
        <h8>Copy rights @, {{year}}</h8>
      </div>
    `
  });