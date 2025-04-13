import { OrbitControls, PerspectiveCamera, View } from "@react-three/drei";
import { Suspense } from "react";
import { Html } from "@react-three/drei";
import Lights from "./Lights";
import Iphone from "./Iphone";
import Loader from "./Loader";
import * as THREE from "three";

const ModelView = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationState,
  size,
  item,
}) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={`w-full h-full ${index === 2 ? "right-[-100%]" : ""}`}
    >
      {/* Ambient Light */}
      <ambientLight intensity={10} />
      <PerspectiveCamera makeDefault position={[0, 0, 4]} />
      <Lights />

      <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle)}
      />
      <group
        ref={groupRef}
        name={`${index === 1}? 'small':'large'`}
        position={[0, 0, 0]}
      >
        <Suspense
          fallback={
            <Html center>
              <div style={{ color: "white", fontSize: 16 }}>Loading...</div>
            </Html>
          }
        >
          <Iphone />
        </Suspense>
      </group>
    </View>
  );
};

export default ModelView;
