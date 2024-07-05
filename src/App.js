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
import { Row, Col } from "react-bootstrap";
import { CSSTransition } from "react-transition-group";

function App() {
  const [lesson, setLesson] = useState("");
  const [show, setShow] = useState(false);
  const contentRef = createRef(null);
  let l;
  const duration = 500;

  useEffect(() => {
    if (lesson === "") {
      setLesson("onLoad");
      getLesson("onLoad");
      setShow(!show);
    }
  }, [lesson]);

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in`,
    opacity: .5,
  };

  const transitionStyles = {
    entering: { opacity: .5, transition: `opacity 500ms ease-in` },
    entered: { opacity: 1, ease: "power1.in" },
    exiting: { opacity: .5, transition: `opacity 500ms slow` },
    exited: { opacity: 1, ease: "power1.out" },
  };

  const getLesson = (name) => {
    if (lesson !== name) {
      setLesson(name);
    }
    setTimeout(() => {
      if (name === "onLoad") {
        l = <Intro />;
        console.log("Home");
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

  const handlePowerButton = () => {
    setLesson("");
  };

  return (
    <div className="App">
      {/* <Row style={{height: "100%", margin:0}}> */}
      <div id="containerDiv">
        <div id="tvContainerDiv">
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
        <p id="tvTitle">ZionTV</p>
      </div>
      <Row id="tvLegsDiv">
        {/* <Col> */}
        <div id="curveLeft" className="curve"></div>
        <div className="tv-leg"></div>
        <div id="curveRight" className="curve"></div>

        {/* </Col> */}
        {/* <Col>
        <div id="rightLeg" className="tv-leg"></div>

        </Col> */}
      </Row>
      {/* </Row> */}

      <div id="remoteContainerDiv">
        <div id="remoteDiv">
          <Row className="justify-content-center align-items-center" style={{ height: "fitContent" }}>
            <Col>
              <Button
                style={{
                  backgroundColor: "var(--gray)",
                  border: "1px solid black",
                }}
              ></Button>
            </Col>
            <Col>
              <Button id="powerBtn" onClick={handlePowerButton}>
                <i className="bi bi-power"></i>
              </Button>
            </Col>
          </Row>

          <div id="tvBtnDiv">
            <Button
              className="tv-btn"
              id="abcBtn"
              name="alphabets"
              onClick={handleButton}
            >
              <img
                src={require("./assets/icons/misc/abc-btn.png")}
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
                src={require("./assets/icons/misc/num-btn-1.png")}
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
                src={require("./assets/icons/misc/shapes.png")}
                alt=""
                name="shapes"
                onClick={handleButton}
              />
            </Button>

            <Button className="tv-btn" id="colorBtn">
              <img
                src={require("./assets/icons/misc/rainbow-btn.png")}
                alt=""
              />
            </Button>
          </div>
          <p id="remoteTitle">ZionTV</p>
        </div>
      </div>
      {/* </Col> */}
      {/* </Row> */}
    </div>
  );
}

export default App;
