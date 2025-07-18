import { Canvas } from '@react-three/fiber';
import { Float, Text3D, Center } from '@react-three/drei';
import { Suspense } from 'react';

const Interactive3DLogo = () => {
  return (
    <div className="w-32 h-32 mx-auto mb-8">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[2, 2, 1]} intensity={1} />
          
          <Float
            speed={2}
            rotationIntensity={1}
            floatIntensity={0.5}
          >
            <Center>
              <mesh>
                <boxGeometry args={[2, 2, 2]} />
                <meshStandardMaterial 
                  color="#3b82f6"
                  metalness={0.8}
                  roughness={0.2}
                />
              </mesh>
              <Text3D
                font="/fonts/helvetiker_regular.typeface.json"
                size={0.8}
                height={0.1}
                position={[0, 0, 1.1]}
              >
                H
                <meshStandardMaterial color="white" />
              </Text3D>
            </Center>
          </Float>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Interactive3DLogo;