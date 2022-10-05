/* eslint-disable react-hooks/exhaustive-deps */
import logo from "./logo.svg";
import "./App.css";
import * as THREE from "three";
import { useEffect } from "react";

const size = {
  width: 800,
  height: 600,
};

function App() {
  const scene = new THREE.Scene();
  const redBox = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: "red" });
  const mesh = new THREE.Mesh(redBox, material);

  scene.add(mesh);

  const camera = new THREE.PerspectiveCamera(75, size.width / size.height);
  camera.position.z = 5;
  scene.add(camera);

  useEffect(() => {
    const canvas = document.getElementById("red-box");

    const renderer = new THREE.WebGLRenderer({ canvas });

    renderer.render(scene, camera);
    renderer.setSize(size.width, size.height);
  }, []);

  return (
    <div className="App">
      <canvas id="red-box" />
    </div>
  );
}

export default App;
