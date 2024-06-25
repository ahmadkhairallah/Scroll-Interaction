import React from "react";
import { useInView } from "react-intersection-observer";
import PropTypes from "prop-types";
import "./App.css";

const Row = ({ percentage }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
   <>
    <div className="row" ref={ref}>
      <div
        className="fill"
        style={{
          width: inView ? `${percentage}%` : "0%",
        }}
      ></div>
    </div>
   </>
  );
};

Row.propTypes = {
  percentage: PropTypes.number.isRequired,
};

function App() {
  return (
    <div className="App">
      <Row percentage={70} /> {}
      <Row percentage={50} /> {}
      <Row percentage={80} /> {}
      <Row percentage={60} /> {}
      <Row percentage={90} /> {}
      <Row percentage={30} /> {}
    </div>
  );
}

export default App;
