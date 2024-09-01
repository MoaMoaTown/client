import React, { useRef, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { Loading } from '../index';
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

const Model = React.memo(({ url, refProp, scale, brightness, onLoad }) => {
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
});

export default function Model3D() {
  const [loading, setLoading] = useState(true);
  const [loadedModels, setLoadedModels] = useState(0);
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
    setLoadedModels((prev) => prev + 1);
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
        landBox.max.y - 0.6,
        landBox.getCenter(new THREE.Vector3()).z - 1.7
      );
      characterRef.current.position.set(
        landBox.getCenter(new THREE.Vector3()).x + 2.75,
        landBox.max.y - 0.68,
        landBox.getCenter(new THREE.Vector3()).z - 0.1
      );
      characterRef.current.rotation.set(0, Math.PI / 8, 0);
      jellyRef.current.position.set(
        landBox.getCenter(new THREE.Vector3()).x - 1.3,
        landBox.max.y - 0.62,
        landBox.getCenter(new THREE.Vector3()).z + 0.3
      );
      jellyRef.current.rotation.set(0, Math.PI / 4, 0);
      logoRef.current.position.set(
        landBox.getCenter(new THREE.Vector3()).x + 1.6,
        landBox.max.y - 0.48,
        landBox.getCenter(new THREE.Vector3()).z + 1.4
      );
      logoRef.current.rotation.set(0, Math.PI / 3.4, 0);
    }

    cloudRef1.current.position.set(-2, 1.4, -2);
    cloudRef1.current.rotation.set(0, Math.PI / 4, 0);

    cloudRef2.current.position.set(-0.2, 1.8, 2);
    cloudRef2.current.rotation.set(0, Math.PI / 2, 0);

    cloudRef3.current.position.set(2, 1.7, -1);
    cloudRef3.current.rotation.set(0, Math.PI / 6, 0);
  };

  useEffect(() => {
    if (loadedModels === 12) {
      setLoading(false);
    }
  }, [loadedModels]);

  return (
    <React.Fragment>
      {loading && <Loading text={'티운으로 들어가는 중...'} page />}
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
          shadow-mapSize={{ width: 1024, height: 1024 }}
        />
        <directionalLight
          position={[0, 5, 10]}
          intensity={2.2}
          castShadow={false}
        />
        <spotLight
          position={[
            (logoRef.current?.position.x || 0) + 1,
            (logoRef.current?.position.y || 0) + 0.4,
            (logoRef.current?.position.z || 0) + 0.8,
          ]}
          intensity={0.1}
          angle={1}
          penumbra={1}
          castShadow={false}
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
          scale={new THREE.Vector3(0.5, 0.5, 0.5)}
          onLoad={(scene) => handleModelLoad(scene, 'Jelly')}
        />
        <Model
          url={logoModel}
          refProp={logoRef}
          onLoad={(scene) => handleModelLoad(scene, 'Logo')}
        />
        <OrbitControls target={[0, 1, 0]} />
      </Canvas>
    </React.Fragment>
  );
}
