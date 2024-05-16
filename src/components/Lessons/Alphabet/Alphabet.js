import Lottie from "react-lottie";
import * as tree0 from "../../../assets/animations/tree-0.json";
import * as tree1 from "../../../assets/animations/tree-1.json";
import * as tree2 from "../../../assets/animations/tree-2.json";
import * as tree3 from "../../../assets/animations/tree-3.json";
// import * as tree4 from "../../src/assets/animations/tree-4.json";
import * as tree5 from "../../../assets/animations/tree-5.json";
import * as cloud1 from "../../../assets/animations/cloud-1.json";
import * as butterfly0 from "../../../assets/animations/butterfly-0.json";

import { defaultLottieOptions } from "../../../utils/Helpers";

import "./Alphabet.css";

export const Alphabet = () => {
  return (
    <>
      <div
        style={{ height: "35%", position: "absolute", top: "-5%", left: "5%" }}
      >
        <Lottie options={defaultLottieOptions(cloud1)} />
      </div>
      <div
        style={{
          height: "30%",
          position: "absolute",
          bottom: "25%",
          right: "10%",
        }}
      >
        <Lottie options={defaultLottieOptions(tree3)} />
      </div>
      {/* <div style={{ height: "30%", position: "absolute", bottom: "22%", left: "10%" }}>
        <Lottie options={defaultLottieOptions(tree4)} />
      </div> */}
      <div
        style={{
          height: "35%",
          position: "absolute",
          bottom: "6%",
          left: "12%",
        }}
      >
        <Lottie options={defaultLottieOptions(tree5)} />
      </div>
      <div style={{ height: "40%", position: "absolute", bottom: 0, right: 0 }}>
        <Lottie options={defaultLottieOptions(tree0)} />
      </div>
      <div
        style={{ height: "30%", position: "absolute", bottom: 0, right: "10%" }}
      >
        <Lottie options={defaultLottieOptions(tree1)} />
      </div>
      <div style={{ height: "40%", position: "absolute", bottom: 0, left: 0 }}>
        <Lottie options={defaultLottieOptions(tree2)} />
      </div>

      <div
        style={{ height: "10%", position: "absolute", bottom: 0, left: "5%" }}
      >
        <Lottie options={defaultLottieOptions(butterfly0)} />
      </div>
    </>
  );
};

export const AlphabetBackground = {
  backgroundImage: `radial-gradient(
    ellipse farthest-corner at top left, var(--blue) 0%, rgba(253, 255, 61, 0) 50%
  ),
  radial-gradient(
    ellipse farthest-corner at bottom right, var(--orange) 0%, rgba(255, 154, 52, 0) 20%
  ),
  radial-gradient(
    ellipse farthest-corner at center right, var(--purple) 0%, rgba(89, 45, 114, 0) 100%
  ),
  radial-gradient(
    ellipse farthest-corner at top right, var(--blue) 0%, rgba(255, 32, 32, 0) 50%
  ),
  radial-gradient(
    ellipse at bottom center, var(--yellow) 0%, rgba(20, 131, 197, 0) 80%
  ),
  radial-gradient(
    ellipse at bottom left, var(--teal) 0%, rgba(20, 197, 175, 0) 80%
  )`,
};
