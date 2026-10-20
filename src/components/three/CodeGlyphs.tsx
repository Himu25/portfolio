"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Center, Float, Text3D } from "@react-three/drei";
import { Suspense, useEffect, useRef } from "react";
import * as THREE from "three";

const FONT = "/fonts/helvetiker_bold.typeface.json";

type Glyph = {
  text: string;
  position: [number, number, number];
  rotation: [number, number, number];
  size: number;
  color: string;
};

// Arranged around the editor window, which sits in the middle of this canvas.
const GLYPHS: Glyph[] = [
  { text: "{ }", position: [-3.9, 2.7, -0.5], rotation: [0.2, 0.5, -0.1], size: 0.75, color: "#2563eb" },
  { text: "</>", position: [3.7, 2.9, -0.8], rotation: [0.1, -0.5, 0.15], size: 0.7, color: "#0b1220" },
  { text: "=>", position: [3.9, -2.1, 0.2], rotation: [-0.2, -0.6, 0.1], size: 0.65, color: "#0891b2" },
  { text: "( )", position: [-4.1, -2.4, 0.3], rotation: [-0.1, 0.6, 0.12], size: 0.6, color: "#0b1220" },
  { text: ";", position: [-2.2, 3.1, -1.6], rotation: [0.3, 0.3, 0.2], size: 0.7, color: "#0891b2" },
  { text: "[ ]", position: [1.4, -3.1, -1.2], rotation: [-0.3, -0.2, -0.1], size: 0.55, color: "#2563eb" },
  { text: "&&", position: [0.6, 3.3, -2.2], rotation: [0.2, -0.2, 0], size: 0.5, color: "#94a3b8" },
  { text: "#", position: [-1.2, -3.2, -2], rotation: [-0.2, 0.4, 0.2], size: 0.55, color: "#94a3b8" },
];

const pointer = { x: 0, y: 0 };

function Glyphs() {
  const group = useRef<THREE.Group>(null);

  useFrame((_, dt) => {
    const g = group.current;
    if (!g) return;
    const k = 1 - Math.pow(0.03, dt);
    g.rotation.y += (pointer.x * 0.35 - g.rotation.y) * k;
    g.rotation.x += (pointer.y * 0.25 - g.rotation.x) * k;
  });

  return (
    <group ref={group}>
      {GLYPHS.map((g, i) => (
        <Float key={g.text} speed={1.2 + i * 0.15} rotationIntensity={0.6} floatIntensity={0.9}>
          <group position={g.position} rotation={g.rotation}>
            <Center>
              <Text3D
                font={FONT}
                size={g.size}
                height={g.size * 0.35}
                bevelEnabled
                bevelSize={0.02}
                bevelThickness={0.03}
                bevelSegments={4}
                curveSegments={8}
              >
                {g.text}
                <meshPhysicalMaterial
                  color={g.color}
                  roughness={0.25}
                  metalness={0.1}
                  clearcoat={1}
                  clearcoatRoughness={0.15}
                />
              </Text3D>
            </Center>
          </group>
        </Float>
      ))}
    </group>
  );
}

export default function CodeGlyphs() {
  const reduced =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <Canvas
      camera={{ position: [0, 0, 9], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      frameloop={reduced ? "demand" : "always"}
    >
      <ambientLight intensity={0.9} />
      <directionalLight position={[4, 6, 6]} intensity={2.2} />
      <directionalLight position={[-5, -2, 4]} intensity={0.8} color="#bfdbfe" />
      <Suspense fallback={null}>
        <Glyphs />
      </Suspense>
    </Canvas>
  );
}
