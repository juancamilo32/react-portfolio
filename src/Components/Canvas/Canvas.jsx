import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

const Model = () => {
    const model = useGLTF("./model/scene.gltf");

    return (
        <primitive object={model.scene} scale={1.1} position-y={-0.83} rotation-y={0} />
    );
};

const ModelCanvas = () => {
    return (
        <Canvas
            shadows
            frameloop='demand'
            dpr={[1, 2]}
            gl={{ preserveDrawingBuffer: true }}
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [0, 0, 2.5],
            }}
        >
            <ambientLight intensity={2} />
            <Suspense>
                <Model />
                <Preload all />
            </Suspense>
            <OrbitControls
                enablePan={false}
                enableZoom={false}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
            />
        </Canvas>
    );
};

export default ModelCanvas;