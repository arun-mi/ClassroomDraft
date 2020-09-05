import React from "react";

import "./App.css";
import { ThemeProvider } from "@material-ui/core/styles";

import Classroom1 from "./components/Classroom1";
import Classroom2 from "./components/Classroom2/Classroom2";
import { createMuiTheme } from "@material-ui/core/styles";

function App() {
  return (
    <div>
      <Classroom2 />
    </div>
  );
}

export default App;
