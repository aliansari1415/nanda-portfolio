import { Canvas } from '@react-three/fiber';
import { Float, Sphere, Box, Torus } from '@react-three/drei';
import { Suspense, useCallback, memo } from 'react';
import * as THREE from 'three';

interface Floating3DBackgroundProps {
  density?: 'low' | 'medium' | 'high';
  colors?: string[];
}

// Memoized shape components for better performance
const Shape = memo(({ shape, color }: { shape: string; color: string }) => {
  switch (shape) {
    case 'sphere':
      return (
        <mesh>
          <sphereGeometry args={[1, 16, 16]} />
          <meshStandardMaterial color={color} metalness={0.2} roughness={0.8} />
        </mesh>
      );
    case 'box':
      return (
        <mesh>
          <boxGeometry args={[1.5, 1.5, 1.5]} />
          <meshStandardMaterial color={color} metalness={0.2} roughness={0.8} />
        </mesh>
      );
    case 'torus':
      return (
        <mesh>
          <torusGeometry args={[1, 0.4, 16, 32]} />
          <meshStandardMaterial color={color} metalness={0.2} roughness={0.8} />
        </mesh>
      );
    default:
      return null;
  }
});

Shape.displayName = 'Shape';

const Floating3DBackground = ({ density = 'medium', colors = ['#3b82f6', '#ec4899', '#8b5cf6'] }: Floating3DBackgroundProps) => {
  const getElementCount = () => {
    switch (density) {
      case 'low': return 3;
      case 'medium': return 6;
      case 'high': return 9;
      default: return 6;
    }
  };

  const elements = Array.from({ length: getElementCount() }, (_, i) => {
    const shapes = ['sphere', 'box', 'torus'];
    const shape = shapes[i % 3];
    const color = colors[i % colors.length];
    const position: [number, number, number] = [
      (Math.random() - 0.5) * 20,
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10
    ];
    const scale = 0.3 + Math.random() * 0.4;

    return { shape, color, position, scale, key: i };
  });

  return (
    <div className="absolute inset-0 -z-10 opacity-20">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
          logarithmicDepthBuffer: true,
          preserveDrawingBuffer: true
        }}
        legacy={false}
        dpr={Math.min(2, window.devicePixelRatio)} // More stable pixel ratio handling
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 5, 5]} intensity={0.6} />
          
          {elements.map(({ shape, color, position, scale, key }) => (
            <Float
              key={key}
              speed={1 + Math.random()}
              rotationIntensity={0.5 + Math.random() * 0.5}
              floatIntensity={0.3 + Math.random() * 0.4}
            >
              <group position={position} scale={scale}>
                <Shape shape={shape} color={color} />
              </group>
            </Float>
          ))}
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Floating3DBackground;