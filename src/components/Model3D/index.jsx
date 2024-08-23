import React, { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import landModel from '../../assets/glb/land.glb';
import cloudModel1 from '../../assets/glb/cloud1.glb';
import cloudModel2 from '../../assets/glb/cloud2.glb';
import cloudModel3 from '../../assets/glb/cloud3.glb';
import departmentModel from '../../assets/glb/hyundai_department.glb';
import boardModel from '../../assets/glb/board.glb';
import fountainModel from '../../assets/glb/fountain.glb';
import jobMoaModel from '../../assets/glb/job_moa.glb';
import investModel from '../../assets/glb/invest.glb';
import characterModel from '../../assets/glb/heendy_with_closet.glb';
import jellyModel from '../../assets/glb/jelly.glb';
import logoModel from '../../assets/glb/logo.glb';

function Model({ url, refProp, scale, brightness, onLoad }) {
  const { scene: loadedScene } = useGLTF(url);

  useEffect(() => {
    if (loadedScene && brightness) {
      loadedScene.traverse((child) => {
        if (child.isMesh && child.material) {
          child.material.color = new THREE.Color(1, 1, 1);
          child.material.emissive = new THREE.Color(
            brightness,
            brightness,
            brightness
          );
          child.material.emissiveIntensity = 1;
        }
      });
    }

    if (onLoad) {
      onLoad(loadedScene);
    }
  }, [loadedScene, brightness, onLoad]);

  return <primitive ref={refProp} object={loadedScene} scale={scale} />;
}

export default function Model3D() {
  const landRef = useRef();
  const departmentRef = useRef();
  const boardRef = useRef();
  const fountainRef = useRef();
  const jobMoaRef = useRef();
  const investRef = useRef();
  const characterRef = useRef();
  const jellyRef = useRef();
  const logoRef = useRef();

  const cloudRef1 = useRef();
  const cloudRef2 = useRef();
  const cloudRef3 = useRef();

  const handleModelLoad = (loadedScene, name) => {
    if (name === 'Land' && landRef.current) {
      const landBox = new THREE.Box3().setFromObject(landRef.current);

      departmentRef.current.position.set(
        landBox.getCenter(new THREE.Vector3()).x + 0.6,
        landBox.max.y - 0.63,
        landBox.getCenter(new THREE.Vector3()).z + 0.6
      );
      boardRef.current.rotation.set(0, Math.PI / 3.5, 0);
      boardRef.current.position.set(
        landBox.getCenter(new THREE.Vector3()).x - 0.3,
        landBox.max.y - 0.7,
        landBox.getCenter(new THREE.Vector3()).z + 0.8
      );
      departmentRef.current.rotation.set(0, Math.PI / 3.5, 0);
      fountainRef.current.position.set(
        landBox.getCenter(new THREE.Vector3()).x + 1.45,
        landBox.max.y - 0.63,
        landBox.getCenter(new THREE.Vector3()).z + 1
      );
      jobMoaRef.current.position.set(
        landBox.getCenter(new THREE.Vector3()).x - 1.55,
        landBox.max.y - 0.63,
        landBox.getCenter(new THREE.Vector3()).z + 2.5
      );
      investRef.current.position.set(
        landBox.getCenter(new THREE.Vector3()).x + 0.9,
        landBox.max.y - 0.31,
        landBox.getCenter(new THREE.Vector3()).z - 1.6
      );
      characterRef.current.position.set(
        landBox.getCenter(new THREE.Vector3()).x + 2.75,
        landBox.max.y - 0.68,
        landBox.getCenter(new THREE.Vector3()).z - 0.1
      );
      characterRef.current.rotation.set(0, Math.PI / 8, 0);
      jellyRef.current.position.set(
        landBox.getCenter(new THREE.Vector3()).x + 0.2,
        landBox.max.y - 0.61,
        landBox.getCenter(new THREE.Vector3()).z + 1.4
      );
      jellyRef.current.rotation.set(0, Math.PI / 4, 0);
      logoRef.current.position.set(
        landBox.getCenter(new THREE.Vector3()).x + 1.6,
        landBox.max.y - 0.51,
        landBox.getCenter(new THREE.Vector3()).z + 1.4
      );
      logoRef.current.rotation.set(0, Math.PI / 3.4, 0);
    }

    cloudRef1.current.position.set(-2, 2.2, -2);
    cloudRef1.current.rotation.set(0, Math.PI / 4, 0);

    cloudRef2.current.position.set(-0.2, 2.5, 2);
    cloudRef2.current.rotation.set(0, Math.PI / 2, 0);

    cloudRef3.current.position.set(2, 2.4, -1);
    cloudRef3.current.rotation.set(0, Math.PI / 6, 0);
  };

  return (
    <Canvas
      shadows
      style={{
        width: '100vw',
        height: '100vh',
        margin: 'auto',
        background:
          'linear-gradient(180deg, rgba(202, 119, 0, 0.3), rgba(30, 157, 139, 0.3))',
      }}
      camera={{ position: [20, 10, 15], fov: 13 }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[0, 50, 0]}
        intensity={1.5}
        castShadow
        shadow-mapSize={{ width: 2048, height: 2048 }}
      />
      <directionalLight position={[0, 5, 10]} intensity={2.2} />
      <spotLight
        position={[
          (logoRef.current?.position.x || 0) + 1,
          (logoRef.current?.position.y || 0) + 0.4,
          (logoRef.current?.position.z || 0) + 0.8,
        ]}
        intensity={0.1}
        angle={1}
        penumbra={1}
        castShadow
        shadow-mapSize={{ width: 2048, height: 2048 }}
        target={logoRef.current}
      />
      <Model
        url={landModel}
        refProp={landRef}
        onLoad={(scene) => handleModelLoad(scene, 'Land')}
      />
      <Model
        url={cloudModel1}
        refProp={cloudRef1}
        scale={new THREE.Vector3(0.2, 0.2, 0.2)}
        brightness={0.8}
        onLoad={(scene) => handleModelLoad(scene, 'Cloud 1')}
      />
      <Model
        url={cloudModel2}
        refProp={cloudRef2}
        scale={new THREE.Vector3(0.2, 0.2, 0.2)}
        brightness={0.8}
        onLoad={(scene) => handleModelLoad(scene, 'Cloud 2')}
      />
      <Model
        url={cloudModel3}
        refProp={cloudRef3}
        scale={new THREE.Vector3(0.2, 0.2, 0.2)}
        brightness={0.8}
        onLoad={(scene) => handleModelLoad(scene, 'Cloud 3')}
      />
      <Model
        url={departmentModel}
        refProp={departmentRef}
        scale={new THREE.Vector3(0.07, 0.07, 0.04)}
        onLoad={(scene) => handleModelLoad(scene, 'Department')}
      />
      <Model
        url={boardModel}
        refProp={boardRef}
        scale={new THREE.Vector3(0.15, 0.15, 0.15)}
        onLoad={(scene) => handleModelLoad(scene, 'Board')}
      />
      <Model
        url={fountainModel}
        refProp={fountainRef}
        scale={new THREE.Vector3(0.1, 0.1, 0.1)}
        onLoad={(scene) => handleModelLoad(scene, 'Fountain')}
      />
      <Model
        url={jobMoaModel}
        refProp={jobMoaRef}
        scale={new THREE.Vector3(0.15, 0.15, 0.15)}
        onLoad={(scene) => handleModelLoad(scene, 'Job Moa')}
      />
      <Model
        url={investModel}
        refProp={investRef}
        scale={new THREE.Vector3(0.1, 0.1, 0.1)}
        onLoad={(scene) => handleModelLoad(scene, 'Bank')}
      />
      <Model
        url={characterModel}
        refProp={characterRef}
        scale={new THREE.Vector3(0.2, 0.2, 0.2)}
        onLoad={(scene) => handleModelLoad(scene, 'Character')}
      />
      <Model
        url={jellyModel}
        refProp={jellyRef}
        scale={new THREE.Vector3(0.1, 0.1, 0.1)}
        onLoad={(scene) => handleModelLoad(scene, 'Jelly')}
      />
      <Model
        url={logoModel}
        refProp={logoRef}
        scale={new THREE.Vector3(0.5, 0.5, 0.5)}
        onLoad={(scene) => handleModelLoad(scene, 'Logo')}
      />

      <OrbitControls target={[0, 1, 0]} />
    </Canvas>
  );
}
