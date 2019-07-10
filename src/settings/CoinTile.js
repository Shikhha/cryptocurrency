import React from "react";
import styled from "styled-components";
import { AppContext } from "../app/AppProvider";
import { SelectableTile, DeletableTile, DisabledTile } from "../shared/Tile";
import CoinHeader from "./CoinHeader";
import CoinImage from "./CoinImage";

function clickCoinHandler(topsection, coinKey, addCoin, removeCoin) {
  return topsection ? () => removeCoin(coinKey) : () => addCoin(coinKey);
}
export default function({ coinKey, topsection }) {
  return (
    <AppContext>
      {({ coinList, addCoin, removeCoin, favourties }) => {
        let coin = coinList[coinKey];
        let TileClass = SelectableTile;
        if (topsection) {
          TileClass = DeletableTile;
        }
        if (favourties.includes(coinKey) && !topsection) {
          TileClass = DisabledTile;
        }
        return (
          <TileClass
            onClick={clickCoinHandler(topsection, coinKey, addCoin, removeCoin)}
          >
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
