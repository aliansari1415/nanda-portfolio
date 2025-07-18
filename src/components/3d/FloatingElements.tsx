import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';
import * as THREE from 'three';

interface FloatingCubeProps {
  position: [number, number, number];
  color: string;
  scale?: number;
  speed?: number;
}

export const FloatingCube = ({ position, color, scale = 1, speed = 1 }: FloatingCubeProps) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01 * speed;
      meshRef.current.rotation.y += 0.01 * speed;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export const FloatingSphere = ({ position, color, scale = 1, speed = 1 }: FloatingCubeProps) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005 * speed;
      meshRef.current.rotation.z += 0.005 * speed;
      meshRef.current.position.x = position[0] + Math.cos(state.clock.elapsedTime * speed * 0.8) * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.25;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <sphereGeometry args={[0.8, 32, 32]} />
      <meshStandardMaterial color={color} metalness={0.7} roughness={0.2} />
    </mesh>
  );
};

export const FloatingTorus = ({ position, color, scale = 1, speed = 1 }: FloatingCubeProps) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.008 * speed;
      meshRef.current.rotation.y += 0.015 * speed;
      meshRef.current.position.z = position[2] + Math.sin(state.clock.elapsedTime * speed * 1.2) * 0.15;
      meshRef.current.position.y = position[1] + Math.cos(state.clock.elapsedTime * speed * 0.7) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <torusGeometry args={[1, 0.4, 16, 100]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

interface AnimatedPlaneProps {
  position: [number, number, number];
  rotation: [number, number, number];
}

export const AnimatedPlane = ({ position, rotation }: AnimatedPlaneProps) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      // Subtle wave animation
      const time = state.clock.elapsedTime;
      meshRef.current.rotation.z = rotation[2] + Math.sin(time * 0.5) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={position} rotation={rotation}>
      <planeGeometry args={[2, 2, 32, 32]} />
      <meshStandardMaterial 
        color="#3b82f6" 
        transparent 
        opacity={0.1}
        wireframe
      />
    </mesh>
  );
};