import React from "react";
import styled from "styled-components";
import { DeletableTile } from "../shared/Tile";

export const CoinHeaderGridStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const CoinSymbol = styled.div`
  justify-self: right;
`;

const DeleteCoin = styled.div`
  justify-self: right;
  display: none;
  ${DeletableTile}:hover & {
    display: block;
    color: red;
  }
`;

export default function({ name, symbol, topsection }) {
  return (
    <CoinHeaderGridStyled>
      <div>{name}</div>
      {topsection ? (
        <DeleteCoin>X</DeleteCoin>
      ) : (
        <CoinSymbol>{symbol}</CoinSymbol>
      )}
    </CoinHeaderGridStyled>
  );
}
