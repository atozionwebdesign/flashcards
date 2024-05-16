import Lottie from "react-lottie";

import * as brain1 from "../../../assets/animations/robots/brain-1.json";
import * as gear from "../../../assets/animations/robots/gear.json";
import * as gear1 from "../../../assets/animations/robots/gear-1.json";
import * as eye2 from "../../../assets/animations/robots/eye-2.json";
import * as robot0 from "../../../assets/animations/robots/robot-0.json";
import * as laptop from "../../../assets/animations/robots/laptop-0.json";

import { defaultLottieOptions } from "../../../utils/Helpers";

import "./Number.css";

export const Number = () => {
  return (
    <>
      <div
        style={{ height: "25%", position: "absolute", top: "3%", left: "3%" }}
      >
        <Lottie options={defaultLottieOptions(eye2)} />
      </div>

      <div
        style={{
          height: "15%",
          position: "absolute",
          bottom: "5%",
          left: "5%",
        }}
      >
        <Lottie options={defaultLottieOptions(laptop)} />
      </div>

      <div
        style={{
          height: "15%",
          position: "absolute",
          bottom: "20%",
          left: "5%",
        }}
      >
        <Lottie options={defaultLottieOptions(brain1)} />
      </div>
      <div
        style={{
          height: "30%",
          position: "absolute",
          bottom: "5%",
          right: "2%",
        }}
      >
        <Lottie options={defaultLottieOptions(robot0)} />
      </div>

      <div
        style={{ height: "20%", position: "absolute", top: "3%", right: "5%" }}
      >
        <Lottie options={defaultLottieOptions(gear1)} />
      </div>
      <div
        style={{
          height: "20%",
          position: "absolute",
          top: "20%",
          right: "5%",
        }}
      >
        <Lottie options={defaultLottieOptions(gear)} />
      </div>
    </>
  );
};

export const NumberBackground = {
    background:
    `linear-gradient(var(--blue-purple), var(--green)),
    linear-gradient(to top left, var(--green), transparent)`,
};
