import React from "react";
import styled from "styled-components";
import { AppContext } from "../app/AppProvider";
import PriceTitle from "./PriceTitle";

const Pgrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 14px;
  margin-top: 30px;
`;
export default function() {
  return (
    <AppContext.Consumer>
      {({ prices, currentfav, setCurrentFav }) => (
        <Pgrid>
          {prices.map((price, index) => (
            <PriceTitle
              currentfav={currentfav}
              setCurrentFav={setCurrentFav}
              index={index}
              price={price}
            />
          ))}
        </Pgrid>
      )}
    </AppContext.Consumer>
  );
}
