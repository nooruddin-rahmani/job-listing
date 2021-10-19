import React from "react";

import Section from "./Section";
import styled from "styled-components";

function App() {
  return (
    <div>
      <TopPic></TopPic>
      <MainApp>
        <Section />
      </MainApp>
    </div>
  );
}

export default App;
const MainApp = styled.div``;
const TopPic = styled.div`
  height: 13vh;
  background-image: url("./images/bg-header-desktop.svg");
  background-color: hsl(180, 29%, 50%);
`;
