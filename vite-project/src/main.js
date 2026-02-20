class App {
  constructor() {
    this.message = "Hello Vite!";
  }

  render() {
    const app = document.createElement("div");
    app.textContent = this.message;
    return app;
  }
}

const app = new App();
document.body.appendChild(app.render());
