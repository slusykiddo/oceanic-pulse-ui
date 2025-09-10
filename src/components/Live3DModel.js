import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, TransformControls, Stats } from '@react-three/drei';
import * as THREE from 'three';

// Component to handle live data updates to the model
function LiveModel({ modelUrl, data, dataKey }) {
  const meshRef = useRef();
  const [geometry, setGeometry] = useState(null);
  const [originalPositions, setOriginalPositions] = useState(null);
  
  // Load your model
  useEffect(() => {
    // In a real implementation, you would load your actual model here
    // For this example, we'll create a simple geometry
    const newGeometry = new THREE.PlaneGeometry(10, 10, 100, 100);
    setGeometry(newGeometry);
    setOriginalPositions(new Float32Array(newGeometry.attributes.position.array));
  }, [modelUrl]);
  
  // Apply data-driven transformations
  useFrame(() => {
    if (meshRef.current && geometry && originalPositions && data) {
      const positions = meshRef.current.geometry.attributes.position.array;
      const time = Date.now() * 0.001;
      
      for (let i = 0; i < positions.length; i += 3) {
        // Get the original position
        const originalY = originalPositions[i + 1];
        
        // Calculate data influence (simulating live data changes)
        const dataValue = data[dataKey] || 0;
        const noise = 0.1 * Math.sin(time + originalPositions[i] * 0.5);
        
        // Modify vertex position based on data
        positions[i + 2] = originalY + (dataValue * 0.5) + noise;
      }
      
      meshRef.current.geometry.attributes.position.needsUpdate = true;
      meshRef.current.geometry.computeVertexNormals();
    }
  });

  if (!geometry) return null;

  return (
    <mesh ref={meshRef} geometry={geometry} rotation={[-Math.PI / 2, 0, 0]}>
      <meshPhongMaterial
        color="#4a8fb9"
        wireframe={false}
        flatShading={true}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

export default function Live3DModel({ data, isLoading }) {
  const [modelUrl] = useState('/models/ocean-terrain.glb'); // Path to your exported model
  
  return (
    <div style={{ height: '500px', width: '100%', position: 'relative' }}>
      <Canvas camera={{ position: [15, 15, 15], fov: 60 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <LiveModel 
          modelUrl={modelUrl} 
          data={data} 
          dataKey="waterLevel" 
        />
        
        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
        <gridHelper args={[20, 20]} />
        <axesHelper args={[5]} />
        
        {/* Show performance stats in development */}
        {process.env.NODE_ENV === 'development' && <Stats />}
      </Canvas>
      
      {/* Data overlay */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '20px',
        background: 'rgba(0, 0, 0, 0.7)',
        color: 'white',
        padding: '10px 15px',
        borderRadius: '5px',
        fontFamily: 'monospace'
      }}>
        <h4>Live Ocean Data</h4>
        {isLoading ? (
          <p>Loading data...</p>
        ) : (
          <div>
            <p>Water Level: {data?.waterLevel || 0}m</p>
            <p>Temperature: {data?.temperature || 0}°C</p>
            <p>Salinity: {data?.salinity || 0}ppm</p>
            <p>Last Update: {data?.timestamp || 'N/A'}</p>
          </div>
        )}
      </div>
    </div>
  );
}
