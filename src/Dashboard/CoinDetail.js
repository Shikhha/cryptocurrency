import React from "react";
import styled, { css } from "styled-components";
import CoinImage from "../settings/CoinImage";
import { Tile } from "../shared/Tile";
import { AppContext } from "../app/AppProvider";

const SpotlightName = styled.h2`
  text-align: center;
`;

const SpotTile = styled(Tile)`
  @media only screen and (max-width: 800px) {
    display: none;
  }
`;
export default function() {
  return (
    <AppContext.Consumer>
      {({ currentfav, coinList }) => (
        <SpotTile>
          <SpotlightName>{coinList[currentfav].CoinName}</SpotlightName>
          <CoinImage spotlight coin={coinList[currentfav]} />
        </SpotTile>
      )}
    </AppContext.Consumer>
  );
}
