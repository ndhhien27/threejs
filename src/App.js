/* eslint-disable react-hooks/exhaustive-deps */
import "./App.css";
import * as THREE from "three";
import { useEffect } from "react";
import gsap from "gsap";

const size = {
  width: 800,
  height: 600,
};

function App() {
  const scene = new THREE.Scene();
  const redBox = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: "red" });
  const mesh = new THREE.Mesh(redBox, material);
  // mesh.position.set(0.7, -0.6, 1);

  scene.add(mesh);

  const axesHelper = new THREE.AxesHelper(1);
  // scene.add(axesHelper);

  const camera = new THREE.PerspectiveCamera(75, size.width / size.height);
  camera.position.z = 3;
  // camera.position.x = 1;
  // camera.position.y = 1;
  scene.add(camera);

  gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 });
  gsap.to(mesh.position, { duration: 1, delay: 2, x: 0 });

  useEffect(() => {
    const canvas = document.getElementById("red-box");

    const renderer = new THREE.WebGLRenderer({ canvas });

    renderer.setSize(size.width, size.height);
    // Animations
    const tick = () => {
      // Update objects
      // mesh.rotation.y += 0.01;
      // mesh.rotation.x += 0.01;
      // mesh.rotation.z += 0.01;

      // mesh.position.y += 0.01;
      // mesh.position.x += 0.01;

      // camera.position.y += 0.01;
      // camera.position.x += 0.01;

      // camera.lookAt(mesh.position);

      // Render
      renderer.render(scene, camera);

      // Call tick again on the next frame
      window.requestAnimationFrame(tick);
    };
    tick();
  }, []);

  return (
    <div className="App">
      <canvas id="red-box" />
    </div>
  );
}

export default App;
