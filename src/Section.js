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
          <span className="new">new</span>
          <span className="featured">featured</span>
        </CompanyName>
        <h1>Senior frontend developer</h1>
        <div className="timetag">
          <p>1d ago</p>
          <ul>
            <li>
              <p>FullTime</p>
            </li>
            <li>
              <p>USA Only</p>
            </li>
          </ul>
        </div>
      </Description>
      <Tags>
        <p>Frontend</p>
        <p>Senior</p>
        <p>HTML</p>
        <p>CSS</p>
        <p>Javascript</p>
      </Tags>
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
  .timetag > ul {
    display: flex;
    li {
      margin-left: 5vh;
    }
  }
`;
const Tags = styled.div`
  padding-left: 10vw;
  color: #3cacac;
  display: flex;
  flex-direction: row;
  align-items: center;
  p {
    text-decoration: none;
    background-color: hsl(180, 31%, 95%);
    margin-left: 3vw;
    font-size: 15px;
    font-weight: 700;
    padding: 4px;
    border-radius: 3px;
  }
`;
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
