import { PerspectiveCamera, View } from "@react-three/drei";
import Lights from "./Lights";
import Iphone from "./Iphone";
import { Suspense } from "react";

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
      className={`w-full  h-full border-2 border-red-500 ${
        index === 2 ? "right-[-100%]" : ""
      }`}
    >
      {/* Ambient Light */}
      <ambientLight intensity={0.3} />
      <PerspectiveCamera makeDefault position={[0, 0, 4]} />
      <Lights />
      <Suspense fallback={<div>Loading</div>}>
        <Iphone />
      </Suspense>
    </View>
  );
};

export default ModelView;
