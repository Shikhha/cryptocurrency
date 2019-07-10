import React from "react";
import styled from "styled-components";
import { AppContext } from "../app/AppProvider";
import { SelectableTile, DeletableTile, DisabledTile } from "../shared/Tile";
import CoinHeader from "./CoinHeader";
import CoinImage from "./CoinImage";

export default function({ coinKey, topsection }) {
  return (
    <AppContext>
      {({ coinList }) => {
        let coin = coinList[coinKey];
        let TileClass = SelectableTile;
        if (topsection) {
          TileClass = DeletableTile;
        }
        return (
          <TileClass>
            <CoinHeader
              topsection={topsection}
              name={coin.CoinName}
              symbol={coin.Symbol}
            />
            <CoinImage coin={coin} />
          </TileClass>
        );
      }}
    </AppContext>
  );
}
