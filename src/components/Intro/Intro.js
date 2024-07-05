import "./Intro.css";

import { Row } from "react-bootstrap";

const Intro = () => {
  return (
    <Row id="introDiv">
     <h3 className="barriecito-regular" style={{}}>Inspired by a toddler, for toddlers...</h3>
      <img id="logo500" src={require("../../assets/images/Zion-TV500.png")} alt="" className="align-self-end" />
    </Row>
  );
};

export default Intro;
