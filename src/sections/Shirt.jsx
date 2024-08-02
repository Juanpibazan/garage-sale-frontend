import React, {useState, Suspense} from 'react';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Preload, Environment } from '@react-three/drei';

import CanvasLoader from '../Components/Loader';
import { TShirt } from '../Components/T-shirt';

//T-shirt by Poly by Google [CC-BY] via Poly Pizza

const Shirt = ()=>{

    const shirt = useGLTF('./models/MenBaltikShirt/scene.gltf');

    return (
        <mesh
        position={[0,-100,0]}>
            {/*<boxGeometry />
            <meshNormalMaterial />*/}
            <ambientLight intensity={1}/>
            <directionalLight color='red' position={[0,0,5]} />
            <spotLight
                position={[-20,50,10]}
                angle={0.12}
                penumbra={0.5}
                intensity={2}
                castShadow
                shadow-mapSize={1024}
                />
            <primitive
            object={shirt.scene}
            />
        </mesh>
    )
};

const ShirtCanvas = ()=>{

    return (
        <Canvas
        frameloop='demand'
        camera={{
            position:[0,180,10],
            fov:65
        }}
        >
            <Suspense
            fallback={<CanvasLoader />}
            >
                <OrbitControls
                autoRotate
                enableZoom={false}
                maxPolarAngle={Math.PI/2}
                minPolarAngle={Math.PI/2}
                />
                {/*<color attach='background' args={['#fbd66c']} />*/}

                <Shirt />
                <Environment preset='park'/>
            </Suspense>
            <Preload  all/>
        </Canvas>
    )
};


export default ShirtCanvas;