import React from "react";
import styled from "styled-components";
import data from "./data.json";

function Section() {
  return (
    <>
      {data.map((dat, index) => {
        if (dat.id === 1 || dat.id === 2) {
          return (
            <SectionCard style={{ borderLeft: "7px solid hsl(180, 29%, 50%)" }}>
              <RooundedPhoto>
                <img src={dat.logo} alt="" />
              </RooundedPhoto>
              <Description>
                <CompanyName>
                  <p>{dat.company}</p>
                  <span className={dat.new && "new"}>{dat.new && "NEW"}</span>
                  <span className={dat.featured && "featured"}>
                    {dat.featured && "FEATURED"}
                  </span>
                </CompanyName>
                <h1>{dat.position}</h1>
                <div className="timetag">
                  <p>{dat.postedAt}</p>
                  <ul>
                    <li>
                      <p>{dat.contract}</p>
                    </li>
                    <li>
                      <p>{dat.location}</p>
                    </li>
                  </ul>
                </div>
              </Description>
              <Tags>
                <div className="tagcon">
                  <p>{dat.role}</p>
                  {dat.languages.map((language, index) => {
                    return <p>{language}</p>;
                  })}
                  {dat.tools.map((tool, index) => {
                    return <p>{tool}</p>;
                  })}
                </div>
              </Tags>
            </SectionCard>
          );
        } else {
          return (
            <SectionCard>
              <RooundedPhoto>
                <img src={dat.logo} alt="" />
              </RooundedPhoto>
              <Description>
                <CompanyName>
                  <p>{dat.company}</p>
                  <span className={dat.new && "new"}>{dat.new && "NEW"}</span>
                  <span className={dat.featured && "featured"}>
                    {dat.featured && "FEATURED"}
                  </span>
                </CompanyName>
                <h1>{dat.position}</h1>
                <div className="timetag">
                  <p>{dat.postedAt}</p>
                  <ul>
                    <li>
                      <p>{dat.contract}</p>
                    </li>
                    <li>
                      <p>{dat.location}</p>
                    </li>
                  </ul>
                </div>
              </Description>
              <Tags>
                <div className="tagcon">
                  <p onClick={popUp}>{dat.role}</p>
                  {dat.languages.map((language, index) => {
                    return <p onClick={popUp}>{language}</p>;
                  })}
                  {dat.tools.map((tool, index) => {
                    return <p onClick={popUp}>{tool}</p>;
                  })}
                </div>
              </Tags>
            </SectionCard>
          );
        }
      })}
    </>
  );
}

const popUp = () => {
  alert("In Development :smile");
};
export default Section;
const SectionCard = styled.div`
  width: 80vw;
  height: 20vh;
  background: #fff;
  margin: 5vh 0 0 10vw;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  box-shadow: 0px 14px 68px -29px hsl(180, 29%, 50%);
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
  h1:hover {
    color: hsl(180, 29%, 50%);
    cursor: pointer;
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
  right: 1vw;
  color: hsl(180, 29%, 50%);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  .tagcon {
    display: flex;
    position: absolute;
    right: 13vw;
  }
  p {
    text-decoration: none;
    background-color: hsl(180, 31%, 95%);
    margin-left: 3vw;
    font-size: 15px;
    font-weight: 700;
    padding: 4px;
    border-radius: 3px;
  }
  p:hover {
    color: hsl(180, 52%, 96%);
    background-color: hsl(180, 29%, 50%);
    cursor: pointer;
  }
  .to {
    display: none;
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
    color: hsl(180, 52%, 96%);
    text-transform: uppercase;
    background-color: hsl(180, 29%, 50%);
    border-radius: 9px;
    padding: 3px 7px;
    font-weight: 700;
    margin-left: 10px;
  }
  .featured {
    font-size: 12px;
    color: hsl(180, 52%, 96%);
    text-transform: uppercase;
    background-color: hsl(180, 14%, 20%);
    border-radius: 9px;
    padding: 3px 8px;
    font-weight: 700;
    margin-left: 10px;
  }
`;
