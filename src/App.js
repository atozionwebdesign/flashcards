import "./App.css";
import { Button } from "react-bootstrap";

import { alphabets, lessons, numbers, shapes } from "./data/flashcard-data";

import Lesson from "./components/Lesson/Lesson";

import {
  Alphabet,
  AlphabetBackground,
} from "./components/Lessons/Alphabet/Alphabet";
import { Number, NumberBackground } from "./components/Lessons/Number/Number";
import { Shape, ShapeBackground } from "./components/Lessons/Shape/Shape";
import Intro from "./components/Intro/Intro";
import { useEffect, useState, createRef } from "react";
import { CSSTransition } from "react-transition-group";

import { gsap } from "gsap";

function App() {
  const [lesson, setLesson] = useState("");
  const [show, setShow] = useState(false);
  const contentRef = createRef(null);
  let l;
  const duration = 2000;

  useEffect(() => {
    if (lesson === "") {
      setLesson("onLoad");
      getLesson("onLoad");
      setShow(!show);
    }
  }, [lesson]);

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in`,
    opacity: 1,
  };

  const transitionStyles = {
    entering: { opacity: 0, transition: `opacity 1000ms ease-in` },
    entered: { opacity: 1, ease: "power1.in" },
    exiting: { opacity: 0, transition: `opacity 1000ms ease-out` },
    exited: { opacity: 1, ease: "power1.out" },
  };

  const getLesson = (name) => {
    if (lesson !== name) {
      setLesson(name);
    }
    setTimeout(() => {
      if (name === "onLoad") {
        l = <Intro />;
      } else if (name === "alphabets") {
        l = (
          <Lesson
            name={name}
            lessons={lessons}
            data={alphabets}
            graphics={<Alphabet />}
            title="ABCs"
            style={AlphabetBackground}
          />
        );
      } else if (name === "numbers") {
        l = (
          <Lesson
            name={name}
            lessons={lessons}
            data={numbers}
            graphics={<Number />}
            title="NUMBERs"
            style={NumberBackground}
          />
        );
      } else if (name === "shapes") {
        l = (
          <Lesson
            name={name}
            lessons={lessons}
            data={shapes}
            graphics={<Shape />}
            title="SHAPEs"
            style={ShapeBackground}
          />
        );
      }
    }, 500);

    return l;
  };

  const handleButton = (e) => {
    e.preventDefault();

    getLesson(e.target.name);

    setShow(!show);
  };

  return (
    <div className="App">
      <div id="containerDiv">
        <CSSTransition timeout={1000} in={show} nodeRef={contentRef}>
          {(state) => (
            <div
              id="content"
              ref={contentRef}
              style={{ ...defaultStyle, ...transitionStyles[state] }}
            >
              {getLesson(lesson)}
            </div>
          )}
        </CSSTransition>
      </div>
      <div id="remoteContainerDiv">
        <div id="remoteDiv">
          <Button id="powerBtn"></Button>
          <Button
            className="tv-btn"
            id="abcBtn"
            name="alphabets"
            onClick={handleButton}
          >
            <img
              src={require("./assets/icons/misc/abc-btn-1.png")}
              alt=""
              name="alphabets"
            />
          </Button>

          <Button
            className="tv-btn"
            id="numberBtn"
            name="numbers"
            onClick={handleButton}
          >
            <img
              src={require("./assets/icons/misc/num-btn.png")}
              alt=""
              name="numbers"
            />
          </Button>
          <Button
            className="tv-btn-rect"
            id="shapeBtn"
            name="shapes"
            onClick={handleButton}
          >
            <img
              src={require("./assets/icons/misc/shapes-1.png")}
              alt=""
              name="shapes"
              onClick={handleButton}
            />
          </Button>

          <Button className="tv-btn" id="colorBtn">
            <img src={require("./assets/icons/misc/rainbow-btn.png")} alt="" />
          </Button>

          <p id="remoteTitle">ZION</p>
        </div>
      </div>
    </div>
  );
}

export default App;
