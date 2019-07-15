import React from "react";
import styled, { css } from "styled-components";
import { AppContext } from "./AppProvider";

const Head = styled.div`
  display: grid;
  grid-template-columns: 100px auto 90px 90px;
  @media only screen and (max-width: 385px) {
    grid-template-columns: 90px auto 80px 80px;
    
    }
  }
`;
const Logo = styled.div`
  font-size: 2rem;
  @media only screen and (max-width: 500px) {
    font-size: 1.4rem;
  }
  @media only screen and (max-width: 365px) {
    font-size: 1rem;
  }
`;

const DisplayButton = styled.div`
  cursor: pointer;
  align-self: center;
  @media only screen and (max-width: 365px) {
    font-size: 0.7rem;
  }
  ${props =>
    props.active &&
    css`
      text-shadow: 0px 0px 60px #03ff03;
      color: blue;
    `}
`;
function ControlButton({ name, active }) {
  return (
    <AppContext.Consumer>
      {({ page, setPage }) => (
        <DisplayButton active={page === name} onClick={() => setPage(name)}>
          {name}
        </DisplayButton>
      )}
    </AppContext.Consumer>
  );
}
export default function() {
  return (
    <Head>
      <Logo>CryptoCompare</Logo>
      <div />
      <ControlButton active name="Dashboard" />
      <ControlButton name="Settings" />
    </Head>
  );
}
