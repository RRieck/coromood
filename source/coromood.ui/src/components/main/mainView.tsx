//rename it
import React from "react";
import styled from "styled-components";
import quarantine from "../../images/quarantine.png";
import { Card, Icon } from "semantic-ui-react";
import { Question } from "../shared/Question";
import { Share } from "../shared/Share";

const MainWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 1.2rem;
  width: 100%;
  height: 100%;
  min-width: 375px;

  .card {
    margin: 100px;
    width: 300px;
    font-size: 1.7rem;
    color: #7f7f7f;
  }

  .meta {
    font-size: 0.8rem;
    margin-top: 50px;
    color: #cacaca;
  }
`;

const Title = styled.h1`
  color: black;
  font-weight: 600;
  font-size: 3rem;
  margin: 5px;
`;

const Caption = styled.h3`
  color: #7f7f7f;
  font-weight: 100;
  margin: 5px;
`;

const QuestionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  flex-direction: row-reverse;
  justify-content: space-evenly;

  > img {
    height: 500px;
  }

  @media only screen and (max-width: 375px) {
    justify-content: center;
    > img {
      height: 300px;
    }
  }
`;

export const Main = () => {
  return (
    <MainWrapper>
      <Caption>Stimmungstagebuch für Kriesenzeiten</Caption>
      <Title>Ein Leben in Quarantäne</Title>
      <QuestionWrapper>
        <img src={quarantine}></img>
        <Card>
          <Card.Content>
            <Card.Header>
              Klasse! Diese Woche sind deine Mitmenschen{"  "}
              <span style={{ color: "#63DA94" }}>36% zufriedener</span> als in
              der letzten Woche.
            </Card.Header>
            <Card.Description>
              <Question />
            </Card.Description>
            <Card.Meta>
              <Share />
            </Card.Meta>
          </Card.Content>
        </Card>
      </QuestionWrapper>
    </MainWrapper>
  );
};