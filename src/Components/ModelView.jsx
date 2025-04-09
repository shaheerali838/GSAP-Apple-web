import { PerspectiveCamera, View, OrbitControls } from "@react-three/drei";
import Lights from "./Lights";
import Iphone from "./Iphone";
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
    <View
      index={index}
      id={gsapType}
      className={`w-full  h-full ${index === 2 ? "right-[-100%]" : ""}`}
    >
      {/* Ambient Light */}
      <ambientLight intensity={8} />
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
          <Iphone
            scale={index === 1 ? [5, 5, 5] : [5, 5, 5]}
            position={[0, 0, 0]}
            rotation={[0, Math.PI / 2, 0]}
          />
        </Suspense>
      </group>
    </View>
  );
};

export default ModelView;
