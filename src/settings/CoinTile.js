import React from "react";
import styled from "styled-components";
import { AppContext } from "../app/AppProvider";
import { SelectableTile } from "../shared/Tile";
import CoinHeader from "./CoinHeader";
import CoinImage from "./CoinImage";

export default function({ coinKey }) {
  return (
    <AppContext>
      {({ coinList }) => {
        let coin = coinList[coinKey];
        return (
          <SelectableTile>
            <CoinHeader name={coin.CoinName} symbol={coin.Symbol} />
            <CoinImage coin={coin} />
          </SelectableTile>
        );
      }}
    </AppContext>
  );
}
