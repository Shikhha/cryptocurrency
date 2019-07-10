import React from "react";
import styled from "styled-components";
import { AppContext } from "../app/AppProvider";

const ConfirmButtonStyle = styled.div`
  margin: 20px;
  color: green;
  cursor: pointer;
`;

const CenterDiv = styled.div`
  display: grid;
  justify-content: center;
`;

export default function() {
  return (
    <AppContext.Consumer>
      {({ confirmFavourties }) => (
        <CenterDiv>
          <ConfirmButtonStyle onClick={confirmFavourties}>
            Confirm Favourties
          </ConfirmButtonStyle>
        </CenterDiv>
      )}
    </AppContext.Consumer>
  );
}
