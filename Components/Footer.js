// Register the `hello` component
vueapp.component('FooterCompenent', {
    data: () => ({
      name: 'World'
    }),
    template: `
      <div>
        
        <h4>Footer, {{name}}</h4>
      </div>
    `
  });