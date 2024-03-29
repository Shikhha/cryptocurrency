import React from "react";
import styled, { css } from "styled-components";

const CoinTmageTag = styled.img`
  height: 50px;
  ${props =>
    props.spotlight &&
    css`
      height: 200px;
      margin: auto;
      display: block;
    `}
`;
export default function({ coin, style, spotlight }) {
  return (
    <CoinTmageTag
      alt={coin.CoinSymbol}
      spotlight={spotlight}
      src={`http://cryptocompare.com/${coin.ImageUrl}`}
    />
  );
}
