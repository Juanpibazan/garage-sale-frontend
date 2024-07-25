import React, {useState, Suspense} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF, Environment, ContactShadows } from '@react-three/drei';

import CanvasLoader from '../Components/Loader';


const Dress = (props)=>{

    const dress = useGLTF('./models/dress/scene.gltf');

    return (
        <mesh
        //{...props}
        position={[0,-0.7,0]}
        >
            {/*<hemisphereLight intensity={1.5} /> */}
            <ambientLight intensity={0.7} />
            <directionalLight color='red' position={[0,0,5]}  />
            {/*<spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, -5]} castShadow />*/}
            <primitive
            object={dress.scene}
            //scale={1.5}
            //position={[0,-1,2]}
            //rotation={[-0.01,-0.1,-0.1]}
            />
        </mesh>
    )
};

const DressCanvas = ()=>{

    return (
        <Canvas
        //eventSource={document.getElementById('dress-container')}
        //eventPrefix="client"
            frameloop='demand'
            shadows
            //gl={{preserveDrawingBuffer:true}}
            camera={{
                //position:[0,10,2],
                position:[5,0,0],
                fov:20
            }}
            
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                autoRotate
                enableZoom={false}
                maxPolarAngle={Math.PI/1.5}
                minPolarAngle={Math.PI/1.5}
                />
                {/*<Environment preset="park" background blur={1} />
                <ContactShadows resolution={512} position={[0, -0.8, 0]} opacity={1} scale={10} blur={2} far={0.8} /> */}

                <Dress
                //rotation={[0.3, Math.PI / 1.6, 0]}
                //position={[1.3,-1.5,3]}
                
                />
            </Suspense>

        </Canvas>
    )
};

export default DressCanvas;