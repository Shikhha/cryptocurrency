import React from "react";
import styled, { css } from "styled-components";
import { SelectableTile } from "../shared/Tile";
import { CoinHeaderGridStyled } from "../settings/CoinHeader";
import { fontSize1 } from "../shared/Styles";

const numberFormat = number => {
  return +(number + "").slice(0, 5);
};

const TicketPrice = styled.div`
  ${fontSize1}
`;
const ChangePct = styled.div`
  color: green;
  ${props =>
    props.red &&
    css`
      color: red;
    `}
`;
export default function({ price, index }) {
  let sym = Object.keys(price)[0];
  let data;
  if (!sym || !price[sym] || !price[sym]["USD"]) {
    data = { CHANGEPCT24HOUR: 0, PRICE: 0 };
    sym = "No data";
  } else {
    data = price[sym]["USD"];
  }
  return (
    <SelectableTile>
      <CoinHeaderGridStyled>
        <div>{sym}</div>
        <div style={{ justifySelf: "right", color: "green" }}>
          <ChangePct red={data.CHANGEPCT24HOUR < 0}>
            {numberFormat(data.CHANGEPCT24HOUR)}
          </ChangePct>
        </div>
        <TicketPrice>{numberFormat(data.PRICE)}</TicketPrice>
      </CoinHeaderGridStyled>
    </SelectableTile>
  );
}
