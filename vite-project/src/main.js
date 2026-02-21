import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const threejs = new THREE.WebGLRenderer({ antialias: true });
threejs.setSize(400, 400);
document.body.appendChild(threejs.domElement);

const camera = new THREE.PerspectiveCamera();
camera.position.z = 5;

const controls = new OrbitControls(camera, threejs.domElement);
controls.enableDamping = true;
controls.target.set(0, 0, 0);

const scene = new THREE.Scene();

const mesh = new THREE.Mesh(
  new THREE.BoxGeometry(),
  new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true }),
);
scene.add(mesh);

function render() {
  controls.update();
  mesh.rotation.y += 0.01;
  threejs.render(scene, camera);
  requestAnimationFrame(render);
}
render();
