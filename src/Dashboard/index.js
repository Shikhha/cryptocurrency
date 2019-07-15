import React from "react";
import styled from "styled-components";
import Page from "../shared/Page";
import PriceGrid from "./PriceGrid";
import CoinDetail from "./CoinDetail";
import PriceChart from "./PriceChart";

const ChartGrid = styled.div`
height: 400px;
  display: grid;
  grid-template-columns: 240px repeat(auto-fit, minmax(240px, 1fr));
  grid-gap: 15px;
  margin-top: 20px;
  @media only screen and (max-width: 800px) {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    height: 300px;
    }
  }
`;

export default function() {
  return (
    <Page name="Dashboard">
      <PriceGrid />
      <ChartGrid>
        {" "}
        <CoinDetail />
        <PriceChart />
      </ChartGrid>
    </Page>
  );
}
