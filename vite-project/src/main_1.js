import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

class App {
  #threejs_ = null;
  #camera_ = null;
  #scene_ = null;
  #controls_ = null;

  constructor() {}

  Initialize() {
    this.#threejs_ = new THREE.WebGLRenderer();
    this.#threejs_.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.#threejs_.domElement);

    const aspect = window.innerWidth / window.innerHeight;
    this.#camera_ = new THREE.PerspectiveCamera(50, aspect, 0.1, 2000);
    this.#camera_.position.z = 5;

    this.#controls_ = new OrbitControls(
      this.#camera_,
      this.#threejs_.domElement,
    );
    this.#controls_.enableDamping = true;
    this.#controls_.target.set(0, 0, 0);

    this.#scene_ = new THREE.Scene();

    const mesh = new THREE.Mesh(
      new THREE.BoxGeometry(),
      new THREE.MeshBasicMaterial({
        color: 0xff0000,
        wireframe: true,
      }),
    );
    this.#scene_.add(mesh);
  }

  Run() {
    const render = () => {
      this.#controls_.update();
      this.#threejs_.render(this.#scene_, this.#camera_);
      requestAnimationFrame(render);
    };

    render();
  }
}

const APP_ = new App();
APP_.Initialize();
APP_.Run();
