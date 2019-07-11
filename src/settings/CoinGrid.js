import React from "react";
import styled from "styled-components";
import { AppContext } from "../app/AppProvider";
import { SelectableTile } from "../shared/Tile";
import CoinTile from "./CoinTile";

export const CoinGridStyled = styled.div`
  padding-top: 20px;
  padding-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  grid-gap: 15px;
`;

function coinsToDisplay(coinList, topsection, favourties) {
  return topsection ? favourties : Object.keys(coinList).slice(0, 100);
}
export default function({ topsection }) {
  return (
    <AppContext.Consumer>
      {({ coinList, favourties }) => (
        <CoinGridStyled>
          {coinsToDisplay(coinList, topsection, favourties).map(coinKey => (
            <CoinTile key={coinKey} topsection={topsection} coinKey={coinKey} />
          ))}
        </CoinGridStyled>
      )}
    </AppContext.Consumer>
  );
}
