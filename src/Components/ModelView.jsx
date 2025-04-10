import { PerspectiveCamera, View, OrbitControls } from "@react-three/drei";
import Lights from "./Lights";
import Iphone from "./Iphone.jsx";
import { Suspense } from "react";
import * as THREE from "three";

const ModelView = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationSize,
  size,
  item,
}) => {
  return (
    <>
      <View
        index={index}
        id={gsapType}
        className={`border-2 border-red-500 w-full h-full mb-3 ${
          index === 2 ? "right-[-100%]" : ""
        }`}
      >
        {/* Ambient Light */}
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 10]} intensity={0.5} />
        <PerspectiveCamera makeDefault position={[0, 0, 4]} />
        <Lights />
        <OrbitControls
          makeDefault
          ref={controlRef}
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.4}
          target={new THREE.Vector3(0, 0, 0)}
          onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
        />
        <group
          ref={groupRef}
          name={`${index === 1} ? 'small' : 'large' `}
          position={[0, 0, 0]}
        >
          <Suspense fallback={<div>Loading</div>}>
            <Iphone />
          </Suspense>
        </group>
      </View>
    </>
  );
};

export default ModelView;
