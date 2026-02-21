import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

class App {
  #threejs = null;
  #camera = null;
  #scene = null;
  #controls = null;
  #mesh = null;

  constructor() {}
  Initialize() {
    this.#threejs = new THREE.WebGLRenderer({ antialias: true });
    this.#threejs.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.#threejs.domElement);

    const aspect = window.innerWidth / window.innerHeight;
    const camera = new THREE.PerspectiveCamera(50, aspect, 0.1, 2000);
    camera.position.z = 5;
    this.#camera = camera;

    this.#controls = new OrbitControls(this.#camera, this.#threejs.domElement);
    this.#controls.enableDamping = true;
    this.#controls.target.set(0, 0, 0);

    this.#scene = new THREE.Scene();

    this.#mesh = new THREE.Mesh(
      new THREE.BoxGeometry(),
      new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true }),
    );
    this.#scene.add(this.#mesh);
  }

  Run() {
    const render = () => {
      this.#controls.update();
      this.#mesh.rotation.y += 0.01;
      this.#threejs.render(this.#scene, this.#camera);
      requestAnimationFrame(render);
    };
    render();
  }
}

const Appplication = new App();
Appplication.Initialize();
Appplication.Run();
