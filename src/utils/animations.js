export const animateWithGsapTimeLine = (
  timeline,
  rotationRef,
  rotationState,
  firstTarget,
  secondTarget,
  animationProps
) => {
<<<<<<< HEAD
  timeline.to(rotationRef.current.rotationRef, {
=======
  console.time("GSAP timeline");

  timeline.to(rotationRef.current.rotation, {
>>>>>>> parent of 7349f72 (no error still error)
    y: rotationState,
    duration: 1,
    ease: "power2.inOut",
  });

  timeline.to(firstTarget, { ...animationProps, ease: "power2.inOut" }, "<");
  timeline.to(secondTarget, { ...animationProps, ease: "power2.inOut" }, "<");

  console.timeEnd("GSAP timeline");
};
