import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const container = document.getElementById('crystal-container');

// Scene setup
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000010);

// Camera
const camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.1, 100);
camera.position.set(0, 2, 5);

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(container.clientWidth, container.clientHeight);
container.appendChild(renderer.domElement);

// Crystal Geometry
const crystalGeometry = new THREE.ConeGeometry(0.5, 1.5, 6, 1);
crystalGeometry.translate(0, 0.75, 0);

const crystalMaterial = new THREE.MeshPhysicalMaterial({
    color: 0x00ffff,
    transmission: 1.0,
    thickness: 0.5,
    roughness: 0.1,
    metalness: 0.2,
    clearcoat: 1.0,
    clearcoatRoughness: 0.05,
    reflectivity: 1.0,
});

const crystal = new THREE.Mesh(crystalGeometry, crystalMaterial);
scene.add(crystal);

// Base
const baseGeometry = new THREE.CylinderGeometry(0.4, 0.6, 0.1, 32);
const baseMaterial = new THREE.MeshStandardMaterial({ color: 0x222222, metalness: 1, roughness: 0.3 });
const base = new THREE.Mesh(baseGeometry, baseMaterial);
base.position.y = -0.05;
scene.add(base);

// Lighting
scene.add(new THREE.AmbientLight(0xffffff, 0.4));
const pointLight = new THREE.PointLight(0x00ffff, 2, 10);
pointLight.position.set(2, 3, 2);
scene.add(pointLight);

// Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// Animate
function animate() {
    requestAnimationFrame(animate);
    crystal.rotation.y += 0.005;
    controls.update();
    renderer.render(scene, camera);
}
animate();

// Handle resizing
window.addEventListener('resize', () => {
    const width = container.clientWidth;
    const height = container.clientHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
});
