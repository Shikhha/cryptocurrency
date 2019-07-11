import React from "react";
import styled, { css } from "styled-components";
import { SelectableTile } from "../shared/Tile";
import { CoinHeaderGridStyled } from "../settings/CoinHeader";
import { fontSizeBig, greenBoxShadow } from "../shared/Styles";
import { AppContext } from "../app/AppProvider";

const PriceSelectableTile = styled(SelectableTile)`
  ${props =>
    props.current &&
    css`
      ${greenBoxShadow}
      pointer-events: none
    `}
`;
const numberFormat = number => {
  return +(number + "").slice(0, 7);
};

const TicketPrice = styled.div`
  ${fontSizeBig}
`;
const ChangePct = styled.div`
  color: green;
  ${props =>
    props.red &&
    css`
      color: red;
    `}
`;
export default function({ price, index, currentfav, setCurrentFav }) {
  let sym = Object.keys(price)[0];
  let data;
  if (!sym || !price[sym] || !price[sym]["USD"]) {
    data = { CHANGEPCT24HOUR: 0, PRICE: 0 };
    sym = "No data";
  } else {
    data = price[sym]["USD"];
  }
  return (
    <PriceSelectableTile
      current={currentfav === sym}
      onClick={() => setCurrentFav(sym)}
    >
      <CoinHeaderGridStyled>
        <div>{sym}</div>
        <div style={{ justifySelf: "right", color: "green" }}>
          <ChangePct red={data.CHANGEPCT24HOUR < 0}>
            {numberFormat(data.CHANGEPCT24HOUR)}
          </ChangePct>
        </div>
      </CoinHeaderGridStyled>
      <TicketPrice>{numberFormat(data.PRICE)}</TicketPrice>
    </PriceSelectableTile>
  );
}
