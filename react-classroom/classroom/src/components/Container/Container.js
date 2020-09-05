import React, { useState } from "react";
import "./Container.css";
import LiveSessions from "../LiveSessions/LiveSessions";
import { Spring } from "react-spring/renderprops";
import { useTransition, animated } from "react-spring";

function Container() {
  const [inst, setInst] = useState([
    { id: 1, name: "Young Minds" },
    { id: 2, name: "Young Minds" },
    { id: 3, name: "Young Minds" },
    { id: 4, name: "Young Minds" },
    { id: 5, name: "Young Minds" },
    { id: 6, name: "Young Minds" },
    { id: 7, name: "Young Minds" },
    { id: 8, name: "Young Minds" },
    { id: 9, name: "KIIT" },
  ]);
  const [toggle1, setToggle1] = useState(false);
  const transitions = useTransition(toggle1, null, {
    config: { mass: 1, tension: 250, friction: 18, clamp: true },
    from: { opacity: 0, marginTop: -100 },
    enter: { opacity: 1, marginTop: 0 },
    leave: { opacity: 0, marginTop: -100 },
  });
  const [toggle2, setToggle2] = useState(false);
  const transitions2 = useTransition(toggle2, null, {
    config: { mass: 1, tension: 250, friction: 18, clamp: true },
    from: { opacity: 0, marginTop: -100 },
    enter: { opacity: 1, marginTop: 0 },
    leave: { opacity: 0, marginTop: -100 },
  });
  const [book, setBook] = useState([
    { id: 1, name: "Book1" },
    { id: 2, name: "" },
    { id: 3, name: "" },
    { id: 4, name: "" },
    { id: 5, name: "" },
    { id: 6, name: "" },
    { id: 7, name: "" },
    { id: 8, name: "" },
    { id: 9, name: "" },
  ]);
  return (
    <div>
      <div className="contained">
        <h3 style={{ fontWeight: "600" }}>
          Institution
          <div style={{ float: "right" }}>
            <button className="togglebutn" onClick={() => setToggle1(!toggle1)}>
              ___
            </button>
          </div>
        </h3>
        <div className="container_inst">
          {inst
            .filter((element) => element.id <= 6)
            .map((filtered) => (
              <button className="containee">{filtered.name}</button>
            ))}
          {transitions.map(
            ({ item, key, props }) =>
              item && (
                <animated.div key={key} style={props}>
                  {
                    <div style={props}>
                      {inst
                        .filter((element) => element.id > 6)
                        .map((filtered) => (
                          <button className="containee">{filtered.name}</button>
                        ))}
                    </div>
                  }
                </animated.div>
              )
          )}
        </div>
      </div>
      <div className="contained">
        <h3 style={{ fontWeight: "600" }}>
          Books
          <div style={{ float: "right" }}>
            <button className="togglebutn" onClick={() => setToggle2(!toggle2)}>
              ___
            </button>
          </div>
        </h3>
        <div className="container_inst">
          {book
            .filter((element) => element.id <= 6)
            .map((filtered) => (
              <button className="containee">{filtered.name}</button>
            ))}
          {transitions2.map(
            ({ item, key, props }) =>
              item && (
                <animated.div key={key} style={props}>
                  {
                    <div style={props}>
                      {book
                        .filter((element) => element.id > 6)
                        .map((filtered) => (
                          <button className="containee">{filtered.name}</button>
                        ))}
                    </div>
                  }
                </animated.div>
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default Container;
