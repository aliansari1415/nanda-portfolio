import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface WaveGeometryProps {
  width?: number;
  height?: number;
  widthSegments?: number;
  heightSegments?: number;
  color?: string;
  opacity?: number;
}

export const WaveGeometry = ({ 
  width = 10, 
  height = 10, 
  widthSegments = 64, 
  heightSegments = 64,
  color = "#3b82f6",
  opacity = 0.3
}: WaveGeometryProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const originalPositions = useRef<Float32Array>();

  useEffect(() => {
    if (meshRef.current) {
      const geometry = meshRef.current.geometry as THREE.PlaneGeometry;
      originalPositions.current = geometry.attributes.position.array.slice() as Float32Array;
    }
  }, []);

  useFrame((state) => {
    if (meshRef.current && originalPositions.current) {
      const geometry = meshRef.current.geometry as THREE.PlaneGeometry;
      const positions = geometry.attributes.position.array as Float32Array;
      const time = state.clock.elapsedTime;

      for (let i = 0; i < positions.length; i += 3) {
        const x = originalPositions.current[i];
        const y = originalPositions.current[i + 1];
        
        positions[i + 2] = Math.sin(x * 0.5 + time) * 0.5 + 
                          Math.sin(y * 0.3 + time * 1.5) * 0.3;
      }
      
      geometry.attributes.position.needsUpdate = true;
      geometry.computeVertexNormals();
    }
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
      <planeGeometry args={[width, height, widthSegments, heightSegments]} />
      <meshStandardMaterial 
        color={color}
        transparent
        opacity={opacity}
        wireframe
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

export const DNA = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
  });

  const spheres = [];
  const connections = [];
  const turns = 4;
  const spheresPerTurn = 8;
  const totalSpheres = turns * spheresPerTurn;

  for (let i = 0; i < totalSpheres; i++) {
    const angle = (i / spheresPerTurn) * Math.PI * 2;
    const height = (i / totalSpheres) * 6 - 3;
    const radius = 1.5;
    
    const x1 = Math.cos(angle) * radius;
    const z1 = Math.sin(angle) * radius;
    const x2 = Math.cos(angle + Math.PI) * radius;
    const z2 = Math.sin(angle + Math.PI) * radius;

    spheres.push(
      <mesh key={`sphere1-${i}`} position={[x1, height, z1]}>
        <sphereGeometry args={[0.1, 8, 8]} />
        <meshStandardMaterial color="#3b82f6" />
      </mesh>
    );

    spheres.push(
      <mesh key={`sphere2-${i}`} position={[x2, height, z2]}>
        <sphereGeometry args={[0.1, 8, 8]} />
        <meshStandardMaterial color="#ec4899" />
      </mesh>
    );

    // Connection cylinder instead of line
    const midPoint = new THREE.Vector3((x1 + x2) / 2, height, (z1 + z2) / 2);
    const direction = new THREE.Vector3(x2 - x1, 0, z2 - z1);
    const length = direction.length();
    
    connections.push(
      <mesh key={`connection-${i}`} position={[midPoint.x, midPoint.y, midPoint.z]}>
        <cylinderGeometry args={[0.02, 0.02, length, 8]} />
        <meshStandardMaterial color="#8b5cf6" opacity={0.5} transparent />
      </mesh>
    );
  }

  return (
    <group ref={groupRef}>
      {spheres}
      {connections}
    </group>
  );
};