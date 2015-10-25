export default class BlackTriangle {
  constructor(selector) {
    this.angle = 0;

    var container = document.createElement("div");
    container.id = "triangle";
    container.className = "BlackTriangle";

    var triangle = document.createElement("div");
    triangle.className = "BlackTriangle-inner";
    container.appendChild(triangle)

    document.body.appendChild(container);

    this.innerEl = document.querySelector('.BlackTriangle-inner');
  }

  rotate(amount) {
    this.angle = (this.angle + amount) % 360;
  }

  render() {
    this.innerEl.style.transform = `rotate(${this.angle}deg)`;
  }
}
