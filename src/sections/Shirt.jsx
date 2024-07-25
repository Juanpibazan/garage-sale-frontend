import React, {useState, Suspense} from 'react';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Preload } from '@react-three/drei';

import CanvasLoader from '../Components/Loader';
import { TShirt } from '../Components/T-shirt';

//T-shirt by Poly by Google [CC-BY] via Poly Pizza

const Shirt = ()=>{

    return (
        <mesh >
            <boxGeometry />
            <meshNormalMaterial />
        </mesh>
    )
};

const ShirtCanvas = ()=>{

    return (
        <Canvas
        frameloop='demand'
        camera={{
            position:[0,0,5],
            fov:5
        }}
        >
            <color attach='background' args={['#000']} />
            {/*<Shirt />*/}
            <TShirt />
            <Preload  all/>
        </Canvas>
    )
};


export default ShirtCanvas;