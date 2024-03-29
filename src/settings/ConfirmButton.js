import React from "react";
import styled from "styled-components";
import { AppContext } from "../app/AppProvider";
import { fontSize1, greenBoxShadow, color3 } from "../shared/Styles";

const ConfirmButtonStyle = styled.div`
  margin: 20px;
  padding: 2px 7px;
  color: ${color3};
  border: 1px solid #5fff17;
  ${fontSize1};
  cursor: pointer;
  &:hover {
    ${greenBoxShadow}
  }
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
