// src: https://www.11ty.dev/docs/languages/javascript/#optional-data-method
class Test {
    // or `async data() {`
    // or `get data() {`
    data() {
      return {
        name: "Ted",
        // … other front matter keys
      };
    }
  
    render({name}) {
      // will always be "Ted"
      return `<p>${name}</p>`;
    }
  }
  
  module.exports = Test;