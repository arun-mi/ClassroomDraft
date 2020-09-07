import React, { useState, useEffect } from "react";
import "./LiveSessions.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

function LiveSessions() {
  const [video, setVideo] = useState([
    {
      id: 1,
      title: "Introduction to number system",
      show: false,
      teacher: "Dr.Naidu",
    },
    {
      id: 2,
      title: "Introduction to number system",
      show: false,
      teacher: "Dr.Naidu",
    },
    {
      id: 3,
      title: "Introduction to number system",
      show: false,
      teacher: "Dr.Naidu",
    },
    {
      id: 4,
      title: "Medical Science and its Scope",
      show: false,
      teacher: "Dr.Naidu",
    },
    {
      id: 5,
      title: "Introduction to number system",
      show: false,
      teacher: "Dr.Naidu",
    },
    {
      id: 6,
      title: "Introduction to number system",
      show: false,
      teacher: "Dr.Naidu",
    },
    {
      id: 7,
      title: "Introduction to number system",
      show: false,
      teacher: "Dr.Naidu",
    },
    {
      id: 8,
      title: "Introduction to number system",
      show: false,
      teacher: "Dr.Naidu",
    },
    {
      id: 9,
      title: "Introduction to number system",
      show: false,
      teacher: "Dr.Naidu",
    },
    {
      id: 10,
      title: "Introduction to number system",
      show: false,
      teacher: "Dr.Naidu",
    },
    {
      id: 11,
      title: "Introduction to number system",
      show: false,
      teacher: "Dr.Naidu",
    },
    {
      id: 12,
      title: "Introduction to number system",
      show: false,
      teacher: "Dr.Naidu",
    },
  ]);

  const handleMouseHoverT = (vi) => {
    setVideo([
      ...video.filter((element) => element.id < vi.id),

      { id: vi.id, title: vi.title, show: true, teacher: vi.teacher },
      ...video.filter((element) => element.id > vi.id),
    ]);
  };

  const handleMouseHoverF = (vi) => {
    setVideo([
      ...video.filter((element) => element.id < vi.id),

      { id: vi.id, title: vi.title, show: false, teacher: vi.teacher },
      ...video.filter((element) => element.id > vi.id),
    ]);
  };

  return (
    <div style={{ paddingRight: "10px", height: "100%" }}>
      <div className="LiveSessions_container">
        <h3 style={{ fontWeight: "500" }}>Live Sessions</h3>
        {video.map((vid) => (
          <div
            className="LiveSessions_items"
            onMouseOver={() => {
              handleMouseHoverT(vid);
            }}
            onMouseLeave={() => {
              handleMouseHoverF(vid);
            }}
          >
            <div>
              <div>
                <a href="#" className="tagger">
                  <h4 style={{ display: "inline-flex" }}>
                    <div>
                      <AccountCircleIcon fontSize="large" />
                    </div>
                    {vid.title}
                  </h4>
                </a>
              </div>
              <div className="timeofsession">Next Session:</div>
              {vid.show && (
                <div>
                  <div className="timeofsession">Host:{vid.teacher}</div>
                  <div className="timeofsession">Institution:</div>
                  <div className="timeofsession">Subject:</div>
                </div>
              )}
            </div>
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
