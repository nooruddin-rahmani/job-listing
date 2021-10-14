import React from "react";
import styled from "styled-components";

function Section() {
  return (
    <SectionCard>
      <RooundedPhoto>
        <img src="./images/photosnap.svg" alt="" />
      </RooundedPhoto>
      <Description>
        <CompanyName>
          <p>Photosnap</p>
          <VariableSpans>
            <span className="new">new</span>
            <span className="featured">featured</span>
          </VariableSpans>
        </CompanyName>
        <h1>Senior frontend developer</h1>
        <div className="timetag">
          <p>1d ago</p>
          <p className="dotted">FullTime</p>
          <p className="dotted">USA Only</p>
        </div>
      </Description>
      <Tags></Tags>
    </SectionCard>
  );
}

export default Section;
const SectionCard = styled.div`
  width: 80vw;
  height: 20vh;
  background: #fff;
  margin: 5vh 0 0 10vw;
  border-radius: 5px;
  border-left: 7px solid hsl(180, 29%, 50%);
  display: flex;
  flex-direction: row;
`;
const RooundedPhoto = styled.div`
  width: 6.5vw;
  height: 13.9vh;
  border-radius: 50%;
  display: flex;
  img {
    width: inherit;
    height: inherit;
  }
  margin: 3vh 1.8vw;
`;
const Description = styled.div`
  h1 {
    font-size: 3.5vh;
    margin-top: 1vh;
    font-weight: 700;
    color: hsl(180, 14%, 20%);
  }
  .timetag {
    margin-top: 1vh;
    display: flex;
    opacity: 0.4;
  }
  .timetag > .dotted {
    te
  }
`;
const Tags = styled.div``;
const CompanyName = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 3vh;
  p {
    color: hsl(180, 29%, 50%);
    font-weight: 700;
  }
  .new {
    font-size: 12px;
    color: white;
    text-transform: uppercase;
    background-color: hsl(180, 29%, 50%);
    border-radius: 9px;
    padding: 3px 7px;
    font-weight: 700;
    margin-left: 10px;
  }
  .featured {
    font-size: 12px;
    color: white;
    text-transform: uppercase;
    background-color: hsl(180, 14%, 20%);
    border-radius: 9px;
    padding: 3px 8px;
    font-weight: 700;
    margin-left: 10px;
  }
`;
const VariableSpans = styled.div``;
