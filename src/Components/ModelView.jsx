import { PerspectiveCamera, View } from "@react-three/drei";
import Lights from "./Lights";
import Iphone from "./Iphone";
import { Suspense } from "react";
import { Html } from "@react-three/drei";

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
      className={`border-2 border-red-500 w-full h-full ${
        index === 2 ? "right-[-100%]" : ""
      }`}
    >
      {/* Ambient Light */}
      <ambientLight intensity={0.3} />
      <PerspectiveCamera makeDefault position={[0, 0, 4]} />
      <Lights />
      <Suspense fallback={<div>Loading...</div>}>
        <Iphone />
      </Suspense>
    </View>
  );
};

export default ModelView;
