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
// hsl(180, 52%, 96%)
// hsl(180, 31%, 95%)
// hsl(180, 8%, 52%)
//  hsl(180, 14%, 20%)
