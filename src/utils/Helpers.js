export const classNames = (...args) => {
  return args.filter(Boolean).join(" ");
};

export const defaultLottieOptions = (animation) => ({
  loop: true,
  autoplay: true,
  animationData: animation,
  rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
});