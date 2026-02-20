import * as THREE from "three";
import "./style.css";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const renderer = new THREE.WebGLRenderer({
  antialias: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);
camera.position.z = 5;

const scene = new THREE.Scene();
const light = new THREE.AmbientLight(0xffffff); // soft white light
scene.add(light);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0xff00ff });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

let controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.update();

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  renderer.render(scene, camera);
}

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

animate();

class App {
  #camera;
  #scene;
  #renderer;
  constructor() {
    console.log("App initialized");
  }
  Initialize() {
    console.log("App initialized");
    this.#camera = camera;
    this.#scene = scene;
    this.#renderer = renderer;
  }
}

let app = new App();
app.Initialize();
