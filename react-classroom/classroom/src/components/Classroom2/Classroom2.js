import React from "react";

import Tabber2 from ".//Tabber2";

function Classroom2() {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "40%" }}>Sidebar</div>
      <div style={{ width: "60%" }}>
        <Tabber2 />
      </div>
    </div>
  );
}

export default Classroom2;
