import React from "react";
import { AppContext } from "../app/AppProvider";
import styled from "styled-components";

const WelcomeDiv = styled.div`
  margin-top: 20px;
  color: white;
  font-size: 25px;
  text-align: center;
`;

export default function Welcome() {
  return (
    <AppContext>
      {({ firstVisit }) =>
        firstVisit ? (
          <WelcomeDiv>
            Welcome to Crypto-Dashboard, please SELECT & CONFIRM your favourite
            coins to begin
          </WelcomeDiv>
        ) : null
      }
    </AppContext>
  );
}
