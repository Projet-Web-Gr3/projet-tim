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

// Load the file
loader.load(
  //`models/${objToRender}/scene.gltf`,
  `wp-content/themes/projet-tim/models/scene.gltf`,
  function (gltf) {
    // If the file is loaded, add it to the scene
    object = gltf.scene;

    // Inverser le modèle en appliquant une mise à l'échelle négative
    object.scale.x *= -1;
    object.scale.y *= -1;
    object.scale.z *= -1;

    scene.add(object);
  },
  function (xhr) {
    // While it is loading, log the progress
    console.log((xhr.loaded / xhr.total * 100) + '% loaded');
  },
  function (error) {
    // If there is an error, log it
    console.error(error);
  }
);

// Instantiate a new renderer and set its size
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

// Add the renderer to the DOM
document.getElementById("container3D").appendChild(renderer.domElement);

// Set initial camera position (further away)
camera.position.z = 10; // Plus éloigné

// Add lights to the scene
const redLight = new THREE.DirectionalLight(0xAA1B52, 2.9);
scene.add(redLight);

const topLight = new THREE.DirectionalLight(0xffffff, 2);
topLight.position.set(500, 0, 500);
topLight.castShadow = true;
scene.add(topLight);

const ambientLight = new THREE.AmbientLight(0x333333, 3);
scene.add(ambientLight);

// Variable to keep track of rotation speed
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

    // Interpolate the values for smooth scrolling
    smoothScrollY = lerp(smoothScrollY, scrollY, 0.05);
    smoothMouseX = lerp(smoothMouseX, mouseX, 0.05);

    if (object) {
        // Apply rotation at the beginning
        object.rotation.y = smoothScrollY * 0.0008; // Rotation based on scroll
        object.position.x = smoothMouseX * 0.5; // Position based on mouse movement
    }

    // Adjust the zoom based on scroll (slower zoom)
    camera.position.z = Math.max(5, 7 - smoothScrollY * 0.001); // S'arrêter à 5 pour ne pas zoomer trop près

    // Render the scene after all transformations
    renderer.render(scene, camera);
}

window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

animate();
