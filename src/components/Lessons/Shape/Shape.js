import Lottie from "react-lottie";

import * as bubbles1 from "../../../assets/animations/ocean/bubbles-1.json";
import * as seaweed1 from "../../../assets/animations/ocean/seaweed.json";
import * as shark from "../../../assets/animations/ocean/shark.json";
import * as shell from "../../../assets/animations/ocean/shell.json";
import * as seahorse from "../../../assets/animations/ocean/seahorse.json";
import * as yellowFish from "../../../assets/animations/ocean/yellow-fish.json";

import { defaultLottieOptions } from "../../../utils/Helpers";

import "./Shape.css";

export const Shape = () => {
  return (
    <>
      <div
        style={{
          height: "40%",
          position: "absolute",
          top: "0%",
          left: "-5%",
        }}
      >
        <Lottie options={defaultLottieOptions(bubbles1)} />
      </div>
      <div
        style={{
          height: "20%",
          position: "absolute",
          bottom: "0%",
          left: "15%",
        }}
      >
        <Lottie options={defaultLottieOptions(seaweed1)} />
      </div>
      <div
        style={{
          height: "15%",
          position: "absolute",
          bottom: "0%",
          left: "12%",
        }}
      >
        <Lottie options={defaultLottieOptions(seaweed1)} />
      </div>
      <div
        style={{
          height: "30%",
          position: "absolute",
          bottom: "20%",
          right: "-1%",
        }}
      >
        <Lottie options={defaultLottieOptions(bubbles1)} />
      </div>
      <div
        style={{
          height: "40%",
          position: "absolute",
          top: "20%",
          right: "2%",
        }}
      >
        <Lottie options={defaultLottieOptions(shark)} />
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "8%",
          right: "10%",
          height: "8%",
          width: "8%"
        }}
      >
        <img
          src={require("../../../assets/icons/ocean/coral-1.svg").default}
          alt=""
        />
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "8%",
          right: "17%",
          height: "8%",
          width: "8%"
        }}
      >
        <img
          src={require("../../../assets/icons/ocean/coral-2.svg").default}
          alt=""
        />
      </div>
      <div
        style={{
          height: "15%",
          position: "absolute",
          bottom: "0%",
          right: "5%",
        }}
      >
        <Lottie options={defaultLottieOptions(shell)} />
      </div>
      <div
        style={{
          height: "20%",
          position: "absolute",
          bottom: "0%",
          left: "5%",
        }}
      >
        <Lottie options={defaultLottieOptions(seahorse)} />
      </div>
      <div
        style={{
          height: "30%",
          position: "absolute",
          bottom: "20%",
          left: "5%",
        }}
      >
        <Lottie options={defaultLottieOptions(yellowFish)} />
      </div>
    </>
  );
};

export const ShapeBackground = {
  backgroundImage: `linear-gradient(to bottom right, var(--ocean-teal), var(--ocean-dark-teal), var(--ocean-blue), var(--ocean-dark-blue), var(--ocean-darker-blue))`,
};
