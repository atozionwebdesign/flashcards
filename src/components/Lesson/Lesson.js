import "./Lesson.css";
import { useState, useEffect, useRef } from "react";
import { Transition } from "react-transition-group";

import { classNames } from "../../utils/Helpers";

import { Row, Col, Button } from "react-bootstrap";
import Flashcard from "../Flashcard/Flashcard";

import { gsap } from "gsap";

function Lesson(props) {
  const lessons = props.lessons;
  const data = props.data;
  const title = props.title;
  const name = props.name;
  const show = props.show;
  const [activeLesson, setActiveLesson] = useState(lessons[0]);
  const [deck, setDeck] = useState([]);
  const [activeCard, setActiveCard] = useState({});
  const [spentDeck, setSpentDeck] = useState([]);
  const lessonContentDivRef = useRef();

  const crowns = {
    alphabets: require("../../assets/icons/misc/crown-alphabets.png"),
    numbers: require("../../assets/icons/misc/crown-numbers.png"),
    shapes: require("../../assets/icons/misc/crown-shapes.png")
  };
  const buttons = {
    alphabets: require(`../../assets/icons/misc/next-button-alphabets.svg`)
      .default,
    numbers: require(`../../assets/icons/misc/next-button-numbers.svg`).default,
    shapes: require(`../../assets/icons/misc/next-arrow-shapes.svg`).default,
  };

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  useEffect(() => {
    if (deck.length === 0) {
      setDeck(data);
      setActiveCard(data[0]);
    }
  }, [deck, activeLesson]);

  const handleDeckClick = (e) => {
    console.log(deck)
    let i = deck.indexOf(activeCard);
    let newI;
    e.target.name === "next"
      ? i + 1 <= deck.length - 1
        ? (newI = i + 1)
        : (newI = 0)
      : i > 0
      ? (newI = i - 1)
      : (newI = deck.length - 1);

    setActiveCard(deck[newI]);
  };

  return (
    <div
      id="lessonContentDiv"
      ref={lessonContentDivRef}
      style={{ ...props.style }}
    >
      <div id="titleDiv">
        <img src={crowns[name]} alt="" id="crown" />
        <p className="title">
          ZION's World of <span className={`bubbles-${name}`}>{title}</span>
        </p>
      </div>

      <div id="cardDiv">
        {deck.length > 0 ? (
          <Row>
            <Col sm={3}>
              <div className="left">
                <img
                  alt={name}
                  className="next-btn mirror"
                  src={buttons[name]}
                  onClick={handleDeckClick}
                  name="previous"
                />
              </div>
            </Col>
            <Col sm={6}>
              <div className="deck-card">
                <Flashcard
                  name={name}
                  lesson={activeLesson}
                  info={activeCard}
                  side="front"
                />
              </div>
            </Col>
            <Col sm={3}>
              <div className="right">
                <img
                  alt=""
                  className="next-btn"
                  src={buttons[name]}
                  name="next"
                  onClick={handleDeckClick}
                />
              </div>
            </Col>
          </Row>
        ) : (
          ""
        )}
      </div>

      {props.graphics}
    </div>
  );
}

export default Lesson;
