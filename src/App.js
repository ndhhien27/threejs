/* eslint-disable react-hooks/exhaustive-deps */
import "./App.css";
import {
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from "three";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const size = {
  width: 800,
  height: 600,
};

function App() {
  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });
  const scene = new Scene();
  const redBox = new BoxGeometry(1, 1, 1);
  const material = new MeshBasicMaterial({ color: "red" });
  const mesh = new Mesh(redBox, material);
  // mesh.position.set(0.7, -0.6, 1);

  scene.add(mesh);

  // const axesHelper = new AxesHelper(1);
  // scene.add(axesHelper);

  const aspectRatio = size.width / size.height;
  const camera = new PerspectiveCamera(75, size.width / size.height, 0.1, 100);
  // const camera = new THREE.OrthographicCamera(
  //   -1 * aspectRatio,
  //   1 * aspectRatio,
  //   1,
  //   -1,
  //   0.1,
  //   100
  // );
  camera.position.z = 2;
  // camera.position.x = 2;
  // camera.position.y = 2;
  camera.lookAt(mesh.position);
  scene.add(camera);

  // gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 });
  // gsap.to(mesh.position, { duration: 1, delay: 2, x: 0 });

  // const clock = new Clock();

  // useEffect(() => {
  //   window.addEventListener("mousemove", (e) => {
  //     setMouse({
  //       x: e.clientX / size.width - 0.5,
  //       y: -(e.clientY / size.height - 0.5),
  //     });
  //   });
  // }, []);

  useEffect(() => {
    const canvas = document.getElementById("red-box");

    const renderer = new WebGLRenderer({ canvas });

    renderer.setSize(size.width, size.height);

    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;

    // Animations
    const tick = () => {
      // Update objects
      // mesh.rotation.y += 0.01;
      // mesh.rotation.y = clock.getElapsedTime();
      // mesh.rotation.z += 0.01;

      // mesh.position.y += 0.01;
      // mesh.position.x += 0.01;

      // camera.position.y = mouse.y * 3;
      // camera.position.x = Math.sin(mouse.x * Math.PI * 2) * 3;
      // camera.position.z = Math.cos(mouse.x * Math.PI * 2) * 3;

      // camera.lookAt(mesh.position);

      controls.update();
      // Render
      renderer.render(scene, camera);

      // Call tick again on the next frame
      requestAnimationFrame(tick);
    };
    tick();
  }, [mouse]);

  return (
    <div className="App">
      <canvas id="red-box" />
    </div>
  );
}

export default App;
