import React from "react";
import styled, { css } from "styled-components";
import { AppContext } from "./AppProvider";

const Head = styled.div`
  display: grid;
  grid-template-columns: 100px auto 100px 100px;
`;
const Logo = styled.div`
  font-size: 1.5rem;
`;

const DisplayButton = styled.div`
  cursor: pointer;
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
      <logo>CryptoDash</logo>
      <div />
      <ControlButton active name="Dashboard" />
      <ControlButton name="Settings" />
    </Head>
  );
}
