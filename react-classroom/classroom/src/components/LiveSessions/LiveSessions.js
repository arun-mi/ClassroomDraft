import React, { useState, useEffect } from "react";
import "./LiveSessions.css";

function LiveSessions() {
  const [video, setVideo] = useState([
    { id: 1, title: "Introduction to number system" },
    { id: 2, title: "Introduction to number system" },
    { id: 3, title: "Introduction to number system" },
    { id: 1, title: "Introduction to number system" },
    { id: 2, title: "Introduction to number system" },
    { id: 3, title: "Introduction to number system" },
    { id: 1, title: "Introduction to number system" },
    { id: 2, title: "Introduction to number system" },
    { id: 3, title: "Introduction to number system" },
    { id: 1, title: "Introduction to number system" },
    { id: 2, title: "Introduction to number system" },
    { id: 3, title: "Introduction to number system" },
  ]);

  return (
    <div style={{ paddingRight: "10px", height: "100%" }}>
      <div className="LiveSessions_container">
        <h3 style={{ fontWeight: "500" }}>Live Sessions</h3>
        {video.map((vid) => (
          <div className="LiveSessions_items">
            <div>
              <a href="#" className="tagger">
                <h4>
                  ({vid.id} ) {vid.title}
                </h4>
              </a>
            </div>
            <div className="timeofsession">Next Session:</div>

            <center>
              <div style={{ color: "#eaeaea" }}>
                __________________________________________
              </div>
            </center>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LiveSessions;
