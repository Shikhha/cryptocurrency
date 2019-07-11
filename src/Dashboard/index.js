import React from "react";
import styled from "styled-components";
import Page from "../shared/Page";
import PriceGrid from "./PriceGrid";
import CoinDetail from "./CoinDetail";
import PriceChart from "./PriceChart";

const ChartGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 15px;
  margin-top: 20px;
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
