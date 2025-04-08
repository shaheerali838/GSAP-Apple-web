import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";
import ModelView from "./ModelView";
import { yellowImg } from "../utils";

import * as THREE from "three";
import { models, sizes } from "../constants";
import { View } from "@react-three/drei";
import { label } from "three/tsl";

const Model = () => {
  useGSAP(() => {
    gsap.to("#heading", { position: 0, opacity: 1 });
  }, []);

  const [size, setSize] = useState("small");
  const [model, setModel] = useState({
    title: "Iphone 15 Pro in Ntural Titanium",
    color: ["#8f8a81", "#ffe7b9", "#6f6c64"],
    img: yellowImg,
  });

  // Camera controll for the model view
  const cameraControllSmall = useRef();
  const cameraControllLarge = useRef();

  // Model
  const small = useRef(new THREE.Group());
  const Large = useRef(new THREE.Group());

  //Rotation
  const [smallRotation, setSmallRotation] = useState(0);
  const [largeRotation, setLargeRotation] = useState(0);

  return (
    <section className="common-padding ">
      <div className="screen-max-width">
        <h1 id="heading" className="section-heading mb-24">
          Take a Closer Look.
        </h1>
        <div className="flex flex-col items-center mt-5">
          <div className="w-full h-[75vh] md:h-[90vh] mb-3 overflow-hidden relative ">
            <ModelView
              index={1}
              groupRef={small}
              gsapType="view1"
              controlRef={cameraControllSmall}
              setRotationState={setSmallRotation}
              item={model}
              size={size}
            />
            <ModelView
              index={2}
              groupRef={Large}
              gsapType="view2"
              controlRef={cameraControllLarge}
              setRotationState={setLargeRotation}
              item={model}
              size={size}
            />
            <canvas
              className="w-full h-full z-[-1]"
              style={{
                position: "fixed",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                overflow: "hidden",
              }}
              eventsource={document.getElementById("root")}
            >
              <View />
            </canvas>
          </div>
          <div className="mx-auto w-full">
            <p className="text-sm font-light mb-4 text-center">{model.title}</p>
            <div className="flex-center">
              <ul className="color-container">
                {models.map((item, i) => (
                  <li
                    key={i}
                    className="w-6 h-6 rounded-full mx-2 cursor-pointer"
                    style={{ backgroundColor: item.color[0] }}
                    onClick={() => setModel(item)}
                  />
                ))}
              </ul>
              <button className="size-btn-container">
                {sizes.map(({ label, value }) => (
                  <span
                    key={label}
                    className="size-btn"
                    style={{
                      backgroundColor: size === value ? "white" : "transparent",
                      color: size === value ? "black" : "white",
                    }}
                    onClick={() => setSize(value)}
                  >
                    {label}
                  </span>
                ))}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model;
