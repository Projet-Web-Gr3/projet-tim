/**
 * Importation de Three.js pour le model 3D
 */

// Import the THREE.js library
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
// To allow for importing the .gltf file
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

// Create a Three.JS Scene
const scene = new THREE.Scene();
// Create a new camera with positions and angles
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Keep the 3D object on a global variable so we can access it later
let object;

// Set which object to render
let objToRender = 'Model';

// Instantiate a loader for the .gltf file
const loader = new GLTFLoader();

loader.load(
  `models/${objToRender}/scene.gltf`,
  function (gltf) {

    object = gltf.scene;

    object.scale.x *= -1;
    object.scale.y *= -1;
    object.scale.z *= -1;

    scene.add(object);
  },
  function (xhr) {
    console.log((xhr.loaded / xhr.total * 100) + '% loaded');
  },
  function (error) {  
    console.error(error);
  }
);

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);


document.getElementById("container3D").appendChild(renderer.domElement);


camera.position.z = 10; 
const redLight = new THREE.DirectionalLight(0xAA1B52, 4.5);
scene.add(redLight);

const topLight = new THREE.DirectionalLight(0xffffff, 2);
topLight.position.set(500, 0, 500);
topLight.castShadow = true;
scene.add(topLight);

const ambientLight = new THREE.AmbientLight(0x333333, 6);
scene.add(ambientLight);

let scrollY = 0;
let mouseX = 0;
let smoothScrollY = 0;
let smoothMouseX = 0;

window.addEventListener('scroll', () => {
    scrollY = window.scrollY;
});

window.addEventListener('mousemove', (event) => {
    mouseX = (event.clientX / window.innerWidth) * 2 - 1;
});

function lerp(start, end, t) {
    return start * (1 - t) + end * t;
}

function animate() {
    requestAnimationFrame(animate);

    // smooth scrolling
    smoothScrollY = lerp(smoothScrollY, scrollY, 0.05);
    smoothMouseX = lerp(smoothMouseX, mouseX, 0.05);

    if (object) {
        // rotation
        object.rotation.y = smoothScrollY * 0.0008; // Rotation
        object.position.x = smoothMouseX * 0.5; // Position
    }

    //scroll
    camera.position.z = Math.max(5, 7 - smoothScrollY * 0.001); 

    renderer.render(scene, camera);
}

window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

animate();
