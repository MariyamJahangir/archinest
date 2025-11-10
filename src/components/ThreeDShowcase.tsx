import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function RotatingBox() {
  return (
    <mesh rotation={[1, 1, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="royalblue" />
    </mesh>
  );
}

const ThreeDShowcase = () => (
  <section className="py-16 bg-gray-100 flex justify-center">
    <div style={{ width: 400, height: 300 }}>
      <Canvas>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} />
        <RotatingBox />
        <OrbitControls />
      </Canvas>
    </div>
  </section>
);

export default ThreeDShowcase;
