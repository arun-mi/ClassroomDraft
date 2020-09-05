import React from "react";

import Container from "./Container/Container";
import LiveSessions from "./LiveSessions/LiveSessions";

function Classroom1() {
  return (
    <div style={{ width: "75%", bottom: "0", right: "0", top: 0 }}>
      <div style={{ display: "flex" }}>
        <div style={{ flex: "1", paddingRight: "2px", top: 0 }}>
          <Container />
        </div>

        <div className="liveright">
          <LiveSessions />
        </div>
      </div>
    </div>
  );
}

export default Classroom1;
