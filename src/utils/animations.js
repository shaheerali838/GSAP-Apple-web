export const animateWithGsapTimeLine = (
  timeline,
  rotationRef,
  rotationState,
  firstTarget,
  secondTarget,
  animationProps
) => {
  console.time("GSAP timeline");

  timeline.to(rotationRef.current.rotation, {
    y: rotationState,
    duration: 1,
    ease: "power2.inOut",
  });

  timeline.to(firstTarget, { ...animationProps, ease: "power2.inOut" }, "<");
  timeline.to(secondTarget, { ...animationProps, ease: "power2.inOut" }, "<");

  console.timeEnd("GSAP timeline");
};
