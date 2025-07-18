import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import { Suspense } from 'react';
import { FloatingCube, FloatingSphere, FloatingTorus, AnimatedPlane } from './FloatingElements';
import { ParticleSystem, ConnectedParticles } from './ParticleSystem';

const Scene3D = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 10]} />
          
          {/* Lighting */}
          <ambientLight intensity={0.4} />
          <directionalLight 
            position={[10, 10, 5]} 
            intensity={1} 
            color="#3b82f6"
            castShadow
          />
          <pointLight position={[-10, -10, -5]} intensity={0.5} color="#ec4899" />
          
          {/* Environment */}
          <Environment preset="city" />
          
          {/* Floating Elements */}
          <FloatingCube position={[-3, 2, 0]} color="#3b82f6" scale={0.5} speed={0.8} />
          <FloatingCube position={[4, -1, -2]} color="#ec4899" scale={0.3} speed={1.2} />
          <FloatingCube position={[-2, -3, 2]} color="#8b5cf6" scale={0.4} speed={0.6} />
          
          <FloatingSphere position={[2, 3, -1]} color="#3b82f6" scale={0.6} speed={0.9} />
          <FloatingSphere position={[-4, 0, 3]} color="#06b6d4" scale={0.4} speed={1.1} />
          
          <FloatingTorus position={[3, -2, 1]} color="#f59e0b" scale={0.3} speed={0.7} />
          <FloatingTorus position={[-1, 4, -3]} color="#ef4444" scale={0.2} speed={1.3} />
          
          {/* Animated Planes */}
          <AnimatedPlane position={[0, 0, -5]} rotation={[0, 0, 0]} />
          <AnimatedPlane position={[0, 0, 5]} rotation={[0, Math.PI, 0]} />
          
          {/* Particle Systems */}
          <ParticleSystem count={150} color="#3b82f6" />
          <ConnectedParticles count={30} />
          
          {/* Controls */}
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;