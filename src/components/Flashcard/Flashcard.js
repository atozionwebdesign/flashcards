import "./Flashcard.css";

import { classNames } from "../../utils/Helpers";

import { Card, Row, Col, Stack } from "react-bootstrap";
import { SayButton } from "react-say";

const Flashcard = (props) => {
  // const lesson = props.lesson;
  const title = props.info.title;
  const id = props.info.id;
  const wordFront = props.info.front;
  const iconFront = props.info.frontIcon;

  const wordBack = props.info.back;
  const iconBack = props.info.backIcon;
  const name = props.name;

  const buttons = {
    "alphabets-say-front": require("../../assets/icons/misc/speaker-button-alphabets-front.png"),
    "alphabets-rotate-front":
      require("../../assets/icons/misc/rotate-button-alphabets-front.svg")
        .default,
    "alphabets-say-back": require("../../assets/icons/misc/speaker-button-alphabets-back.png"),
    "alphabets-rotate-back":
      require("../../assets/icons/misc/rotate-button-alphabets-back.svg")
        .default,
    "numbers-say-front": require("../../assets/icons/misc/speaker-button-numbers-front.png"),
    "numbers-say-back": require("../../assets/icons/misc/speaker-button-numbers-back.png"),
    "numbers-rotate-front":
      require("../../assets/icons/misc/rotate-button-numbers-front.svg")
        .default,
    "numbers-rotate-back":
      require("../../assets/icons/misc/rotate-button-numbers-back.svg").default,
    "shapes-say-front": require("../../assets/icons/misc/speaker-button-shapes-front.png"),
  };

  const handleCardClick = (e) => {
    e.preventDefault();
    const selectedCard = document.querySelector(`#card-${id}`);
    selectedCard.classList.toggle("is-flipped");
  };

  const getNumberIcons = () => {
    const n = id;
    let arr = Array(n).fill(iconBack);
    console.log("arr", arr);
    const content = arr.map((e, i) => (
      <div className="icon-div">
        <img src={e} alt="" key={i} />
      </div>
    ));
    return content;
  };

  return (
    <Card className="flashcard" id={"card-" + id}>
      <Card.Body>
        <div className={classNames("card-front", `card-front-${name}`)}>
          <div className="flex-container">
            <Card.Title
              className={classNames(
                "card-title",
                `card-title-front`,
                "flex-grow-0"
              )}
            >
              {title}
            </Card.Title>

            <div className="word-div flex-grow-0">
              <Card.Text className="card-text">{wordFront}</Card.Text>
              <SayButton speak={wordFront}>
                <img
                  className="say-btn"
                  alt=""
                  src={buttons[`${name}-say-front`]}
                />
              </SayButton>
            </div>
            {name === "numbers" && iconFront.length > 1 ? (
              <div className="number-container flex-grow-1">
                {iconFront.map((icon, i) => {
                  return (
                    <div className="number-icon" key={`div-${i}`}>
                      <Card.Img src={icon} alt="" key={i} />
                    </div>
                  );
                })}
              </div>
            ) : (
              <div
                className="flex-grow-1"
                style={{
                  height: "60%",
                }}
              >
                <Card.Img src={iconFront} alt="" />
              </div>
            )}

            <div className="btnDivBtm flex-grow-0">
              <img
                className="flip-btn"
                onClick={handleCardClick}
                alt=""
                src={buttons[`${name}-rotate-front`]}
              />
            </div>
          </div>
        </div>
        <div className={classNames("card-back", `card-back-${name}`)}>
          <div className="flex-container">
            {name !== "numbers" ? (
              <Card.Title
                className={classNames(
                  "card-title",
                  `card-title-back`,
                  "flex-grow-0"
                )}
              >
                {title}
              </Card.Title>
            ) : (
              ""
            )}

            <div className="word-div flex-grow-0">
              <Card.Text className="card-text">{wordBack}</Card.Text>
              <SayButton speak={wordBack}>
                <img
                  className="say-btn"
                  alt=""
                  src={buttons[`${name}-say-back`]}
                />
              </SayButton>
            </div>
            {name !== "numbers" ? (
              <div
                className="flex-grow-1"
                style={{
                  height: "60%",
                }}
              >
                <Card.Img src={iconBack} alt="" />
              </div>
            ) : (
              <div className="icons-container flex-grow-1">
                {getNumberIcons()}
              </div>
            )}
            <div className="btnDivBtm flex-grow-0">
              <img
                className="flip-btn"
                onClick={handleCardClick}
                alt=""
                src={buttons[`${name}-rotate-back`]}
              />
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Flashcard;
